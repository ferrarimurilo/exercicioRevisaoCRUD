const prompt = require("prompt-sync")({sigint:true});

let produtos = [];

let casos = () => {
    let opcao = +prompt("Digite a opção desejada: ");
    switch (opcao) {
        case 1:
            cadastrar();
          break;
        case 2:
            listar();
          break;
        case 3:
            editar();
          break;
        case 4:
            excluir();
          break;
        case 5:
            process.exit();
          break;
        default:
            console.log("Opção inválida, tente uma das opções disponíveis no menu.");
          break;
      }
}
let cadastrar = () => {
    console.log("Cadastrar produtos: ");
    let nome = prompt("Digite o nome do produto que deseja cadastrar: ");
    let valor = prompt("Digite o preço do produto que deseja cadastrar: ");
    produtos.push({nome,valor});
}

let listar = () => {
    console.log("Listar produtos: ");
    for(let i = 0; i < produtos.length; i ++){
        console.log(`${i+1} - 
        Produto: ${produtos[i].nome} 
        Preço: ${produtos[i].valor}
        `)
    }
}

let editar = () => {
    console.log("Editar produto: ");
    listar();
    let opcaoEditar = prompt("Digite o número do produto que deseja editar: ");
    let nome = prompt("Digite o nome do produto que deseja cadastrar: ");
    let valor = prompt("Digite o preço do produto que deseja cadastrar: ");
    produtos[opcaoEditar-1] = {nome, valor};

}

let excluir = () => {
    console.log("Excluir produto: ");
    listar();
    let opcaoExcluir = prompt("Digite o número do produto que deseja excluir: ");
    produtos.splice(opcaoExcluir-1,1);
}

module.exports = {cadastrar, listar, editar, excluir, casos}