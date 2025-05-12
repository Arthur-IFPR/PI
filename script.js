let darkmode = false;

function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
    });
    const modals = document.querySelectorAll(".modal")
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


