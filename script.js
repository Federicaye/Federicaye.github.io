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
            <img src="${element["img"]}" alt="">
        </div>
      </div>
      </section>`;
    projects.innerHTML += content;
  }); 
}


window.addEventListener('DOMContentLoaded', () => {
  populate();
}); 