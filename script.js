// Efeito de Batimento de Coração na Logo ao Clicar
function pulsarLogo(elemento) {
    let el = elemento;
    if (!el.classList.contains('pulsar-coracao')) {
        el.classList.add('pulsar-coracao');
        setTimeout(() => {
            el.classList.remove('pulsar-coracao');
        }, 850);
    }
}

// Alternância de Abas
function nav(paginaId) {
    const paginas = document.querySelectorAll('.page-tab');
    paginas.forEach(p => p.classList.remove('active'));

    const paginaAtiva = document.getElementById(paginaId);
    if (paginaAtiva) {
        paginaAtiva.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Menu Mobile Toggle
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ESTRUTURA COM FOTOS E PROFESSORES
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
        descricao: "Corpo docente e suas respetivas disciplinas de ensino com artes em destaque.",
        materias: [
            { disciplina: "Filosofia", professores: ["Maike"], foto: "FILOSOFIA.jpg" },
            { disciplina: "Língua Inglesa", professores: ["Susana", "Giovana"], foto: "INGLES.jpg" },
            { disciplina: "Matemática", professores: ["Henrique", "Paula", "Cristian", "Adilson"], foto: "MATEMATICA.jpg" },
            { disciplina: "Sociologia", professores: ["Rafael"], foto: "SOCIOLOGIA.jpg" },
            { disciplina: "Artes", professores: ["Sandra"], foto: "ARTES.jpg" },
            { disciplina: "Química", professores: ["Marcos"], foto: "RAFAEL.jpg" },
            { disciplina: "Física", professores: ["Cristian"], foto: "FISICA.jpg" },
            { disciplina: "História", professores: ["Vandré"], foto: "HISTORIA.jpg" },
            { disciplina: "Ciências", professores: ["Malu", "Erli"], foto: "CIENCIAS.jpg" },
            { disciplina: "Biologia", professores: ["Erli"], foto: "CIENCIAS.jpg" },
            { disciplina: "Educação Física", professores: ["Emerson", "Roberto"], foto: "EDUCAÇÃO FISICA.jpg" },
            { disciplina: "Língua Portuguesa", professores: ["Susana", "Giovana", "Rodrigo", "Alceu"], foto: "PORTUGUES.jpg" },
            { disciplina: "Geografia", professores: ["Sidney"], foto: "GEOGRAFIA.jpg" },
            { disciplina: "Programação / IA", professores: ["Roberto"], foto: "ROBOTICA.jpg" },
            { disciplina: "Educação Financeira", professores: ["Paula", "Cristian", "Adilson"], foto: "FINANCEIRA.jpg" },
            { disciplina: "Robótica", professores: ["Cristian"], foto: "ROBOTICA.jpg" }
        ]
    }
};

// Renderizar Equipe com Fotos Nítidas e Sem Fundo Branco
function verFuncionario(categoria) {
    const container = document.getElementById('funcionario-card');
    const dados = funcionariosData[categoria];

    if (!dados || !container) return;

    if (categoria === 'pedagogico') {
        let cards = '';
        dados.membros.forEach(m => {
            cards += `
                <div class="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
                    <div class="w-20 h-20 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-3xl mb-3 shadow-inner">
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
            const listaProfs = m.professores.map(p => `<li class="font-bold text-slate-800 text-base">${p}</li>`).join('');
            cards += `
                <div class="bg-slate-50 p-5 rounded-3xl shadow-md border border-slate-200 text-center flex flex-col items-center hover:shadow-xl hover:border-amber-400 transition group">
                    <!-- Container que aplica zoom no centro do desenho e remove o fundo branco via mix-blend -->
                    <div class="w-full h-40 rounded-2xl overflow-hidden mb-3 flex items-center justify-center bg-white shadow-inner p-1">
                        <img src="${m.foto}" alt="${m.disciplina}" class="w-full h-full object-contain scale-150 mix-blend-multiply transition duration-300 group-hover:scale-175">
                    </div>
                    <span class="text-xs bg-amber-500 text-white font-black px-4 py-1 rounded-full mb-3 uppercase tracking-wider shadow-sm">${m.disciplina}</span>
                    <ul class="space-y-1 my-1">
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
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

// Inicializar na aba Direção/Pedagógico ao abrir
document.addEventListener('DOMContentLoaded', function() {
    verFuncionario('pedagogico');
});