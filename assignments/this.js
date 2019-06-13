/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Binding 
    - the 'this' keyword refers to the window or console, and returning this will return the entire program code

* 2. Implicit Binding 
    - If you use .(functionname) to call a function, the object before the dot is what 'this' refers to

* 3. New Binding 
    - When using a constructor, 'this' refers to the SPECIFIC instance of the function that is being created and returned

* 4. Explicit Binding
    - When using .call or .apply, rather than 'this' referring to a new object being created, 'this' is being explicity defined by call or apply

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function showConsole(object) {
    console.log(this);
    return object;
}
showConsole('JavaScript')

// Principle 2

// code example for Implicit Binding

const objExample = obj => {
    obj.sayProfession = function () {
        console.log(`Hello, I am a ${this.job}`)
        console.log(this)
    }
}
const me = { job:'student' }
const you = { job: 'developer'}
objExample(me)
objExample(you)

me.sayProfession()
you.sayProfession()

// Principle 3

// code example for New Binding

function NewAquaintance(friend) {
    this.question = 'What do you do, '
    this.friend = friend
    this.ask = function() {
        console.log(this.question + this.friend + '?')
        console.log(this)
    }
}

const Joshua = new NewAquaintance('Michael')
const Michael = new NewAquaintance('Joshua')

Joshua.ask()
Michael.ask()

// Principle 4

// code example for Explicit Binding

function CompareDishes(food) {
    this.qualifier = ('The best dish on the menu is ')
    this.food = food
    this.speak = function () {
        console.log(this.qualifier + this.food)
        console.log(this)
    }
}

const seafoodLover = new CompareDishes('Salmon')
const meatlover = new CompareDishes('Steak')

meatlover.speak.call(seafoodLover)
seafoodLover.speak.apply(meatlover)