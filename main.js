var usuarios = [
    { nome: "Usuário 1", email: "usuario1@example.com", senha: "senha123" },
    { nome: "Usuário 2", email: "usuario2@example.com", senha: "abc123" },
    { nome: "kaique", email: "kaique@exemple.com", senha: "abc123"},
    { nome: "acesso1", email: "kaique@gmail.com", senha: "abc123"},
    { nome: "laryssa", email: "laryssa@artrix.com", senha: "6305"},
    { nome: "tattyane", email: "tattiane@artrix.com", senha: "6525"},
    { nome: "wanderlane", email: "wanderlane@artrix.com", senha: "6329"},
    { nome: "dayane", email: "dayane@artrix.com", senha: "6270"},
    { nome: "tamirys", email: "tamirys@artrix.com", senha: "6324"},
    { nome: "rosalinda", email: "rosalinda@artrix.com", senha: "6322"},
    { nome: "monitoria", email: "monitoria@artrix.com", senha: "speed2023"}, 
  ];

  function login() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;

    if (!email || !senha) {
      exibirMensagemErro("Insira algum valor!");
      return;
    }

    var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.email === email && usuario.senha === senha;
    });

    if (usuarioEncontrado) {
      var mensagem = "Bem-vindo, ao ambiente artix" + usuarioEncontrado.nome + "!";
      exibirMensagemSucesso(mensagem);
      window.location.href = "produçãochat.html";
    } else {
      exibirMensagemErro("Credenciais inválidas. Por favor, tente novamente.");
    }
  }

  function exibirMensagemErro(mensagem) {
    var balaoErro = document.getElementById("balao-erro");
    balaoErro.textContent = mensagem;
    balaoErro.classList.add("show");
    setTimeout(function() {
      balaoErro.classList.remove("show");
    }, 3000);
  }

  function exibirMensagemSucesso(mensagem) {
    var balaoSucesso = document.getElementById("balao-sucesso");
    balaoSucesso.textContent = mensagem;
    balaoSucesso.classList.add("show");
    setTimeout(function() {
      balaoSucesso.classList.remove("show");
    }, 4000);
  }

  function redirecionarParaCadastro() {
    window.location.href = "file:///C:/Users/kaique.machado/Desktop/projectv3/cadastrohomolog.html";
  }
document.addEventListener('keydown', function(event) {
if (event.key === 'Enter') {
  event.preventDefault(); // Evita o comportamento padrão do formulário (submit)
  login(); // Chama a função de login quando a tecla "Enter" for pressionada
}
});

document.addEventListener('keydown', function(event) {
if (event.ctrlKey && event.key === 'u') {
event.preventDefault();
alert('A função "Ctrl + U" está desativada nesta página.');
}
});

document.addEventListener('contextmenu', function(event) {
event.preventDefault();
alert('O botão direito do mouse está desativado nesta página.');
});