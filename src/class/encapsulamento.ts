/* 
      Quando falamos de encapsulamento, estamos falando de modificadores de acesso!
      Existem basicamente 4 tipos de modificadores de acesso, sendo eles:

      public -> É o default que vem para atributos, metodos, constructors...
      private -> Só pode ser acessado e modificado pela classe que criou ele!
      protected -> mais maleavável, podendo ser acessado dentro da classe que o criou como da classe que herdou podendo também ser              
                   modificandada dentro da classeq ue ta herdando também!
      readonly -> só é aplicado em atributos! Não posso modificar ele de forma alguma! Apenas ler ele.
*/

class Usuarioo {
   protected id: number; //eu só posso acessar ele dentro da classe pai ou filha!
   public nome: string;
   public email: string;

   constructor(id: number, nome: string, email: string) {
      this.id = id;
      this.nome = nome;
      this.email = email;
   }
}

class Adminn extends Usuarioo {
   public cargo: string;
   public nivel: number;

   constructor(
      id: number,
      nome: string,
      email: string,
      cargo: string,
      nivel: number
   ) {
      super(id, nome, email);

      this.cargo = cargo;
      this.nivel = nivel;
   }

   protected mudarCargo(cargo: string): void {
      console.log("ALTERANDO CARGO PARA", cargo);
      console.log(`ID DO USUÁRIO: `, this.id);
   }

   acessarAdmin(cargo: string): void {
      this.mudarCargo(cargo);
   }
}

const usuario2 = new Adminn(
   123,
   "Guilherme",
   "guilherme@email.com",
   "Backend",
   5
);

usuario2.acessarAdmin("Design");
