function myfunc() {
    msg.innerText = '内容は' + txt.value + 'です。';
}

let txt = document.getElementById('t01');
let msg = document.getElementById('msg');
let btn = document.getElementById('b01');

btn.addEventListener('click', myfunc);
