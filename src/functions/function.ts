// function login(username: string): boolean | string {
//    let message: string = "Bem vindo, " + username;
//    console.log(message);

//    return username;
// }

// const retornoFuncao = login("Larissa");
// console.log(retornoFuncao);


let n1: number = 10;
let n2: string = "25";
let n3: number = 25;

function soma(valor1:number, valor2:number): string{
   let soma: number = valor1 + valor2;

   if(soma > 20){
      return "SOMA MAIOR QUE 20"
   }
   else{
      return "SOMA MENOR QUE 20"
   }
}

// soma(n1,n2); //percaba como a tipagem salva muito!!!! ele simplesmente me informa um erro porque o n2 é uma string e a função espera 2 números!!
soma(n1,n3); //agora ele aceita meus valores!

