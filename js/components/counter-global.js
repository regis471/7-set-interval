/*
REIKALAVIMAI :
- rasti vieta/elementa
- istraukti skaiciu
- kas sekunde ta skaiciu mazinti iki nulio
- pasiekus nuli - prasyti FINITO

*/
let number = 0;

function counter(selector) {
    const DOM = document.querySelector(selector);
    number = parseFloat(DOM.innerText);

    setTimeout(showmenumber, 1000);
}

function showmenumber() {
    console.log(number);
}

export { counter }