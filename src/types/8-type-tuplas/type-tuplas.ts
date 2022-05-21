// Tupla não existe no JS

let aluno: [string, number];

aluno = ['Larissa', 10];

aluno.push('Guilherme', 10); //eu consigo adicionar mais elementos desta forma
// aluno.push(10, 'Guilherme'); // esse ultimo funciona também, porque eu estou passando números e strings

console.log(aluno);

let statusPedido: [string, string, string];
statusPedido = ["Em produção", "Saiu pra Entrega", "Pedido Entregue"];

console.log(statusPedido);

//um ultimo exemplo é que podemos utilizar um spread operator!
let testeSpreadTupla: [number, string, boolean, ...string[]]; // utilizando o ...string[] dentro do tuple eu estou indicando que o resto do meu tuple
                                                              // a partir do quarto elemento vai ser do tipo string.