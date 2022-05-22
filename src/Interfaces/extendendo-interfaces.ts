//extender interfaces seria herdar recursos de uma outra interface

/* 
   Vamos supor que temos um jogo e esse jogo pode ter uma dlc...
*/

interface IJogoProps {
   readonly id: string;
   nome: string;
   descricao: string;
   plataforma: string[];
}

const left4dead: IJogoProps = {
   id: "123",
   nome: "Left 4 Dead",
   descricao: "Jogo de ação, Tiro, FPS, Zumbi",
   plataforma: ["PC", "PS5"],
};

// console.log(left4dead);

// interface IDLC extends IJogoProps { // IDLC está herdando as caracteristicas do IJogoProps
//    novoConteudo: string[];
// }

// const left4deadDLC: IDLC = {
//    id: "90",
//    nome: "Left 4 Dead - Novos mapas",
//    descricao: "4 novos mapas para jogar",
//    plataforma: ["PC", "PS5"],
//    novoConteudo: ["Mapa1","Mapa2","Mapa3","Mapa4","Medalhas", "Skins"]
// }

// console.log(left4deadDLC);

interface IDLC extends IJogoProps { // IDLC está herdando as caracteristicas do IJogoProps
   jogoOriginal: IJogoProps;
   novoConteudo: string[];
}

const left4deadDLC: IDLC = {
   id: "90",
   nome: "Left 4 Dead - Novos mapas",
   descricao: "4 novos mapas para jogar",
   plataforma: ["PC", "PS5"],
   novoConteudo: ["Mapa1", "Mapa2", "Mapa3", "Mapa4", "Medalhas", "Skins"],
   jogoOriginal: left4dead
}
