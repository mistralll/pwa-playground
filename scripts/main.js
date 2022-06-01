function myfunc() {
    var a = inA.value;
    var b = inB.value;
    var ans = a + b;
    msg.innerText = '計算結果: ' + ans;
}

let inA = document.getElementById('inputA');
let inB = document.getElementById('inputB');
let calcBtn = document.getElementById('calcButton');

calcBtn.addEventListener('click', calc);
