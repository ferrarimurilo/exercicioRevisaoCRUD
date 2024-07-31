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
let coletar = () => {
    var nome = prompt("Digite o nome do produto que deseja cadastrar: ");
    var valor = prompt("Digite o preço do produto que deseja cadastrar: ");

    return {nome, valor}
}

let cadastrar = () => {
    console.log("Cadastrar produtos: ");
    const produto = coletar();
    if(produto.nome != "" && produto.valor != "" && produto.valor >= 0){
        produtos.push(produto);
    }
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
    const produto = coletar();
    if(produto.nome != "" && produto.valor != "" && produto.valor >= 0){
        produtos[opcaoEditar-1] = produto;
    }

}

let excluir = () => {
    console.log("Excluir produto: ");
    listar();
    let opcaoExcluir = prompt("Digite o número do produto que deseja excluir: ");
    produtos.splice(opcaoExcluir-1,1);
}

module.exports = {cadastrar, listar, editar, excluir, casos, coletar}