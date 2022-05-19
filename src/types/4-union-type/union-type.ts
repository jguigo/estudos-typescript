let userId: number | string; //utilizamos quando uma váriável puder receber mais de um tipo! Então falamos que ele pode ser string ou(pipe |) number

userId = "123";

console.log(typeof userId);

//claro que pode ter vários tipos ao mesmo tempo:
let teste: number | string | boolean;

//Porém é bom ter um pouco de cuidado, porque meio que pode estar fugindo da idea de tipos, afinal se utilizarmos todos os tipos
//meio que o typescript vai perdendo sua tipagem...
