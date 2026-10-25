// Navegação entre abas
function nav(paginaId) {
    const paginas = document.querySelectorAll('.page-tab');
    paginas.forEach(p => p.classList.remove('active'));

    const paginaAtiva = document.getElementById(paginaId);
    if (paginaAtiva) {
        paginaAtiva.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Menu Mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ESTRUTURA APENAS DE DIREÇÃO/PEDAGÓGICO E PROFESSORES
const funcionariosData = {
    pedagogico: {
        titulo: "Direção e Equipe Pedagógica",
        descricao: "Profissionais responsáveis pela gestão, organização e acompanhamento dos estudantes.",
        membros: [
            { nome: "Espaço para Nome do Diretor(a)", cargo: "Direção Escolar", foto: "" },
            { nome: "Espaço para Nome do Pedagogo(a)", cargo: "Orientação Pedagógica", foto: "" },
            { nome: "Espaço para Nome do Pedagogo(a)", cargo: "Supervisão Escolar", foto: "" }
        ]
    },
    professores: {
        titulo: "Professores por Disciplina",
        descricao: "Corpo docente responsável pelas matérias lectivas. Cole a imagem e o nome correspondente em cada card.",
        materias: [
            { disciplina: "História", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Matemática", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Língua Portuguesa", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Artes", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Ciências", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Geografia", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Física", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Educação Física", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Inglês", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Robótica", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Educação Financeira", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Química", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Filosofia", nome: "Nome do Professor(a)", foto: "" },
            { disciplina: "Sociologia", nome: "Nome do Professor(a)", foto: "" }
        ]
    }
};

// Renderizar Equipe
function verFuncionario(categoria) {
    const container = document.getElementById('funcionario-card');
    const dados = funcionariosData[categoria];

    if (!dados) return;

    if (categoria === 'pedagogico') {
        let cards = '';
        dados.membros.forEach(m => {
            const fotoUrl = m.foto || 'https://via.placeholder.com/150?text=Foto+Direcao';
            cards += `
                <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
                    <img src="${fotoUrl}" alt="${m.nome}" class="w-24 h-24 rounded-full object-cover mb-3 border-2 border-indigo-500 shadow-sm">
                    <h4 class="font-bold text-slate-800 text-base mb-1">${m.nome}</h4>
                    <span class="text-xs bg-indigo-600 text-white font-semibold px-3 py-1 rounded-full">${m.cargo}</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="mb-6 pb-4 border-b border-slate-200">
                <h3 class="text-2xl font-black text-navy-800">👤 ${dados.titulo}</h3>
                <p class="text-slate-600 text-sm">${dados.descricao}</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${cards}
            </div>
        `;
    } else if (categoria === 'professores') {
        let cards = '';
        dados.materias.forEach(m => {
            const fotoUrl = m.foto || 'https://via.placeholder.com/150?text=Foto+Materia';
            cards += `
                <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-20 h-20 rounded-2xl overflow-hidden mb-3 border border-slate-200 shadow-sm flex items-center justify-center bg-slate-50">
                        <img src="${fotoUrl}" alt="${m.disciplina}" class="w-full h-full object-cover">
                    </div>
                    <span class="text-xs bg-amber-500 text-white font-bold px-2.5 py-0.5 rounded-full mb-1">${m.disciplina}</span>
                    <h4 class="font-bold text-slate-800 text-sm mt-1">${m.nome}</h4>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="mb-6 pb-4 border-b border-slate-200">
                <h3 class="text-2xl font-black text-navy-800">📚 ${dados.titulo}</h3>
                <p class="text-slate-600 text-sm">${dados.descricao}</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                ${cards}
            </div>
        `;
    }
}

// Publicar Comentários
function enviarComentario() {
    const nomeInput = document.getElementById('nome-user');
    const textoInput = document.getElementById('texto-opiniao');
    const mural = document.getElementById('mural-comentarios');

    const nome = nomeInput.value.trim();
    const texto = textoInput.value.trim();

    if (!nome || !texto) {
        alert("Por favor, preencha o seu nome e o comentário antes de enviar!");
        return;
    }

    const item = document.createElement('div');
    item.className = "bg-white p-4 rounded-xl shadow-sm border-l-4 border-navy-600 transition animate-fadeIn";
    item.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <strong class="text-navy-800">${nome}</strong>
            <span class="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</span>
        </div>
        <p class="text-slate-600 text-sm">${texto}</p>
    `;

    mural.prepend(item);
    nomeInput.value = '';
    textoInput.value = '';
}

// Abrir Sub-Eventos
function abrirEvento(evento) {
    const divPrimavera = document.getElementById('evento-primavera');
    const divCultural = document.getElementById('evento-cultural');

    divPrimavera.classList.add('hidden');
    divCultural.classList.add('hidden');

    if (evento === 'primavera') {
        divPrimavera.classList.remove('hidden');
        iniciarAnimacoesPrimavera();
    } else if (evento === 'cultural') {
        divCultural.classList.remove('hidden');
    }
}

// Animação Primavera Fest
function iniciarAnimacoesPrimavera() {
    const floresContainer = document.getElementById('flores-container');
    const borboletasContainer = document.getElementById('borboletas-container');

    floresContainer.innerHTML = '';
    borboletasContainer.innerHTML = '';

    for (let i = 0; i < 18; i++) {
        const flor = document.createElement('span');
        flor.classList.add('flor-animada');
        flor.innerHTML = '🌸';
        flor.style.left = Math.random() * 95 + '%';
        flor.style.animationDelay = Math.random() * 3 + 's';
        flor.style.animationDuration = (Math.random() * 3 + 3) + 's';
        floresContainer.appendChild(flor);
    }

    for (let j = 0; j < 3; j++) {
        const borboleta = document.createElement('span');
        borboleta.classList.add('borboleta-animada');
        borboleta.innerHTML = '🦋';
        borboleta.style.animationDelay = (j * 3) + 's';
        borboletasContainer.appendChild(borboleta);
    }
}

// Carregar Direção e Pedagógico por padrão ao abrir
window.onload = function() {
    verFuncionario('pedagogico');
};