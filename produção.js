const respostas = {
    ola: "Olá! Meu nome é Artrix, assistente virtual das iniciativas K-Stark. Como posso te ajudar?",
    recebimento: "Prezado(a) usuário(a), recebemos seu chamado. Pedimos que aguarde enquanto nossa equipe trabalha na solução para o seu problema. Entraremos em contato assim que tivermos uma resposta para você. Agradecemos pela sua compreensão. Caso você tenha alguma dúvida adicional ou necessite de mais assistência, estamos à disposição para ajudar. Permanecemos à disposição para qualquer esclarecimento necessário. (Assinatura do atendente)",
    finalizacao: "Prezado(a), estamos encerrando esse chamado devido à falta de comunicação. Estamos aqui para ajudar e resolver seus problemas, mas é essencial mantermos uma comunicação regular. Caso o problema persista, pedimos que abra um novo chamado.",
    informacao: "Prezado(a), informamos que sua solicitação foi recebida pela nossa equipe. Pedimos sua compreensão e paciência enquanto trabalhamos para solucionar o problema o mais rápido possível. Manteremos você informado(a) sobre o andamento da sua solicitação. Solicitamos que nos informe a versão do PEN que está utilizando, bem como a versão do Tramita, caso esteja sendo utilizado. Além disso, solicitamos também que nos envie o log do sistema referente ao momento em que ocorreu o erro. Pedimos que nos envie prints em anexo com evidências do erro para que possamos identificar e solucionar o problema de forma mais precisa e eficiente. Salientamos que estamos empenhados em fornecer a melhor experiência possível aos nossos usuários e trabalhamos constantemente para aprimorar nossos sistemas. Agradecemos antecipadamente pela sua colaboração e ficamos à disposição para quaisquer esclarecimentos adicionais.",
    passar: "Este chamado será redirecionado para o nível 2, pois o mesmo necessita de uma análise mais técnica.",
    nivel: "Este chamado será redirecionado para o nível 3, pois o mesmo necessita de uma análise mais técnica.",
    lecom: "Prezado, os chamados para o Lecom são abertos em outro canal: https://suporte.servicos.gov.br. Questões relacionadas a usuários e perfis são tratadas pelo e-mail suportegovbr@economia.gov.br",
    ajuda: "Olá, eu posso te ajudar a saber quais os módulos, quais os script de finalização, recebimento e o script para que o usuário mande demais informações. Também posso te ajudar a redirecionar o usuário que abre chamado sobre o lecom. Também posso te explicar um pouco sobre o que é o SEI, SUPER.GOV, TRAMITA ou sobre o que é o PEN, posso também te ajudar no script para mandar para o nível 2",
    criador: "Meu criador é Kaique Stark, um renomado engenheiro de segurança cibernética. Ele iniciou seus estudos em meados de 2017.",
    intuito: "Meu intuito é representar as iniciativas K-Stark.",
    tramita: "O Tramita.GOV.BR (anteriormente, Barramento de Serviços do PEN) destina-se à tramitação de processos administrativos eletrônicos e documentos avulsos, em meio eletrônico, entre os diversos Sistemas de Processo Administrativo Eletrônico (SPE) existentes, com incrementos de segurança, integridade, agilidade e redução de custos. A adoção da plataforma se traduz em um significativo impacto em termos de agilidade e capilaridade da Administração Pública, visto que o Tramita.GOV.BR possibilita a interoperabilidade entre os mais diversos sistemas utilizados pelos órgãos e entidades da Administração Pública.",
    sei: "O SEI (Sistema Eletrônico de Informações) é uma plataforma digital desenvolvida no Brasil pelo TRF4. Ele substitui a tramitação física de documentos por um processo eletrônico, permitindo a criação, edição, assinatura, envio e controle de documentos de forma integrada e segura. O sistema promove eficiência, transparência e economia de recursos, agilizando a tramitação e facilitando o acesso a informações públicas. É utilizado por órgãos e entidades governamentais, substituindo gradualmente o processo físico de tramitação de documentos.",
    pen: "O Processo Eletrônico Nacional – PEN é uma infraestrutura pública de processo administrativo eletrônico, que visa à obtenção de substanciais melhorias no desempenho da gestão processual, com ganhos em agilidade, produtividade, satisfação do público usuário e redução de custos. A gestão do PEN é de competência da Secretaria de Gestão do Ministério da Gestão e da Inovação em Serviços Públicos, coordenado pela Diretoria de Informações, Serviços e Sistemas de Gestão (DTGES), conforme o disposto no art. 129-A do Decreto nº 9.745 de 2019. É resultado da integração de diferentes esforços que estavam em curso no âmbito do governo federal. Saiba mais em https://www.gov.br/economia/pt-br/assuntos/processo-eletronico-nacional/conteudo/processo-eletronico-nacional-pen.",
    super: "O Sistema Único de Processo Eletrônico em Rede - Super.GOV.BR vai além da produção, edição, assinatura e do trâmite de documentos e processos administrativos eletrônicos entre diversas unidades, órgãos e instituições do Governo Federal. O Super.GOV.BR tem o objetivo de proporcionar maior eficiência do Estado, além de ser uma importante ferramenta de gestão para a Administração Pública e para a sociedade em geral. Saiba mais em https://www.gov.br/economia/pt-br/assuntos/processo-eletronico-nacional/conteudo/super.br",
    modulos: "Para saber sobre os módulos do PEN, será necessário acessar o https://www.gov.br/economia/pt-br/assuntos/processo-eletronico-nacional/conteudo/processo-eletronico-nacional-pen e ir até o fim da página.",
};

