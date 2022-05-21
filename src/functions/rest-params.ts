//rest params é um tipo de função que vai receber vários parâmetros, não sabemos quantos parâmetros vão ser, mas queremos tipar e tratar esse parâmetro!

function totalVendas(
   venda1: number,
   venda2: number,
   venda3: number,
   venda4: number
): number {
   const total: number = venda1 + venda2 + venda3 + venda4;
   console.log(total)
   return total;
}

totalVendas(10,30,40,50)

// e se fossem 50 parâmetros? como fariamos?!

// é ai que o rest-params entra! --> funciona tipo o spread operator! kk
function totalVendas2(...vendas: number[]): void{ //então dizemos que ele esta esparando um array de n elementos do tipo number!
   const quantidadeVendas: number = vendas.length
   let total: number = 0;
   vendas.forEach((a:number) => total += a);
   console.log(`Você fez ${quantidadeVendas} vendas hoje e rendeu um total de R$ ${total}`);

}

totalVendas2(10,20,30,40);