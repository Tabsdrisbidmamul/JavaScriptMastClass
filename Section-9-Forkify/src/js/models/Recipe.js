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

    parseIngredients() {
        const unitsLong = ["tablespoons", "tablespoon", "ounces", "ounce", "teaspoons", "teaspoon", "cups", "pounds"];
        const unitShort = ["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound"]

        // const unitConversion = new Map([
        //     ["tablespoons", "tbsp"],
        //     ["tablespoon", "tbsp"],
        //     ["ounces", "oz"],
        //     ["ounce", "oz"],
        //     ["teaspoon", "tsp"],
        //     ["teaspoons", "tsp"],
        //     ["cups", "cup"],
        //     ["pounds", "pound"]
        // ]);
        

        const newIngredients = this.ingredients.map(cur => {
            // 1. Make units Uniform
            let ingredient = cur.toLowerCase();
            unitsLong.forEach((unit, i) => {
                ingredient = ingredient.replace(unit, unitShort[i]);
            })

            // 2. Remove parenthesis in any of the ingredients
            ingredient = ingredient.replace(/ *\([^)]*\) */g, " ");

            // 3. Parse ingredients into count: quantity of ingredients, unit and ingredient: the String portion of the ingredient

            // Split the ingredient into separate words and numbers
            const arrIng = ingredient.split(" ");

            // find the index of a unit
            const unitIndex = arrIng.findIndex(el => 
                unitsShort.includes(el));

            // Object to hold the count, unit and ingredient    
            let objIng;
            if(unitIndex > -1) {
                // There is a unit

            } else if (parseInt(arrIng[0], 10)) {
                // There is NO unit, but 1st element is a number -> just a quantity of said ingredient'
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: "",
                    ingredient: arrIng.slice(1).join(" "),
                }
            } else if (unitIndex === -1) {
                // There is NO unit and NO number in 1st position
                objIng = {
                    count: 1,   // always default to 1, as there should be one 
                                // of a ingredient
                    unit: "",
                    ingredient,
                }
            }
                
            return ingredient;
        })
        this.ingredients = newIngredients;
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