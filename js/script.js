
const container = document.querySelector('.container');
console.log(container);

// variabile per aggiungere il valore
let value = "";

for (let i = 1; i < 101; i++) {
    value = i;
    
// aggiungo un div ad ogni giro del circuito
    const box = document.createElement('div');
// aggiungo la classe css alla constante
    box.classList.add('box');
    
    box.classList.add('skyblue');

// dichiaro la costante con i multipli di 3 dando un valore "Fizz"
    if(!(i % 3)){
        value = 'Fizz';
// associo alla box la classe CSS
        box.classList.add('green');
    }
// dichiaro la costante con i multipli di 5 dando un valore "Buzz"
    if(!(i % 5)){
        value = 'Buzz';
        box.classList.add('yellow');
    }
// dichiaro la costante con i multipli di 3 e 5 dando un valore "FizzBuzz"
    if(!(i % 3) && !(i % 5)) {
        value = 'FizzBuzz';
        box.classList.add('rose');
        box.classList.remove('green');
        box.classList.remove('yellow');
    }
    console.log(value);

    
// Aggiungo la classe css box al DOM
        container.append(box);
// Aggiungo il valore della i all'interno della classe CSS box
        box.append(value);
}
