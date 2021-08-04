const skillsContent = document.getElementsByClassName('skills__content'),
skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    if (itemClass === 'skills__content skills__close') {
        this.parentNode.className = 'skills__content skills__open'
    }

    if (itemClass === 'skills__content skills__open') {
        this.parentNode.className = 'skills__content skills__close'
    }

}
skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})
