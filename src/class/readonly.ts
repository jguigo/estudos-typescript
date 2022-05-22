class Pessoa {
   readonly id: string = "123";
   nome: string;
   idade: number;

   constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
   }

   mostrarID() {
      console.log(`ID>>`, this.id);
   }
}

const ana = new Pessoa("Ana Carol", 29);

console.log(ana);
ana.mostrarID();
