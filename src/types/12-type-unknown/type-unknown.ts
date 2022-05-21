
//unknown é parece com o any, porém um pouco melhor! 
let total: any;
total = 100;
total = "teste";
total = {};

//o unknown assim como o any pode ser qualquer coisa, porém quando atribuido a alguma variável, eu preciso dizer qual o tipo ele esta sendo naquele momento!
//exemplo:
let totalPedido: unknown = 15;
//o totalEntrega esta esperando receber um número não um unknown, então eu preciso dizer o tipo de valor que o unknown é naquele momento
let totalEntrega: number = totalPedido as number;
//situações que ele aceitaria numa boa um tipo unknown seria apenas se o valor esperado fosse any ou unknown