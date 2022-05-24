/*
   >> DECORATORS <<
   Class
   Propriedades
   Métodos
   Parâmetros(BEM POUCO USADOS)
   GETTERS/SETTERS(BEM POUCO USADOS)

*/

//target = recebe o construtor da nossa classe!
// function logInfo(target: any){
//    console.log(target);
//    console.log("Sistema está online");
// }

// >>> Padrão factory {Fabrica} | Função que via retornar a criação do decorator.
// function logInfo(mensagem:string){
//    return (target:any) => {//esse função anônima retorna nosso decorator; O primeiro parâmetro que a gente recebe é o construtor da noss a classe
//       console.log(`${mensagem}, ${target}`)
//    }
// }

// @logInfo("Servidor está rodando!")
// class Sistema{

// }

// ====================PRATICANDO=========================

function setIpServidor(novoIp: string) {

   return (target: any) => {
      return class extends target {
         ip = novoIp;
      };
   };
   
}

@setIpServidor("192.168.50.30")
class Servidor {}

const servidor1 = new Servidor();

console.log(servidor1);
