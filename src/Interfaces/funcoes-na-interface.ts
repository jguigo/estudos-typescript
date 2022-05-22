interface ICursoProps {
   id: string;
   nome: string;
   preco: number;

   //definir apenas a funcao e oque ele deve esperar e retornar!
   promocao: (preco: number) => void; //é uma método, mas não é visto como método e sim parâmetro
   promocao2(preco: number): void; //é um método!
   //a ideia mesmo é que eu estou dizendo que ele vai ter uma função que recebe um number no parâmetro e retorna um void!
}

function mostraPromocao(preco: number): void {
   console.log(`Promoção no curso por apenas: R$ ${preco}!`);
}


const novoCurso: ICursoProps = {
   id: "1",
   nome: "Curso asdsadasd",
   preco: 750,
   promocao: mostraPromocao,
   promocao2: mostraPromocao
}
// console.log(novoCurso)
// novoCurso.promocao(350);
// novoCurso.promocao2(400);


interface ISomaProps{
   (valor1:number, valor2:number): number;
}

let somaNumeros: ISomaProps = (valor1:number, valor2:number): number => {
   console.log(`RESULTADO ${valor1+valor2}`);
   return valor1+valor2;
}

const resultadoss = somaNumeros(10, 20);
console.log(resultadoss);