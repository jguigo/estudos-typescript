import { applyMixins } from "./mixin/applyMixin";

//o mixin via entrar quando quisermos herdar mais de um classe. Utilizando apenas o Extends conseguimos herdar apenas de uma classe!
class Automovel {
   ligar(): void {
      console.log("AUTOMOVEL LIGADO COM SUCESSO!");
   }

   desligar(): void {
      console.log("DESLIGANDO AUTOMOVEL");
   }
}

class Especficacao {
   descricao: string;

   constructor(descricao: string) {
      this.descricao = descricao;
   }
}

class Carro {
   nome: string;

   constructor(nome: string) {
      this.nome = nome;
   }
}

interface Carro extends Automovel, Especficacao {} //aqui é onde a 1ª parte do mixin vai acontecer!!!

applyMixins(Carro, [Automovel, Especficacao]);

const uno = new Carro("Uno 1.0");
console.log(uno);
uno.ligar();
uno.desligar();

uno.descricao = 'Uno enferrujado!'
console.log(uno.descricao)