const hamb = document.querySelector('.hamburger')
const navLinks = document.querySelector('.nav-links')
const links = document.querySelectorAll('.nav-links li')


hamb.addEventListener('click', () => {
  navLinks.classList.toggle('open')
  links.forEach(link => {
    link.classList.toggle('fade')
  })
})


window.addEventListener('scroll' , () => {
	let navbar = document.querySelector('nav');


	navbar.classList.toggle('scrolled' , window.scrollY > 0);
})