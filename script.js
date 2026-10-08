// Alternar Abas
function nav(paginaId) {
    const paginas = document.querySelectorAll('.page-tab');
    paginas.forEach(p => p.classList.remove('active'));
    const paginaAtiva = document.getElementById(paginaId);
    if (paginaAtiva) {
        paginaAtiva.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
}

// ESTRUTURA DOS PROFESSORES COM ÍCONES RECORTADOS DAS MATÉRIAS
const funcionariosData = {
    professores: {
        nomeSetor: "Professores por Disciplina",
        descricao: "Corpo docente altamente qualificado representado pelos símbolos de cada disciplina.",
        tipo: "materias",
        materias: [
            { nome: "História", imagem: "simbolos (1).jpeg", classeCrop: "icon-historia", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Matemática", imagem: "simbolos (1).jpeg", classeCrop: "icon-matematica", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Língua Portuguesa", imagem: "simbolos (1).jpeg", classeCrop: "icon-portugues", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Artes", imagem: "simbolos (1).jpeg", classeCrop: "icon-artes", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Ciências", imagem: "simbolos (1).jpeg", classeCrop: "icon-ciencias", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Geografia", imagem: "simbolos (1).jpeg", classeCrop: "icon-geografia", tipoBox: "crop-icon-box", prof: "Nome do Professor(a)" },
            { nome: "Física", imagem: "simbolos 2.jpeg", classeCrop: "icon-fisica", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Educação Física", imagem: "simbolos 2.jpeg", classeCrop: "icon-edfisica", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Inglês", imagem: "simbolos 2.jpeg", classeCrop: "icon-ingles", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Robótica", imagem: "simbolos 2.jpeg", classeCrop: "icon-robotica", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Ed. Financeira", imagem: "simbolos 2.jpeg", classeCrop: "icon-financeira", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Química", imagem: "simbolos 2.jpeg", classeCrop: "icon-quimica", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Filosofia", imagem: "simbolos 2.jpeg", classeCrop: "icon-filosofia", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" },
            { nome: "Sociologia", imagem: "simbolos 2.jpeg", classeCrop: "icon-sociologia", tipoBox: "crop-icon-box-2", prof: "Nome do Professor(a)" }
        ]
    },
    pedagogico: {
        nomeSetor: "Equipe Pedagógica e Direção",
        simbolo: "🐱",
        descricao: "Acompanhamento atencioso e suporte contínuo para cada estudante.",
        membros: [
            { nome: "Espaço para Nome do Diretor(a)", cargo: "Direção Escolar" },
            { nome: "Espaço para Nome do Pedagogo(a)", cargo: "Orientação Pedagógica" }
        ]
    },
    inspetora: {
        nomeSetor: "Inspetoria Escolar",
        simbolo: "🐦",
        descricao: "Acompanham a rotina com dinamismo e mantêm a harmonia nos pátios.",
        membros: [{ nome: "Espaço para Nome do Inspetor(a)", cargo: "Inspetor(a) de Pátio" }]
    },
    limpeza: {
        nomeSetor: "Serviços Gerais e Limpeza",
        simbolo: "🦋",
        descricao: "Zelam da beleza e higiene de todo o ambiente escolar.",
        membros: [{ nome: "Espaço para Nome do Funcionário(a)", cargo: "Conservação e Higienização" }]
    },
    merenda: {
        nomeSetor: "Merenda Escolar",
        simbolo: "🐻",
        descricao: "Preparam com afeto as refeições deliciosas e nutritivas dos alunos.",
        membros: [{ nome: "Espaço para Nome da Merendeira", cargo: "Cozinha e Nutrição Escolar" }]
    }
};

function verFuncionario(categoria) {
    const info = funcionariosData[categoria];
    const container = document.getElementById('funcionario-card');
    if (!info) return;

    if (info.tipo === "materias") {
        let htmlCards = '';
        info.materias.forEach(m => {
            htmlCards += `
                <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition text-center flex flex-col items-center">
                    <div class="${m.tipoBox} ${m.classeCrop} mb-3 border border-slate-200 shadow-inner">
                        <img src="${m.imagem}" alt="${m.nome}">
                    </div>
                    <h4 class="font-bold text-navy-800 text-base mb-1">${m.nome}</h4>
                    <span class="text-xs bg-amber-500 text-white font-semibold px-2.5 py-0.5 rounded-full mb-2">${m.prof}</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="mb-6 pb-4 border-b border-slate-200">
                <h3 class="text-2xl font-black text-navy-800">📚 ${info.nomeSetor}</h3>
                <p class="text-slate-600 text-sm">${info.descricao}</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                ${htmlCards}
            </div>
        `;
    } else {
        let htmlMembros = '';
        info.membros.forEach(m => {
            htmlMembros += `
                <div class="bg-white p-5 rounded-2xl shadow-sm border border-slate-200 text-center flex flex-col items-center">
                    <div class="text-4xl mb-2">${info.simbolo}</div>
                    <h4 class="font-bold text-slate-800 text-base mb-1">${m.nome}</h4>
                    <span class="text-xs bg-navy-600 text-white font-semibold px-2.5 py-0.5 rounded-full">${m.cargo}</span>
                </div>
            `;
        });

        container.innerHTML = `
            <div class="mb-6 pb-4 border-b border-slate-200">
                <h3 class="text-2xl font-black text-navy-800">${info.simbolo} ${info.nomeSetor}</h3>
                <p class="text-slate-600 text-sm">${info.descricao}</p>
            </div>
            <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                ${htmlMembros}
            </div>
        `;
    }
}

window.onload = function() {
    verFuncionario('professores');
};