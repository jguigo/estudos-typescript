function somar(n1, n2) {
   return n1 + n2;
}
const n1 = "10";
const n2 = 5;

const resultado = somar(n1, n2);
console.log(resultado); // 105

//O resultado da soma foi 105, porque acabou por fazer uma contatenação... 
//Isso acontece porque o JavaScript possúi uma tipagem dinâmica e acaba por aceitar qualquer coisa, sem se importar com o tipo!
//A mesma situação utilizando o TypeScript nunca aconteceria!