
let darkmode = false;
const modals = document.querySelectorAll(".modal")
function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode');
    });

    modals.forEach(modal => {
        modal.classList.toggle('dark-modal');
    })
    darkmode = !darkmode;
}

const cards = document.querySelectorAll(".card");

cards.forEach(element => {
    element.addEventListener('click', event => {
        const cardTopic = event.target.id
        toggleModal(cardTopic)
    })
})

function toggleModal(cardTopic) {
    const modal = document.querySelector(`#card-${cardTopic}`);
    modal.classList.toggle('hide-modal');
}

const langContent = document.querySelector(".lang-content");

function toggleLanguageDisplay() {
    langContent.classList.toggle('hide')
}

// traduções
const translations = {
    english: {
        title: "Financial Consciousness",
        textOne: "We at financi.guru want the principles of financial education to be available to everyone.",
        textTwo: "In such a complicated world, full of scams and malicious people trying to steal your money, it's very important to know how to deal with dangers that can end up harming you financially.",
        fraseDeEfeito: "If you need to learn how to do this, you're in the right place.",
        topicTitle: "Check out our topics",
        cardOneTitle: "How to defeat consumerism",
        cardTwoTitle: "Planning",
        cardThreeTitle: "Differences between Credit and Debit",
        cardFourTitle: "The dangers of scams",
    },

    spanish: {
        title: "Conciencia financiera",
        textOne: "En financi.guru queremos que los principios de la educación financiera estén disponibles para todos, los necesiten o no.",
        textTwo: "En un mundo tan complejo, lleno de estafas y planes maliciosos que intentan robarte tu dinero, es muy importante saber cómo lidiar con los peligros que podrían acabar perjudicándote financieramente.",
        fraseDeEfeito: "Si necesitas aprender cómo hacer esto, estás en el lugar correcto.",
        topicTitle: "Consulta nuestros temas",
        cardOneTitle: "Como vencer el consumerismo",
        cardTwoTitle: "Planificación",
        cardThreeTitle: "Diferencias entre Crédito y Débito",
        cardFourTitle: "Los peligros de las estafas"
    },

    portuguese: {
        title: "Consciência Financeira",
        textOne: "Nós, do financi.guru, desejamos que os princípios da educação financeira sejam disponíveis a todos.",
        textTwo: "Num mundo tão complicado, cheio de golpes e malícias que tentam roubar seu dinheiro, é muito importante saber como lidar com perigos que podem acabar te prejudicando financeiramente.",
        topicTitle: "Confira nossos tópicos",
        cardOneTitle: "Como derrotar o Consumismo",
        cardTwoTitle: "Planejamento",
        cardThreeTitle: "Diferenças entre Crédito e Débito",
        cardFourTitle: "Os perigos dos golpes",
    }
}

const title = document.querySelector("#titulo");
const paragraphs = document.querySelectorAll("p");
const titles = document.querySelectorAll("h1");
const fraseDeEfeito = document.querySelector("#frasedeefeito");
const topicTitle = document.querySelector(".precard-text")

function translate(language) {
    title.innerHTML = translations[language].title;

    paragraphs[0].innerText = translations[language].textOne;
    paragraphs[1].innerText = translations[language].textTwo;
    fraseDeEfeito.innerText = translations[language].fraseDeEfeito;

    topicTitle.innerText = translations[language].topicTitle,
    titles[1].innerText = translations[language].cardOneTitle;
    titles[2].innerText = translations[language].cardTwoTitle
    titles[3].innerText = translations[language].cardThreeTitle
    titles[4].innerText = translations[language].cardFourTitle
}

const inglesButao = document.querySelector("#ingles");
const espanholButao = document.querySelector("#espanhol");
const portuguesButao = document.querySelector("#portugues");

inglesButao.addEventListener('click', () => {
    translate("english");
})
espanholButao.addEventListener('click', () => {
    translate("spanish");
})
portuguesButao.addEventListener('click', () => {
    translate("portuguese");
});

const elemento = document.getElementsByClassName("macaco");


