/*
   Generics ->
   >>> Permite criar estruturas que serão adaptaveis a varios tipos de dados
   (Ajudnado a reaproveitar melhor nosso código e deixo mais flexível)

   Pordemos usar os generics:
   Funções | interfaces /types | classes
   

   Para utilizar o generics eu faço uso do "<>"
*/

/*
   Alguns padrões que você vai encontrar:
   S => State;
   T => Type;
   K => key;
   V => value;
   E => element;
*/

function repositorio<T extends string | number>() { //aqui eu aplico que vai ser um generic
   let dados: T;//saio atribuindo esse tipo generic pra os dados

   function getDados() {
      return dados;
   }

   function setDados(novoDado: T) {//saio atribuindo esse tipo generic pra os dados

      dados = novoDado;
   }

   return { getDados, setDados };
}

const repo1 = repositorio<string | number>(); //aqui eu informal qual vai ser o meu tipo generic!
repo1.setDados(15);
repo1.setDados("15");

console.log(repo1.getDados());
