//Pripriedade Decorator. -> pode ser utilizado para fazer validações!

function validaNome(tamanho: number) {
   //quando estamos utilizando em pripriedades, nosso decorator recebe dois parâmetros!
   //target => construtor
   //key => propriedade
   return (target: any, key: string) => {
      let valor = target[key];

      const getter = () => valor;

      const setter = (value: string) => {
         if (value === "") {
            console.log("Você não pode deixar em branco");
         } else if (value.length < tamanho) {
            console.log("você não pode criar com esse tamnho");
         } else {
            valor = value;
         }
      };

      Object.defineProperty(target, key, {
         get: getter,
         set: setter,
      });
   };
}

class Game {
   @validaNome(5)
   nome: string;

   @validaNome(15)
   titulo: string;

   constructor(nome: string, titulo: string) {
      this.nome = nome;
      this.titulo = titulo;
   }
}

const jogo1 = new Game("Final Fantasy XIV", "Jogo Online muito legal!");

console.log(jogo1.nome);
console.log(jogo1.titulo);
