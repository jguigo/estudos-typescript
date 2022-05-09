"use strict";
// Boolean
const contaPaga = false;
// Number
const idade = 10;
const valor = 10.50;
//No TS não existe essa distinção dos tipos de number, como no Java por exemplo que temos INT e DOUBLE.
//TS teria uma tipagem de nível médio(? fica ai meu questionamento...)
// String
const nome = "Guilherme";
//Array
const idades = [10, 21, 32, 45];
const idades2 = [10, 21, 32, 45]; //qual dos dois é o mais interessante de utilizar? 
//Tuple
let jogadores;
jogadores = ["guilherme", 10, true];
// Enum
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
const statusDaAprovacao = StatusAprovacao.Aprovado;
console.log(statusDaAprovacao);
