let calcWindow = '';

const calcWindowElement = document.getElementById('calcWindow');
calcWindowElement.innerText = calcWindow;

const validation = /^[*/.+-]|[*/.+-]$/;
const validationOperators = /[+\-*./]$/;

// function updateOperators() {
//     if (validationOperators.test(calcWindow)) {
//         plus.disabled = true;
//         minus.disabled = true;
//         multiply.disabled = true;
//         divide.disabled = true;
//         dot.disabled = true;
//     } else {
//         plus.disabled = false;
//         minus.disabled = false;
//         multiply.disabled = false;
//         divide.disabled = false;
//         dot.disabled = false;
//     }
// }

function handleOperator(inputOperator) {
    if (validationOperators.test(calcWindow)) {
        calcWindow = calcWindow.slice(0, -1) + inputOperator;
    } else {
        calcWindow += inputOperator;
    }
    calcWindowElement.innerText = calcWindow;
};

function updateEqual() {
    equal.disabled = calcWindow === '';
};
updateEqual();

//operators
const equalElement = document.getElementById('equal');
equalElement.addEventListener('click', () => {
    if (validation.test(calcWindow)) {
        alert('Sorry, but you cannot start or end an expression with operators');
        calcWindow = '';
        updateEqual();
        calcWindowElement.innerText = calcWindow;
    } else {
        calcWindow = `${eval(calcWindow)}`;
        calcWindowElement.innerText = calcWindow;
        updateEqual();
    }
});

const acElement = document.getElementById('ac');
acElement.addEventListener('click', () => {
    calcWindow = '';
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const delElement = document.getElementById('del');
delElement.addEventListener('click', () => {
    calcWindow = calcWindow.slice(0, -1);
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const dotElement = document.getElementById('dot');
dotElement.addEventListener('click', () => {
    // calcWindow += ".";
    // calcWindowElement.innerText = calcWindow;
    //updateOperators()
    if (validationOperators.test(calcWindow)) {
        return;
    };
    const lastNumber = calcWindow.split(/[\+\-\*\/]/).pop();
    if (!lastNumber.includes('.')) {
        handleOperator('.');
    }
});

const divideElement = document.getElementById('divide');
divideElement.addEventListener('click', () => {
    // calcWindow += '/';
    // calcWindowElement.innerText = calcWindow;
    //updateOperators()
    handleOperator('/');
});

const multiplyElement = document.getElementById('multiply');
multiplyElement.addEventListener('click', () => {
    // calcWindow += '*';
    // calcWindowElement.innerText = calcWindow;
    //updateOperators()
    handleOperator('*');
});

const minusElement = document.getElementById('minus');
minusElement.addEventListener('click', () => {
    // calcWindow += '-';
    // calcWindowElement.innerText = calcWindow;
    //updateOperators()
    handleOperator('-');
});

const plusElement = document.getElementById('plus');
plusElement.addEventListener('click', () => {
    // calcWindow += '+';
    // calcWindowElement.innerText = calcWindow;
    //updateOperators()
    handleOperator('+');
});

//numbers
const zeroElement = document.getElementById('zero');
zeroElement.addEventListener('click', () => {
    calcWindow += 0;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const oneElement = document.getElementById('one');
oneElement.addEventListener('click', () => {
    calcWindow += 1;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const twoElement = document.getElementById('two');
twoElement.addEventListener('click', () => {
    calcWindow += 2;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const threeElement = document.getElementById('three');
threeElement.addEventListener('click', () => {
    calcWindow += 3;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const fourElement = document.getElementById('four');
fourElement.addEventListener('click', () => {
    calcWindow += 4;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const fiveElement = document.getElementById('five');
fiveElement.addEventListener('click', () => {
    calcWindow += 5;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const sixElement = document.getElementById('six');
sixElement.addEventListener('click', () => {
    calcWindow += 6;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    // updateOperators()
});

const sevenElement = document.getElementById('seven');
sevenElement.addEventListener('click', () => {
    calcWindow += 7;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const eightElement = document.getElementById('eight');
eightElement.addEventListener('click', () => {
    calcWindow += 8;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

const nineElement = document.getElementById('nine');
nineElement.addEventListener('click', () => {
    calcWindow += 9;
    calcWindowElement.innerText = calcWindow;
    updateEqual();
    //updateOperators()
});

// function updateMinus() {
//     minus.disabled = counter <= 0;
// };
// updateMinus();    