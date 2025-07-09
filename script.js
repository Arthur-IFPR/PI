
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

const traducao = {
    title: "Financial Conciusness",
    cartao1: "fadsfsdfdsf"
}

function translate() {
    const title = document.querySelector("#titulo");
    title.innerHTML = traducao.title
}