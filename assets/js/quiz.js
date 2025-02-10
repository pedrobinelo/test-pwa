const questions = [
    {
        // Questão 01
        question: "Os seres humanos dessa época histórica são considerados caçadores coletores. Foi nesse período que ocorreram os primeiros deslocamentos da África em direção a outros continentes.",
        options: ["Paleolítico", "Neolítico", "Mesolítico", "Idade dos Metais", "Revolução Industrial"],
        correct: 0, // Índice da resposta correta
        image: "./assets/img/home_photo.png"
    },
    {
        // Questão 02
        question: "Um dos aspectos mais notáveis da vida humana no período paleolítico foi a pintura nas cavernas. Este tipo de pintura mereceu inúmeros estudos acerca do significado dessa expressão artística.",
        options: ["Arte clássica", "Arte moderna", "Arte rupestre", "Arte impressionista", "Arte gótica"],
        correct: 2, // Índice da resposta correta
        image: "./assets/img/q2.png"
    },
    {
        // Questão 03 
        // Tem que arrumar
        question: "Considerada uma das maiores revoluções da história, a grande mudança que ocorreu no modo de vida dos homens e mulheres da pré-história: abandonaram o nomadismo e se tornaram sedentários, deixando de ser meramente coletores e caçadores para se tornarem agricultores ceramistas.",
        options: ["Revolução Industrial", "Revolução Neolítica", "Revolução das Espadas", "Revolução Urbana", "Revolução Francesa"],
        correct: 1, // Índice da resposta correta
        image: "./assets/img/q3.png"
    },
    {
        // Questão 04
        question: "Período em que os seres humanos aprenderam as técnicas de lascar rochas, portanto, produziram seus instrumentos como lanças, facas, lesmas e pontas de flechas – materiais líticos.",
        options: ["Idade Antiga", "Idade da Pedra Lascada", "Idade da Pedra Polida", "Idade Média", "Idade dos Metais"],
        correct: 1, // Índice da resposta correta
        image: "./assets/img/4.png"
    },
    {
        // Questão 05
        question: "Considerada um dos principais avanços da humanidade, os homens paleolíticos passaram a assar a carne e a cozinhar vegetais, se reuniam, descansavam e se protegiam do frio e dos ataques de animais ferozes.",
        options: [" Descoberta da agricultura", "Descoberta do fogo", "Descoberta do sedentarismo", "Descoberta da energia elétrica", "Descoberta dos metais"],
        correct: 1, // Índice da resposta correta
        image: "./assets/img/5.png"
    },
    {
        // Questão 06
        // Tem que arrumar
        question: "Os membros dessa espécie têm um cérebro altamente desenvolvido, com inúmeras capacidades como o raciocínio abstrato, a linguagem, a introspecção e a resolução de problemas. Esta capacidade mental, associada a um corpo ereto possibilitaram o uso dos braços para manipular objetos, fator que permitiu aos humanos a criação e a utilização de ferramentas para alterar o ambiente à sua volta. (Créditos da imagem: Arte/Valdo Virgo/CB/D.A Press)",
        options: ["Primata", "Australopithecus", "Homo Erectus", "Homo Sapiens Sapiens", "Homo Habilis"],
        correct: 3, // Índice da resposta correta
        image: "./assets/img/6.jpg"
    },
    {
        // Questão 07
        question: "Cidade  de Mato Grosso do Sul, intitulada de capital da arte rupestre do estado.",
        options: ["Rio Verde", "Alcinópolis", "Aquidauana", "Bonito", "Coxim"],
        correct: 1, // Índice da resposta correta
        image: "./assets/img/7.jpg"
    },
    {
        // Questão 08
        // Tem que arrumar
        question: "Permitiu o aumento populacional e o surgimento de organizações sociais mais complexas, inclusive ocorrendo uma divisão social do trabalho e uma especialização de funções. Estudiosos admitem a existência de um poder organizado, com autoridades temporais e/ou religiosas.",
        options: ["O direito trabalhista na Revolução Social", "O socialismo na Revolução Social", "O anarquismo na Revolução Política", "O nomadismo na Revolução da Escrita", "O sedentarismo na Revolução Neolítica"],
        correct: 4, // Índice da resposta correta
        image: "./assets/img/8.png"
    },
    {
        // Questão 09
        question: "Marco que data o início da História, separando-a da Pré-história, segundo a periodização tradicional. Provocou profundas transformações nas relações sociais e na memória coletiva. (Crédito da imagem: depositphotos)",
        options: ["A fundição de metais", "A domesticação de animais", "A descoberta da agricultura", "A invenção da escrita", "A descoberta do fogo"],
        correct: 3, // Índice da resposta correta
        image: "./assets/img/9.png"
    },
    {
        // Questão 10
        question: "Qual é a datação mais antiga encontrada em Mato Grosso do Sul até a atualidade?",
        options: ["12.600 anos B.P", "11.990 anos B.P", "6.000 anos B.P", "3.000 anos B.P", "1.500.B.P"],
        correct: 0, // Índice da resposta correta
        image: "./assets/img/10.jpg"
    },
    {
        // Questão 11
        question: "Qual é o nome do sítio arqueológico mais antigo de Mato Grosso do Sul?",
        options: ["AS3 – Alto Sucuriú 3", "BR13 – Brasilândia 13", "AS12 – Alto Sucuriú 12", "VD22 – Rio Verde 22", "UR8 – Urucum 8"],
        correct: 2, // Índice da resposta correta
        image: "./assets/img/11.jpg"
    },
    {
        // Questão 12
        question: "Quais destes povos ceramistas pré-históricos viveram no território que hoje conhecemos como Mato Grosso do Sul?",
        options: ["Xavantes", "Charruas", "Minuanos", "Guaranis", "Tupinambás"],
        correct: 3, // Índice da resposta correta
        image: "./assets/img/12.1.png"
    },
    {
        // Questão 13
        question: "Quando se encontra um artefato arqueológico se deve:",
        options: ["Levar ao IPHAN (Instituto do Patrimônio Histórico e Artístico Nacional) – <br>ou Museu/Universidade mais próxima de sua casa", "Levar para casa", "Vender na internet", "Presentear os amigos", "Vender para algum antiquário"],
        correct: 0, // Índice da resposta correta
        image: "./assets/img/13.jpg"
    },
    {
        // Questão 14
        // Tem que arrumar
        question: "Formação calcária ou montanhosa de origem humana. São sítios arqueológicos deixados por povos pré-históricos que habitavam a costa brasileira de 7 a 8 mil anos atrás, muito antes dos tupis-guaranis. Esses sítios são geralmente compostos por ossos de peixes, pássaros e mamíferos, além de conchas de moluscos e outros materiais orgânicos. (créditos da imagem: ILUSTRAÇÃO MARIANA MASSARANI - http://chc.osasco.sp.gov.br)",
        options: ["Cavernas", "Sítios subaquáticos", "Casas subterrâneas", "Sambaquis", "Ocas suspensas"],
        correct: 3, // Índice da resposta correta
        image: "./assets/img/14.jpg"
    },
    {
        // Questão 15
        question: "O que são sítios arqueológicos?",
        options: ["É um local onde foram encontrados vestígios de ocupação humana, <br>seja esta ocupação antiga ou recente.", "É um local onde foram encontrados vestígios de dinossauros.", "É um local onde se cultiva verduras, frutas e se cuida de animais.", "É um local onde dinossauros foram enterrados propositalmente.", "É um local que se estuda idiomas"],
        correct: 0, // Índice da resposta correta
        image: "./assets/img/15.png"
    }
];

