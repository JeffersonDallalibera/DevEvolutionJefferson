
n=Math.floor(1+100 *Math.random())
document.getElementById('numeroAleatorio').innerHTML=n;



let r = Math.floor(256 * Math.random());
let g = Math.floor(256 * Math.random());
let b = Math.floor(256 * Math.random());
document.body.style.backgroundColor= `rgb(${r},${g},${b})`;
