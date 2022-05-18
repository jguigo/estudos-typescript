//1
function login(identification: string | number, password: string): boolean {
   const identificationMock: string = "alo@gama.com";
   const passwordMock: string = "aloSenha1";

   if (identification === "alo@gama.com" && password === "aloSenha1") {
      return true;
   }
   return false;
}

//2
let produto: [string, number, number, number?];
produto = ["texto", 123, 123, 123];

const produto2: [string, number, number, number?] = ["geladeira frostfree", 13123, 132131321.31];

//3
type List = [string, number, number, number?];

function listProducts(lista: List){

}