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
//similar to a while loop, but the do block is seperated from code block
let n = 0
do {
    console.log("do loop", n);
    n++;
}
while (n < 5)