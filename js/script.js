const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Qual bioma brasileiro deve ser a prioridade máxima para políticas de conservação?",

        alternativas: [
            {
                texto: "A Amazônia" ,
                afirmacao: "É prioritária pelo volume de biodiversidade e impacto global. Como maior floresta tropical do mundo, regula o clima do planeta e armazena toneladas de carbono, tornando sua destruição uma ameaça global."

            },
            {
                texto:  "A Mata Atlântica",
                afirmacao: "É prioritária pelo grau de ameaça imediata. Por ser um hotspot reduzido a cerca de 12% de sua área original, abriga centenas de espécies exclusivas (endêmicas) sob risco iminente de extinção."

            }    
           
        ]
    },
    {
       
            enunciado: "Qual é a estratégia mais eficaz para reduzir a poluição plástica nos oceanos?",
            alternativas: [
                {
                    texto: "Reduzir a produção de plásticos descartáveis na fonte",
                    afirmacao: "Trata o problema pela causa raiz. Sem interromper o fluxo contínuo de novas embalagens no mercado, qualquer ação de limpeza torna-se insuficiente frente ao volume gerado diariamente."
                {
                    texto:  "Trata o problema pela causa raiz. Sem interromper o fluxo contínuo de novas embalagens no mercado, qualquer ação de limpeza torna-se insuficiente frente ao volume gerado diariamente.",
                    afirmacao: "Você é uma pessoa que dá ênfase em priorizar os recursos disponíveis, pensando no meio ambiente e sem descartar o viés econômico."
                }    
               
            ]
        },
        {
            enunciado: "Hoje em dia é cada vez mais importante conhecer o seu corpo, suas qualidades, suas limitações e entender suas emoções. Saber controlá-las é o desafio das pessoas. A sua auto-estima impacta a sua qualidade de vida?",

            alternativas: [
                {
                    texto: "Na maior parte do tempo, com certeza impacta, pois é a partir da autoestima que temos um olhar positivo ou negativo sobre nossas ações diárias. Sempre estou em busca de mais autoconhecimento.",
                    afirmacao: "Você tem consciência que é importante ter uma boa auto-estima e procura se aprofundar mais sobre o assunto, vendo a vida de um jeito positivo."
                },
                {
                    texto:    "Apenas ocasionalmente ou raramente. Às vezes minha autoestima oscila e isso pode afetar negativamente minha qualidade de vida em certas ocasiões.",
               
                    afirmacao: "Você demomostra que precisa se conhecer mais e mostra uma consciência de uma crescente necessidade de cuidar mais da própria percepção e bem-estar emocional."
                }    
               
            ]
        },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();