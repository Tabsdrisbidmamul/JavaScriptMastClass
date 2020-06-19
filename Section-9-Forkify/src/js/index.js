// Global app controller

// api: https://forkify-api.herokuapp.com/api/search
// api search example:  https://forkify-api.herokuapp.com/api/search?q=pizza

// api get: https://forkify-api.herokuapp.com/api/get
// api get example: https://forkify-api.herokuapp.com/api/get?rId=47746

import Search from "./models/Search";

const search = new Search("pizza");
search.getResults();
console.log(search);