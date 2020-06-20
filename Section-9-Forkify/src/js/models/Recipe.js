// api get: https://forkify-api.herokuapp.com/api/get
// api get example: https://forkify-api.herokuapp.com/api/get?rId=47746

import axios from 'axios';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }

    async getRecipe() {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.publisher = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.ingredients = res.data.recipe.ingredients;
            this.url = res.data.recipe.source_url;
            // console.log(this);
        } catch (e) {
            console.trace(e);
            alert("Something went wrong 😢")
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings() {
        this.servings = 4;
    }
}

/**
 * recipe: {…}
​​​
image_url: "http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg"
​​​
ingredients: Array(6) [ "4 1/2 cups (20.25 ounces) unbleached high-gluten, bread, or all-purpose flour, chilled", "1 3/4 (.44 ounce) teaspoons salt", "1 teaspoon (.11 ounce) instant yeast", … ]
​​​
publisher: "101 Cookbooks"
​​​
publisher_url: "http://www.101cookbooks.com"
​​​
recipe_id: "47746"
​​​
social_rank: 100
​​​
source_url: "http://www.101cookbooks.com/archives/001199.html"
​​​
title: "Best Pizza Dough Ever"
 * 
 */