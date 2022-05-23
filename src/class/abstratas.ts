//Classe abstrata é um conceito que permite a gente criar uma classe que representa alguns métodos e atributos, então ela vai funcionar como
//um modelo para outras classes!

type DadosConta = {
   nome: string;
   numero: string;
   endereco: string;
};

abstract class ContaBanco {
   abstract abrirConta(dados: DadosConta): boolean;
}

class PessoaFisica extends ContaBanco {
   abrirConta(dados: DadosConta): boolean {
      console.log("====================");
      console.log(`Nova conta P. Física craida com sucesso ${dados.nome}`);
      console.log("====================");
      return true;
   }
}

const joana = new PessoaFisica();

joana.abrirConta({
   nome: "Joana Silva",
   numero: "1029-x",
   endereco: "Rua 21, bairro graças",
});

class PessoaJuridica extends ContaBanco {
   abrirConta(dados: DadosConta): boolean {
      console.log("====================");
      console.log(`Nova conta P. Jurídica craida com sucesso ${dados.nome}`);
      console.log("====================");
      return true;
   }
}

const larissa = new PessoaJuridica();

larissa.abrirConta({
   nome: "Ana Larissa",
   numero: "1029-x",
   endereco: "Rua 21, bairro graças",
});
