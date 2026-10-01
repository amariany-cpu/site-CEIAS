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

// Toggle do Menu Mobile
function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// DADOS DA EQUIPE COM SIMBOLOGIA EXCLUSIVA
const funcionariosData = {
    professores: {
        nomeSetor: "Professores do Colégio",
        simbolo: "🦉",
        simboloNome: "Coruja (Sabedoria & Conhecimento)",
        corCard: "bg-amber-50 border-amber-200",
        corTag: "bg-amber-500 text-white",
        descricao: "Mestres do conhecimento que orientam nossos alunos diariamente.",
        membros: [
            { nome: "Espaço para Nome do Professor(a)", disciplina: "Matemática / Exatas" },
            { nome: "Espaço para Nome do Professor(a)", disciplina: "Língua Portuguesa / Literatura" },
            { nome: "Espaço para Nome do Professor(a)", disciplina: "História / Geografia" },
            { nome: "Espaço para Nome do Professor(a)", disciplina: "Ciências / Biologia" },
            { nome: "Espaço para Nome do Professor(a)", disciplina: "Educação Física" },
            { nome: "Espaço para Nome do Professor(a)", disciplina: "Inglês / Espanhol" }
        ]
    },
    pedagogico: {
        nomeSetor: "Equipe Pedagógica e Direção",
        simbolo: "🐱",
        simboloNome: "Gato (Atenção & Percepção)",
        corCard: "bg-indigo-50 border-indigo-200",
        corTag: "bg-indigo-600 text-white",
        descricao: "Acompanhamento atencioso e suporte contínuo para cada estudante.",
        membros: [
            { nome: "Espaço para Nome do Diretor(a)", disciplina: "Direção Escolar" },
            { nome: "Espaço para Nome do Pedagogo(a)", disciplina: "Orientação Pedagógica" },
            { nome: "Espaço para Nome do Pedagogo(a)", disciplina: "Supervisão de Ensino" }
        ]
    },
    inspetora: {
        nomeSetor: "Inspetoria Escolar",
        simbolo: "🐦",
        simboloNome: "Beija-flor (Agilidade & Cuidado)",
        corCard: "bg-emerald-50 border-emerald-200",
        corTag: "bg-emerald-600 text-white",
        descricao: "Acompanham a rotina com dinamismo e mantêm a harmonia nos pátios.",
        membros: [
            { nome: "Espaço para Nome do Inspetor(a)", disciplina: "Inspetor(a) de Pátio - Turno Manhã" },
            { nome: "Espaço para Nome do Inspetor(a)", disciplina: "Inspetor(a) de Pátio - Turno Tarde" }
        ]
    },
    limpeza: {
        nomeSetor: "Serviços Gerais e Limpeza",
        simbolo: "🦋",
        simboloNome: "Borboleta (Transformação & Cuidado)",
        corCard: "bg-pink-50 border-pink-200",
        corTag: "bg-pink-500 text-white",
        descricao: "Azelam com carinho da beleza e higiene de todo o ambiente escolar.",
        membros: [
            { nome: "Espaço para Nome do Funcionário(a)", disciplina: "Conservação e Higienização" },
            { nome: "Espaço para Nome do Funcionário(a)", disciplina: "Conservação e Áreas Verdes" }
        ]
    },
    merenda: {
        nomeSetor: "Merenda Escolar",
        simbolo: "🐻",
        simboloNome: "Urso (Acolhimento & Nutrição)",
        corCard: "bg-orange-50 border-orange-200",
        corTag: "bg-orange-600 text-white",
        descricao: "Preparam com afeto as refeições deliciosas e nutritivas dos alunos.",
        membros: [
            { nome: "Espaço para Nome da Merendeira", disciplina: "Cozinha e Nutrição Escolar" },
            { nome: "Espaço para Nome da Merendeira", disciplina: "Cozinha e Apoio Alimentar" }
        ]
    }
};

function verFuncionario(categoria) {
    const info = funcionariosData[categoria];
    const container = document.getElementById('funcionario-card');
    if (!info) return;
    let htmlMembros = '';
    info.membros.forEach(m => {
        htmlMembros += `
            <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition text-center flex flex-col items-center">
                <div class="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl mb-3 border border-slate-200">
                    ${info.simbolo}
                </div>
                <h4 class="font-bold text-slate-800 text-base mb-1">${m.nome}</h4>
                <span class="text-xs ${info.corTag} font-semibold px-2.5 py-0.5 rounded-full">${m.disciplina}</span>
            </div>
        `;
    });
    container.innerHTML = `
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-200">
            <div class="flex items-center gap-4">
                <div class="text-5xl bg-white p-3 rounded-2xl shadow-inner border">${info.simbolo}</div>
                <div>
                    <span class="text-xs font-black uppercase tracking-wider text-slate-400">${info.simboloNome}</span>
                    <h3 class="text-2xl font-black text-navy-800">${info.nomeSetor}</h3>
                    <p class="text-slate-600 text-sm">${info.descricao}</p>
                </div>
            </div>
            <div class="bg-navy-50 text-navy-800 text-xs font-bold px-4 py-2 rounded-xl border border-navy-200">
                Pronto para adicionar os nomes dos funcionários!
            </div>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            ${htmlMembros}
        </div>
    `;
}

// Publicar Comentário
function enviarComentario() {
    const nomeInput = document.getElementById('nome-user');
    const textoInput = document.getElementById('texto-opiniao');
    const mural = document.getElementById('mural-comentarios');
    const nome = nomeInput.value.trim();
    const texto = textoInput.value.trim();
    if (!nome || !texto) {
        alert("Por favor, preencha o seu nome e a sua opinião antes de enviar!");
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

// Sub-Eventos
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

// Animação da Primavera Fest (Flores e Borboletas)
function iniciarAnimacoesPrimavera() {
    const floresContainer = document.getElementById('flores-container');
    const borboletasContainer = document.getElementById('borboletas-container');
    floresContainer.innerHTML = '';
    borboletasContainer.innerHTML = '';
    // Criar flores caindo
    for (let i = 0; i < 18; i++) {
        const flor = document.createElement('span');
        flor.classList.add('flor-animada');
        flor.innerHTML = '🌸';
        flor.style.left = Math.random() * 95 + '%';
        flor.style.animationDelay = Math.random() * 3 + 's';
        flor.style.animationDuration = (Math.random() * 3 + 3) + 's';
        floresContainer.appendChild(flor);
    }
    // Criar borboletas voando
    for (let j = 0; j < 3; j++) {
        const borboleta = document.createElement('span');
        borboleta.classList.add('borboleta-animada');
        borboleta.innerHTML = '🦋';
        borboleta.style.animationDelay = (j * 3) + 's';
        borboletasContainer.appendChild(borboleta);
    }
}

// Modal Jornal
function abrirJornal() {
    document.getElementById('modal-jornal').classList.remove('hidden');
    document.getElementById('modal-jornal').classList.add('flex');
}

function fecharJornal() {
    document.getElementById('modal-jornal').classList.add('hidden');
    document.getElementById('modal-jornal').classList.remove('flex');
}

// Carregar equipe inicial (Professores) ao abrir a página
window.onload = function() {
    verFuncionario('professores');
};