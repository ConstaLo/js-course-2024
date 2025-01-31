alert("hello");
//search element
const btn = document.getElementById('world');
//event by click
btn.addEventListener('click', () => {
    alert('world');
});

const add = document.getElementById('added');
add.addEventListener('click', () => {
    alert('added');
});

const purchase = document.getElementById('purchased');
purchase.addEventListener('click', () => {
    console.log('Loading...');
    alert('Purchased');
});