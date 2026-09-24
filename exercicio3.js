//exercicio 3- A)

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];


function buscarUsuarioPorId(idRequisitado) {
    const usuario = usuariosBanco.find((u) => u.id === idRequisitado);
    if (!usuario) {
        return {
            status: 404,
            mensagem: `Erro: Usuário com ID ${idRequisitado} não foi encontrado.`
        };
    }
        return {
        status: 200,
        dados: usuario
    };
}
console.log("Buscando ID 2:", buscarUsuarioPorId(2));
console.log("Buscando ID 99 (Inexistente):", buscarUsuarioPorId(99));

//--------------------------------------------------------------------------------------------------------------------------------------

//exercicio 3- B)
