//exercício 2- A)

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const usuarioAtivos = usuarios.filter((usuario)=> usuario.ativo);
console.log("Usuários ativos no sistemas: ",usuarioAtivos);
console.log("/n");

//----------------------------------------------------------------------------------------------------------------------------------------

// exercício 2- B)

const prodFiltrados = produtos.filter((item) => {
  return item.preco > 100 && item.estoque > 0;
});

console.log("Produtos que possuem um estoque positivo e possuem um preço maior que 100:");
console.log(prodFiltrados);