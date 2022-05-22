//Interface é um padrão de dados de um objeto que você precisa seguir!
//Como se fosse um contrato que garanta que quem tiver o contrato tenha que seguir aquele padrão que foi definido!

// let loja: object;

// loja = { // aqui eu simplesmente tenho um tipo objeto sem regras ou algo do tipo
//    nome: 'bk',
//    endereco: 'Rua 2',         //neste caso meu objeto tem 3 propriedades, mas ele poderia ter quantos ele quiser
//    status: true               //pois não existe nenhum padrão para que seja seguido!
// }

interface ILojaProps {
   nome: string;
   endereco: string;
   status: boolean;
}

const BurguerK: ILojaProps = {
   nome: "Burguer K",
   endereco: "Rua logo ali",
   status: true,
   // promocao: "Burguer Duplo" //não me permite por, pois não esta no contrato do ILojaProps
};

// console.log(BurguerK);

//funções
//sem usar interface
function novaLoja(nome: string, endereco: string, status: boolean): void {
   console.log(`Loja ${nome} criada com sucesso`);
   console.log(`Endereço da loja ${endereco}`);
   console.log(`Status da loja: ${status}`);
}

// novaLoja('MCdonalds', 'Rua rua', true)

//com interface
function novaLojaInterface({nome, endereco, status}:ILojaProps){ //quando eu coloco interface, ela espera recerber um objeto!
   console.log(`Loja ${nome} criada com sucesso`);
   console.log(`Endereço da loja ${endereco}`);
   console.log(`Status da loja: ${status}`);
}

novaLojaInterface({nome: 'Subway', endereco: 'Minha rua', status:true});


//Interfaces também podem ter multiplas declarações! Por exemplo:
//Interfaces também podem ter multiplas declarações! Por exemplo:
//Interfaces também podem ter multiplas declarações! Por exemplo:

interface IMuitasDeclaracoes{
   prop1: string;
}

interface IMuitasDeclaracoes{
   prop2: string;
}

interface IMuitasDeclaracoes{
   prop3: string;
}

const testeInterface: IMuitasDeclaracoes = {
   prop1: "", //com isso podemos perceber que além dela ter multiplas declarações, ela vai unir tudo no mesmo nome! 
   prop2: "",
   prop3: ""
}
