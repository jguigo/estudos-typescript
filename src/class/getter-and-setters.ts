class Jogo {
   private servidor: string;
   private id: string = "123123";

   constructor(servidor: string) {
      this.servidor = servidor;
   }

   //Metodo GET = Para pegar o valor ao inves de acessar diretamente a propriedade
   get getServidorIP(){
      console.log("==== Metodo get ====")
      return this.servidor;

   }
   //Metodo SET = Passar / alterar algum atributo.
   set setServidorIP(novoIP: string){
      this.servidor = novoIP;
   }

}

const GTA5 = new Jogo("192.391.4.12");
console.log(GTA5.getServidorIP);

GTA5.setServidorIP = "192.391.4.21"

console.log(GTA5.getServidorIP);