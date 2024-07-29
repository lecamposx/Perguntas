const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você já assistiu a série Grey's Anatomy?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Parabéns pelo bom gosto. "
            },
            {
                texto: "Não",
                afirmacao: "Recomendamos voce a assistir, é uma série realmente boa!."
            }
        ]
    },
    {
        enunciado: "Na sétima temporada, dois dos médicos do Hospital, sofrem um acidente de carro, quais foram os dois médicos? E qual deles fica entre a vida e a morte?",
        alternativas: [
            {
                texto: "Derek Shepherd e meredith Grey. Derek shepherd.",
                afirmacao: "Quase! Mais sorte na próxima."
            },
            {
                texto: "Callie Torres e Arizona Robbins. Callie Torres.",
                afirmacao: "Isso mesmo! continue assim!"
            }
        ]
    },
    {
        enunciado: "Na sétima temporada. Na pesquisa de Derek para a cura do Alzheimer, acaba ocorrendo um incidente. Qual foi o incidente?",
        alternativas: [
            {
                texto: "Meredith troca as fichas para que Adele receba o Agente ativo.",
                afirmacao: "Exatamente! E isso acabou levando a pesquisa para seu fim."
            },
            {
                texto: "Richard troca as fichas para que Adele receba o Agente ativo.",
                afirmacao: "Apesar de ter cogitado a possibilidade, descartou a ideia por pensar pelo lado profissional."
            }
        ]
    },
    {
        enunciado: "Izzie morre na sexta temporada devido ao câncer. Verdadeiro ou falso?",
        alternativas: [
            {
                texto: "Verdadeiro",
                afirmacao: "Incorreto! apesar de não ter morrido, a personagem deixou a série."
            },
            {
                texto: "Falso.",
                afirmacao: "Correto! É dito que a personagem está viva e com dois filhos"
            }        
            ]

    },
    {
        enunciado: "Qual o nome completo da filha da Callie, Arizona e do Mark?",
        alternativas: [
            {
                texto: "Sophia sloan Robbins Torres.",
                afirmacao: "Incorreto!"
            },
            {
                texto: "Sofia Robbins Sloan Torres.",
                afirmacao: "Correto!"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Chegamos ao fim...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
