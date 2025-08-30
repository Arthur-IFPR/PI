
let darkmode = false;
const modals = document.querySelectorAll(".modal")
function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
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
        title:  "Financial Consciousness",
        textOne: "We, at Financi.guru, have a great concern about the nignaigniangnaing",
        textTwo: "I'm dribing in my car right after a beer hey that bump is shaped like a homnosswexual brazzilian man",
        cardOneTitle: "How to defeat consumerism"
    },
    
    spanish: {
        title: "Conciencia financiera",
        textOne: "En financi.guru queremos que los principios de la educación financiera estén disponibles para todos, los necesiten o no.",
        textTwo: "En un mundo tan complejo, lleno de estafas y planes maliciosos que intentan robarte tu dinero, es muy importante saber cómo lidiar con los peligros que podrían acabar perjudicándote financieramente.",
        cardOneTitle: "Como dejotar el consumerismo, (eu não sei espanhol, eu realmente espero que você não tenha testado espanhol Gustavo)"
    },

    portuguese: {
        title: "Consciência Financeira",
        textOne: "Nós, do financi.guru, desejamos que os princípios da educação financeira sejam disponíveis a todos.",
        textTwo: "Num mundo tão complicado, cheio de golpes e malícias que tentam roubar seu dinheiro, é muito importante saber como lidar com perigos que podem acabar te prejudicando financeiramente.",
        cardOneTitle: "Como derrotar o Consumismo"
    }
}

const title = document.querySelector("#titulo");
const paragraphs = document.querySelectorAll("p");
const titles = document.querySelectorAll("h1");

function translate(language) {
        title.innerHTML = translations[language].title;

        paragraphs[0].innerText = translations[language].textOne;
        paragraphs[1].innerText = translations[language].textTwo;

        titles[1].innerText = translations[language].cardOneTitle
}

const inglesButao = document.querySelector("#ingles")
const espanholButao = document.querySelector("#espanhol")
const portuguesButao = document.querySelector("#portugues")

inglesButao.addEventListener('click', () => {
    translate("english")
})
espanholButao.addEventListener('click', () => {
    translate("spanish")
})
portuguesButao.addEventListener('click', () => {
    translate("portuguese")
})