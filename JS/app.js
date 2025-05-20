let grid = document.querySelector('.grid');
let blocks = document.querySelectorAll('.block');
let randomBlock = Math.floor(Math.random() * blocks.length);
let answer = document.querySelector('.answer');
let randomSelection = document.querySelector('.randomButton');
let playButton = document.querySelector('.playButton');
let againButton = document.querySelector('.againButton');

grid.style.display = 'none';
randomSelection.style.display = 'none';
againButton.style.display = 'none';

function playGame () {
    grid.style.display = '';
    randomSelection.style.display = 'block';
    playButton.style.display = 'none';
    againButton.style.display = ''
}

playButton.addEventListener('click', playGame);
againButton.addEventListener('click', () => {
    window.location.reload();
});

function selectRandom() {
    let battleship = blocks[randomBlock];

    blocks.forEach((item) => {
        if (item == battleship) {
            battleship.style.backgroundColor = 'green';
            answer.innerText = 'Congratulation! You found the battleship.';
        } else {
            battleship.style.backgroundColor = 'red';
            answer.innerText = 'You missed. Try again.';
        }
    });
}

randomSelection.addEventListener('click', selectRandom);