import chalk from "chalk";
import randomNumber from "./randomNumber.js";

const luckyNumber = randomNumber(2,12);
const firstNumber = randomNumber(1,6);
const secondNumber = randomNumber(1,6);
const sum = firstNumber + secondNumber;


console.log(`Seu número da sorte é:` + chalk.blue(luckyNumber));

console.log("Jogando dados...");

setTimeout(() => {
    console.log(`Você tirou ${firstNumber} no primeiro dado`)
}, 2000
)

setTimeout(() => {
    console.log(`Você tirou ${secondNumber} no segundo dado`)
}, 4000
)

setTimeout(() => {
    if(firstNumber === secondNumber || sum === luckyNumber ){
        console.log(chalk.green("Você Ganhou!"))
    } else {console.log(chalk.red("Você Perdeu!"))}
    
}, 5000
)

