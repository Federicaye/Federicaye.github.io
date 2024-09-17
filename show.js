let query = window.location.search;
console.log(query);
let urlParams = new URLSearchParams(query);
let id =  urlParams.get('id');
console.log(urlParams);
console.log(id);
