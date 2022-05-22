//pra deixar opcional funciona da mesma forma, basta utilizar o "?"

interface ICadastroProps {
   nome?: string; //opcional
   email: string;
   status: boolean;
}

const novoUsuario1: ICadastroProps = {
   nome: "Guilherme",
   email: "guilherme@email.com",
   status: false,
};
const novoUsuario2: ICadastroProps = {
   email: "guilherme@email.com",
   status: false,
};

console.log(novoUsuario1);
console.log(novoUsuario2);

function newUsuarioOpcional({ nome, email, status }: ICadastroProps): void {
   console.log(nome);
}
function newUsuarioOpcional2(user: ICadastroProps): void { //pode ser utilizado dessa forma também
   console.log(user.nome);
}

newUsuarioOpcional({ nome: "ana", email: "ana@ana.com", status: false });
newUsuarioOpcional({ email: "ana@ana.com", status: false });
