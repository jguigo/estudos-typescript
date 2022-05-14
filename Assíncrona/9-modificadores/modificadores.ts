class Carro {
   private velocidadeAtual: number = 0;

   constructor(
      public marca: string,
      public modelo: string,
      private velocidadeMax: number = 220
   ) {}

   private alterarVelocidade(delta: number) { //metodos também pode ser private

      //Validações de aceleração e frenagem
      // this.velocidadeAtual = xxx

   }

   acelerar() {
      this.alterarVelocidade(5);
   }

   frear() {
      this.alterarVelocidade(-5);
   }
}

const carro = new Carro("Chevrolet", "Prisma", 250);
carro.acelerar();