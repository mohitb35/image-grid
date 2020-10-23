const menuButton = document.getElementById('btn-menu');
const navMenu = document.getElementById('nav-menu');

menuButton.addEventListener('click', toggleMenu);

function toggleMenu(){
	navMenu.classList.toggle('open');
	this.classList.toggle('open');
}