
class Data {
   public dia: number; //por default ele já como uma chave pública!
   mes: number; //mas posso deixar explícito!
   ano: number; //aqui eu indico que ano é uma chave privada!

   constructor(dia:number, mes:number, ano:number = 1994){ //em ano, isso aqui vai ajudar a colocar um valor default caso nem um valor seja passada como parâmetro! 
      this.dia = dia;
      this.mes = mes;
      this.ano = ano;
   }
}

const data = new Data(1, 1, 2020)
console.log(data.dia);

const data2 = new Data(1,1)