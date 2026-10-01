const usuarios = [
  { id: 1, nome: "Ana Silva", idade: 22, ativo: true, cargo: "Desenvolvedora" },
  { id: 2, nome: "Bruno Costa", idade: 17, ativo: true, cargo: "Estagiário" },
  { id: 3, nome: "Carlos Souza", idade: 30, ativo: false, cargo: "Designer" },
  { id: 4, nome: "Diana Lima", idade: 25, ativo: true, cargo: "Tech Lead" }
];

const listarFuncionarios = usuarios.map((usuario) => `${usuario.nome} - ${usuario.cargo}`);
console.log("Lista de funcionários: ", listarFuncionarios); 

const buscarUsuarioPorId = (id) => usuarios.find(usuario =>
    usuario.id === id)

    console.log("Buscar ID 2:", buscarUsuarioPorId(2))

 const listarUsuariosAtivos = () => usuarios.filter(usuario => usuario.ativo === true);
 console.log("Lista funcionários ativos: ", listarUsuariosAtivos());

const Inativos = usuarios.some((usuario)=>usuario.ativo === false);
console.log("Tem usuário inativo? ", Inativos);

const todosUsuariosMaioresDeIdade = () => usuarios.every(usuario => usuario.idade > 18);
console.log("Todos os usuários são maiores de idade? ", todosUsuariosMaioresDeIdade());

const calcularMediaIdade = usuarios.reduce((acumulador, usuario) => acumulador + usuario.idade, 0) / usuarios.length;
console.log("A média de idade dos usuários é: ", calcularMediaIdade);