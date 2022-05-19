//melhor evitar... Se for pra ficar utilizando any, era melhor utilizar o JS!

//assim como o any indica, ele pode ser qualquer coisa. Number, string, boolean, array, object! Ele aceita tudo

let test; //quando apenas declaramos um váriavel sem passar o tipo o ts vai atribuir o tipo any implicitamente!

test = 'teste';
test = 123;
test = false;

//também podemos passar de forma explícita:
let any1: any;

any1 = 'teste';
any1 = 123;
any1 = false;