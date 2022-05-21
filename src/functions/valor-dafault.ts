//como deixar o valor por default ou opcional.

function cadastro(email: string, senha: string, nome?: string): void {
   //nos valores que possam ser opcionais eu coloco uma "?" isso faz com que ele possa
   //ter um valor ou ser undefined, logo ele é obrigado de ser preenchido!
   let data = { email, senha, nome };

   console.log(data);
}

cadastro("email@mail.com", "123123", "Larissa");
cadastro("email@mail.com", "123123");
//é possível notar que as duas formas são viáveis!

//Para passar o valor por default pode fazer então:

function cadastro2(
   email: string,
   senha: string,
   nome = "Aluno",
   idade?: number
): void {
   //para o caso no nome, eu já atribui um valor como dafault, ele não seja enviado como parâmetro, então vai ser assumido o nome = "Aluno"!
   let data = { email, senha, nome };

   console.log(data);
}

cadastro2("email@mail.com", "123123"); //aqui ele atribui o nome de 'Aluno'
cadastro2("email@mail.com", "123123", "Larissa");
cadastro2("email@mail.com", "123123", "", 26);



//loja aberta ou fechada!

function cadastroLoja(nome:string, email:string, status:boolean = false):boolean{
   console.log(nome);
   return status;
}

cadastroLoja("burgao", "bk@email.com");
cadastroLoja("burgao", "bk@email.com", false);
cadastroLoja("burgao", "bk@email.com", true);