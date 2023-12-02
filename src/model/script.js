const canvas = document.querySelector('canvas');
const screen = canvas.getContext('2d');

canvas.width = 1280
canvas.height = 640
gravity = 0.4;

screen.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
    constructor (width, height, position, speed, color, isJumping) {
        this.position = position
        this.width = width
        this.height = height    
        this.speed = speed
        this.color = color
        this.isJumping = isJumping
    }

    draw() {
        screen.fillStyle = this.color
        screen.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
  
        this.position.x += this.speed.x        
        this.position.y += this.speed.y

        this.gravity()
        this.draw()
    }


    gravity() {
        if(this.position.y + this.height + this.speed.y < canvas.height) {
            this.position.y += this.speed.y += gravity
        } else {
            this.speed.y = 0
        }

        console.log(this.position.y, this.speed.y)
    }    
}

function animation(){
    window.requestAnimationFrame(animation)
    screen.fillStyle = 'black'
    screen.fillRect(0, 0, canvas.width, canvas.height)
    player1.update()
    player2.update()
}

//Instanciando players
player1 = new Sprite(50, 100, {x: 40, y: 10}, {x: 0, y: 0}, 'red', false);
player2 = new Sprite(50, 100, {x: 1205, y: 10}, {x: 0, y: 0}, 'blue', false);

//Desenhando players
player1.draw();
player2.draw();

//Movimentando players
animation();

window.addEventListener('keydown', (e) => {
    if(e.key == 'w') {
        if(player1.position.y < canvas.height) {
            console.log(canvas.height)
            player1.speed.y = -10
        }        
    }

    if(e.key == 'a') {
        player1.speed.x = -10
    }

    if(e.key == 's') {
        player1.speed.y = 10
    }

    if(e.key == 'd'){
        player1.speed.x = 10
    }


    if(e.key == 'ArrowUp') {
        player2.speed.y = -10
    }

    if(e.key == 'ArrowLeft'){
        player2.speed.x = -10
    }

    if(e.key == 'ArrowDown'){
        player2.speed.y = 10
    }

    if(e.key == 'ArrowRight'){
        player2.speed.x = 10
    }
})

window.addEventListener('keyup', (e) => {
    if(e.key == 'w') {
        player1.speed.y = 0
    }

    if(e.key == 'a') {
        player1.speed.x = 0
    }

    if(e.key == 's') {
        player1.speed.y = 0
    }

    if(e.key == 'd'){
        player1.speed.x = 0
    }


    if(e.key == 'ArrowUp') {
        player2.speed.y = 0
    }

    if(e.key == 'ArrowLeft'){
        player2.speed.x = 0
    }

    if(e.key == 'ArrowDown'){
        player2.speed.y = 0
    }

    if(e.key == 'ArrowRight'){
        player2.speed.x = 0
    }
})