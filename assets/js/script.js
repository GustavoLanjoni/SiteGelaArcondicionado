function toggleMenu() {
    const nav = document.querySelector('header nav');
    nav.classList.toggle('active');
}

// Selecione os elementos necessários
const expandTrigger = document.querySelector('.expand-trigger');
const content = document.querySelector('.diferenciais-content');
const arrow = document.querySelector('.arrow');

// Adiciona o evento de clique ao trigger de expandir
expandTrigger.addEventListener('click', () => {
    // Adiciona ou remove a classe para mostrar/esconder o conteúdo
    content.classList.toggle('show');
    
    // Rotaciona a seta quando o conteúdo for exibido
    arrow.classList.toggle('rotate');
});
