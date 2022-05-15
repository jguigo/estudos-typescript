//quando uma variável é declarada e eu inicio ela com um valor já tribuido, então eu não preciso adicionar um tipo, porque TS
//já infere que esse valor é de algum tipo.
let altura = 1.96;
let palavra = "teste";

altura = null;
palavra = null;
//quando eu tento atribuir o valor nulo para essas variáveis, o ts não deixa por conta de uma configuração do tsconfig chamada
//de "strictNullChecks" ela impede que eu deixa alguma coisa nula!

//para que seja possível que ele aceite o tipo nulo, então eu fazer um union com "nulo", exemplo
let altura2: number | null = 1.96
let palavra2: string | null = "teste";

altura2 = null;
palavra2 = null;

//Uma outra situação poderia ser:
type Contato = {
   nome: string,
   telefone1: string,
   telefone2: string | null, //eu quero que essa segunda opção seja opcional.
}
const contato: Contato = {
   nome: "teste",
   telefone1: '12346789',
   telefone2: null
}

//Para o caso de eu dizer que o atribudo telefone2 é realmente opcional, eu poderia utilizar "?" depois de declarar o atributo.
//Com isso eu estou dizendo que o campo vai ser opcional!
type Contato2 = {
   nome: string,
   telefone1: string,
   telefone2?: string,
}

const contato2: Contato2 = {
   nome: "teste",
   telefone1: '12346789',
}
//com isso tanto faz se eu declado ou não o telefone 2!