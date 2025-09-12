let darkmode = false;
const modals = document.querySelectorAll(".modal")
function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")    

    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
    });

    modals.forEach(modal => {
        modal.classList.toggle('dark-modal');
    })
    darkmode = !darkmode;

    sun.classList.toggle('hide');
    moon.classList.toggle('hide');
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
        textOne: "We at financi.guru want the principles of financial education to be available to everyone.",
        textTwo: "In such a complicated world, filled with malice and scams that try to take away your money, it is vital to know how to deal with dangers that can harm you financially.",
        fraseEfeito: "If you want to learn how to do so, you've come to the right place.",
        cardOneTitle: "How to defeat consumerism",
        precardText: "Check out our topics",
        cardSmallTitles: [
            "Consumerism",
            "Planning",
            "Credit & Debit",
            "Scams",
            "Cryptocurrency",
            "Investing"
        ]
    },
    
    spanish: {
        title: "Conciencia financiera",
        textOne: "En financi.guru queremos que los principios de la educación financiera estén disponibles para todos, los necesiten o no.",
        textTwo: "En un mundo tan complejo, lleno de estafas y planes maliciosos que intentan robarte tu dinero, es muy importante saber cómo lidiar con los peligros que podrían acabar perjudicándote financieramente.",
        fraseEfeito: "Si necesitas aprender cómo hacer esto, estás en el lugar correcto.",
        precardText: "Confere nuestros temas",
        cardSmallTitles: [
            "Consumismo",
            "Planificación",
            "Credito y Debito",
            "Estafas",
            "Criptomonedas",
            "Inversiones"
        ],
        cardTitles: [
            "Cómo vencer el consumismo",
            
        ]
    },

    portuguese: {
        title: "Consciência Financeira",
        textOne: "Nós, do financi.guru, desejamos que os princípios da educação financeira sejam disponíveis a todos.",
        textTwo: "Num mundo tão complicado, cheio de golpes e malícias que tentam roubar seu dinheiro, é muito importante saber como lidar com perigos que podem acabar te prejudicando financeiramente.",
        fraseEfeito: "Se precisa aprender a fazer isso, você está no lugar certo",
        cardOneTitle: "Como derrotar o consumismo",
        precardText: "Confira os nossos tópicos",
        cardSmallTitles: [
            "Consumismo",
            "Planejamento",
            "Crédito e Débito",
            "Golpes",
            "Criptomoedas",
            "Investimentos"
        ]
    }
}

const title = document.querySelector("#titulo");
const paragraphs = document.querySelectorAll("p");
const titles = document.querySelectorAll("h1");
const fraseDeEfeito = document.querySelector("#frasedeefeito");
const precard = document.querySelector(".precard-text");

const cardSmallTitles = document.querySelectorAll('.card-small-title');

function translate(language) {
        title.innerHTML = translations[language].title;

        paragraphs[0].innerText = translations[language].textOne;
        paragraphs[1].innerText = translations[language].textTwo;

        titles[1].innerText = translations[language].cardOneTitle;

        fraseDeEfeito.innerText = translations[language].fraseEfeito;
        precard.innerText = translations[language].precardText;

        let i = 0;
        cardSmallTitles.forEach(element => {
            element.innerText = translations[language].cardSmallTitles[i];
            i++;
            console.log(i)
        })

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