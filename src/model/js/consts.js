const canvas = document.querySelector('canvas');
const screen = canvas.getContext('2d');

//Variáveis de movimentação
const keys = {
    //Player 1
    w: false,
    a: false,
    s: false,
    d: false,

    //Player 2
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
const haveAWinner = {win: false, winner: ''}

//Desenho de fundo
screen.fillRect(0, 0, canvas.width, canvas.height);


//Instanciando players
player1 = new Player({ x: leftSide, y: ground }, { x: 0, y: 0 }, 'red', 100);
player2 = new Player({ x: rightSide, y: ground }, { x: 0, y: 0 }, 'blue', 100);

//Desenhando players
player1.draw();
player2.draw();