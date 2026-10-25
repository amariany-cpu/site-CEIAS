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

// DADOS DA DIREÇÃO, PEDAGOGIA E PROFESSORES COM BASE NAS GUIAS
const funcionariosData = {
    pedagogico: {
        titulo: "Direção e Equipe Pedagógica",
        descricao: "Gestão escolar e equipe de suporte pedagógico do CEIAS.",
        membros: [
            { nome: "Karina", cargo: "Diretora", icone: "fa-user-tie" },
            { nome: "Sheila", cargo: "Pedagoga", icone: "fa-graduation-cap" },
            { nome: "Lucimara", cargo: "Pedagoga", icone: "fa-graduation-cap" },
            { nome: "Adriana", cargo: "Pedagoga", icone: "fa-graduation-cap" }
        ]
    },
    professores: {
        titulo: "Professores por Disciplina",
        descricao: "Corpo docente e suas respetivas disciplinas de ensino.",
        materias: [
            { disciplina: "Filosofia", professores: ["Maike"] },
            { disciplina: "Lígua Inglesa", professores: ["Susana", "Giovana"] },
            { disciplina: "Matemática", professores: ["Henrique", "Paula", "Cristian", "Adilson"] },
            { disciplina: "Sociologia", professores: ["Rafael"] },
            { disciplina: "Artes", professores: ["Sandra"] },
            { disciplina: "Química", professores: ["Marcos"] },
            { disciplina: "Física", professores: ["Cristian"] },
            { disciplina: "História", professores: ["Vandre"] },
            { disciplina: "Ciências", professores: ["Malu", "Erli"] },
            { disciplina: "Biologia", professores: ["Erli"] },
            { disciplina: "Educação Física", professores: ["Emerson", "Roberto"] },
            { disciplina: "Língua Portuguesa", professores: ["Susana", "Giovana", "Rodrigo", "Alceu"] },
            { disciplina: "Geografia", professores: ["Sidney"] },
            { disciplina: "Programação / IA", professores: ["Roberto"] },
            { disciplina: "Educação Financeira", professores: ["Paula", "Cristian", "Adilson"] },
            { disciplina: "Robótica", professores: ["Cristian"] }
        ]
    }
};

// Função para exibir a equipe clicada
function verFuncionario(categoria) {
    const container = document.getElementById('funcionario-card');
    const dados = funcionariosData[categoria];

    if (!dados || !container) return;

    if (categoria === 'pedagogico') {
        let cards = '';
        dados.membros.forEach(m => {
            cards += `
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-16 h-16 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-2xl mb-3 shadow-inner">
                        <i class="fa-solid ${m.icone}"></i>
                    </div>
                    <h4 class="font-extrabold text-slate-800 text-lg mb-1">${m.nome}</h4>
                    <span class="text-xs bg-indigo-600 text-white font-semibold px-3 py-1 rounded-full">${m.cargo}</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="mb-6 pb-4 border-b border-slate-200">
                <h3 class="text-2xl font-black text-navy-800">👤 ${dados.titulo}</h3>
                <p class="text-slate-600 text-sm">${dados.descricao}</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                ${cards}
            </div>
        `;
    } else if (categoria === 'professores') {
        let cards = '';
        dados.materias.forEach(m => {
            const listaProfs = m.professores.map(p => `<li class="font-bold text-slate-700 text-sm">${p}</li>`).join('');
            cards += `
                <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
                    <span class="text-xs bg-amber-500 text-white font-extrabold px-3 py-1 rounded-full mb-3 uppercase tracking-wider">${m.disciplina}</span>
                    <ul class="space-y-1 my-2">
                        ${listaProfs}
                    </ul>
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
document.addEventListener('DOMContentLoaded', function() {
    verFuncionario('pedagogico');
});