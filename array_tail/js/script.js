let len = parseInt(prompt("Quanti numeri vuoi generare?"));

let numbers = [];

for(i = 0; i < len; i++)
    numbers[i] = Math.floor(Math.random() * 100) + 1;

console.log(numbers);

for (let i = 0; i < 5; i++){
    let index = numbers.length - i - 1;
    if (index >= 0) console.log(numbers[index]);
    else console.log("Meno numeri di 5");
}

let repet = parseInt(prompt("Quanti numeri vuoi stampare?"));

for (let i = 0; i < repet; i++) console.log(numbers[i]);