function myfunc() {
    var a = inA.value;
    var b = inB.value;
    msg.innerText = a+b;
}

let inA = document.getElementById('inputA');
let inB = document.getElementById('inputB');
let calcBtn = document.getElementById('calcButton');

calcBtn.addEventListener('click', calc);
