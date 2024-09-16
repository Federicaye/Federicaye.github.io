let result = {};
let container = document.querySelector('.container');
async function populate() {
  const requestURL = "projects.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  result = await response.json();
  console.log(result);
  result.projects.forEach(element => {
    let p = document.createElement('p');
    p.innerText = element["name"];
    container.appendChild(p);
  }); 
}

 

let ciaoButton = document.getElementById('ciaoButton');
ciaoButton.addEventListener('click', () => {
  let p = document.createElement('p');
  p.innerText = "element";
  document.body.appendChild(p);
})

window.addEventListener('DOMContentLoaded', () => {
  populate();
}); 