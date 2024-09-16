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


window.addEventListener('DOMContentLoaded', () => {
  populate();
}); 