import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = "";
};

export const clearResults = () => {
    elements.searchResultsList.innerHTML = "";
}

const renderRecipe = recipe => {
    /*
        Limit titles to be three words max
    */
    const limitRecipeWords = (title, limit=17) => {

        if(title.length > limit) {
            let newTitle = title.split("").splice(0, limit);

            return `${newTitle.join("")} ...`;
        }

        return title;
    }

    const markup = `
    <li>
        <a class="results__link" href="#${recipe.id}">
            <figure class="results__fig">
                <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${limitRecipeWords(recipe.title)}</h4>
                <p class="results__author">${recipe.publisher}</p>
            </div>
        </a>
    </li>
    `;
    elements.searchResultsList.insertAdjacentHTML("beforeend", markup);
}; 

export const renderResults = recipes => {
    recipes.forEach(renderRecipe);

};