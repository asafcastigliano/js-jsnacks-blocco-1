let frutta = ['banana', 'mela', 'pera', 'ciliegia', 'arancia', 'mandarino', 'cocomero', 'limone', 'fragola'];

frutta.push("pesca");

flag = false;

for(i = 0; i < frutta.length; i++)
    if(frutta[i] == "cocomero")
        flag = true;

console.log(frutta);
    
if(flag)
    console.log("Trovato! Devo solo preparare il cocktail.");
else
    console.log("Oh no, devo uscire a comprare il cocomero!");