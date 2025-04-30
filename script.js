function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
    });
}

const cards = document.querySelectorAll(".card");

cards.forEach(element => {
    element.addEventListener('click', () => {
        const modalBackground = document.createElement('div')
        modalBackground.className = 'modal-background'
        document.body.appendChild(modalBackground)


        const modal = document.createElement("div");
        modal.className = 'modal'
    })
})
