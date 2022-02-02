const CURRENT_NUMBER = document.getElementById('currentNumber');
let count = 0;


function increment() {
    count++;
    if (count <= 10) {
        CURRENT_NUMBER.innerHTML = count;
    }
}


function decrement() {
    count--;
    if (count >= -10) {
        CURRENT_NUMBER.innerHTML = count;
    }
}
