class Conta{
   //private: Ele não pode ser acessado ou modificado fora da classe
   private limite: number = 450;

   private aumentarLimit(quantidade: number):void{
      if(quantidade < 1000){
         this.limite = quantidade;
         console.log(`Agora seu limite é ${this.limite}`)
      }
      else{
         console.log("Infelizmente seu limite foi reprovado!");
      }
   }

   protected solicitarLimite(quantidade:number){
      return this.aumentarLimit(quantidade);
   }


   solicitarLimiteApp(estaAutenticado: boolean, quantidade:number):void | boolean{
      if(estaAutenticado){
         this.aumentarLimit(quantidade);
      }
      else{
         return false
      }
   }
}

class BancoAlifiado extends Conta{
   

   limiteAfiliado(){
      return this.solicitarLimite(950);
   }
}


const fulano = new Conta();

const joao = new BancoAlifiado();

joao.limiteAfiliado();