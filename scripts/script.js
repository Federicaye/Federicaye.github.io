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
            <img src="images/${element["img"][0]}" alt="">
        </div>
      </div>
      </section>`;
    projects.innerHTML += content;
  });
}

let i = 0;
let n = 0;
let fullName = 'Federica Gallo';
let role = 'Full Stack Web Developer';
let speed = 70;

function typeWriter() {
  if (i < fullName.length) {
    document.getElementById("myName").innerHTML += fullName.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  if (i == fullName.length && n < role.length) {
    document.getElementById("role").innerHTML += role.charAt(n);
    n++;
    setTimeout(typeWriter, speed);
  }

} 




window.addEventListener('DOMContentLoaded', () => {
   typeWriter(); 
   populate();
   addSkills();
}); 