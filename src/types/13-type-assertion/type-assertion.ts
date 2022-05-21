//afirmando algum tipo!

let statusAtual: unknown = 1;

let mudaStatus: number = 0;

//estou afirmando que o statusAtual é um número!
mudaStatus = statusAtual as number;
mudaStatus = <number>statusAtual;
mudaStatus = Number(statusAtual);
//existem várias formas de fazer

let query: unknown = "pizza";
let searchTerm: string;
searchTerm = query as string;
searchTerm = <string>query;
searchTerm = String(query);
