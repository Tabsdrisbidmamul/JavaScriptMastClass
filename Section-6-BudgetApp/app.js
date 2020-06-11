// ----------------------BUDGET CONTROLLER----------------------
var budgetController = (function() {
    // Controls all Budget app related concerns
    
    // Expense Object Constructor
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    }
    
    Expense.prototype.calcPercentage = function(totalIncome) {
        if(totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        }
    }
    
    Expense.prototype.getPercentage = function() {
        return this.percentage;
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
        
        calulatePercentages: function() {
            
            /*
                To calculate the individual percentages on each expense we need 2 things:
                    1. The total income
                    2. The expense object itself from the array, and its value
                
                formula:
                    ( expense_object_value (20) / total_income (100) ) * 100 = 20%
                
                So we can add this method to the prototype of the Expense object - as we will be calculating the percentage on each 
                object itself
            
            */
            if(data.totals.inc > 0) {
                data.allItems.exp.forEach(function(curr) {
                    curr.calcPercentage(data.totals.inc);
                });
            }
            
        },
        
        getPercentages: function() {
            var allPercentages = data.allItems.exp.map(function(curr) {
                return curr.getPercentage();
            })
            return allPercentages;
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
        expensesPercentageLabel: ".item__percentage",
        dateLabel: ".budget__title--month"
//        itemDeleteContainer: ".item__delete",
        
    }
    
    var formatNumber = function(num, type) {
        var numSplit, integer, double;
        /*
            1. All values will have 2 decimal places to the right of them (so they are all aligned)
            2. inc will be prepende with "+ ", exp will be prepended with "- "
            3. If a value is in the thousands, then it will be separated with commas (1,000)

            2310.4567 -> 2,310.46
            2000 -> 2,000

        */

        num = Math.abs(num);
        num = num.toFixed(2);

        numSplit = num.split(".");

        integer = parseInt(numSplit[0]);            
        double = numSplit[1];
        integer = integer.toLocaleString();

        return (type === "exp" ? "- " : "+ ") + integer + "." + double;
    };
    
    
    var nodeListForEach = function(list, callback) {
        for(var i=0; i<list.length; i++) {
            callback(list[i], i);
        }
    };
    
    
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
            newHtml = html.replace("%id%", obj.id).replace("%description%", obj.description).replace("%value%", formatNumber(obj.value, type));
            
            // insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
            
            
        },
        
        deleteListItem: function(selectorID) {
            
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
            
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
            var type;
            type = obj.budget > 0 ? "inc" : "exp";
            
            document.querySelector(DOMStrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMStrings.incomeLabel).textContent = formatNumber(obj.totalInc, "inc");
            document.querySelector(DOMStrings.expensesLabel).textContent = formatNumber(obj.totalExp, "exp");
            
            if(obj.percentage > 0) {
                document.querySelector(DOMStrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMStrings.percentageLabel).textContent = "---";
            }

        },
        
        displayPercentages: function(percentageArray) {
            var fields = document.querySelectorAll(DOMStrings.expensesPercentageLabel);
                        
            nodeListForEach(fields, function(current, index) {
                if(percentageArray[index] > 0) {
                    current.textContent = percentageArray[index] + "%";
                } else {
                    current.textContent = "---";
                }
            });
        },
        
        displayDate: function() {
            var now, date;
            
            now = new Date();
            date = new Intl.DateTimeFormat("en-GB", { year: "numeric", month: "long", day: "numeric" }).format(now);
            
            document.querySelector(DOMStrings.dateLabel).textContent = date;
        },
        
        changedType: function() {
            var fields = document.querySelectorAll(
                DOMStrings.inputType + ", " + 
                DOMStrings.inputDescription + ", " +
                DOMStrings.inputValue);
            
            nodeListForEach(fields, function(current) {
                current.classList.toggle("red-focus");
            });
            
            document.querySelector(DOMStrings.inputButton).classList.toggle("red");
            
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
        
        document.querySelector(DOM.inputType).addEventListener("change", uiCtrl.changedType);
        
    };
    
    
    var updateBudget = function() {
        // 1. Calculate the budget
        budgetCtrl.calculateBudget();    
        
        // 2. Return the budget
        var budget = budgetCtrl.getBudget();
        
        // 3. Display the budget on the UI
        uiCtrl.displayBudget(budget);
        
    };
    
    var updatePercentages = function() {
        
        // 1. First calculate percentages
        budgetCtrl.calulatePercentages();
        
        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentages();
        
        
        // 3. Update the UI with the new percentages
        uiCtrl.displayPercentages(percentages);
        
        
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
            
            // 5 Calcualte and update the percentages
            updatePercentages();
            
        }
                
    };
    
    var ctrlDeleteItem = function(event) {
        // helper function to extract the parent ID of the inc or exp
        var findParent = function(el, className) {
            while((el = el.parentElement) && !el.classList.contains(className));
            return el;
        }
        
        var itemID, splitID, type, ID, itemDelete;
        
        // Making sure that the "x" button/ i element was clicked and find its parent elements
        itemDelete = findParent(event.target, 'item__delete');
        if (itemDelete) itemID = itemDelete.parentNode.parentNode.id;
        
        if(itemID) {
            
            // inc-1
            splitID = itemID.split("-");
            type = splitID[0];
            ID = parseInt(splitID[1]);
            
            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            
            // 2. Delete the item from the UI
            uiCtrl.deleteListItem(itemID);
            
            // 3. Update and show the new budget
            updateBudget();
            
            // 4 Calcualte and update the percentages
            updatePercentages();
            
        }
    };
    
    return {
        init: function() {
            console.log("Application has started");
            uiCtrl.displayDate();
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