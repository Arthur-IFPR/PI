document.addEventListener('DOMContentLoaded', setup);

let mediaQuery;
let translations;
let darkmode = false;
let isLangOpen = false;

function setup() {
    mediaQuery = window.matchMedia('(max-width: 600px)');

    translations = {
        english: {
            title: "Financial Consciousness",
            textOne: "We at financi.guru want the principles of financial education to be available to everyone.",
            textTwo: "In such a complicated world, filled with malice and scams that try to take away your money, it's vital to know how to deal with dangers that can harm you financially.",
            fraseEfeito: "If you want to learn how to do so, you've come to the right place.",
            cardOneTitle: "How to defeat consumerism",
            precardText: "Check out our topics",
            // linha 67 haha
            clickToAccess: "Click a card to access its content",
            cardSmallTitles: [
                "Consumerism",
                "Planning",
                "Credit & Debit cards",
                "Scams",
                "Cryptocurrency",
                "Investing"
            ],
            cardTitles: [
                "How to defeat consumerism",
                "Planning",
                "Differences between credit & debit",
                "The dangers of scams",
                "Cryptocurrency",
                "Investing"
            ],
            cardOne: {
                p1: "Have you ever caught yourself buying way more than you need? Wasting too much money with unnecessary things? Well. That's called <b>Consumerism</b>.",
                p2: "According to the online dictionary <a href=\"https://languages.oup.com/\" target=\"_blank\">Oxford Languages</a>, Consumerism is defined as \"<i>The act, effect, fact or practice of consuming in disproportionate amounts\"</i>. It's the act of buying or consuming way too much, often moved by emotions, what is not necessary. In this small article, we'll learn how to not fall into consumerism and how to dodge its traps that may put you in heavy debt one day.",
                p3: "<b>Impulse purchasing</b>",
                p4: "Purchases that are made without much thought or that are immediatly made often take you to consumerism and money loss. Mainly in stores and supermarkets, the more expensive products are always 'on sale', despite the original price being even lower. <br> In fact, the word 'sale' is so engraved into our systems that the mere sighting of it associated with anything you wish for is enough to trigger multiple nervous responses, causing a sense of anxiety as if 'i need to buy this, or i'll regret it!'",
                p5: "Be careful with sales, especially on festivities and holidays. Stores aren't dumb enough to lose out on money: if there's a sale, there's a profit.",
                p6: "Supermarkets",
                p7: "Still on the topic of shopping, there's a few rules of thumb that allows us to save more on groceries:",
                p8: "<b>Fixed budget</b>: Take out a specific quantity to use on groceries. That way, you avoid buying too much, and buy only the necessary",
                p9: "<b>Shopping List</b>: On the previous day, go around your house and check what's missing and what's still there, and make a shopping list based off of it. If you go shopping with a preset of items in mind, it's easier to dodge unnecessary costs.",
                p10: "<b>Frequency</b>: Going grocery shopping just once a month is way more economic than going once a week or two weeks. Think about it: the less you go to supermarkets, the less chances you have at buying unnecessary stuff. Also, did you know prices tend to rise by a little whenever the general public's paychecks start coming in? It's ideal to save going shopping for later, usually in the middle of the month.",
                p11: "Dangers",
                p12: "Acting like a consumerist can be very dangerous, financially speaking. It might start with a new pair of shoes you bought and didn't use, and it probably will end with you selling your house due to gambling addictions. <i>while that last statement is a little bit exaggerated</i>, getting your pleasure, state of being and purpose in buying things is not healthy. Remember that consumerism is a designed trap - that one must avoid, at all times, to ward their money. Your savings are a resource to be managed, not a ticket to paradise: money might buy happiness, yeah, but its absence will hurt so much more.",
                p13: "In conclusion, we can defeat consumerism practicing healthy consuming, preparing before purchasing, and buying only what's necessary when it's necessary. Avoiding these traps is the first step to a prosperous financial life. It doesn't matter, to an extent, the amount of money you have - you can always, always, save a lot more by cutting down on vanities that you consume."
            },
            cardTwo: {
                p1: "Without a shadow of a doubt, one of the most vital steps to take on a successful financial life is <b>Planning</b>.<br> Without a proper sheet plan, you have no control over your own money. You won't know exactly where your resources come and go, and, most importantly, you'll have a much harder time achieving your consumer dreams. In this article, we'll hope to show you the main points to take into account when creating good financial planning that allows you to have more control over your own money, no matter how much of it you have.",
                p2: "Personal Budget",
                p3: "Even if it might sound silly at first, making a personal budget, that is, a sheet or note-down place where you write down every bit of money that comes and goes from your account, is very necessary.<br> You need to know how much and what you're spending on so you don't get lost. Noticing and cutting superfluous costs and luxuries might save you in a pinch later.<br> You may use apps like Excel, <a href=\"https//:docs.google.com/spreadsheets/u/0/\">Google Sheets</a> to save time, but heck, you can start with just a pen and paper. Please, if you don't have one yet, <b>start a personal budget!</b>",
                p4: "Expense distribution",
                p5: "Knowing <i>where</i> to use your money is also very important. One of the most popular rules is the so-called '50/30/20'<br> <i>we're sorry for the untranslated images, by the way.</i>",
                p6: "Following this rule, you allocate 50% of your net income to essential expenses (utilities, food, rent...), 30% to discretionary spending (entertainment, subscriptions...), and 20% to savings, preferably in an emergency account, to help fund future goals or cover emergencies. Follow this rule if you're aiming for more security and stability, and is generally better for people with less money, such as students.",
                p7: "Another similar approach is the <b>70/20/10 rule</b>:",
                p8: "This rule has a different philosophy: 70% of your money goes to essential expenses (this includes vanities as well), 20% to savings, and the remaining 10% would be invested. It focuses more on financial growth by designating a portion specifically for investing, although sacrificing a bit of security. However, in the long run, this might be benefitial.",
                p9: "Building an Emergency Fund",
                p10: "With today's unpredictable world, it is wise to have an emergency reserve. Specialists suggest saving the equivalent of 5 or 6 months of expenses. For example: if you earn $10 and spend $5 on fixed expenses, saving $2 per month for two years results in $48 saved for emergencies.<br>The key point: you never know when unexpected events will happen, so saving is very wise.",
                p11: "Therefore, in conclusion: knowing where your money comes from, where it goes, applying it correctly, and preparing for unexpected events greatly reduces stress. Always plan ahead, avoid acting impulsively, and be wise with what you spend on.",
            },
            cardThree: {
                p1: "One of the most crucial and basic things to understand when learning about personal finance is the difference between <b>credit</b> and <b>debit</b>. According to PagBank, debit and credit cards are among the most used forms of payment in Brazil. Do you know how each one works — and which one to use in each situation?",

                p2: "A survey by the Central Bank (“The Brazilian and its Relationship with Money”, 2024) revealed that 69.1% of Brazilians use debit cards, while 51.6% use credit cards. And, you'd be surprised by the amount of people that use them wrongly.",

                p3: "Credit Card",
                p4: "A credit card lets you delay payment - purchases accumulate and are charged on the card's due date. You can also use installments: for example, if you split a $1,000 purchase into five payments, you will pay $200 per month for five months (on a perfect world. credit cards always come with taxes, to some extent). <br> One more key thing is credit score - the more you pay in-due-date to your bank provider, and the less you owe them, the more credit score you'll have: usually a value between 0 and 1000, although it is subjective. Credit score allows you to get less fees when making purchases, as it shows to your bank you'll pay them back - so, if you wish to use the credit card but still don't want to use too much money, try keeping your credit score high",

                p5: "Debit Card",
                p6: "A debit card deducts the value directly from your bank account balance. It works like electronic cash.<br>For example: if you have $500 and make a $100 debit purchase, your balance becomes $400. If there isn't enough balance, the purchase is declined. This one is most ideal for immediate purchases, or cheaper ones since the payment is immediate and (mostly) tax-free.",

                p7: "In summary",
                p8: "Use <b>debit</b> to keep daily control and avoid overspending. Use <b>credit</b> responsibly: it helps with larger purchases, installments or rewards — but without planning, it can generate high-interest debt over time. However, Credit cards can also be a powerful tool, in the right hands."
            },
            cardFour: {
                p1: "As everyone is mostly aware, <b>Scams</b> are dirty & anti-ethical ways of taking and earning money from other poeple, most of the time using social engineering to manipulate and trick victims.",
                p2: "With such an interconnected world and the internet becoming a fundamental part of our lives, "
            }
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

attachEventListeners();

mediaQuery.addEventListener('change', updateScrollHandler);
updateScrollHandler(mediaQuery);
}

function attachEventListeners() {
    const themeButton = document.querySelector('#darkmode-toggle');
    if (themeButton) themeButton.addEventListener('click', toggleDarkMode);

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener('click', e => toggleModal(e.target.id));
    });

    const pButton = document.querySelector('#portugues');
    const iButton = document.querySelector('#ingles');
    const eButton = document.querySelector('#espanhol');

    if (pButton) pButton.addEventListener('click', () => applyTranslations('portuguese'));
    if (iButton) iButton.addEventListener('click', () => applyTranslations('english'));
    if (eButton) eButton.addEventListener('click', () => applyTranslations('spanish'));

    const langToggle = document.querySelector('#toggle-lang');
    if (langToggle) langToggle.addEventListener('click', toggleLanguageDisplay);

    updateScrollHandler(mediaQuery);
}

