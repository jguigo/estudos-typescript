// Com o type-alias conseguir criar tipos mais poderosos, com mais informações do que os tipos primitivos!

type Info = {
   id: number;
   nome: string;
   descricao?: string;
};
const produtoInfo: Info = {
   id: 123,
   nome: "Placa de vídes",
   descricao: "Placa RTX 3080TI",
};

type Categoria = {
   slug: string;
   quantidadeProduto: number;
};

const categoria1: Categoria = {
   slug: "hardware",
   quantidadeProduto: 2,
};

type ProdutoInfo = Info & Categoria; // ProdutoInfo é a intercessão dos tipos Info e Categoria!

const novoProduto: ProdutoInfo = {
   id: 123123,
   nome: "Tecladinho",
   slug: "teclado mecanico",
   quantidadeProduto: 10,
};

console.log(novoProduto)
