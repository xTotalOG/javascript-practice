/*var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1[0]);*/

/*function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log("Found the", match, "at", i)
        } else {
            console.log ("---No match found at", i)
        }
    }
}

letterFinder("test","t")*/

// arrays are iterable
var veggies = ["onion", "parsley", "carrot"];
console.log(veggies.length);

console.log(veggies[0]);
console.log(veggies[1]);

for (var i = 0; i < veggies.length; i++){
    console.log(veggies[i]);
} 

// strings are iterable as well
var greeting = "Howdy";
console.log(greeting.length);

console.log(greeting[0]);
console.log(greeting[1]);

for (var i = 0; i < greeting.length; i++){
    console.log(greeting[i]);
}

// similar but strings and arrays are not the same
var greet = "Hello ";
var user = "Lisa";

console.log(greet+user);
console.log(greet.concat(user));