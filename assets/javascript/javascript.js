const menuButtons = document.querySelectorAll(".menu-button");
const sidebar = document.querySelector(".sidebar");
const overlay = document.querySelector(".overlay");

// Função para travar o body scroll
function toggleBodyScroll(preventScroll) {
    //Se a ativação do sidebar for verdadeira, atribui os valores a body tag
  if (preventScroll) {
    const scrollY = window.scrollY;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}

// Ativa sidebar quando menu é clicado
menuButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpening = document.body.classList.contains('sidebar-hidden');
        document.body.classList.toggle("sidebar-hidden");
        
        toggleBodyScroll(isOpening);
    });
});

// Fecha sidebar ao clicar no overlay
overlay.addEventListener("click", () => {
    document.body.classList.add("sidebar-hidden");
    toggleBodyScroll(false);
});

// Previne que clicks dentro do sidebar o fechem
sidebar.addEventListener("click", (event) => {
    event.stopPropagation();
});

// Sidebar inicializa como escondido para desktops
if (window.innerWidth > 768) {
    document.body.classList.add("sidebar-hidden");
}