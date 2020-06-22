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
        const unitsLong = ["tablespoons", "tablespoon", "ounces", "ounce", "teaspoons", "teaspoon", "cups", "pounds", "kg", "g"];
        const unitShort = ["tbsp", "tbsp", "oz", "oz", "tsp", "tsp", "cup", "pound", "kg", "g"]

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
                unitShort.includes(el));

            // Object to hold the count, unit and ingredient    
            let objIng;
            if(unitIndex > -1) {
                // There is a unit

                // Ex. 4 1/2 cups -> [4, 1/2] -> eval("4+1/2") = 4.5
                // Ex. 4 cups -> [4]

                /**
                 * eval() is dangerous as it will evaluate all forms of input as JS code -> if left to the end-user they can access inner workings of the system (like an SQL-injection attack) - thus this must be used with utmost care
                 */
                const arrCount = arrIng.slice(0, unitIndex);
 
                let count;
                if(arrCount.length === 1) {
                    count = Function(`"user strict";return ${arrCount[0].replace("-", "+")}`)();
                } else {
                    count = Function(`"use strict";return ${(arrCount).join("+")}`)();
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(" ")
                };


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
                
            return objIng;
        })
        this.ingredients = newIngredients;
    }

    updateServings(type) {
        /**
         * type: increase or decrease (plus or minus) buttons
         * 
         */
        // Servings
        const newServings = type === "dec" ? this.servings - 1 : this.servings + 1;

        // Ingredients
        this.ingredients.forEach(ing => {
            ing.count *= (newServings / this.servings);
        })
        
        this.servings = newServings;



    }
}