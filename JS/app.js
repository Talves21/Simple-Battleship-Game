let grid = document.querySelector('.grid');
let blocks = document.querySelectorAll('.block');
let randomBlock = Math.floor(Math.random() * blocks.length);
let battleship = blocks[randomBlock];
let answer = document.querySelector('.answer');
let randomSelection = document.querySelector('.randomButton');
let playButton = document.querySelector('.playButton');
let againButton = document.querySelector('.againButton');
let win = false;

console.log(blocks);

grid.style.display = 'none';
randomSelection.style.display = 'none';
againButton.style.display = 'none';

function playGame () {
    grid.style.display = '';
    randomSelection.style.display = 'block';
    playButton.style.display = 'none';
    againButton.style.display = ''

    for (let i = 0; i < blocks.length; i++) {
        console.log(blocks[i]);
        blocks[i].addEventListener('click', () => {
            let currentBlock = blocks[i];
            console.log(currentBlock);
            if (win == true) {
                return
            }

            if (currentBlock == battleship) {
                currentBlock.style.backgroundColor = 'green';
                answer.innerText = 'Congratulations! You found the battleship!';
                win = true;
            } else {
                currentBlock.style.backgroundColor = 'red';
                answer.innerText = 'You missed. Try again.';
            }
        })
    }
}

playButton.addEventListener('click', playGame);
againButton.addEventListener('click', () => {
    window.location.reload();
});

function selectRandom() {
    console.log(randomBlock);

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