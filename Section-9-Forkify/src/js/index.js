// Global app controller

// api: https://forkify-api.herokuapp.com/api/search
// api search example:  https://forkify-api.herokuapp.com/api/search?q=pizza

// api get: https://forkify-api.herokuapp.com/api/get
// api get example: https://forkify-api.herokuapp.com/api/get?rId=47746

import Search from "./models/Search";
import * as searchView from "./views/searchView";
import { elements, renderLoader, clearLoader } from "./views/base";

/** Global State
* - Search Object
* - Current Recipe Object
* - Shopping List Object
* - Liked Recipes
*/
const state = {

};


const controlSearch = async () => {
    // 1. Get the query from the view
    const query = searchView.getInput(); 


    if(query) {
        // 2. New Search Object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results (cleanup and load-spinner)
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        // 4. Search for recipes
        await state.search.getResults();

        // 5. Render results on UI
        clearLoader();
        searchView.renderResults(state.search.recipes);

    }
     
};

document.addEventListener("keypress", e => {
    if(e.keyCode === 13 || e.which === 13) {
        e.preventDefault()
        controlSearch()
    }
});

elements.searchForm.addEventListener("submit", e => {
    e.preventDefault();
    controlSearch();
});


