const gameArea = document.getElementById('gameArea');
const areaSize = 400;
const elementSize = 20;
let snake = [{ x: 0, y: 0 }];
let fruit = { x: 20, y: 10 };
let direction = 'Left';
let gameOver = false;

function createSnakeElement(x, y) {
    let element = document.createElement('div');
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.className = 'snake';
    gameArea.appendChild(element);
    return element;
}

function updateGameArea() {
    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild);
    }
    snake.forEach(segment => createSnakeElement(segment.x, segment.y));
    createFruitElement(fruit.x, fruit.y);
}

function createFruitElement(x, y) {
    let element = document.createElement('div');
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.className = 'fruit';
    gameArea.appendChild(element);
}

function moveSnake() {
    if (gameOver) return; // Si le jeu est terminé, arrêter le déplacement du serpent

    const head = { ...snake[0] };
    switch (direction) {
        case 'Right': head.x += elementSize; break;
        case 'Left': head.x -= elementSize; break;
        case 'Up': head.y -= elementSize; break;
        case 'Down': head.y += elementSize; break;
    }

    // Vérifier les collisions avec les bords du jeu
    if (head.x >= areaSize || head.x < 0 || head.y >= areaSize || head.y < 0) {
        gameOver = true;
        alert('Game Over! Press OK to restart.');
        restartGame();
        return;
    }

    // Vérifier les collisions avec le corps du serpent
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            gameOver = true;
            alert('Game Over! Press OK to restart.');
            restartGame();
            return;
        }
    }

    snake.unshift(head);

    if (head.x === fruit.x && head.y === fruit.y) {
        placeFruit();
    } else {
        snake.pop();
    }

    updateGameArea();
}

function placeFruit() {
    let fruitX = Math.floor(Math.random() * (areaSize / elementSize)) * elementSize;
    let fruitY = Math.floor(Math.random() * (areaSize / elementSize)) * elementSize;
    fruit = { x: fruitX, y: fruitY };
}

function restartGame() {
    snake = [{ x: 0, y: 0 }];
    fruit = { x: 0, y: 0 };
    direction = 'Right';
    gameOver = false;
    updateGameArea();
}

document.addEventListener('keydown', event => {
    switch (event.key) {
        case 'ArrowRight': if (direction !== 'Left') direction = 'Right'; break;
        case 'ArrowLeft': if (direction !== 'Right') direction = 'Left'; break;
        case 'ArrowUp': if (direction !== 'Down') direction = 'Up'; break;
        case 'ArrowDown': if (direction !== 'Up') direction = 'Down'; break;
    }
});

placeFruit();
updateGameArea();
setInterval(moveSnake, 250);
