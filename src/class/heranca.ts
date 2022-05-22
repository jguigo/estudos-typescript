//Herança > quando uma classes herdar os atributos e metodos de outra classe!

class Usuario{
   nome: string;
   email: string;

   constructor(nome: string, email: string){
      this.nome = nome;
      this.email = email;
   }
}

//herdando tudo do usuário, então a palavra chave para herdar é "extends"
class Admin extends Usuario{
   cargo: string;
   nivel: number;

   constructor(nome:string, email:string, cargo:string, nivel: number){ //eu preciso colocar os atribuos da classe pai tmb!
      //eu preciso passar um super pra saber o que ele vai herdar da classe pai(Usuario)!
      super(nome, email);//sempre que herdar ele precisa ser o primeiro item!

      this.cargo = cargo;
      this.nivel = nivel;
   }
}

const usuario1 = new Admin("Larissa", "larissa@email.com", "Front-end", 2);

console.log(usuario1)