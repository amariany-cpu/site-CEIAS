// Navegação entre abas
function nav(paginaId) {
    const paginas = document.querySelectorAll('.page');
    paginas.forEach(p => p.classList.remove('active'));
    document.getElementById(paginaId).classList.add('active');
}

// Dados dos Funcionários
const funcionariosData = {
    professores: {
        nome: "Professores do CEIAS",
        funcao: "Corpo docente responsável por lecionar e formar os alunos.",
        foto: "https://via.placeholder.com/120?text=Professores"
    },
    pedagógico: {
        nome: "Equipe Pedagógica",
        funcao: "Acompanham a aprendizagem e orientação educacional.",
        foto: "https://via.placeholder.com/120?text=Pedagogico"
    },
    inspetora: {
        nome: "Inspetora de Alunos",
        funcao: "Cuida da segurança, organização e convivência nos corredores.",
        foto: "https://via.placeholder.com/120?text=Inspetora"
    },
    limpeza: {
        nome: "Equipe de Limpeza",
        funcao: "Mantém os espaços limpos e higienizados para o bem-estar de todos.",
        foto: "https://via.placeholder.com/120?text=Limpeza"
    },
    merenda: {
        nome: "Equipe da Merenda",
        funcao: "Prepara alimentações nutritivas e gostosas no dia a dia.",
        foto: "https://via.placeholder.com/120?text=Merenda"
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

// Avaliações
function enviarComentario() {
    const nome = document.getElementById('nome-user').value;
    const texto = document.getElementById('texto-opiniao').value;
    const mural = document.getElementById('mural-comentarios');

    if (nome === '' || texto === '') {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    const novoComentario = document.createElement('div');
    novoComentario.classList.add('comentario-item');
    novoComentario.innerHTML = `<strong>${nome}:</strong><p>${texto}</p>`;

    mural.prepend(novoComentario);

    // Limpar campos
    document.getElementById('nome-user').value = '';
    document.getElementById('texto-opiniao').value = '';
}

// Sub-abas de Eventos
function abrirEvento(evento) {
    document.getElementById('evento-primavera').style.display = 'none';
    document.getElementById('evento-cultural').style.display = 'none';

    if (evento === 'primavera') {
        document.getElementById('evento-primavera').style.display = 'block';
        gerarFlores();
    } else if (evento === 'cultural') {
        document.getElementById('evento-cultural').style.display = 'block';
    }
}

// Efeito de Flores Caindo para Primavera Fest
function gerarFlores() {
    const banner = document.getElementById('banner-rosa');
    // Limpa flores antigas
    const floresAntigas = banner.querySelectorAll('.flor');
    floresAntigas.forEach(f => f.remove());

    for (let i = 0; i < 15; i++) {
        const flor = document.createElement('span');
        flor.classList.add('flor');
        flor.innerHTML = '🌸';
        flor.style.left = Math.random() * 90 + '%';
        flor.style.animationDelay = Math.random() * 2 + 's';
        flor.style.animationDuration = (Math.random() * 2 + 2) + 's';
        banner.appendChild(flor);
    }
}

// Modal do Jornal
function abrirJornal() {
    document.getElementById('modal-jornal').style.display = 'flex';
}

function fecharJornal() {
    document.getElementById('modal-jornal').style.display = 'none';
}