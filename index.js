const prompt = require("prompt-sync")({sigint:true});

const mod = require("./cadastro");

while(true){
  console.log(`
    1 - Cadastrar produto
    2 - Listar produtos cadastrados
    3 - Editar produtos cadastrados
    4 - Remover produco cadastrado
    5 - Sair
    `);
  let opcao = +prompt("Digite a opção desejada: ");

  switch (opcao) {
    case 1:
        mod.cadastrar();
      break;
    case 2:
        mod.listar();
      break;
    case 3:
        mod.editar();
      break;
    case 4:
        mod.excluir();
      break;
    case 5:
        process.exit();
      break;
    default:
        console.log("Opção inválida, tente uma das opções disponíveis no menu.");
      break;
  }
}
