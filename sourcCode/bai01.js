//  JAVASCRIPT FUNDAMENTALS PART 1 



// CODING CHALLENGE 1 
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76m tall.

// 1. Store Mark's and John's mass and height in variables
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

// 2. Calculate both their BMIs using the formula (you can even implement both versions)
let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;

// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
console.log("------------01-------");


// Chalelnge 2
// Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"


if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
console.log("----------02--------");

//Challenge 3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// 1. Calculate the average score for each team, using the test data below
let dolphinsAverage = (96 + 108 + 89) / 3;
let koalasAverage = (88 + 91 + 110) / 3;
console.log(dolphinsAverage, koalasAverage);

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
if (dolphinsAverage > koalasAverage) {
    console.log('Dolphins win the trophy 🏆');
}
else if (koalasAverage > dolphinsAverage) {
    console.log('Koalas win the trophy 🏆');
}
else if (dolphinsAverage === koalasAverage) {
    console.log('Both win the trophy!');
}

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
let dolphinsAverage1 = (97 + 112 + 101) / 3;
let koalasAverage1 = (109 + 95 + 123) / 3;
console.log(dolphinsAverage1, koalasAverage1);
if (dolphinsAverage1 > koalasAverage1 && dolphinsAverage1 >= 100) {
    console.log('Dolphins win the trophy 🏆');
}
else if (koalasAverage1 > dolphinsAverage1 && koalasAverage1 >= 100) {
    console.log('Koalas win the trophy 🏆');
}
else if (dolphinsAverage1 === koalasAverage1 && dolphinsAverage1 >= 100 && koalasAverage1 >= 100) {
    console.log('Both win the trophy!');
}
else {
    console.log('No one wins the trophy 😭');
}

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
let dolphinsAverage2 = (97 + 112 + 101) / 3;
let koalasAverage2 = (109 + 95 + 106) / 3;
console.log(dolphinsAverage2, koalasAverage2);

if (dolphinsAverage2 > koalasAverage2 && dolphinsAverage2 >= 100) {
    console.log('Dolphins win the trophy 🏆');
}
else if (koalasAverage2 > dolphinsAverage2 && koalasAverage2 >= 100) {
    console.log('Koalas win the trophy 🏆');
}
else if (dolphinsAverage2 === koalasAverage2 && dolphinsAverage2 >= 100 && koalasAverage2 >= 100) {
    console.log('Both win the trophy!');
}
else {
    console.log('No one wins the trophy 😭');
}
console.log("------------03-------");

// Challenge 4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary operator!)
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
console.log("-----------04-------");


// PART 02
// Challenge 5
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

// 2. Use the function to calculate the average for both teams
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
console.log(avgDolphins, avgKoalas);

// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins...');
    }
}

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
checkWinner(avgDolphins, avgKoalas);
checkWinner(576, 111);

// 5. Ignore draws this time
checkWinner(111, 111);
console.log("-----------05--------");
