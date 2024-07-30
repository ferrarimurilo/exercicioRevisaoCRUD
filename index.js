const prompt = require("prompt-sync")({sigint:true});

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
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    default:
        console.log("Opção inválida, tente uma das opções disponíveis no menu.");
      break;
  }
}