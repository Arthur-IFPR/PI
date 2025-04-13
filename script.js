function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        const currentClass = element.className
        element.classList.toggle('dark-mode')
    });
}