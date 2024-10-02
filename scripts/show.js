let query = window.location.search; /*  The Window.location read-only property returns a Location object with information about the current location of the document. */
console.log(query);
let urlParams = new URLSearchParams(query); /* The URLSearchParams interface defines utility methods to work with the query string of a URL. URLSearchParams() returns a URLSearchParams object instance. */
let id =  urlParams.get('id');
console.log(urlParams);
console.log(id);
let projectContainer = document.querySelector(".project-section");

async function populate() {
    const requestURL = "projects.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    let result = await response.json();
    let project = result.projects.filter((project) => project.id == id);
    console.log(project);
    let content = `<div class="description"><p>${project[0]['name']}</p></div>
    <div class="video-project">
    <iframe width="560" height="315" src="${project[0]['video']}" title="YouTube video player" title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe></div>`;
    projectContainer.innerHTML = content;
}

window.addEventListener('DOMContentLoaded', () => {
    populate();
  }); 