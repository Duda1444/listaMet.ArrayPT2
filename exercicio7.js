//exercício 7- A)

const produtos = [
  { id: 1, nome: "Notebook", preco: 3500, estoque: 5, ativo: true },
  { id: 2, nome: "Mouse", preco: 80, estoque: 0, ativo: true },
  { id: 3, nome: "Teclado", preco: 150, estoque: 10, ativo: false },
  { id: 4, nome: "Monitor", preco: 1200, estoque: 3, ativo: true }
];

const  todosmaiorCinquenta = produtos.every((produto)=>produto.preco > 50);
console.log("Todos os produtos são maiores que 50? ", todosmaiorCinquenta);

//exercício 7- B)
const estoqueDisponivel = produtos.every((produto)=>produto.estoque >0);
console.log("todos os produtos estão com o estoque disponível?", estoqueDisponivel);