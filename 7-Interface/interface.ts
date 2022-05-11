//Interface não existe no Javascript, é utilizada pra tipar alguns dados por exemplo:

interface Usuario {
   nome: string,
   email: string,
   address?: string //lembrando que quando colocamos o ? significa que ele fica como opcional!
}
//essa interface funciona como um type, muitos projetos preferem utilizar interface a usar tipos... A própria documentação recomenda que seja utilizado
//mais interface do que type-alias

function getUser(): Usuario { //então eu estou dizendo que aqui ele vai me retornar um Usuário!
   return {
      nome: "Guilherme",
      email: "guilherme@email.com"
   }
};

function setUser(usuario: Usuario){ //aqui eu estou dizendo que ele vai recerber um tipo usuário!
   // ...
}

// As interfaces vão ser muito utilizadas como com as classes