function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable");
    const modals = document.querySelectorAll(".modal");
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    elements.forEach(el => el.classList.toggle('dark-mode'));
    modals.forEach(el => el.classList.toggle('dark-modal'));

    darkmode = !darkmode;

    if (sun) sun.classList.toggle('hide');
    if (moon) moon.classList.toggle('hide');
}

function toggleModal(cardTopic) {
    const header = document.querySelector('header');
    const modal = document.querySelector(`#card-${cardTopic}`);

    if (!modal) return;

    if (!header.classList.contains('hide') && mediaQuery.matches) {
        header.classList.add('hide');
    } else {
        header.classList.remove('hide');
    }

    modal.classList.toggle('hide-modal');
}

function toggleLanguageDisplay() {
    const langContent = document.querySelector(".lang-content");
    if (!langContent) return;

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

function applyTranslations(language) {
    const translationSet = translations[language];
    const elements = document.querySelectorAll('[data-tk]');

    elements.forEach(el => {
        const key = el.getAttribute('data-tk');
        let text = '';

        if (key.includes(':')) {
            const [k, i] = key.split(':');
            const index = parseInt(i, 10);
            if (Array.isArray(translationSet[k])) text = translationSet[k][index];
        } else if (key.includes('.')) {
            text = key.split('.').reduce((obj, part) => obj[part], translationSet);
        } else {
            text = translationSet[key];
        }

        if (text) el.innerHTML = text;
    });
}

function updateScrollHandler(e) {
    window.removeEventListener('scroll', handleScrollSmall);
    window.removeEventListener('scroll', handleScrollLarge);

    if (e.matches) {
        window.addEventListener('scroll', handleScrollSmall);
    } else {
        window.addEventListener('scroll', handleScrollLarge);
    }
}

function handleScrollSmall() {
    const header = document.querySelector('header');
    const intro = document.querySelector('.intro');
    const logo = document.querySelector('.logoimage');
    const elements = header.querySelectorAll('header > *');

    if (window.scrollY <= 0) {
        header.style.height = "auto";
        elements.forEach(el => el.classList.remove('hide'));
        logo.style.height = `50px`;
        intro.style.marginTop = `120px`;
    } else {
        header.style.height = "52px";
        elements.forEach(el => {
            if (!el.className.includes('logo')) el.classList.add('hide');
        });
        logo.style.height = `30px`;
        intro.style.marginTop = `60px`;
    }
}

function handleScrollLarge() {
    const header = document.querySelector('header');
    const logo = document.querySelector('.logoimage');
    const elements = header.querySelectorAll('header > *');
    const AUMENTO = 1.1;

    if (window.scrollY <= 0) {
        header.style.height = `90px`;
        elements.forEach(el => {
            el.style.transform = `scale(${AUMENTO})`;
            el.style.transition = `0.5s ease-out`;
        });
    } else {
        header.style.height = `52px`;
        elements.forEach(el => {
            el.style.transform = `scale(1)`;
            el.style.transition = `0.5s ease-out`;
        });
    }
}
