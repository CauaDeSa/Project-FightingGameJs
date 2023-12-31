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
canvas.width = 1024
canvas.height = 576

//Constantes de configuração (referência)
const playerWidth = 60
const playerHeight = 120
const ground = canvas.height - 95
const leftSide = 50;
const rightSide = canvas.width - playerWidth - 50;
const gravity = 0.6;
const heightJump = canvas.height * 0.5
const xSpeed = 8
const haveAWinner = {win: false, winner: ''}

//Desenho de fundo
screen.fillRect(0, 0, canvas.width, canvas.height);


//Instanciando players
const player1 = new Player({ x: leftSide, y: ground }, { x: 0, y: 0 }, 'red', 100, "../../assets/Martial Hero 2/Sprites/Idle.png", 2, 4, 8, {x: 100, y: 135}, 
    { 
        default: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Idle.png",
            frameMax: 4,
        },
        run: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Run.png",
            frameMax: 9,
        },
        jump: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Jump.png",
            frameMax: 2,
        },
        fall: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Fall.png",
            frameMax: 2,
        },
        attack: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Attack1.png",
            frameMax: 4,
        },
        die: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Death.png",
            frameMax: 7,
        },
        hurt: {
            imageSrc: "../../assets/Martial Hero 2/Sprites/Take hit.png",
            frameMax: 3,
        },
    });
const player2 = new Player({ x: rightSide, y: ground }, { x: 0, y: 0 }, 'blue', 100, "../../assets/Medieval King Pack 2/Sprites/Idle.png", 2, 8, 8, {x: 215, y: 90},
{
    default: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Idle.png",
        frameMax: 8,
    },
    run: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Run.png",
        frameMax: 8,
    },
    jump: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Jump.png",
        frameMax: 2,
    },
    fall: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Fall.png",
        frameMax: 2,
    },
    attack: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Attack1.png",
        frameMax: 8,
    },
    die: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Death.png",
        frameMax: 8,
    },
    hurt: {
        imageSrc: "../../assets/Medieval King Pack 2/Sprites/Take hit.png",
        frameMax: 3,
    },
});

//Instanciando background
const background = new Sprite({
    position: { x: 0, y: 0 },
    imageSrc: "../../assets/background.webp"
});

//Desenhando background
background.draw();

//Desenhando players
player1.draw();
player2.draw();