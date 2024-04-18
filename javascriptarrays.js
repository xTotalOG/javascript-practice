/*var train1 = ["wheat", "barley", "potato", "salt", "rocks"];
console.log(train1[0]);*/

function letterFinder(word, match){
    for (var i = 0; i < word.length; i++){
        if (word[i] == match){
            console.log("Found the", match, "at", i)
        } else {
            console.log ("---No match found at", i)
        }
    }
}

letterFinder("test","t")