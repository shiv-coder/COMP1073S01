const output = document.querySelector('#output');

/* STEP 1: Instead of a constructor function, let's try a JavaScript class called 'Coffee' */
class Coffee{
    size;
    decaf;
    constructor(size,isDecaf){
        this.size = size;
        this.isDecaf = isDecaf;
    }
    serveIt(){
        //Generate Image of Coffee Cup
        const cup = document.createElement('img');
        //set the src for the IMG ELement
        let cupImage = 'images/coffee-cup.svg';
        //Deteremine whether the coffee is Decaf
        let decaf;
        if(this.isDecaf === true){
            decaf ='decaffeinated';
            cupImage = 'images/coffee-cup-green.svg';
        }else{
            decaf ='caffeinated';
        }
        cup.setAttribute('src',cupImage);
        //set the IMG size accorsing to Coffee size
        let cupSize;
        switch(this.size){
            case 'small':
                cupSize = '100';
                break;
             case 'medium':
                cupSize = '125';
                break;
             case 'large':
                cupSize = '150';
                break;
             case 'ExtraLarge':
                cupSize = '200';
                break;
            default:
                cupSize = '100';
        }
        cup.setAttribute('height',cupSize);
        //Generate a description of Coffee as Image title
        let description = `A ${this.size} ${decaf} coffee`;
        //cup.setAttribute('title',description);
        const decsrElement = document.createElement('p');
        decsrElement.textContent =description;

        output.appendChild(cup);
        output.appendChild(decsrElement);
    }
}
/* STEP 2: Instatiate a coffee based on the above constructor function */
let scottsCoffee = new Coffee('Extra Large',false);
let megansCoffee = new Coffee('small',true);
/* STEP 3: Add a method to the Coffee class called serveIt() */

/* STEP 4: Call up the serveIt() method */

/* STEP 5: Define a subclass of the Coffee class */
class Latte extends Coffee{
    milktype;
    constructor(size,isDecaf,milktype){
        super(size,isDecaf);
        this.milktype=milktype;
    }
    latteDesc(){
        alert(`A ${this.size} ${(this.isDecaf === true?"decaffeinated":"caffeinated")} lattee with steamed ${this.milktype} milk`)
    }
}
/* STEP 6: Create a new instance of the Latte object */
let scottsLatte = new Latte('medium',true,'almond');
/* STEP 7: Call up the latteDesc() method for the above created Latte instance */

/* STEP 8: Create yet another instance of Latte using the console, and try the latteDesc() method from the subclass, as well as the serveIt() method from the parent class */

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript

// Special thanks to https://openclipart.org/detail/293550/coffee-to-go for the very cool coffee cup SVG
