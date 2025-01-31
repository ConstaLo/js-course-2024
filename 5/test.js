
let counter = 0;
let cartCount = 0;

const counterElement = document.getElementById('counter');
counterElement.innerText = counter;

const cartQuantity = document.getElementById('cartQuantity');
cartQuantity.innerText = cartCount;

const minus = document.getElementById('minus');

function updateMinus() {
    minus.disabled = counter <= 0;
};
updateMinus();

minus.addEventListener('click', () => {
    counter--;
    counterElement.innerText = counter;
    updateMinus();
});
const plus = document.getElementById('plus');
plus.addEventListener('click', () => {
    counter++;
    counterElement.innerText = counter;
    updateMinus();
});
const addToCart = document.getElementById('addToCart');
addToCart.addEventListener('click', () => {
    cartCount += counter;
    counter = 0;
    counterElement.innerText = counter;
    cartQuantity.innerText = cartCount;
    updateMinus();
});
const resetCart = document.getElementById('resetCart');
resetCart.addEventListener('click', () => {
    cartCount = 0;
    cartQuantity.innerText = cartCount;
    updateMinus();
})

// if (cartCount === 0) {
//     minus.setAttribute('disabled', true)
// } else {
//     minus.setAttribute('disabled', false)
// }