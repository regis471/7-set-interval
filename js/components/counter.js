/*
REIKALAVIMAI :
- rasti vieta/elementa
- istraukti skaiciu
- kas sekunde ta skaiciu mazinti iki nulio
- pasiekus nuli - prasyti FINITO

*/

function counter(selector) {
    const DOM = document.querySelector(selector);
    let number = parseFloat(DOM.innerText);

    const timer = setInterval(function (){
        DOM.innerText =number;
        number--;
        if (number < 0){
            clearInterval(timer);
            DOM.innerText = 'Baigėsi';

        }
    }, 1000);
}

function showmenumber(num) {
    console.log(num);
}

export { counter }