function obterResposta(mensagem) {
    mensagem = mensagem.toLowerCase();

    if (mensagem.includes("recebimento") || mensagem.includes("inicio")) {
        return respostas.recebimento;
    } else if (mensagem.includes("olá") || mensagem.includes("oi")) {
        return respostas.ola;
    } else if (mensagem.includes("finalização") || mensagem.includes("encerramento")) {
        return respostas.finalizacao;
    } else if (mensagem.includes("informação") || mensagem.includes("log")) {
        return respostas.informacao;
    } else if (mensagem.includes("passar")) {
        return respostas.passar;
    } else if (mensagem.includes("nivel")) {
        return respostas.nivel;
    } else if (mensagem.includes("lecom")) {
        return respostas.lecom;
    } else if (mensagem.includes("ajuda") || mensagem.includes("ajude")) {
        return respostas.ajuda;
    } else if (mensagem.includes("criador") || mensagem.includes("fundador")) {
        return respostas.criador;
    } else if (mensagem.includes("intuito")) {
        return respostas.intuito;
    } else if (mensagem.includes("tramita") || mensagem.includes("barramento")) {
        return respostas.tramita;
    } else if (mensagem.includes("sei") || mensagem.includes("sistema")) {
        return respostas.sei;
    } else if (mensagem.includes("pen") || mensagem.includes("processo")) {
        return respostas.pen;
    } else if (mensagem.includes("modulos")) {
        return respostas.modulos;
    } else if (mensagem.includes("super")) {
        return respostas.super;
    } else {
        return "Desculpe :(, não entendi. Pode repetir? Caso eu não consiga entender, entre em contato com o meu criador. Ele irá lhe ajudar '-'";
    }
}

// Função para adicionar a mensagem do usuário ao chat
function adicionarMensagemUsuario(mensagem) {
    const chatbox = document.getElementById("chatbox");
    const mensagemElemento = document.createElement("div");
    mensagemElemento.classList.add("message");
    mensagemElemento.classList.add("user-message");
    mensagemElemento.innerText = mensagem;
    chatbox.appendChild(mensagemElemento);
}

// Função para adicionar a mensagem do bot ao chat
function adicionarMensagemBot(mensagem) {
    const chatbox = document.getElementById("chatbox");
    const mensagemElemento = document.createElement("div");
    mensagemElemento.classList.add("message");
    mensagemElemento.classList.add("bot-message");
    mensagemElemento.innerText = mensagem;
    chatbox.appendChild(mensagemElemento);
}

// Função para enviar a mensagem quando o usuário pressionar "Enter"
function enviarMensagem() {
    const mensagemUsuario = document.getElementById("mensagem").value.trim(); // Remove espaços em branco no início e no fim

    if (mensagemUsuario === "") {
        // Se o campo estiver vazio, definir a mensagem padrão
        document.getElementById("mensagem").value = "Digite algo";
        return; // Não faz nada mais se o campo estiver vazio
    }

    if (mensagemUsuario.toLowerCase() === "limpar") {
        // Limpar o conteúdo do chatbox
        document.getElementById("chatbox").innerHTML = "";
    } else {
        const respostaBot = obterResposta(mensagemUsuario);
        adicionarMensagemUsuario(mensagemUsuario);
        adicionarMensagemBot(respostaBot);
    }

    document.getElementById("mensagem").value = "";
}

// Event listener para o botão "Enviar"
document.getElementById("enviar").addEventListener("click", enviarMensagem);

// Event listener para o campo de entrada de texto para que "Enter" acione o envio
document.getElementById("mensagem").addEventListener("keydown", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        enviarMensagem();
    }
});

// Rolagem automática para a parte inferior do chatbox
const chatbox = document.getElementById("chatbox");
chatbox.scrollTop = chatbox.scrollHeight;

function ajustarRodape() {
    var conteudo = document.getElementById('conteudo');
    var rodape = document.getElementById('rodape');
    var alturaRodape = rodape.offsetHeight;
    var alturaJanela = window.innerHeight;
    var alturaConteudo = conteudo.offsetHeight;

    if (alturaJanela > alturaConteudo + alturaRodape) {
        rodape.style.position = 'fixed';
        rodape.style.bottom = '0';
    } else {
        rodape.style.position = 'static';
    }
}

ajustarRodape();
window.addEventListener('resize', ajustarRodape);

document.addEventListener('keydown', function (event) {
    if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
        alert('A função "Ctrl + U" está desativada nesta página.');
    }
});

document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
    alert('O botão direito do mouse está desativado nesta página.');
});
