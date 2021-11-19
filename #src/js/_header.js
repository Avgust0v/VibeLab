// Подчеркивание активной страницы

const links = document.getElementsByClassName("menu__list-link");
const host = window.location.href;
const pulseBtn = document.getElementById('pulse');
const body = document.getElementById('body');
const language = document.getElementById('language');

for (let i = 0;i < links.length; i++) {
	 if(links[i].href == host) {
		links[i].classList.add('menu__list-link--active');
		//  Появление pop-up спустя 5000ms
		setTimeout (()=>{                                           
			const popUp = document.querySelector('.pop-up')
			popUp.classList.add('pop-up--active')
		},5000)
	};
		
		
}
if(pulseBtn.href == host) {
	body.classList.add('body--bg-color');
	for (let i = 0; i < links.length; i++) {
		links[i].classList.add('body--color');
	};
	pulseBtn.classList.add('pulse--bg-color');
	language.classList.add('language--color');
	
}


// Скролл до бота при нажатии 'Написать' 
if (document.querySelector('.contact')) {
	function scrollTo(element) {
		window.scroll({
			left:0,
			top: element.offsetTop,
			behavior: 'smooth',
		})
	}
	
	const buttonContact = document.querySelector('.contact');
	const positionBot = document.querySelector('#title-bot');
	
	buttonContact.addEventListener('click', ()=>{
		scrollTo(positionBot);
	});
}









