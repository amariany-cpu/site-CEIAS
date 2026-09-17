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
    
    if (info) {
        container.innerHTML = `
            <img src="${info.foto}" alt="${info.nome}">
            <h3>${info.nome}</h3>
            <p>${info.funcao}</p>
        `;
    }
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

// Alternar entre Sub-Eventos
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

// Animação de Flores
function iniciarAnimacoesPrimavera() {
    const floresContainer = document.getElementById('flores-container');
    floresContainer.innerHTML = '';

    for (let i = 0; i < 15; i++) {
        const flor = document.createElement('span');
        flor.classList.add('flor-animada');
        flor.innerHTML = '🌸';
        flor.style.left = Math.random() * 90 + '%';
        flor.style.animationDelay = Math.random() * 2 + 's';
        flor.style.animationDuration = (Math.random() * 2 + 3) + 's';
        floresContainer.appendChild(flor);
    }
}

// Modal do Jornal
function abrirJornal() {
    document.getElementById('modal-jornal').style.display = 'flex';
}

function fecharJornal() {
    document.getElementById('modal-jornal').style.display = 'none';
}