class Sprite {
    constructor({ position, imageSrc, scale = 1, frameMax = 1, framesHold, offset = { x: 0, y: 0 } }) {
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

    draw() {
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

    animateFrame() {
        this.framesElapsed++

        if (this.framesElapsed % this.framesHold === 0) {
            if (this.framesCurrent < this.frameMax - 2) {
                this.framesCurrent++
            } else {
                this.framesCurrent = 0
            }
        }
    }

    update() {
        this.draw()
        this.animateFrame()
    }
}

//Classe de players
class Player extends Sprite {
    constructor(position, speed, color, health, imageSrc, scale, frameMax, framesHold, offset, sprites) {
        super({ position, imageSrc, scale, frameMax, framesHold, offset })
        this.position = position
        this.width = playerWidth
        this.height = playerHeight
        this.speed = speed
        this.color = color
        this.isJumping = false
        this.lastKey = false
        this.health = health
        this.isDead = false
        this.sprites = sprites
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

    switchSprite(sprite = "default") {
        switch (sprite) {
            case "default":
                if (this.image !== this.sprites.default.imageSrc)
                this.image.src = this.sprites.default.imageSrc
                this.frameMax = this.sprites.default.frameMax
                break;
            case "run":
                this.image.src = this.sprites.run.imageSrc
                this.frameMax = this.sprites.run.frameMax
                break;
            case "jump":
                this.image.src = this.sprites.jump.imageSrc
                this.frameMax = this.sprites.jump.frameMax
                break;
            case "fall":
                this.image.src = this.sprites.fall.imageSrc
                this.frameMax = this.sprites.fall.frameMax
                break;
            case "attack":
                this.image.src = this.sprites.attack.imageSrc
                this.frameMax = this.sprites.attack.frameMax
                break;
            case "die":
                this.image.src = this.sprites.die.imageSrc
                this.frameMax = this.sprites.die.frameMax
                break;
            case "hurt":
                this.image.src = this.sprites.hurt.imageSrc
                this.frameMax = this.sprites.hurt.frameMax
                break;
            default:
                this.image.src = this.sprites.default.imageSrc
                this.frameMax = this.sprites.default.frameMax
                break;
        }
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

        try {
            if (this.isAttacking) throw new Error('Player já está atacando')
            if (!this.canAttack) throw new Error('Player não pode atacar ainda')

            this.isAttacking = true
            this.canAttack = false

            setTimeout(() => {
                this.canAttack = true
            }, this.weapon.attackSpeed)
        } catch (error) {
            console.error(error)
            return
        }
    }
}
