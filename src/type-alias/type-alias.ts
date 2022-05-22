//sem type alias
// function acessar(uuid: string|number|null, nome: string){
//    console.log(`ID: ${uuid} - Bem vindo ${nome}`);
// }

// function logUsuario(uuid: string | number | null){
//    console.log(`Conta referente ao UUID: ${uuid}`);
// }

// acessar(123, "Paulo`");

// acessar("asd123", "Larissa");

// logUsuario('123asd');

//com type-alias
type Uuid = number | string | null; //é como se eu "criasse" um type!

function acessar(uuid: Uuid, nome: string) {
   console.log(`ID: ${uuid} - Bem vindo ${nome}`);
}

function logUsuario(uuid: Uuid) {
   console.log(`Conta referente ao UUID: ${uuid}`);
}

// acessar(123, "Paulo`");

// acessar("asd123", "Larissa");

// logUsuario('123asd');

type Moedas = "BRL" | "EUR" | "USD" | "BTC"; //consego fazer com que ele aceito só um tipo específico de dados e isso é muito
                                             //bom.

function comprarItem(moeda: Moedas) {
   console.log(`Comprando com a moeda: `, moeda);
}

comprarItem("BRL");
comprarItem("BTC");
