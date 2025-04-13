function toggleDarkMode() {
    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {

        const currentClass = element.className
        element.className = `${currentClass} dark-mode`
    });
}