/*
    Open Close Principles

    This principles says that every implementation should be
    closed to modification, but open to extension.

    It means that we have to code in order to avoid modifyng
    the classes of functions that are already coded, but at
    the same time, they should be flexible enough to accept
    new features or implementations without suffering any
    modification
*/

/* Correct Case */

/*
    We say this is an Open Close implementation
    because every time we need to add a new Dish
    we don't have to modify the manu class, we 
    just create the new one instead by implementing
    the Dish interface.

    Rigid enough to not be not be modifed, but
    flexible enough to extend its functionality
*/
class Menu {
    dishes:Dish[];
    constructor() {
    }

    selectDish(name) {
        console.log('Selected dish was')
        const {title, description, ingrediends} = this.dishes.find(dish => dish.title === name);
        console.log(title, description, ingrediends);
    }
}

interface Dish {
    title:string,
    description:string,
    ingrediends:string[]
}

const tomatoSoup:Dish = {
    title: 'Tomato Soup',
    description: 'This is a taste vegetarean soup',
    ingrediends: ['tomato', 'garlic', "onion"]
}

const crab:Dish = {
    title:'Salty Crab',
    description: 'Coming from the ocean to satisfy your taste',
    ingrediends: ["crab", "butter"]
}


/*
    Wrong Example
*/


/*
    We say it's not a Open close implementation
    because every time we have to create a new
    dish, we have to modify the Menu class
*/
class wrongMenu {
    constructor() {
        
    }

    selectDish(name:string) {
        if (name === 'Salty Crab') {
            console.log('Salty Crab');
            console.log('Coming from the ocean to satisfy your taste');
            console.log(["crab", "butter"])
        } else if (name === 'Tomato Soup') {
            console.log('Tomato Soup')
            console.log('This is a taste vegetarean soup');
            console.log(['tomato', 'garlic', "onion"])
        }
    }


}