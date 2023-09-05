
const burguer = document.querySelector('.container_burger_menu');
const menuResponsive = document.querySelector('.container_menu_responsive');
const container = document.querySelector('.container');
const containerClose = document.querySelector('.container_close');

burguer.addEventListener('click', (e) => {
    console.log(e);
    container.style.display = 'none';
    menuResponsive.style.display = 'flex';
});

containerClose.addEventListener('click', (e) => {
    console.log(e);
    container.style.display = 'block';
    menuResponsive.style.display = 'none';
});
