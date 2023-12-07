//Mapeando teclas de movimentação
window.addEventListener('keydown', (e) => {

    //Player 1
    if (e.key == 'w') {
        keys.w = true
    }

    if (e.key == 'a') {
        keys.a = true
        player1.lastKey = 'a'
    }

    if (e.key == 's') {
        keys.s = true
    }

    if (e.key == 'd') {
        keys.d = true
        player1.lastKey = 'd'
    }

    //Ataque player 1 simples
    if (e.key == 'c') {
        if (player1.canAttack){
            player1.attack()
        }

        setTimeout(() => {
            player1.isAttacking = false
        }, 1000);
    }

    //Ataque player 1 especial
    // if (e.key == 'v'){
    //     player1.attack2()
    // }

    // Carregando ataque player 1
    // if (e.key == 'b'){
    //     player1.isCharging = true
    // }

    //Player 2
    if (e.key == 'ArrowUp') {
        keys.ArrowUp = true
    }

    if (e.key == 'ArrowLeft') {
        keys.ArrowLeft = true
        player2.lastKey = 'ArrowLeft'
    }

    if (e.key == 'ArrowDown') {
        keys.ArrowDown = true
    }

    if (e.key == 'ArrowRight') {
        keys.ArrowRight = true
        player2.lastKey = 'ArrowRight'
    }

    //Ataque player 2 simples
    if (e.key == ',') {
        player2.attack()

        setTimeout(() => {
            player2.isAttacking = false
        }, 1000);
    }

    //Ataque player 2 especial
    // if (e.key == '.'){
    //     player2.attack2()
    // }

    // Carregando ataque player 2
    // if (e.key == ';'){
    //     player2.isCharging = true
    // }
})

//Parando movimentação dos players
window.addEventListener('keyup', (e) => {

    //Player 1
    if (e.key == 'w') {
        keys.w = false
    }

    if (e.key == 'a') {
        keys.a = false
    }

    if (e.key == 's') {
        keys.s = false
    }

    if (e.key == 'd') {
        keys.d = false
    }

    if (e.key == 'c'){
        player1.isAttacking = false
    }

    //Player 2
    if (e.key == 'ArrowUp') {
        keys.ArrowUp = false
    }

    if (e.key == 'ArrowLeft') {
        keys.ArrowLeft = false
    }

    if (e.key == 'ArrowDown') {
        keys.ArrowDown = false
    }

    if (e.key == 'ArrowRight') {
        keys.ArrowRight = false
    }

    if (e.key == ','){
        player2.isAttacking = false
    }
})