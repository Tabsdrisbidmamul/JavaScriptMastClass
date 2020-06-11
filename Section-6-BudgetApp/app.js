// ----------------------BUDGET CONTROLLER----------------------
var budgetController = (function() {
    // Controls all Budget app related concerns
    
    // Expense Object Constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    // Income Object Constructor
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    
    // Calculate totals for income and expenses depending on the type
    var calculateTotal = function(type) {
        var sum = 0;
        
        data.allItems[type].forEach(function(current){
            sum += current.value;
        });
        data.totals[type] = sum;
        
    }
        
    // Data Object which holds all the data on the created objects and their values
    var data = {
        allItems: {
            inc: [],
            exp: []
        },
        
        totals: {
            exp: 0,
            inc: 0
        },
        
        budget: 0,
        percentage: -1
        
            
    };
    
    return {
        addItem: function(type, desc, val) {
            var newItem, ID;
            
            /*
                Calculate the IDs based on the array length
                [1, 2, 3, 4, 5], next ID = 6
                
                But with expenses, we are removing elements from the array, so we will get an unsorted array of IDs
                [1, 2, 4, 6, 8], next ID = 6 - It should be nine not 6 if we are going in ascending order
                
                So instead we want ID = last element + 1
            
            */
            
            // Create a new ID
            if(data.allItems[type].length) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            
            // Create new item based on 'inc' or 'exp' type
            if (type === "exp") {
                newItem = new Expense(ID, desc, val);
            } else if (type === "inc") {
                newItem = new Income(ID, desc, val);
            }
            
            // Push it into our data structure
            data.allItems[type].push(newItem);
            
            // Return the new element
            return newItem;
        }, 
        
        deleteItem: function(type, id) {
            var ids, index
                        
            ids = data.allItems[type].map(function(current, index, array){
                return current.id;    
            });
            
            
            index = ids.indexOf(id);
            
            if(id !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },
        
        calculateBudget: function() {
            // Calculate total income and expenses
            calculateTotal("exp");
            calculateTotal("inc");
            
            // Calcualte the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // Calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
            
        },
        
        getBudget: function() {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        
        testing: function() {
            console.log(data);
        }
    };
    
    
})();


// ----------------------UI CONTROLLER----------------------
var uiController = (function() {
    // Will control gathering data from the DOM and update the UI
    
    var DOMStrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputButton: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list",
        budgetLabel: ".budget__value",
        incomeLabel: ".budget__income--value",
        expensesLabel: ".budget__expenses--value",
        percentageLabel: ".budget__expenses--percentage",
        container: ".container",
//        itemDeleteContainer: ".item__delete",
        
    }
    
    
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMStrings.inputType).value, // Will be either inc or exp
                description: document.querySelector(DOMStrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMStrings.inputValue).value)
            };
        },
        
        addListItem: function(obj, type) {
            var html, newHtml, element;
            
            // Create HTML string with placeholder text
            if (type === "inc") {   // income HTML String
                element = DOMStrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === "exp") {    // expense HTML String
                element = DOMStrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace("%id%", obj.id).replace("%description%", obj.description).replace("%value%", obj.value);
            
            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
            
            
        },
        
        clearFields: function() {
            var fields, fieldsArray;
            
            fields = document.querySelectorAll(DOMStrings.inputDescription + ", " + DOMStrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArray[0].focus();
        },
        
        displayBudget: function(obj) {
            document.querySelector(DOMStrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMStrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMStrings.expensesLabel).textContent = obj.totalExp;
            
            if(obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }

        },
        
        getDOMStrings: function() {
            return DOMStrings;
        }
    }
    
})();



// ----------------------GLOBAL APP CONTROLLER----------------------
var contoller = (function(budgetCtrl, uiCtrl) {
    // Will control data gathering the 2 modules above together, and connect them
    
    
    var setUpEventListeners = function() {
        var DOM = uiCtrl.getDOMStrings();
        
        document.querySelector(DOM.inputButton).addEventListener("click", ctrlAddItem);
    
        document.addEventListener("keypress", function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                event.preventDefault(); // prevents double click / enter (stopping the event from bubbling up, way too much the, DOM)
                ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);
        
    };
    
    
    var updateBudget = function() {
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();    
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        uiCtrl.displayBudget(budget);
        
    };
    
    var ctrlAddItem = function() {
        var input, newItem;
        
        // TO-DO
        // 1. Get the field input data 
        input = uiCtrl.getInput();
        
        // Check if NOT(String is empty or null) AND NOT(value is Not a Number) AND value is greater than 0
        if( !( 0 === input.description.length || !input.description.trim() ) && !Number.isNaN(input.value) && input.value > 0 ) {
            // 2. Add item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // 3a. Add the item to the UI
            uiCtrl.addListItem(newItem, input.type);    

            // 3b. Clear the Fields in the UI
            uiCtrl.clearFields();

            // 4. Calculate and update budget
            updateBudget();
            
        }
                
    };
    
    var ctrlDeleteItem = function(event) {
        var findParent = function(el, className) {
            while((el = el.parentElement) && !el.classList.contains(className));
            return el;
        }
        
        var itemID, splitID, type, ID, itemDelete;
        
        // Making sure that the "x" button/ i element was clicked and find its parent elements
        itemDelete = findParent(event.target, 'item__delete');
        if (itemDelete) itemID = itemDelete.parentNode.parentNode.id;
        
        console.log(itemID);
        
        if(itemID) {
            
            // inc-1
            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from the UI
            
            
            // 3. Update and show the new budget
            
        }
        
        
    };
    
    return {
        init: function() {
            console.log("Application has started");
            uiCtrl.displayBudget({                
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1});
            setUpEventListeners();
        }
    };
    
    
})(budgetController, uiController);


contoller.init();