interface NovoProduto<V> {
   //generic v
   nome: string;
   preco: V;

   formatar(valor: V): string;
}

// type NovoProduto<V> = { //generic v
//    nome:string,
//    preco: V
// }

//funciona tanto pra generic como type alies

const arroz: NovoProduto<number> = {
   //tipo do generic v
   nome: "Arroz branco",
   preco: 1500,
   formatar(valor: number): string {
      let valorFormatado = valor.toLocaleString(
         "pt-BR",

         {
            style: "currency",
            currency: "BRL",
         }
      );

      return valorFormatado;

   },
};

console.log(arroz);

console.log(arroz.formatar(1500));
