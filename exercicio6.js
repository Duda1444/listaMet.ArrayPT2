//exercício 6- A)

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];
const MaiorCinquenta = produtos.some((produto) =>produto.preco > 50);
console.log("Tem produto com o preço maior que 50? ", MaiorCinquenta);

//exercício 6- B)
const Inativos = produtos.some((produto)=>produto.ativo === false);
console.log("Tem produto inativo? ", Inativos);

