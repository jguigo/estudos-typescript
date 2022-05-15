//Type-alias lembra um pouco Struct do C, mas só para os types kk
//Ele tem a ideia de para o caso de eu ter vários tipos, criar um módelo que vai representar todos aqueles tipos, por exemplo:

const funcionarios: string[] | number | boolean = [
   "teste1",
   "teste2",
   "teste3",
];
//como podemos ver temos 3 tipos de possibilidade de dados, mas escrever isso sempre, da um pouco de trabalho
//então eu posso fazer um type novo que representa esses 3 tipos, exemplo:

type Funcionarios = string[] | number | boolean;
const funcionarios2: Funcionarios = ["teste1", "teste2", "teste3"];

//e eu posso ir aumentando a complexidade disso, por exemplo:
type Funcionario = {
   nome: string; //';' funciona quando a gente passa um type Objeto?! WTF?!
   sobrenome: string;
   dataNascimentos: Date;
};

const funcionarios3: Funcionario[] = [
   {
      nome: "Guilherme",
      sobrenome: "Melo",
      dataNascimentos: new Date(),
   },
   {
      nome: "Larissa",
      sobrenome: "Melo",
      dataNascimentos: new Date(),
   },
];

function tratarFuncionarios(funcionarios3: Funcionario[]) {
   for (let funcionario of funcionarios3) {
      console.log("Nome do funcionário:", funcionario.nome);
   }
}

//forEach funcionaria também! Legal
funcionarios3.forEach((a) => {
   console.log(a.nome);
});
