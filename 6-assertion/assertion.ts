// Assertion é bem similar ao casting, quando utilizamos o assertion queremos saber qual o tipo de dado que ela é naquele momento.
//Por exemplo:

//se eu tenho um número atribuido a uma variável do tipo any e quero convertelo para string, eu preciso especificar qual o tipo
//de dado ele é naquele momento.
const minhaIdade: any = 23;
minhaIdade.toString() //nesta situação trivial, ele não faz com que meu autocomplete do toString aconteça, porque como any é qualquer coisa
//ele não sabe que o que ele tem aqui é um number.

// e é ai que o assertion entra!
(minhaIdade as number).toString() // utilizando o "as" seguido do tipo, eu consigo dizer que naquele momento qual o tipo de minha variável!

//existem outras formas de fazer que daria o mesmo resultado seria utilizando o "<type>MinhaVariável", Exemplo:
<number>minhaIdade.toString() //aqui ta dando erro, mas ta tudo certo...

//um terceiro método seria utilizando a interface.
Number(minhaIdade).toString();


//Uma coisa que talvez seja uma boa, seria trocar o uso do any pelo unknown, porque ele te força a sempre especificar o tipo!