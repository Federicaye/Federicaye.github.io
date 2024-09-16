let ciaoButton=document.getElementById('ciaoButton');
ciaoButton.addEventListener('click', () => {
let p = document.createElement('p');
p.innerText='ciao';
document.body.appendChild(p);
console.log('ciao');
})

async function populate() {
    const requestURL ="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
      const request = new Request(requestURL);
      const response = await fetch(request);
      const projects = await response.json();
      console.log('projects');
    }

window.addEventListener('DOMContentLoaded', () => {
    populate();
}); 