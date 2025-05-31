let display = document.getElementById('display');

function appendNumber(num) {
    display.value += num;
}

function appendOperator(operator) {
    display.value += operator;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = 'Error';
    }
}

// जब पेज लोड हो
window.onload = function() {
    display = document.getElementById('display');
}