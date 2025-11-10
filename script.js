let darkmode = false;
const modals = document.querySelectorAll(".modal");
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

let isLangOpen = false;
function toggleLanguageDisplay() {
    if (isLangOpen) {
        langContent.style.animation = "none";
        langContent.offsetWidth;
        langContent.style.animation = "dropDown 0.5s reverse";
        langContent.addEventListener('animationend', () => {
            langContent.classList.add('hide');
        }, { once: true })
    } else {
        langContent.style.animation = "none";
        langContent.offsetWidth;
        langContent.style.animation = "dropDown 0.5s forwards";
        langContent.classList.remove('hide');
    }
    isLangOpen = !isLangOpen;
}

// traduções
const translations = {
    english: {
        title: "Financial Consciousness",
        textOne: "We at financi.guru want the principles of financial education to be available to everyone.",
        textTwo: "In such a complicated world, filled with malice and scams that try to take away your money, it is vital to know how to deal with dangers that can harm you financially.",
        fraseEfeito: "If you want to learn how to do so, you've come to the right place.",
        cardOneTitle: "How to defeat consumerism",
        precardText: "Check out our topics",
        clickToAccess: "Click a card to access its content",
        // linha 67 haha
        cardSmallTitles: [
            "Consumerism",
            "Planning",
            "Credit & Debit",
            "Scams",
            "Cryptocurrency",
            "Investing"
        ],
        cardTitles: [
            "How to defeat consumerism",
            "Planning",
            "Difference between credit & debit",
            "The dangers of scams",
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
        clickToAccess: "Haz clic en una tarjeta para ver su contenido",
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
            "Planificacíon",
            "Diferencia entre crédito y débito",
            "Los peligros de las estafas",
            "Critpomonedas",
            "Inversiones"
        ]
    },

    portuguese: {
        title: "Consciência Financeira",
        textOne: "Nós, do financi.guru, desejamos que os princípios da educação financeira sejam disponíveis a todos.",
        textTwo: "Num mundo tão complicado, cheio de golpes e malícias que tentam roubar seu dinheiro, é muito importante saber como lidar com perigos que podem acabar te prejudicando financeiramente.",
        fraseEfeito: "Se precisa aprender a fazer isso, você está no lugar certo.",
        precardText: "Confira os nossos tópicos",
        clickToAccess: "Clique em um cartão para acessar seu conteúdo",
        cardSmallTitles: [
            "Consumismo",
            "Planejamento",
            "Crédito e Débito",
            "Golpes",
            "Criptomoedas",
            "Investimentos"
        ],
        cardTitles: [
            "Como derrotar o consumismo",
            "Investimentos",
            "Diferenças entre Crédito e Débito",
            "Os perigos dos golpes",
            "Criptomoedas",
            "Investimento"
        ],

    }
}

function translate(language) {
    const elementsToTranslate = document.querySelectorAll('[data-tk]');
    const translationSet = translations[language];

    elementsToTranslate.forEach(element => {
        const keyWithIndex = element.getAttribute('data-tk');
        let text = '';

        if (keyWithIndex.includes(':')) {
            const [arrayKey, indexString] = keyWithIndex.split(':');
            const index = parseInt(indexString, 10);

            if (translationSet[arrayKey] && Array.isArray(translationSet[arrayKey])) {
                text = translationSet[arrayKey][index];
            }
        } else if (keyWithIndex.includes('.')) {
            text = keyWithIndex.split('.').reduce((obj, k) => obj[k], translationSet);
        } else {
            text = translationSet[keyWithIndex];
        }

        if (text) {
            element.innerText = text;
        }
    });
}
const pButton = document.querySelector('#portugues');
const iButton = document.querySelector('#ingles');
const eButton = document.querySelector('#espanhol');
// 167

pButton.addEventListener('click', () => { translate('portuguese') })
iButton.addEventListener('click', () => { translate('english') })
eButton.addEventListener('click', () => { translate('spanish') })

// header estiloso por dani
const header = document.querySelector('header');
const logo = header.querySelector('.logoimage');
const headerElements = header.querySelectorAll('header > *');

function handleScrollSmall() {
    const intro = document.querySelector('.intro');
    if (window.scrollY <= 0) {
 
        header.style.height = `auto`;
        headerElements.forEach(el => el.classList.remove('hide'));
        logo.style.height = `50px`;
        intro.style.marginTop = `120px`
    } else {
        header.style.height = `52px`;
        headerElements.forEach(el => {
            if (!el.className.includes('logo')) el.classList.add('hide');
        });
        logo.style.height = `30px`;
        intro.style.marginTop = `60px`
    }
}

function handleScrollLarge() {
    const AUMENTO = 1.1;
    if (window.scrollY <= 0) {
        header.style.height = `90px`;
        headerElements.forEach(el => {
            el.style.transform = `scale(${AUMENTO})`;
            el.style.transition = `0.5s ease-out`;
        });
    } else {
        header.style.height = `52px`;
        headerElements.forEach(el => {
            el.style.transform = `scale(1)`;
            el.style.transition = `0.5s ease-out`;
        });
    }
}

const mediaQuery = window.matchMedia('(max-width: 600px)');

function updateScrollHandler(e) {
    window.removeEventListener('scroll', handleScrollSmall);
    window.removeEventListener('scroll', handleScrollLarge);
    if (e.matches) {
        window.addEventListener('scroll', handleScrollSmall);
        console.log('Modo mobile ativo');
    } else {
        window.addEventListener('scroll', handleScrollLarge);
        console.log('Modo desktop ativo');
    }
}

mediaQuery.addEventListener('change', updateScrollHandler);

updateScrollHandler(mediaQuery);