//Apenas pode ler e não alterar!

interface IProdutoProps {
   readonly id: string; //vai fazer com que esse valor nunca possa ser alterado!!!
   nome: string;
   descricao: string;
}

let produto1: IProdutoProps = {
   id: "1",
   nome: "Mouse",
   descricao: "Mouse RGB"
}

// produto1.id ='123'; //não consigo alterar por conta do readonly!!!

console.log(produto1);
