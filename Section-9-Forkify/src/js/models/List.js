import uniqid from 'uniqid';
import { elementStrings } from '../views/base';

export default class List {
    constructor() {
        this.items = []; // each element will be a recipe.ingredients object
    }

    addItem(count, unit, ingredient) {
        const item = {
            id: uniqid(),
            count,
            unit,
            ingredient
        };

        this.items.push(item);
        return item;
    }

    deleteItem(id) {
        const index = this.items.findIndex(el => el.id === id);
        this.items.splice(index, 1);

    }

    updateCount(id, newCount) {
        this.items.find(el => el.id === id).count = newCount;
    }
}