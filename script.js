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
                forgot: "Famous scams",
                p1: "As everyone is mostly aware, <b>Scams</b> are dirty & anti-ethical ways of taking and earning money from other poeple, most of the time using social engineering to manipulate and trick victims.",
                p2: "With such an interconnected world and the internet becoming a fundamental part of our lives, scams are becoming increasingly dangerous and easy to apply, therefore it is crucial to learn how to avoid them",
                p3: "To help with identifying and dealing with said scams, along this small article, we'll use some images generated by <a href=\"https://postfully.app/tools/text-message-generator/\">Postfully</a> to simulate fictional situations. <br><i>we're sorry for the untranslated images, by the way.</b>",
                golpe1: "Situation 1 - Urgency",
                p4: "The scammer tries, in this situation, to impersonate someone of trust, be it a family member or a friend (like Michael Jackson). They will make up a story that involves an urgent payment, such as a net loss or a car accident (like driving it right after a beer...) In case they have the same profile picture or similar data to the person they're impersonating, it is likely that the impersonated person has their number cloned, and will ask you for money as if they were said person. <br><br> <b>Identify</b><br>• Usually their number appears as unsaved;<br> • The impersonated person did not contact you beforehand;<br>• If still doubting, ask something only the person would know;<br><br>Acting<br>1. Check the person's old number;<br>2. Contact the impersonated;<br>3. Block and report the account.",
                golpe2: "Situation 2 - Unexpected purchase",
                p5: "The scammer will try to impersonate a bank company, usually used by the victim, to obtain sensitive info.<br>Common techniques include saying that an unexpected purchase (there is no purchase) was made, and the victim must send their credit card information (do not), or asking for 'verification' by entering a sketchy link. The account will use automated-like messages and a high monetary value to scare victims into buying into the scam.<br><br>Identifying:<br>• Something about 'unauthorized purchase' or similar;<br> • Sketchy link<br>• Informal contacting (companies will always contact you by e-mail!).<br><br><b>Acting:</b><br> 1. Block the number and report;<br>2. Go on with your day, really.",
                golpe3: "Situation 3 - Lucky winner",
                p6: "The scammer will impersonate something related to giveaways or absurd sales. The difference in this scam is that they'll reach out to you saying you're their lucky winner, and to claim whatever reward they offer, you have to go through a link. Once you click the link, well, bad things happen. <br><br><b>Identifying</b>• Suspicious link; <br>• Giveaways that you did not partake in; <br>• Absurd sales or free prizes (nothing is free, really).<br><br>Acting:<br>1. Block and report the account;<br>2. Tell vulnerable people about the scam, as this one has a high chance of working against them;<br>3. Just for safety, change your passwords.",
                golpe4: "Situation 4 - Celebrities",
                p7: "The scammer will try to impersonate a famous, admirable or trustworthy person such as a president or celebrity. They will then ask for a favor, or offer an opportunity, or sales, or anything related to easy money. With the all-time-high ascension of AI, it's been much easier to apply these scams due to deepFakes and stuff like that.<br>Although, honestly, this one is so stupidly easy to identify that their target victims have become innocent people on the internet.<br><br><b>Identifying:</b>• AI generated videos;<br>• Absurd offers (sales, easy money, prizes), • Links and redirects.<br><br>Acting:<br>1. Don't click on any links.<br>2. Block, report and go on with your day.",
                golpe5: "Situation 5 - Bonuses",
                p8: "The scammer will offer easy money, often disguised as a company or institution that's looking for employees. They will usually offer jobs like surveys, advertising, or anything really easy in general (e.g. 'get paid to walk').<br><br><b>Identifying:</b><br>• Buzzwords like 'survey', 'get paid to', 'easy money';<br> • Sketchy QR code or link.<br>",
                p9: "General rules",
                ul: "<li>Never click sketchy links;</li><li>Always read information with patience;</li><li>Don't take impulsive actions;</li><li>Distrust everything at first;</li><li>Be wary of the sites you visit;</li><li>If the time comes and you're a victim of a scam, stay calm, and never forget to report;</li><li>In case of financial loss from a scam, contact your bank company.</li>"

            },
            cardFive: {
                p1: "Cryptocurrencies emerged as a digital and decentralized alternative to traditional money. Unlike currencies issued by governments, such as the real or the dollar, cryptocurrencies operate on distributed networks based on blockchain — a technology that records transactions in a transparent, secure, and practically immutable way.",
                h21: "How do cryptocurrencies work?",
                li1: "<strong>Blockchain - </strong>It is a large digital ledger, maintained by thousands of computers around the world. Each transaction is verified by network participants and stored in chained blocks, forming a history that cannot be altered without user consent.",
                li2: "<strong>Decentralization - </strong>There is no central authority controlling the currency. This reduces dependence on banks or governments and enables direct transactions between people anywhere in the world.",
                li3: "<strong>Encryption -</strong>Transactions are protected by cryptographic algorithms that ensure user security and privacy.",
                li4: "<strong>Digital wallets</strong>To use cryptocurrencies, the user needs a wallet, which can be an application, physical device, or even a piece of paper containing access keys that give control over their funds.",
                h22: "Why do cryptocurrencies attract so many users?",
                li5: "<strong>Fast and low cost:</strong>: international transfers can be made in minutes, without traditional bureaucracy.",
                li6: "<strong>Global access</strong>: anyone with internet access can participate, even without a bank account.",
                li7: "<strong>Transparency and safety</strong>: blockchain offers transparency and makes fraud difficult.",
                li8: "<strong>Innovation</strong>: in addition to serving as currency, cryptocurrencies enable new technologies such as smart contracts and decentralized applications (dApps).",
                h23: "Why is it worth knowing this technology?",
                p2: "\"Cryptocurrencies represent one of the most relevant technological and economic transformations of recent decades. More than just a financial asset, they introduce a new paradigm of trust, security, and autonomy in the circulation of value. Even if someone does not wish to invest, understanding this technology is worthwhile because it already influences several sectors, from payment methods to logistics, digital contracts, and data authentication.",
                p3: "Understanding how cryptocurrencies and blockchain work can open doors to professional opportunities in emerging areas, stimulate technological innovation, and expand the ability to interpret changes in the global economic landscape. In addition, this knowledge allows people to understand new forms of transaction, make more informed decisions in the digital environment, and anticipate trends that will likely be part of the future of financial and technological interactions.\""
            },
            cardSix: {
                p1: "These are safe ways to invest money so that it grows over time, generating profit.",
                h31: "Every investment has these three characteristics.",
                li1: "<strong>Profitability</strong> - Quanto pode render",
                li2: "<strong>Risk</strong> - How much can you earn",
                li3: "<strong>Liquidity</strong> - How quickly do you recover the money invested?",
                h32: "We also have three types of investments:",
                li4: '<strong>Fixed income</strong></li>',
                p2: '<p>You "lend" money to the government and receive interest. Examples include Treasury Direct or Certificates of Deposit (CDBs). But why invest in fixed income? Simply put, it\'s the safest, has predictable returns, and is ideal for beginners.</p>',
                li5: "<strong>Variable income</strong>",
                p3: "Returns vary daily, and can increase or decrease drastically. Examples include company stocks, real estate investment trusts (REITs), and most importantly, the cryptocurrency mentioned earlier. But why invest in variable income? Simply put, it has high volatility, higher returns in the long term, but requires research before investing.",
                li6: "<strong>Alternative investments</strong>",
                p4: "Options that are outside the traditional market. Such as real estate, precious stones, startups, and collectibles. This investment has less liquidity but can protect against inflation.",
                h33: "<strong>Examples:</strong>",
                li7: "Investing R$1,000 in Treasury Selic yields close to the Selic rate (currently high or low depending on the year). Very low risk and ideal for an emergency fund.",
                li8: "Buying Petrobras (PETR4) shares, with the possibility of receiving dividends, and the price may rise or fall depending on the economy, oil, and politics.",
                li9: "Investing in a REIT (HGLG11) where you buy a portion of logistics warehouses and receive monthly income, but the value of the shares varies.",
                h34: "Summarizing",
                p5: "Investments are ways to apply money to make it grow over time, potentially yielding returns through appreciation or interest. They are mainly divided into fixed income (Did scientists just quantum entangle a living tardigrade!?), which offers greater security, and variable income (stocks, ETFs, REITs, and cryptocurrencies), which can provide higher returns but with more risk. There are also alternative investments, such as gold, real estate, and startups. Examples include investing in Treasury Selic, buying Petrobras shares, investing in REITs, or Bitcoin. To learn more, good websites include Tesouro Direto, Banco Central, Investing, Status Invest, and Suno. It is important to study, diversify, and never invest in what you don't understand.",
            },
            footercopyright: "This page is licensed under Creative Commons Attribution-Non Commercial 3.0 Brazil. <br> Do not use this website for commercial purposes.",
            sobre: "About",
            codigofonte: "Source code",
            creditos: "Credits",
            footer: {
                h1: "About our website",
                p1: "This website initiated development in abril 2025. As assigned work from <a href=\"https://ifpr.edu.br/assis-chateaubriand/\"IFPR</a>'s Assis Chateaubriand campus, PR, financi.guru was made for the Integrater Project I (am steve) by Daniel Flowers, David Seven, and Arthur Escobar.",
                p2: "Ever since the beninging, financial education interested (among) us a lot, and we're surprised by the amount of people that don't know the bare basics - and that's what we're trying to solve",
                p3: "Yeah, of course, this website isn't in professional standards, however, we are very proud (we're not actually proud, shut the fuck up) of the project we've built. We hope financi.guru can serve everyone well!",
                porquefinanciguru: "Why 'financi.guru'?",
                esquecidessamerda: "A guru is an intellectual leader, a spiritual guide for their leig followers. And that's what financi.guru seeks to be, in the financial aspect, of course.<br>Also, it's a silly pun: 'financi.guru' might be read as 'finanseguro', which, in Portuguese, can mean 'Safe finances' (horrible translation).",
                creditossmegma: "Credits",
                daniel: "Daniel of Oliver Flowers",
                danielinfo: "<li>Consumerism, Planning, Credit & Debit, and Scams cards</li><li>Translation to English (sorry)</li><li>MAJOR, ABSOLUTELY NECESSARY contrubutions to JS code (that other dawg wouldn't be no nothin without me)</li><li>Wireframe</li><li>CSS programming (html too)</li>",

                arthur: "Arfer Brave Escobar",
                arthurinfo: "<li>Cryptocoins card</li><li>Graphic desing</li><li>A big part of JS code</li><li>Translation to English too</li><li>CSS programming</li><li>Idea of this page's name</li>",

                davi: "David Colanc Seven",
                daviinfo: "<li>Translation to Español</li><li>Investments and Credit & Debit cards</li><li>Graphic Design</li><li>HTML programming</li><li>CSS programming</li>",

                svgrepo: "<a href=\"https://www.svgrepo.com/\"><b>Ess Vee(ronica) Gee REPO</b></a>",
                svgrepoinfo: "<li>Liberalyt a free imagens and pee ann gee for use in a website build</li><li>Everyone Ess Vee Gee that this page are donwloand from Ess Vee Gee repo website</li>",
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
            ],
            cardOne: {
                p1: "¿Alguna vez te has sorprendido comprando mucho más de lo que necesitas? ¿Gastando demasiado dinero en cosas innecesarias? Bueno. Eso se llama <b>Consumismo</b>.",
                p2: "Según el diccionario en línea <a href=\"https://languages.oup.com/\" target=\"_blank\">Oxford Languages</a>, el Consumismo se define como \"<i>El acto, efecto, hecho o práctica de consumir en cantidades desproporcionadas\"</i>. Es el acto de comprar o consumir demasiado, a menudo movido por emociones, sin necesidad real. En este pequeño artículo, aprenderemos cómo no caer en el consumismo y cómo evitar sus trampas que algún día pueden ponerte en deudas graves.",
                p3: "<b>Compras impulsivas</b>",
                p4: "Las compras que se hacen sin mucho pensamiento o de manera inmediata a menudo te llevan al consumismo y a la pérdida de dinero. Principalmente en tiendas y supermercados, los productos más caros siempre están 'en oferta', a pesar de que el precio original sea incluso más bajo.<br> De hecho, la palabra 'oferta' está tan grabada en nuestros sistemas que solo verla asociada a algo que deseas es suficiente para desencadenar múltiples respuestas nerviosas, causando una sensación de ansiedad como si dijeras '¡necesito comprar esto, o me arrepentiré!'.",
                p5: "Ten cuidado con las ofertas, especialmente en festividades y feriados. Las tiendas no son lo suficientemente tontas como para perder dinero: si hay una oferta, hay una ganancia.",
                p6: "Supermercados",
                p7: "Aún en el tema de compras, hay algunas reglas básicas que nos permiten ahorrar más en comestibles:",
                p8: "<b>Presupuesto fijo</b>: Separa una cantidad específica para usar en comestibles. De esta manera, evitas comprar de más y compras solo lo necesario.",
                p9: "<b>Lista de compras</b>: El día anterior, recorre tu casa y revisa qué falta y qué aún tienes, y crea una lista de compras basada en eso. Si vas a comprar con un conjunto de artículos ya decidido, es más fácil evitar gastos innecesarios.",
                p10: "<b>Frecuencia</b>: Ir al supermercado solo una vez al mes es mucho más económico que ir una vez por semana o cada dos semanas. Piénsalo: cuanto menos vayas al supermercado, menos oportunidades tendrás de comprar cosas innecesarias. Además, ¿sabías que los precios tienden a subir un poco cuando empiezan a llegar los pagos del público general? Es ideal dejar las compras para más tarde, normalmente a mitad del mes.",
                p11: "Peligros",
                p12: "Actuar como un consumista puede ser muy peligroso, financieramente hablando. Puede empezar con un par de zapatos nuevos que compraste y no usaste, y probablemente terminará con que vendas tu casa debido a adicciones al juego. <i>aunque esa última afirmación es un poco exagerada</i>, obtener tu placer, tu estado de ser y tu propósito de comprar cosas no es saludable. Recuerda que el consumismo es una trampa diseñada — que uno debe evitar, en todo momento, para proteger su dinero. Tus ahorros son un recurso para administrar, no un boleto al paraíso: el dinero puede comprar felicidad, sí, pero su ausencia dolerá mucho más.",
                p13: "En conclusión, podemos derrotar el consumismo practicando un consumo saludable, preparándonos antes de comprar, y adquiriendo solo lo que es necesario cuando es necesario. Evitar estas trampas es el primer paso hacia una vida financiera próspera. No importa, hasta cierto punto, la cantidad de dinero que tengas: siempre puedes, siempre, ahorrar mucho más recortando vanidades que consumes."
            },
            cardTwo: {
                p1: "Sin lugar a dudas, uno de los pasos más vitales para lograr una vida financiera exitosa es el <b>Planificación</b>.<br> Sin una hoja de planificación adecuada, no tienes control sobre tu propio dinero. No sabrás exactamente de dónde vienen y a dónde van tus recursos y, lo más importante, te costará mucho más alcanzar tus sueños de consumo. En este artículo, esperamos mostrarte los principales puntos a tener en cuenta al crear una buena planificación financiera que te permita tener más control sobre tu propio dinero, sin importar cuánto tengas.",
                p2: "Presupuesto personal",
                p3: "Aunque pueda sonar tonto al principio, hacer un presupuesto personal —es decir, una hoja o un lugar donde anotes cada centavo que entra y sale de tu cuenta— es muy necesario.<br> Necesitas saber cuánto y en qué estás gastando para no perderte. Notar y cortar costos superfluos y lujos puede salvarte en un apuro más adelante.<br> Puedes usar aplicaciones como Excel o <a href=\"https//:docs.google.com/spreadsheets/u/0/\">Google Sheets</a> para ahorrar tiempo, pero caray, puedes comenzar simplemente con papel y bolígrafo. Por favor, si aún no tienes uno, <b>¡empieza un presupuesto personal!</b>",
                p4: "Distribución de gastos",
                p5: "Saber <i>dónde</i> usar tu dinero también es muy importante. Una de las reglas más populares es la llamada '50/30/20'<br> <i>por cierto, lamentamos las imágenes no traducidas.</i>",
                p6: "Siguiendo esta regla, asignas el 50% de tus ingresos netos a gastos esenciales (servicios, comida, alquiler...), el 30% a gastos discrecionales (entretenimiento, suscripciones...) y el 20% al ahorro, preferiblemente en una cuenta de emergencias, para ayudar a financiar metas futuras o cubrir emergencias. Sigue esta regla si buscas más seguridad y estabilidad; generalmente es mejor para personas con menos dinero, como estudiantes.",
                p7: "Otro enfoque similar es la <b>regla 70/20/10</b>:",
                p8: "Esta regla tiene una filosofía diferente: el 70% de tu dinero va a gastos esenciales (esto incluye lujos también), el 20% al ahorro y el 10% restante se invertiría. Se centra más en el crecimiento financiero al designar una parte específicamente para invertir, aunque sacrificando un poco de seguridad. Sin embargo, a largo plazo, esto puede ser beneficioso.",
                p9: "Construyendo un Fondo de Emergencia",
                p10: "Con el mundo impredecible de hoy, es sabio tener una reserva de emergencia. Los especialistas sugieren ahorrar el equivalente a 5 o 6 meses de gastos. Por ejemplo: si ganas $10 y gastas $5 en gastos fijos, ahorrar $2 por mes durante dos años da como resultado $48 ahorrados para emergencias.<br>El punto clave: nunca sabes cuándo ocurrirán eventos inesperados, por lo que ahorrar es muy prudente.",
                p11: "Por lo tanto, en conclusión: saber de dónde viene tu dinero, a dónde va, aplicarlo correctamente y prepararte para eventos inesperados reduce enormemente el estrés. Planea siempre con anticipación, evita actuar impulsivamente y sé sabio con lo que gastas.",
            },
            cardThree: {
                p1: "Una de las cosas más cruciales y básicas para entender al aprender sobre finanzas personales es la diferencia entre <b>crédito</b> y <b>débito</b>. Según PagBank, las tarjetas de débito y crédito están entre las formas de pago más utilizadas en Brasil. ¿Sabes cómo funciona cada una — y cuál usar en cada situación?",

                p2: "Una encuesta del Banco Central (“El brasileño y su relación con el dinero”, 2024) reveló que el 69.1% de los brasileños usan tarjetas de débito, mientras que el 51.6% usan tarjetas de crédito. Y te sorprendería la cantidad de personas que las usan de forma incorrecta.",

                p3: "Tarjeta de Crédito",
                p4: "Una tarjeta de crédito te permite retrasar el pago: las compras se acumulan y se cobran en la fecha de vencimiento de la tarjeta. También puedes usar cuotas: por ejemplo, si divides una compra de $1,000 en cinco pagos, pagarás $200 por mes durante cinco meses (en un mundo perfecto; las tarjetas de crédito siempre vienen con impuestos, en cierta medida). <br> Otro punto clave es el puntaje de crédito: cuanto más pagues a tiempo a tu banco y cuanto menos les debas, mayor será tu puntaje de crédito — generalmente un valor entre 0 y 1000, aunque es subjetivo. El puntaje de crédito te permite obtener menos tarifas al realizar compras, ya que demuestra al banco que les pagarás de vuelta. Entonces, si deseas usar la tarjeta de crédito pero aún así no quieres gastar demasiado dinero, intenta mantener tu puntaje de crédito alto.",

                p5: "Tarjeta de Débito",
                p6: "Una tarjeta de débito descuenta el valor directamente del saldo de tu cuenta bancaria. Funciona como dinero electrónico.<br>Por ejemplo: si tienes $500 y haces una compra de débito de $100, tu saldo pasa a ser $400. Si no hay suficiente saldo, la compra es rechazada. Esta es la opción más ideal para compras inmediatas o más baratas, ya que el pago es inmediato y (en su mayoría) libre de impuestos.",

                p7: "En resumen:",
                p8: "Usa <b>débito</b> para mantener el control diario y evitar gastar de más. Usa <b>crédito</b> responsablemente: ayuda con compras mayores, cuotas o recompensas — pero sin planificación, puede generar deudas con altos intereses con el tiempo. Sin embargo, las tarjetas de crédito también pueden ser una herramienta poderosa, en las manos correctas."
            },
            cardFour: {
                forgot: "Estafas famosas",
                p1: "Como la mayoría de la gente sabe, las <b>estafas</b> son formas sucias y antiéticas de obtener y ganar dinero de otras personas, la mayoría de las veces utilizando ingeniería social para manipular y engañar a las víctimas.",
                p2: "Con un mundo tan interconectado y con Internet convirtiéndose en una parte fundamental de nuestras vidas, las estafas se vuelven cada vez más peligrosas y fáciles de aplicar; por lo tanto, es crucial aprender a evitarlas.",
                p3: "Para ayudar a identificar y lidiar con dichas estafas, a lo largo de este pequeño artículo usaremos algunas imágenes generadas por <a href=\"https://postfully.app/tools/text-message-generator/\">Postfully</a> para simular situaciones ficticias. <br><i>lamentamos las imágenes sin traducir, por cierto.</i>",
                golpe1: "Situación 1 - Urgencia",
                p4: "En esta situación, el estafador intenta hacerse pasar por alguien de confianza, ya sea un familiar o un amigo (como Michael Jackson). Inventarán una historia que involucra un pago urgente, como una pérdida financiera o un accidente automovilístico (como manejar después de una cerveza...). En caso de que tengan la misma foto de perfil o datos similares a la persona que están suplantando, es probable que la persona real haya tenido su número clonado, y el estafador te pedirá dinero fingiendo ser dicha persona. <br><br> <b>Identificación</b><br>• Normalmente su número aparece como no guardado;<br>• La persona suplantada no te contactó previamente;<br>• Si aún tienes dudas, pregunta algo que solo esa persona sabría;<br><br>Actuación<br>1. Revisa el número antiguo de la persona;<br>2. Contacta a la persona suplantada;<br>3. Bloquea y reporta la cuenta.",

                golpe2: "Situación 2 - Compra inesperada",
                p5: "El estafador intentará hacerse pasar por una entidad bancaria, generalmente la que usa la víctima, para obtener información sensible.<br>Técnicas comunes incluyen decir que se realizó una compra inesperada (no existe ninguna compra) y que la víctima debe enviar la información de su tarjeta de crédito (no lo hagas), o pedir una 'verificación' mediante un enlace sospechoso. La cuenta usará mensajes tipo automatizados y montos altos para asustar a la víctima hasta que caiga en la estafa.<br><br><b>Identificación:</b><br>• Algo relacionado con 'compra no autorizada' o similar;<br>• Enlace sospechoso;<br>• Contacto informal (¡las empresas siempre contactan por e-mail!).<br><br><b>Actuación:</b><br>1. Bloquea el número y reporta;<br>2. Sigue con tu día, literalmente.",

                golpe3: "Situación 3 - Suertudo ganador",
                p6: "El estafador se hará pasar por algo relacionado con sorteos o ventas absurdas. La diferencia en esta estafa es que te contactarán diciendo que eres el ganador afortunado, y para reclamar el premio debes ingresar a un enlace. Una vez haces clic, bueno, cosas malas pasan. <br><br><b>Identificación</b><br>• Enlace sospechoso;<br>• Sorteos en los que no participaste;<br>• Ofertas absurdas o premios gratis (nada es gratis, en serio).<br><br>Actuación:<br>1. Bloquea y reporta la cuenta;<br>2. Avisa a personas vulnerables sobre la estafa, ya que esta tiene una alta probabilidad de funcionar con ellas;<br>3. Por seguridad, cambia tus contraseñas.",

                golpe4: "Situación 4 - Celebridades",
                p7: "El estafador intentará hacerse pasar por una persona famosa, admirable o confiable, como un presidente o una celebridad. Luego te pedirá un favor, o te ofrecerá una oportunidad, ventas, o cualquier cosa relacionada con dinero fácil. Con el aumento del uso de IA, ha sido mucho más fácil aplicar estas estafas debido a los deepfakes y cosas parecidas.<br>Aun así, honestamente, esta es tan estúpidamente fácil de identificar que sus principales víctimas terminan siendo personas inocentes en Internet.<br><br><b>Identificación:</b>• Videos generados con IA;<br>• Ofertas absurdas (ventas, dinero fácil, premios); • Enlaces y redirecciones.<br><br>Actuación:<br>1. No hagas clic en ningún enlace.<br>2. Bloquea, reporta y sigue con tu día.",

                golpe5: "Situación 5 - Bonificaciones",
                p8: "El estafador ofrecerá dinero fácil, generalmente disfrazado como una empresa o institución que busca empleados. Suelen ofrecer trabajos como encuestas, publicidad o cosas muy fáciles en general (por ejemplo, 'te pagamos por caminar').<br><br><b>Identificación:</b><br>• Palabras clave como 'encuesta', 'te pagamos por', 'dinero fácil';<br>• Código QR o enlace sospechoso.<br>",

                p9: "Reglas generales",
                ul: "<li>Nunca hagas clic en enlaces sospechosos;</li><li>Lee siempre la información con paciencia;</li><li>No actúes impulsivamente;</li><li>Desconfía de todo al principio;</li><li>Ten cuidado con los sitios que visitas;</li><li>Si llega el momento y eres víctima de una estafa, mantén la calma y no olvides reportar;</li><li>En caso de pérdida financiera, contacta a tu banco.</li>"
            },
            cardFive: {
                p1: "Las criptomonedas surgieron como una alternativa digital y descentralizada al dinero tradicional. A diferencia de las monedas emitidas por gobiernos, como el real o el dólar, las criptomonedas funcionan en redes distribuidas basadas en blockchain — una tecnología que registra transacciones de forma transparente, segura y prácticamente inmutable.",
                h21: "¿Cómo funcionan las criptomonedas?",
                li1: "<strong>Blockchain - </strong>Es un gran libro contable digital, mantenido por miles de computadoras alrededor del mundo. Cada transacción es verificada por los participantes de la red y almacenada en bloques encadenados, formando un historial que no puede ser alterado sin el consentimiento de los usuarios.",
                li2: "<strong>Descentralización - </strong>No existe una autoridad central que controle la moneda. Esto reduce la dependencia de bancos o gobiernos y permite transacciones directas entre personas en cualquier parte del mundo.",
                li3: "<strong>Criptografía - </strong>Las transacciones están protegidas por algoritmos criptográficos que garantizan la seguridad y la privacidad de los usuarios.",
                li4: "<strong>Carteras digitales - </strong>Para usar criptomonedas, el usuario necesita una cartera, que puede ser una aplicación, un dispositivo físico o incluso un papel que contenga las claves de acceso que permiten el control de sus fondos.",
                h22: "¿Por qué las criptomonedas atraen a tantos usuarios?",
                li5: "<strong>Rápidas y de bajo costo:</strong> las transferencias internacionales pueden realizarse en minutos, sin la burocracia tradicional.",
                li6: "<strong>Acceso global:</strong> cualquier persona con acceso a internet puede participar, incluso sin una cuenta bancaria.",
                li7: "<strong>Transparencia y seguridad:</strong> la blockchain ofrece transparencia y dificulta los fraudes.",
                li8: "<strong>Innovación:</strong> además de funcionar como moneda, las criptomonedas permiten nuevas tecnologías como contratos inteligentes y aplicaciones descentralizadas (dApps).",
                h23: "¿Por qué vale la pena conocer esta tecnología?",
                p2: "\"Las criptomonedas representan una de las transformaciones tecnológicas y económicas más relevantes de las últimas décadas. Más que un simple activo financiero, introducen un nuevo paradigma de confianza, seguridad y autonomía en la circulación de valor. Incluso si alguien no desea invertir, comprender esta tecnología vale la pena porque ya influye en diversos sectores, desde métodos de pago hasta logística, contratos digitales y autenticación de datos.",
                p3: "Comprender cómo funcionan las criptomonedas y la blockchain puede abrir puertas a oportunidades profesionales en áreas emergentes, estimular la innovación tecnológica y ampliar la capacidad de interpretar los cambios en el panorama económico global. Además, este conocimiento permite a las personas entender nuevas formas de transacción, tomar decisiones más informadas en el entorno digital y anticipar tendencias que probablemente formarán parte del futuro de las interacciones financieras y tecnológicas.\""
            },
            cardSix: {
                p1: "Estas son formas seguras de invertir dinero para que crezca con el tiempo, generando ganancias.",
                h31: "Todo investimento tiene estas tres características:",
                li1: "<strong>Rentabilidad</strong> - Cuánto puede rendir",
                li2: "<strong>Riesgo</strong> - Cuánto puedes ganar o perder",
                li3: "<strong>Liquidez</strong> - Qué tan rápido recuperas el dinero invertido",
                h32: "También existen tres tipos de inversiones:",
                li4: "<strong>Renta fija</strong>",
                p2: "Tú ‘prestas’ dinero al gobierno y recibes intereses. Ejemplos incluyen el Tesoro Directo o Certificados de Depósito (CDBs). ¿Por qué invertir en renta fija? Simplemente porque es la más segura, tiene rendimientos previsibles y es ideal para principiantes.",
                li5: "<strong>Renta variable</strong>",
                p3: "Los rendimientos varían diariamente y pueden aumentar o disminuir drásticamente. Ejemplos incluyen acciones de empresas, fondos inmobiliarios (REITs) y, como mencionado antes, las criptomonedas. ¿Por qué invertir en renta variable? Porque tiene alta volatilidad, mayores retornos a largo plazo, pero requiere investigación antes de invertir.",
                li6: "<strong>Inversiones alternativas</strong>",
                p4: "Opciones que están fuera del mercado tradicional, como bienes raíces, piedras preciosas, startups o coleccionables. Estas inversiones tienen menor liquidez, pero pueden proteger contra la inflación.",
                h33: "<strong>Ejemplos:</strong>",
                li7: "Invertir R$1.000 en el Tesoro Selic genera un rendimiento cercano a la tasa Selic (alta o baja según el año). Riesgo muy bajo y ideal para un fondo de emergencia.",
                li8: "Comprar acciones de Petrobras (PETR4), con posibilidad de recibir dividendos, y cuyo precio puede subir o bajar dependiendo de la economía, el petróleo y la política.",
                li9: "Invertir en un fondo inmobiliario (HGLG11), donde compras una parte de galpones logísticos y recibes ingresos mensuales, aunque el valor de las cuotas varía.",
                h34: "Resumiendo",
                p5: "Las inversiones son formas de aplicar dinero para hacerlo crecer con el tiempo, generando ganancias por valorización o intereses. Se dividen principalmente en renta fija, que ofrece mayor seguridad, y renta variable (acciones, ETFs, REITs y criptomonedas), que puede ofrecer mayores retornos pero con más riesgo. También existen inversiones alternativas, como oro, bienes raíces o startups. Ejemplos incluyen invertir en el Tesoro Selic, comprar acciones de Petrobras, invertir en REITs o Bitcoin. Para aprender más, buenos sitios incluyen Tesouro Direto, Banco Central, Investing, Status Invest y Suno. Es importante estudiar, diversificar y nunca invertir en lo que no entiendes."
            },
            footercopyright: "Esta página está licenciada bajo Creative Commons Attribution-Non Commercial 3.0 Brasil.<br>No utilices este sitio web con fines comerciales.",
            sobre: "Información",
            codigofonte: "Código fuente",
            creditos: "Créditos"
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

    if (pButton) pButton.addEventListener('click', () => window.location.reload());
    if (iButton) iButton.addEventListener('click', () => applyTranslations('english'));
    if (eButton) eButton.addEventListener('click', () => applyTranslations('spanish'));

    const sobreButton = document.querySelector('[data-tk="sobre"]');
    const creditosButton = document.querySelector('[data-tk="creditos"]');

    if (sobreButton) sobreButton.addEventListener('click', () => {showFooterModal("sobre")})
    if (creditosButton) creditosButton.addEventListener('click', () => {showFooterModal("creditos")})

    const langToggle = document.querySelector('#toggle-lang');
    if (langToggle) langToggle.addEventListener('click', toggleLanguageDisplay);

    updateScrollHandler(mediaQuery);
}

function showFooterModal(modal) {
    document.querySelector('.blur-bg').classList.remove('hide');
    const sobre = document.querySelector('.modal-sobre');
    const creditos = document.querySelector('.modal-creditos');

    if (modal === "sobre") { sobre.classList.remove('hide'); creditos.classList.add('hide'); console.log("opened sobre, removed credits");
    }
    else { creditos.classList.remove('hide'); sobre.classList.add('hide'); }
}

function closeFooterModal() {
    document.querySelector('.blur-bg').classList.add('hide');
    const footermodals = document.querySelectorAll('.blur-bg > *');
    for (let modal in footermodals) {
        modal.classList.add('hide');
    }
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
