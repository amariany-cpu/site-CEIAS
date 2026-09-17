// Navegação Geral entre Abas
function nav(paginaId) {
    const paginas = document.querySelectorAll('.page');
    paginas.forEach(p => p.classList.remove('active'));
    document.getElementById(paginaId).classList.add('active');
}

// Dados dos Funcionários
const funcionariosData = {
    professores: {
        nome: "Corpo Docente",
        funcao: "Professores dedicados ao ensino e à formação humana e acadêmica de nossos alunos.",
        foto: "https://via.placeholder.com/130?text=Professores"
    },
    pedagogico: {
        nome: "Equipe Pedagógica",
        funcao: "Responsáveis pela orientação educacional, pedagógica e acompanhamento dos estudantes.",
        foto: "https://via.placeholder.com/130?text=Pedagogico"
    },
    inspetora: {
        nome: "Inspetoria de Alunos",
        funcao: "Garante a organização, segurança e bom convívio nos pátios e corredores.",
        foto: "https://via.placeholder.com/130?text=Inspetora"
    },
    limpeza: {
        nome: "Equipe de Serviços Gerais / Limpeza",
        funcao: "Mantém todas as dependências do colégio limpas, higienizadas e agradáveis.",
        foto: "https://via.placeholder.com/130?text=Limpeza"
    },
    merenda: {
        nome: "Equipe da Merenda Escolar",
        funcao: "Prepara alimentações diárias saudáveis e saborosas para a comunidade escolar.",
        foto: "https://via.placeholder.com/130?text=Merenda"
    }
};

function verFuncionario(categoria) {
    const info = funcionariosData[categoria];
    const container = document.getElementById('funcionario-card');
    
    container.innerHTML = `
        <img src="${info.foto}" alt="${info.nome}">
        <h3>${info.nome}</h3>
        <p>${info.funcao}</p>
    `;
}

// Enviar Comentário/Avaliação
function enviarComentario() {
    const nome = document.getElementById('nome-user').value;
    const texto = document.getElementById('texto-opiniao').value;
    const mural = document.getElementById('mural-comentarios');

    if (nome.trim() === '' || texto.trim() === '') {
        alert("Por favor, preencha o seu nome e a sua opinião!");
        return;
    }

    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comentario-item');
    novoComentario.innerHTML = `<strong>${nome}:</strong><p>${texto}</p>`;

    mural.prepend(novoComentario);

    document.getElementById('nome-user').value = '';
    document.getElementById('texto-opiniao').value = '';
}

// Alternar entre Eventos
function abrirEvento(evento) {
    document.getElementById('evento-primavera').style.display = 'none';
    document.getElementById('evento-cultural').style.display = 'none';

    if (evento === 'primavera') {
        document.getElementById('evento-primavera').style.display = 'block';
        iniciarAnimacoesPrimavera();
    } else if (evento === 'cultural') {
        document.getElementById('evento-cultural').style.display = 'block';
    }
}

// Efeitos de Animação: Flores e Borboletas
function iniciarAnimacoesPrimavera() {
    const floresContainer = document.getElementById('flores-container');
    const borboletasContainer = document.getElementById('borboletas-container');

    floresContainer.innerHTML = '';
    borboletasContainer.innerHTML = '';

    // Gerar Flores
    for (let i = 0; i < 20; i++) {
        const flor = document.createElement('span');
        flor.classList.add('flor-animada');
        flor.innerHTML = '🌸';
        flor.style.left = Math.random() * 95 + '%';
        flor.style.animationDelay = Math.random() * 3 + 's';
        flor.style.animationDuration = (Math.random() * 3 + 3) + 's';
        floresContainer.appendChild(flor);
    }

    // Gerar Borboletas Voando
    const borboletas = ['🦋', '🦋', '🦋'];
    borboletas.forEach((b, index) => {
        const borboleta = document.createElement('span');
        borboleta.classList.add('borboleta-animada');
        borboleta.innerHTML = b;
        borboleta.style.animationDelay = (index * 2.5) + 's';
        borboletasContainer.appendChild(borboleta);
    });
}

// Modal do Jornal EXPRESS CEIAS
function abrirJornal() {
    document.getElementById('modal-jornal').style.display = 'flex';
}

function fecharJornal() {
    document.getElementById('modal-jornal').style.display = 'none';
}