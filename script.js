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
    element.addEventListener('click', () => {
        const modalBackground = document.createElement('div')
        modalBackground.className = 'modal-background'
        document.body.appendChild(modalBackground)

        const modal = document.createElement("div");
        modal.className = 'modal darkable'
        //TODO - fix
        if (darkmode) {
            modal.style.backgroundColor = '#292929'
            modal.style.color = 'white'
        }
        if (!darkmode) {modal.style.backgroundColor = 'white'}
        
        modalBackground.appendChild(modal)
        const content = createModalContent();
        console.log(content, 'created content')
        appendContent(content, modal)
        
        document.body.style.overflowY = 'hidden'
    })
})

function createModalContent() {
    const content = [
        {
          type: 'div',
          content: "",
          class: "closeButtonContainer",
          children: [
            {
                type: 'div',
                content: '<p>x</p>',
                class: "closeButton",
                events: [
                    {
                        type: 'click',
                        handler: () => {
                            const modalBackground = document.querySelector('.modalBackground');
                            document.body.removeChild(modalBackground)
                        }
                    }
                ]
            }
          ]
        }
    ]
    return content
}

function appendContent(content, parent) {
    content.forEach(elementData => {
        const element = document.createElement(elementData.type);
        if (elementData.content !== '') {
            element.innerHTML = elementData.content
        }
        element.className = elementData.class;
        if (elementData.events) {
            elementData.events.forEach(event => {
                element.addEventListener(event.type, event.handler)
            })
        }
        parent.appendChild(element);
        elementData.children && appendContent(elementData.children, element)
    })
}
