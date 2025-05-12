let darkmode = false;

function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
    });
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
    console.log(cardTopic)
    const modal = document.querySelector(`#card-${cardTopic}`);
    console.log(modal)
    modal.classList.toggle('hide-modal');
}


