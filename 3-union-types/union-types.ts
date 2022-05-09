//Union types é utilizado quando eu quero definir que uma variável/parâmetro de função ele possa
//ter um tipo, ou outro tipo

function exibirNota(nota:number | string){ // é necessário utiliza o | 
   console.log(`A nota é ${nota}`);
}
exibirNota("10");
exibirNota(10);