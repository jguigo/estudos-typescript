//decorator Meotod. Ele só é chamado quando nosso método for chamado!


// function verificaPessoa(idade:number){
   //    return (target:any,key:string, descriptor: PropertyDescriptor) =>{
      //       // console.log(`Target: ${target}`);
      //       // console.log(`Key: ${key}`);
      //       // console.log(`Descriptor: ${descriptor}`);
      
      //       const metodoOriginal = descriptor.value

//       descriptor.value = function (){
   //          if(idade < 18){
      //             console.log('Estamos cadastrando como Pessoa menor de idade')
//             return metodoOriginal.apply(this)
//          }
//          else{
//             console.log("Adulto cadastrado no sistema")
//             return metodoOriginal.apply(this)
//          }
//       }
//    }
// }

//os decorator podem e devem ser exportados!
import { verificaPessoa } from "./decorators/verificaPessoa";


class Person{
   nome:string;

   constructor(nome:string){
      this.nome = nome;
   }

   @verificaPessoa(16)
   cadastrarPessoa(){
      console.log(`Bem vinda ${this.nome} ao sistema`);
   }
}


const pessoa1 = new Person('Larissa M');

pessoa1.cadastrarPessoa();