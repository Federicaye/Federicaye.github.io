let ciaoButton=document.getElementById('ciaoButton');
ciaoButton.addEventListener('click', () => {
let p = document.createElement('p');
p.innerText='ciaou';
document.body.appendChild(p);
console.log('ciao');
})

async function populate() {
    const requestURL ="projects.json";
      const request = new Request(requestURL);
      const response = await fetch(request);
      const projects = await response.json();
      console.log('ciao');
    }

window.addEventListener('DOMContentLoaded', () => {
    populate();
    console.log('ciao');
}); 