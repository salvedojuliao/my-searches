const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
    // Toogle significa = Adiciona quando não tenha, remova quando tenha

}

btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)
// event.currentTarget.setAttribute('aria-expanded', 'true').
