class Sprite {
    constructor ({ position, imageSrc, scale = 1, frameMax = 1, framesHold, offset = {x: 0, y: 0} }){
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.frameMax = frameMax
        this.framesCurrent = 0
        this.framesElapsed = 0
        this.framesHold = framesHold
        this.offset = offset
    }

    draw(){
        screen.drawImage(
            this.image, 
            this.framesCurrent * (this.image.width / this.frameMax),
            0,
            this.image.width / this.frameMax,
            this.image.height,
            this.position.x - this.offset.x, 
            this.position.y - this.offset.y, 
            (this.image.width / this.frameMax) * this.scale, 
            this.image.height * this.scale
        )
    }

    animateFrame(){
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0){
            if (this.framesCurrent < this.frameMax -1) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }

    update(){
        this.draw()
        this.animateFrame()
    }
}

//Classe de players
class Player extends Sprite{
    constructor(position, speed, color, health, imageSrc, scale, frameMax, framesHold, offset) {
        super({position, imageSrc, scale, frameMax, framesHold, offset})
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
    
    //Atualização de frame
    update() {
        this.position.x += this.speed.x
        this.position.y += this.speed.y

        this.gravity()
        this.draw()
        this.animateFrame()
        this.anima
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
