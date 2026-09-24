//Exercício 1- A)

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const ApenasMaiusculo = produtos.map((produto) => produto.nome);
console.log("Lista de nomes com letra maiúscula:: ", ApenasMaiusculo);
console.log("/n");

//--------------------------------------------------------------------------------------------------------------------------------------

//exercício 1- B)

const produtosCdesconto = produtos.map((produto) => {
  return {
    ...produto,
    preco:produto.preco*0.9
  };
});
console.log(produtosCdesconto);