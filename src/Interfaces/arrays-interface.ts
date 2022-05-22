


// interface ITecnologiaProps {
//    id:string;
//    nome: string;
//    slug?: string[];
//    // slug2?: Array<string>; //funciona tmb
// }

// let tecnologias1: ITecnologiaProps = {
//    id: "1123",
//    nome: "aaa",
//    slug: ['asdasd']
// }

interface ITecnologiaProps {
   id:string;
   nome: string;
   descricao?: string;
}

//herdando propriedades de outra interface
interface INomesProps{
   tecnologia: ITecnologiaProps[]; //com isso eu digo que tecnologia vai receber um array de outra interface
}

let frontend: INomesProps = {
   tecnologia: [
      {id:'1', nome: 'ReactJS', descricao: 'lib'},
      {id:'2', nome: 'VueJS'}
   ]
}

console.log(frontend);
console.log(frontend.tecnologia);