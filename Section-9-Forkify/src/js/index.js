// Global app controller

import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
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
    const query = searchView.getInput(); 

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

     if(id) {
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected search item
        if(state.search) searchView.highlightSelected(id);
        
        // Create new Recipe Object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data and parse Ingredients
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            // Calculate servings and time
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render recipe
            clearLoader();
            recipeView.renderRecipe(state.recipe);
        } catch (e) {
            alert("Error processing recipe!");
        }

     }
 }


["hashchange", "load"].forEach(e => window.addEventListener(e, controlRecipe));


// Handling recipe button clicks
elements.recipe.addEventListener("click", e => {

    // .btn-decrease *: any child of btn-decrease
    if(e.target.matches(".btn-decrease, .btn-decrease *")) { 
        // Decrease button is clicked
        
        if(state.recipe.servings > 1) {
            state.recipe.updateServings("dec");
            recipeView.updateServingsIngredient(state.recipe);
        }

    } else if (e.target.matches(".btn-increase, .btn-increase *")) {
        // Increase button is clicked
        if(state.recipe.servings < 100) {
            state.recipe.updateServings("inc");
            recipeView.updateServingsIngredient(state.recipe);
        }
    }

});
