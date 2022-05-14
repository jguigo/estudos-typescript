class Carro {
   private velocidadeAtual: number = 0;

   constructor(
      public marca: string,
      public modelo: string,
      private velocidadeMax: number = 220
   ) {}

   private alterarVelocidade(delta: number) { //metodos também pode ser private
      const novaVelocidade = this.velocidadeAtual + delta;

      if(novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMax){
         this.velocidadeAtual = novaVelocidade;
      } else{
         this.velocidadeAtual = delta > 0 ? this.velocidadeMax: 0
      }

   }

   acelerar() {
      this.alterarVelocidade(5);
   }

   frear() {
      this.alterarVelocidade(-5);
   }
}

//Herança!

class Camaro extends Carro {

   private turbo: boolean = false;

   constructor(public cor: string){
      super('Chevrolet', 'Camaro', 500);
   }

   ligarTurbo(){ //adicionou um novo método.
      this.turbo = true;
   }

}

const camaro = new Camaro('Amarelo');
camaro.ligarTurbo();


class Rapido extends Camaro{


   constructor(){
      super('verde'); //a henraça da herança vai herdar todas as propriedades de carro, mas eu tenho que 
   }
}

const rapido = new Rapido();
rapido.acelerar