let currentQuestionIndex = 0;
let score = 0;

// Referências ao DOM
const bodyEl = document.getElementById("body");
const backBtn = document.getElementById("back");
const questionNumberEl = document.querySelector(".question-number span");
const questionEl = document.getElementById("question");
const imageContainer = document.getElementById("question-picture");
const optionsEl = document.getElementById("options");
const quizContainer = document.getElementById("quiz-container");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreEl = document.getElementById("score");

let selectedButton = null; // Armazena o botão selecionado atualmente
let selectedAnswerIndex = null; // Índice da resposta escolhida

function selectAnswer(selectedIndex) {
    const buttons = document.querySelectorAll("#options button");

    // Se houver um botão previamente selecionado, remove o estilo
    if (selectedButton) {
        selectedButton.style.backgroundColor = "";  // Remove a cor de fundo
        selectedButton.style.color = "";  // Remove a cor do texto
        selectedButton.style.transform = ""; // Deixa o botão no tamanho normal novamente
    }

    // Atualiza o botão selecionado
    selectedButton = buttons[selectedIndex];
    selectedAnswerIndex = selectedIndex;

    // Aplica o estilo de fundo verde e o texto branco
    selectedButton.style.backgroundColor = "#26a500";
    selectedButton.style.color = "#FFF";
    selectedButton.style.transform = "scale(1.1)";

    // Mostra o botão "Próximo"
    nextBtn.style.display = "block";
}

function showQuestion() {
    bodyEl.style = "";
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    const totalQuestions = questions.length;
    questionNumberEl.textContent = `${String(currentQuestionIndex + 1)}/${totalQuestions}`;
    optionsEl.innerHTML = "";

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerHTML = option;

        // Adiciona o evento de clique ao botão
        button.onclick = () => selectAnswer(index);

        optionsEl.appendChild(button);
    });

    // Exibe a imagem, se existir
    if (currentQuestion.image) {
        imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Imagem da questão">`;
    } else {
        imageContainer.innerHTML = ""; // Limpa o contêiner se não houver imagem
    }

    // Ajusta os tamanhos dos botões após inseri-los
    adjustButtonSizes();

    // Oculta o botão "Próximo" no início de cada nova questão
    nextBtn.style.display = "none";
}

function nextQuestion() {
    // Verifica se o índice da questão é válido
    if (selectedButton) {
        // Verifica se a resposta está correta
        const correctIndex = questions[currentQuestionIndex].correct;
        if (selectedAnswerIndex === correctIndex) {
            score++; // Incrementa o score apenas aqui
        }

        // Reseta as variáveis de seleção
        selectedButton = null;
        selectedAnswerIndex = null;

        // Avança para a próxima questão
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            bodyEl.style.backgroundImage = "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(./assets/img/home_photo.png)";
            endQuiz();
        }
    }
}

function endQuiz() {
    questionNumberEl.style.visibility = "hidden";
    quizContainer.style.display = "none";
    nextBtn.style.display = "none";
    resultContainer.style.display = "flex";
    scoreEl.textContent = `Você acertou ${score} de ${questions.length} perguntas.`;
}

function restartQuiz() {
    bodyEl.style = "";
    backBtn.style.visibility = "hidden";
    questionNumberEl.style.visibility = "visible";
    currentQuestionIndex = 0;
    score = 0;
    quizContainer.style.display = "flex";
    resultContainer.style.display = "none";
    showQuestion();
}

// Inicializa o quiz
showQuestion();
adjustButtonSizes();

function adjustButtonSizes() {
    const buttons = document.querySelectorAll('#options button');
    // const maxHeight = Math.max(...Array.from(buttons).map(button => button.offsetHeight));
    const maxWidth = Math.max(...Array.from(buttons).map(button => button.offsetWidth));
    
    buttons.forEach(button => {
    //   button.style.height = `${maxHeight}px`;
      button.style.width = `${maxWidth}px`;
    });
  }

