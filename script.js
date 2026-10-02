// ==========================================
// ELEMENTOS
// ==========================================

const campoTarefa = document.getElementById("campo-tarefa");
const botaoAdicionar = document.getElementById("botao-adicionar");
const listaTarefas = document.getElementById("lista-tarefas");
const contadorTarefas = document.getElementById("contador-tarefas");

const botaoMotivacao = document.getElementById("botao-motivacao");
const mensagemMotivacional = document.getElementById("mensagem-motivacional");

const botaoCor = document.getElementById("botao-cor");

const botaoModoEscuro = document.getElementById("botao-modo-escuro");


// ==========================================
// ADICIONAR TAREFA
// ==========================================

function adicionarTarefa() {

    const texto = campoTarefa.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa! 💗");
        return;
    }

    const tarefa = document.createElement("li");

    tarefa.innerHTML = `
        <span class="texto-tarefa">${texto}</span>

        <div class="acoes-tarefa">

            <button class="concluir" title="Concluir tarefa">
                ✓
            </button>

            <button class="excluir" title="Excluir tarefa">
                🗑
            </button>

        </div>
    `;

    listaTarefas.appendChild(tarefa);

    campoTarefa.value = "";

    atualizarContador();
}


// ==========================================
// BOTÃO ADICIONAR
// ==========================================

botaoAdicionar.addEventListener("click", adicionarTarefa);


// ==========================================
// ENTER PARA ADICIONAR
// ==========================================

campoTarefa.addEventListener("keydown", function(evento) {

    if (evento.key === "Enter") {
        adicionarTarefa();
    }

});


// ==========================================
// CONCLUIR OU EXCLUIR TAREFA
// ==========================================

listaTarefas.addEventListener("click", function(evento) {

    const botao = evento.target.closest("button");

    if (!botao) {
        return;
    }

    const tarefa = botao.closest("li");

    // Concluir
    if (botao.classList.contains("concluir")) {

        tarefa.classList.toggle("concluida");

    }

    // Excluir
    if (botao.classList.contains("excluir")) {

        tarefa.remove();

    }

    atualizarContador();

});


// ==========================================
// CONTADOR
// ==========================================

function atualizarContador() {

    const quantidade =
        listaTarefas.querySelectorAll("li").length;

    if (quantidade === 0) {

        contadorTarefas.textContent =
            "0 tarefas na lista";

    } else if (quantidade === 1) {

        contadorTarefas.textContent =
            "1 tarefa na lista";

    } else {

        contadorTarefas.textContent =
            quantidade + " tarefas na lista";

    }
}


// ==========================================
// FUNÇÃO 1 - FRASE MOTIVACIONAL 🌷
// ==========================================

const frases = [
    "Você consegue! 💗",
    "Um passo de cada vez! 🌸",
    "Você está indo muito bem! ✨",
    "Não desista dos seus sonhos! 🦋",
    "Hoje é um ótimo dia para começar! 💕"
];

botaoMotivacao.addEventListener("click", function() {

    const numeroAleatorio =
        Math.floor(Math.random() * frases.length);

    mensagemMotivacional.textContent =
        frases[numeroAleatorio];

});


// ==========================================
// FUNÇÃO 2 - MUDAR COR 🎨
// ==========================================

const cores = [
    "#ffd6e7",
    "#ffc1dc",
    "#ffe4ef",
    "#f8c8dc",
    "#ffd1e8"
];

let corAtual = 0;

botaoCor.addEventListener("click", function() {

    corAtual++;

    if (corAtual >= cores.length) {
        corAtual = 0;
    }

    document.body.style.background =
        cores[corAtual];

});


// ==========================================
// MODO ESCURO 🌙
// ==========================================

botaoModoEscuro.addEventListener("click", function() {

    document.body.classList.toggle("modo-escuro");

    const icone =
        botaoModoEscuro.querySelector("i");

    if (document.body.classList.contains("modo-escuro")) {

        icone.classList.remove("fa-moon");
        icone.classList.add("fa-sun");

    } else {

        icone.classList.remove("fa-sun");
        icone.classList.add("fa-moon");

    }

});
