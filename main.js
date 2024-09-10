let age = 17;
if (age < 17) {
    console.log("You not eligible to vote");
} else {
    console.log("You are to young to vote")
}

// Break
// for (let i = 5; i <= 9; i++) {
//     if (i == 8) {
//         break

//     }
//     console.log(i);
// }

for (let i = 5; i <= 9; i++) {
    if (i == 8) {
        continue

    }
    console.log(i);
}