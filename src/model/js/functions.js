function hitCollision({ atacker, atacked }) {
    //Verificando se o ataque acertou o player
    return (
        //Se ataque vem da esquerda
        ((atacker.lastKey === 'd' || atacker.lastKey === 'ArrowRight') && atacker.position.x + atacker.weapon.rangeX >= atacked.position.x &&
            atacker.position.x <= atacked.position.x &&
            atacker.weapon.position.y + atacker.weapon.rangeY >= atacked.position.y &&
            atacker.weapon.position.y <= atacked.position.y)
        ||
        //Se ataque vem da direita
        ((atacker.lastKey === 'a' || atacker.lastKey === 'ArrowLeft') && atacker.position.x - atacker.weapon.rangeX <= atacked.position.x &&
            atacker.position.x >= atacked.position.x &&
            atacker.weapon.position.y + atacker.weapon.rangeY >= atacked.position.y &&
            atacker.weapon.position.y <= atacked.position.y)
    )
}

timer = 300

function setTimer () {
    setTimeout(setTimer, 1000)
    if (timer > 0 && !haveAWinner.win){
        timer--
        document.querySelector("#timer").innerHTML = timer
        console.log(player1.health, player2.health)
    } else if (player1.health == player2.health) {
        haveAWinner.win = true
        haveAWinner.winner = 'draw'
    } else if (player1.health > player2.health) {
        haveAWinner.win = true
        haveAWinner.winner = 'player 1'
    } else if (player1.health < player2.health) {
        haveAWinner.win = true
        haveAWinner.winner = 'player 2'
    }

    console.log(timer)
}

function animation() {
    //Looping de frames
    if (!haveAWinner.win){
        window.requestAnimationFrame(animation)
    } else if (haveAWinner.win){
        console.log(haveAWinner.winner)
    }

    screen.fillStyle = 'black'
    screen.fillRect(0, 0, canvas.width, canvas.height)

    //Atualização de frame
    player1.update()
    player2.update()

    //Movimentação vertical player 1
    if (keys.w && !player1.isJumping) {
        player1.speed.y = -10
    } else if (keys.s) {
        if (player1.isJumping) {
            player1.speed.y = 7
        }
    }   

    //Movimentação horizontal do player 1
    if (keys.a && player1.lastKey === 'a') {
        player1.speed.x = -xSpeed
    } else if (keys.d && player1.lastKey === 'd') {
        player1.speed.x = xSpeed
    } else {
        player1.speed.x = 0
    }

    //Verificando se o player1 está pulando ou se está no chão
    if (player1.position.y <= heightJump) {
        player1.isJumping = true
    } else if ((player1.position.y + player1.height + player1.speed.y) > ground) {
        player1.isJumping = false
        player1.speed.y = 0
        player1.position.y = ground - player1.height
    }

    //Verificando se o player1 está dentro do canvas
    if (player1.position.x < leftSide)
        player1.position.x = leftSide

    if (player1.position.x > rightSide)
        player1.position.x = rightSide

    //Ataque player 1
    if (hitCollision({
        atacker: player1,
        atacked: player2
    }) && player1.isAttacking) {
        player1.isAttacking = false 

        if (player2.health > 0){
            document.querySelector('#player2HealthBar').style = ('width: ' + (player2.health -= player1.weapon.damage) + '%');
        }
        if (player2.health <= 0) {
            haveAWinner.win = true
            haveAWinner.winner = 'player 1'
        }
    }

    //Movimentação vertical player 2
    if (keys.ArrowUp && !player2.isJumping) {
        player2.speed.y = -10
    } else if (keys.ArrowDown) {
        if (player2.isJumping) {
            player2.speed.y = xSpeed
        }
    }

    //Movimentação horizontal do player 2
    if (keys.ArrowLeft && player2.lastKey === 'ArrowLeft') {
        player2.speed.x = -xSpeed
    } else if (keys.ArrowRight && player2.lastKey === 'ArrowRight') {
        player2.speed.x = xSpeed
    } else {
        player2.speed.x = 0
    }

    //Verificando se o player2 está pulando ou se está no chão
    if (player2.position.y <= heightJump) {
        player2.isJumping = true
    } else if (player2.position.y + player2.height + player2.speed.y > ground) {
        player2.isJumping = false
        player2.speed.y = 0
        player2.position.y = ground - player2.height
    }

    //Verificando se o player2 está dentro do canvas
    if (player2.position.x < leftSide)
        player2.position.x = leftSide

    if (player2.position.x > rightSide)
        player2.position.x = rightSide

    //Ataque player 2
    if (hitCollision({
        atacker: player2,
        atacked: player1
    }) && player2.isAttacking) {
        player2.isAttacking = false
    
        if (player1.health > 0){
            document.querySelector('#player1HealthBar').style = ('width: ' + (player1.health -= player2.weapon.damage) + '%');
        }
        if (player1.health <= 0) {
            haveAWinner.win = true
            haveAWinner.winner = 'player 2'
        }
    }
}

//Movimentando players
animation();

//Atualizando timer
setTimer()