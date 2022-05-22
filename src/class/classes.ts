type Status = "ABERTO" | "FECHADO";

class Loja {
   //atributos da nossa classe ---- caracateristicas!
   nome: string;
   categoria: string;

   constructor(nome: string, categoria: string) {
      //esse parâmetros não fazem relação com os atributos
      this.nome = nome; //aqui dentro quando utilizamos this.atributo é que fazer a relação aos nossos atributos!
      this.categoria = categoria;

      console.log("Loja criada com sucesso!!!");
   }

   criarLoja(): void {
      console.log(`Loja ${this.nome}, catedogia: ${this.categoria}`);
   }

   emitirPedido(mesa: number, ...pedidos: string[]): string {
      pedidos.map((pedido) => console.log(`Saindo novo pedido: ${pedido}`));
      return `Pedido na mesa: ${mesa}`;
   }

   mudarStatus(status:Status): void{
      if(status ==="ABERTO"){
         console.log("LOJA ABERTA COM SUCESSO!");
      } else{
         console.log("LOJA FECHADA!");
      }
   }
}

const redBurguer = new Loja("Red Burguer", "Lanches");

redBurguer.criarLoja();

console.log(redBurguer.emitirPedido(48, "Suco 48", "Agua", "Burguer", "milk"));

redBurguer.mudarStatus("FECHADO");