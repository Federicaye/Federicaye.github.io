let ciaoButton=document.getElementById('ciaoButton');
ciaoButton.addEventListener('click', () => {
let p = document.createElement('p');
p.innerText='ciao';
document.body.appendChild(p);
})