document.querySelector('.button-open').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.add('open');   
});
document.querySelector('.button-close').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.remove('open');   
});

const navLinks = document.querySelectorAll('a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('open');   
    });
});
