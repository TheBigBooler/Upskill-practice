//checks condition before each iteration
//the increments counter after each iteration
for (let i = 0; i < 5; i++) {
    console.log("for loop", i);
}

//while loop has conidtion only in paramaters, 
//updates counter within code block
let i = 0
while (i < 5) {
    console.log("while loop", i);
    i++;
}

//do-while loop
//similar to a while loop, but the do block is seperated from conditional block
let n = 0
do {
    console.log("do loop", n);
    n++;
}
while (n < 5)



//evens/odds
//fizzbuzz
for (i=1; i<=20; i++) {
    if(i%2){
        console.log(i + " odd")
    } else {
        console.log(i + " even")
    }
}

//array with while
const myArray = ["apple", "orange", "grape", "lemon"]

let b = 0

while(b<myArray.length) {
    console.log(myArray[b]);

    b++;
}

//do loop
let userHeight
do {
    console.log("You must be at least 5 feet tall to join this ride")
    userHeight = prompt("please enter your height")
}
while(userHeight<5);
alert("Enjoy the ride!");