
//exercicio 4- A)
const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const IndiceMonitor = produtos.findIndex((produto) => produto.nome === "Monitor");
console.log("O indice do monitor é: ", IndiceMonitor);

//exercicio 4- B)

const PrimeiroInativo = produtos.findIndex((produto) => produto.ativo === false);
console.log("O indice do primeiro produto inativo é: ", PrimeiroInativo);