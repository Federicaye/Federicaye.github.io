let result = {};
let content = ``;

async function populate() {
  let projects = document.getElementById("projects");
  const requestURL = "projects.json";
  const request = new Request(requestURL);
  const response = await fetch(request);
  result = await response.json();
  console.log(result);
  result.projects.forEach(element => {
    content = `<section style="background-color: ${element["bg-color"]};">
      <div class="project-section">
        <div class="description">
            <h2>${element["name"]}</h2>
            <p>${element["description"]}</p>
            <a href="project.html?id=${element["id"]}">vai</a>
        </div>
        <div class="img-project">
            <img src="${element["img"][0]}" alt="">
        </div>
      </div>
      </section>`;
    projects.innerHTML += content;
  });
}

var i = 0;
var n = 0;
var txt = 'Federica Gallo';
var role = 'Full Stack Web Developer';
var speed = 70;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("myName").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == txt.length && n < role.length) {
    document.getElementById("role").innerHTML += role.charAt(n);
    n++;
    setTimeout(typeWriter, speed);
  }

}


window.addEventListener('DOMContentLoaded', () => {
   typeWriter(); 
 
  populate();
}); 