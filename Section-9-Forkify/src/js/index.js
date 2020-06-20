// Global app controller

import Search from "./models/Search";
import Recipe from "./models/Recipe";
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

/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get the query from the view
    // const query = searchView.getInput(); 
    // TESTING
    const query = "pizza";


    if(query) {
        // 2. New Search Object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results (cleanup and load-spinner)
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);
        try {
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on UI
            clearLoader();
            searchView.renderResults(state.search.recipes);
        } catch (e) {
            alert("Error Retrieving recipes");
            clearLoader();
        }
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


//  TESTING
window.addEventListener("load", e => {
    e.preventDefault();
    controlSearch();
});


elements.searchResPages.addEventListener("click", e => {
    const btn =  e.target.closest(".btn-inline");
    if(btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.recipes, goToPage);
        window.scrollTo(0, 0);
    }
});

/**
 * RECIPE CONTROLLER
 */

 const controlRecipe = async () => {
     // GET ID from URL
     const id = window.location.hash.replace("#", "");
     console.log(id);

     if(id) {
        // Prepare UI for changes


        // Create new Recipe Object
        state.recipe = new Recipe(id);

        // TESTING
        window.r = state.recipe;

        try {
            // Get recipe data
            await state.recipe.getRecipe();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            console.log(state.recipe);
        } catch (e) {
            alert("Error processing recipe!");
        }

     }
 }


["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipe));



