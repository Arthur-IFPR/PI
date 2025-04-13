function toggleDarkMode() {
    console.log("am i cooked")

    const elements = document.querySelectorAll(".darkable")
    elements.forEach(element => {
        element.className.replace(".dark-mode")
        console.log(element)
        console.log('its over')
        console.log(element.className)
    });
    console.log(elements.length)
    
    
}