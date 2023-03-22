
// variabile per aggiungere il valore
let value = "";

for (let i = 1; i < 101; i++) {
    value = i;

// dichiaro la costante con i multipli di 3 dando un valore "Fizz"
    if(!(i % 3)){
        value = 'Fizz';
    }
// dichiaro la costante con i multipli di 5 dando un valore "Buzz"
    if(!(i % 5)){
        value = 'Buzz';
    }
// dichiaro la costante con i multipli di 3 e 5 dando un valore "FizzBuzz"
    if(!(i % 3) && !(i % 5)) {
        value = 'FizzBuzz';
    }
    console.log(value);
}

