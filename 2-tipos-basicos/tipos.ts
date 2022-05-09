// Boolean
const contaPaga: boolean = false;

// Number
const idade: number = 10;
const valor: number = 10.5;
//No TS não existe essa distinção dos tipos de number, como no Java por exemplo que temos INT e DOUBLE.
//TS teria uma tipagem de nível médio(? fica ai meu questionamento...)

// String
const nome: string = "Guilherme";

//Array
const idades: number[] = [10, 21, 32, 45];
const idades2: Array<number> = [10, 21, 32, 45]; //qual dos dois é o mais interessante de utilizar?

//Tuple
let jogadores: [string, number, boolean];
jogadores = ["guilherme", 10, true];

// Enum
enum StatusAprovacao {
   Aprovado = "001",
   Pendente = "002",
   Rejeitado = "003",
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao);

//Any
//pode ser qualquer coisa, mas geralmente não é utilizado.

const retornodaApi: any[] = [123, "guilherme", false];
const retornoDaApi2: any = {
   //...
};

// Void
function printarNaTela(msg: string): void {
   console.log(msg);
}

// Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object -> não primitivo
function criar(objeto: object) {
   //...
}
criar({}); //estou passando um objeto, então não deve dar muitos problemas!
// criar("teste"); //da erro! porque o "teste" não é um objeto!

//Never
function loopInfinito(): never {
   while (true) {}
}

function error(mensagem: string): never {
   throw new Error(mensagem);
}

function falha(){
   return error("algo falhou");
}
//podemos perceber que nas três situações a execução acaba por não sair de dentro da função!
//e pra função falha -> seria essa a herança?