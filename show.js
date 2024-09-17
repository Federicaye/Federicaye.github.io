let query = window.location.search; /*  The Window.location read-only property returns a Location object with information about the current location of the document. */
console.log(query);
let urlParams = new URLSearchParams(query); /* The URLSearchParams interface defines utility methods to work with the query string of a URL. URLSearchParams() returns a URLSearchParams object instance. */
let id =  urlParams.get('id');
console.log(urlParams);
console.log(id);
