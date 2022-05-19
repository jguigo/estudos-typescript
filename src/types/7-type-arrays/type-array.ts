let numeros1: number[]; //desta forma eu estou informando que vai minha variável vai ser um array de números! Existe uma forma melhor de dizer que
//é utilizando a Interface Array
let numeros2: Array<number>; //é mais fácil de ler e identificar!

numeros1 = [1, 2, 3, 4, 5];
numeros2 = [1, 2, 3, 4, 5];

numeros1.push(12321);
numeros2.push(12321);

let filmes1: string[];
let filmes2: Array<string>;

filmes1 = ["filme 1", "filme 2"];
filmes2 = ["filme 1", "filme 2"];

//porem eu consigo ter vários tipos para arrays utilizando o union types:
let unionTypes1: (number|string)[]; 
//ou
let unionTypes2: Array<number | string>;
