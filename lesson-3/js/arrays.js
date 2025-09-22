const output = document.querySelector('body p:nth-of-type(2)');

/* STEP 1: Creating an array
When declaring and initializing an array, you can include strings, numbers, booleans, and even other arrays */
let myArray = ['string',25,true,[10,20,30]];
output.textContent = myArray;
/* STEP 2: Reading and changing array elements
You can refer to a particular element in an array with it's index number */
output.textContent = "The third element in the array is " + myArray[2];
// You can also change a particular element
output.textContent = "The second element from multidimensional array is "  + myArray[3][1];

// An array within an array is called a multidimensional array - it can be accessed by specifying the index of the first array, then the item within it
/* STEP 3: Determining array length
Being able to figure out how many elements are contained in an array is a critical feature of JavaScript programming */
output.textContent = myArray.length;

// In particular, looping through arrays
for(let i=0; i<myArray.length;i++){
    console.log(myArray[i]);
    output.textContent  += ', ' + myArray[i];
}

/* STEP 4: Convert a string to an array
If there is a common character that can act as a delimiter in a string, we can use this character to create an array */
let origFiveString1 = 'Toronto Maple Leafs, Chicago Black Hawks, Detroiy Red Wings, Boston Bruins, Montreal Canadians';
console.log(origFiveString1);

let origFiveArray = origFiveString1.split(', ');
console.log(origFiveArray);
// Output one of the array items
output.textContent = origFiveArray[3];

// Output the last element of the array
output.textContent = "The last element in the arrays is " + origFiveArray[origFiveArray.length-1];

/* STEP 5: Convert an array back to a string
Use join() and toString() - note that join() allows you to choose and insert a delimiter, while toString() does not */
let origFiveString2 = origFiveArray.join('- ');
console.log(origFiveString2);

let origFiveString3 = origFiveArray.toString();
console.log(origFiveString3);

/* STEP 6: Adding and removing items from an array
Without the ability to edit the contents of an array, this type of variable would have limited use - but adding and removing array items is pretty straightforward */

// Adding one or more items to an array with push()
let origSevenArray = origFiveArray.push('New York Rangers', 'Philadelphia Flyers');
output.textContent = origSevenArray;
// If you would like to capture how many elements are in the array after you have edited it, then…
output.textContent = origSevenArray + ' items and they are ' + origFiveArray;

// Removing an item from an array with pop()
output.textContent = origFiveArray.pop();

let myArrayEmpty = [];
console.log(myArrayEmpty.pop());

// pop() returns the item that was removed, rather than the length of the updated array, so…

// To do the same thing, that is, to add and remove an item from the beginning of the array, use shift() and unshift()
origSevenArray = origFiveArray.unshift('Buffalo Sabres');
output.textContent = origFiveArray;

output.textContent = origFiveArray.shift();
output.textContent = origFiveArray;


// We can also modify the array contents by deleting or substituting elements, or inserting one or more elements at a certain place with splice()

/* That's it for the basics of working with arrays! With these tools at your disposal, a whole new world of possibilities with JavaScript are at your command */