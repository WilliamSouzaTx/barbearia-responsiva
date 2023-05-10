const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})

const btnsAgendar = document.querySelectorAll('.btn-agendar');

btnsAgendar.forEach(btn => {
  btn.addEventListener('click', () => {
    // Redireciona o usuário para a página de agendamento
    window.location.href = 'https://wa.me/1XXXXXXXXXX';
  });
});


