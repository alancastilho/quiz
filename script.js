const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "você gosta de carro ou moto?",
        alternativas: [
            {
                texto: "carro !",
                afirmacao: "ao atingir a maioridade, você comprou um carro. "
            },
            {
                texto: "moto ",
                afirmacao: "ao atingir a maioridade você comprou uma moto."
            }
        ]
    },
    {
        enunciado: "você gosta de correr",
        alternativas: [
            {
                texto: "não",
                afirmacao: "você nunca passou do limite de velocidade e nunca ganhou uma multa"
            },
            {
                texto: "sim",
                afirmacao: "você ja passou do limite de velocidade e seu veiculo foi preso"
            }
        ]
    },
    {
        enunciado: "você guardava dinheiro",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "você trocou seu veiculo por um melhor"
            },
            {
                texto: "não",
                afirmacao: "você continuou com seu veiculo pelo resto da vida."
            }
        ]
    },
      
];

let atual=0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
      const botaoAlternativas = document.createElement("button");
      botaoAlternativas.textContent = alternativa.texto;
      caixaAlternativas.appendChild(botaoAlternativas);
    }
  }
mostraPergunta();