// FOR loop
for (var i = 1; i <= 3; i++){
    console.log(i)
}
console.log("Go")

for (var i = 10; i > 0; i--){
    console.log(i)
}
console.log("Happy New Year")

//WHILE loop
var counter = 3;
while (counter > 0){
    console.log(counter);
    counter = counter - 1;
}
console.log("Happy New Year")

// NESTED loop
for (var year = 2023; year < 2025; year++){
    console.log(year);
    for (var month = 6; month < 9; month++) {
        console.log("------", month)
    }
}

