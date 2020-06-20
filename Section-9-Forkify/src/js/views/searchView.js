import { elements } from "./base";

export const getInput = () => elements.searchInput.value;

export const clearInput = () => {
    elements.searchInput.value = "";
};

export const clearResults = () => {
    elements.searchResultsList.innerHTML = "";
    elements.searchResPages.innerHTML = "";
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
        <a class="results__link" href="#${recipe.recipe_id}">
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

// type: 'prev' or 'next'
// returns markup
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === "prev" ? page - 1 : page + 1}>
        <span>Page ${type === "prev" ? page - 1 : page + 1}</span>  
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === "prev" ? "left" : "right"}"></use>
        </svg>
    </button>
`;


const renderButtons = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let btn;
    if(page === 1 && pages > 1) {
        // Only Button to go to the next page
        btn = createButton(page, "next");
    } else if (page < pages) {
        // Both Buttons
        btn = `
        ${createButton(page, "prev")} 
        ${createButton(page, "next")}
        `;
    } else if (page === pages && pages > 1) {
        // Only Button to go to the prev page
        btn = createButton(page, "prev");
    }

    if (btn) 
    elements.searchResPages.insertAdjacentHTML("afterbegin", btn);
}; 

export const renderResults = (recipes, page=1, resPerPage=10) => {
    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    recipes.slice(start, end).forEach(renderRecipe);

    // render pagination button]
    renderButtons(page, recipes.length, resPerPage);
};