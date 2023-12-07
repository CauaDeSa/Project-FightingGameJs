//Classe de players
class Player {
    constructor(position, speed, color, health) {
        this.position = position
        this.width = playerWidth
        this.height = playerHeight
        this.speed = speed
        this.color = color
        this.isJumping = false
        this.lastKey = false
        this.health = health
        this.isDead = false
        this.weapon = {
            //Valores default
            position: this.position,
            rangeX: playerWidth * 2,
            rangeY: playerHeight / 2,
            damage: 10,
            attackSpeed: 1
        }
        this.isAttacking = false
        this.canAttack = true
    }

    //Desenho de players
    draw() {
        screen.fillStyle = this.color
        screen.fillRect(this.position.x, this.position.y, this.width, this.height)

        //hitbox da arma atual
        if (this.isAttacking)
            if (this.lastKey === 'd' || this.lastKey === 'ArrowRight')
                screen.fillRect(this.weapon.position.x, this.weapon.position.y, this.weapon.rangeX, this.weapon.rangeY);
            else if (this.lastKey === 'a' || this.lastKey === 'ArrowLeft')
                screen.fillRect(this.weapon.position.x + this.width, this.weapon.position.y, -this.weapon.rangeX, this.weapon.rangeY);
    }

    //Atualização de frame
    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        this.gravity()
        this.draw()
    }

    //Gravidade
    gravity() {
        if (this.position.y + this.height + this.speed.y < ground) {
            this.position.y += this.speed.y += gravity
        } else {
            this.speed.y = 0
        }
    }

    //Ataque
    attack() {
        this.isAttacking = true
        this.canAttack = false
        
        setTimeout(() => {
            this.canAttack = true
        }, this.weapon.attackSpeed)

        player1.image = new Image()
        player1.image.src = "../../assets/Attack1.png"

        let frameIndex = 0;
        const sprite = document.getElementById('player1');
        const attackAnimation = setInterval(() => {
        sprite.style.backgroundPosition = `${frameIndex * -100}px 0px`; // Ajuste o valor -100 com base no tamanho do seu sprite
        frameIndex++;
        if (frameIndex > 7) { // Ajuste o valor 7 com base no número de frames no seu sprite
            frameIndex = 0;
        }
        }, 125)
    }   
}

class Sprite {
    constructor ({ position, imageSrc }){
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
    }

    draw(){
        screen.drawImage(this.image, this.position.x, this.position.y)
    }

    update(){
        this.draw()
    }
}