const canvas = document.querySelector('canvas');
const screen = canvas.getContext('2d');

//Variáveis de movimentação
const keys = {
    w: false,
    a: false,
    s: false,
    d: false,

    ArrowUp: false,
    ArrowLeft: false,
    ArrowDown: false,
    ArrowRight: false
}

//Configuração do canvas
canvas.width = 1280
canvas.height = 640

//Constantes de configuração (referência)
const playerWidth = 75
const playerHeight = 150
const ground = canvas.height - 50
const leftSide = 50;
const rightSide = canvas.width - playerWidth - 50;
const gravity = 0.4;
const heightJump = canvas.height * 0.5
const xSpeed = 10

//Desenho de fundo
screen.fillRect(0, 0, canvas.width, canvas.height);

//Classe de players
class Sprite {
    constructor (position, speed, color) {
        this.position = position
        this.width = playerWidth
        this.height = playerHeight    
        this.speed = speed
        this.color = color
        this.isJumping = false
    }

    //Desenho de players
    draw() {
        screen.fillStyle = this.color
        screen.fillRect(this.position.x, this.position.y, this.width, this.height)
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
        if(this.position.y + this.height + this.speed.y < ground) {
            this.position.y += this.speed.y += gravity
        } else {
            this.speed.y = 0
        }
    }    
}

function animation(){
    //Looping de frames
    window.requestAnimationFrame(animation)
    screen.fillStyle = 'black'
    screen.fillRect(0, 0, canvas.width, canvas.height)
    
    //Atualização de frame
    player1.update()
    player2.update()

    //Movimentação player 1
    if(keys.w && !player1.isJumping) {
        player1.speed.y = -10
    } else if(keys.s) {
        if (player1.isJumping) {
            player1.speed.y = 7
        }
    }

    //Verificando se o player1 está pulando ou se está no chão
    if (player1.position.y <= heightJump) {
        player1.isJumping = true
    } else if ((player1.position.y + player1.height + player1.speed.y) > ground) {
        player1.isJumping = false
        player1.speed.y = 0
        player1.position.y = ground - player1.height
        console.log(player1.position.y + playerHeight + player1.speed.y, player1.speed.y, ground)
    }

    if(keys.a) {
        player1.speed.x = -xSpeed
        if (player1.position.x < leftSide) 
            player1.position.x = leftSide
    } else if(keys.d) {
        player1.speed.x = xSpeed
        if (player1.position.x > rightSide) 
            player1.position.x = rightSide
    } else {
        player1.speed.x = 0
    }

    //Movimentação player 2
    if(keys.ArrowUp && !player2.isJumping) {
        player2.speed.y = -10
    } else if(keys.ArrowDown) {
        if (player2.isJumping) {
            player2.speed.y = xSpeed
        }
    }

    //Verificando se o player2 está pulando ou se está no chão
    if (player2.position.y <= heightJump) {
        player2.isJumping = true
    } else if (player2.position.y + player2.height + player2.speed.y > ground) {
        player2.isJumping = false
        player2.speed.y = 0
        player2.position.y = ground - player2.height
    }

    if(keys.ArrowLeft) {
        player2.speed.x = -xSpeed
        if (player2.position.x < leftSide) 
            player2.position.x = leftSide
    } else if(keys.ArrowRight) {
        player2.speed.x = xSpeed
        if (player2.position.x > rightSide) 
            player2.position.x = rightSide
    } else {
        player2.speed.x = 0
    }

    if(keys.a) {
        player1.speed.x = -xSpeed
        
    } else if(keys.d) {
        player1.speed.x = xSpeed
        
    } else {
        player1.speed.x = 0
    }
}

//Instanciando players
player1 = new Sprite({x: leftSide, y: ground}, {x: 0, y: 0}, 'red', false);
player2 = new Sprite({x: rightSide, y: ground}, {x: 0, y: 0}, 'blue', false);

//Desenhando players
player1.draw();
player2.draw();

//Movimentando players
animation();

//Mapeando teclas de movimentação
window.addEventListener('keydown', (e) => {

    //Player 1
    if(e.key == 'w') {
        keys.w = true
    }

    if(e.key == 'a') {
        keys.a = true
    }

    if(e.key == 's') {
        keys.s = true
    }

    if(e.key == 'd'){
        keys.d = true
    }

    //Player 2
    if(e.key == 'ArrowUp') {
        keys.ArrowUp = true
    }

    if(e.key == 'ArrowLeft'){
        keys.ArrowLeft = true
    }

    if(e.key == 'ArrowDown'){
        keys.ArrowDown = true
    }

    if(e.key == 'ArrowRight'){
        keys.ArrowRight = true
    }
})

//Parando movimentação dos players
window.addEventListener('keyup', (e) => {

    //Player 1
    if(e.key == 'w') {
        keys.w = false
    }

    if(e.key == 'a') {
        keys.a = false
    }

    if(e.key == 's') {
        keys.s = false
    }

    if(e.key == 'd'){
        keys.d = false
    }

    //Player 2
    if(e.key == 'ArrowUp') {
        keys.ArrowUp = false
    }

    if(e.key == 'ArrowLeft'){
        keys.ArrowLeft = false
    }

    if(e.key == 'ArrowDown'){
        keys.ArrowDown = false
    }

    if(e.key == 'ArrowRight'){
        keys.ArrowRight = false
    }
})