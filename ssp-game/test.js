let output = 'Make a decision';

const outputElement = document.getElementById('output');

function updateOutput() {
    outputElement.innerText = output;
    return;
};

updateOutput();

const stoneElement = document.getElementById('stone');
const scissorsElement = document.getElementById('scissors');
const paperElement = document.getElementById('paper');

const resetStatElement = document.getElementById('resetStat');

const winStatElement = document.getElementById('win');
const loseStatElement = document.getElementById('lose');
const drawStatElement = document.getElementById('draw');

let win = 0;
let lose = 0;
let draw = 0;

function statUpdate() {
    winStatElement.innerText = 'Win: ' + win;
    loseStatElement.innerText = 'Lose: ' + lose;
    drawStatElement.innerText = 'Draw: ' + draw;
};

function resetStat() {
    win = 0;
    lose = 0;
    draw = 0;
};

resetStatElement.addEventListener('click', () => {
    resetStat();
    statUpdate();
})

const elements = ['Stone', 'Scissors', 'Paper'];

const rules = {
    Stone: 'Scissors',
    Scissors: 'Paper',
    Paper: 'Stone'
};

function randomSelection(selection) {
    return selection[Math.floor(Math.random() * selection.length)];
};

function combat(humanSelection, pcSelection) {
    if (humanSelection === pcSelection) {
        draw++;
        return `You selected ${humanSelection}, PC selected ${pcSelection} and you are both losers`;
    } else if (rules[humanSelection] === pcSelection) {
        win++;
        return `You selected ${humanSelection}, PC selected ${pcSelection} and you win`;
    } else {
        lose++;
        return `You selected ${humanSelection}, PC selected ${pcSelection} and you lose`;
    };
    // let winner = humanSelection === pcSelection ? 'both losers' : rules[humanSelection] === pcSelection ? 'win' : 'lose, loser)';
    // return `You selected ${humanSelection}, PC selected ${pcSelection} and you ${winner}`;
};

// function message(winner) {
//     if (winner === 'draw') {
//         return `You selected ${humanSelection}, PC selected ${pcSelection} and you are both losers`
//     } else if (winner = 'you') {
//         return `You selected ${humanSelection}, PC selected ${pcSelection} and you win`
//     } else {
//         return `You selected ${humanSelection}, PC selected ${pcSelection} and you lose`
//     }
// };

stoneElement.addEventListener('click', () => {
    output = combat('Stone', randomSelection(elements));
    updateOutput();
    statUpdate()
});

scissorsElement.addEventListener('click', () => {
    output = combat('Scissors', randomSelection(elements));
    updateOutput();
    statUpdate()
});

paperElement.addEventListener('click', () => {
    output = combat('Paper', randomSelection(elements));
    updateOutput();
    statUpdate()
});