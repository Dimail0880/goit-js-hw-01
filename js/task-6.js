let input;
let total = 0;

do {
    input = prompt("Введите число");

    let userInput = Number(input);

    total += userInput;
} while (input !== null);

alert(`Общая сумма числел равна ${total}`);