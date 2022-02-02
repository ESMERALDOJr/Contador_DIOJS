let CURRENT_NUMBER = document.getElementById('currentNumber');
const decrement = document.getElementById('decrement')
const increment = document.getElementById('increment')
let count = 0;


decrement.addEventListener('click',
    function decrement() {
        count--;
        if (count >= -10) {
            CURRENT_NUMBER.innerHTML = count;
        }

        if (count <= 0) {
            CURRENT_NUMBER.classList.add('redcolor')
        }
        
    }
)

increment.addEventListener('click',
    function increment() {
        count++;
        if (count <= 10) {
            CURRENT_NUMBER.innerHTML = count;
        }
        if (count >= 0) {
            CURRENT_NUMBER.classList.remove('redcolor')
        }         

       
       
    }
)
