const prompt = require("prompt-sync")({sigint:true});

const mod = require("./cadastro");

while(true){
    console.log(`
    1 - Cadastrar produto
    2 - Listar produtos cadastrados
    3 - Editar produtos cadastrados
    4 - Remover produto cadastrado
    5 - Sair
    `);
    mod.casos();
}
