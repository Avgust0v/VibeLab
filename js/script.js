
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});


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









;

if(document.querySelector('.cooperation__inner')) {
	const blockMargin = document.querySelector('.cooperation__inner').offsetLeft;
	const sliderMargin = document.querySelector('.swiper-container');
	sliderMargin.style.marginLeft = blockMargin+'px';
}







;



/* © Un Sstrennen, 2020 */

function getCookie(name, json=false) {
	if (!name) {
	  return undefined;
	}
	/*
	Returns cookie with specified name (str) if exists, else - undefined
	if returning value is JSON and json parameter is true, returns json, otherwise str
	*/
	let matches = document.cookie.match(new RegExp(
	  "(?:^|; )" + name.replace(/([.$?*|{}()\[\]\\\/+^])/g, '\\$1') + "=([^;]*)"
	));
	if (matches) {
	  let res = decodeURIComponent(matches[1]);
	  if (json) {
		 try {
			return JSON.parse(res);
		 }
		 catch(e) {}
	  }
	  return res;
	}
 
	return undefined;
 }
 
 function setCookie(name, value, options = {path: '/'}) {
	/*
	Sets a cookie with specified name (str), value (str) & options (dict)
	options keys:
	  - path (str) - URL, for which this cookie is available (must be absolute!)
	  - domain (str) - domain, for which this cookie is available
	  - expires (Date object) - expiration date&time of cookie
	  - max-age (int) - cookie lifetime in seconds (alternative for expires option)
	  - secure (bool) - if true, cookie will be available only for HTTPS.
							  IT CAN'T BE FALSE
	  - samesite (str) - XSRF protection setting.
								Can be strict or lax
								Read https://web.dev/samesite-cookies-explained/ for details
	  - httpOnly (bool) - if true, cookie won't be available for using in JavaScript
								 IT CAN'T BE FALSE
	*/
	if (!name) {
	  return;
	}
 
	options = options || {};
 
	if (options.expires instanceof Date) {
	  options.expires = options.expires.toUTCString();
	}
 
	if (value instanceof Object) {
	  value = JSON.stringify(value);
	}
	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	for (let optionKey in options) {
	  updatedCookie += "; " + optionKey;
	  let optionValue = options[optionKey];
	  if (optionValue !== true) {
		 updatedCookie += "=" + optionValue;
	  }
	}
	document.cookie = updatedCookie;
 }
 
 function deleteCookie(name) {
	/*
	Deletes a cookie with specified name.
	Returns true when cookie was successfully deleted, otherwise false
	*/
	setCookie(name, null, {
	  expires: new Date(),
	  path: '/'
	})
 }
 
 if (typeof process !== 'undefined' &&
	process.versions != null &&
	process.versions.node != null) {
	global.document = {
	  cookie: ''
	}
	module.exports = {
	  document: document,
	  setCookie: setCookie,
	  getCookie: getCookie,
	  deleteCookie: deleteCookie,
	}
 }
;

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->


// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyDfnd_Pn6cSmymDwX8427Cr4xEEr-6vNaM",
   authDomain: "landing-fd331.firebaseapp.com",
   databaseURL: "https://landing-fd331-default-rtdb.firebaseio.com",
   projectId: "landing-fd331",
   storageBucket: "landing-fd331.appspot.com",
   messagingSenderId: "193426127069",
   appId: "1:193426127069:web:9dc216b9866d31eb7c4334",
   measurementId: "G-CT8MQCC8FF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//Работа со слайдером (вывод из базы данных)
if (document.getElementById('sliders-out')) {
	const outSliders = document.getElementById('sliders-out');

	const sliderList = firebase.database().ref('sliders').on('value', (elem)=>{
		const sliders = elem.val();
		for (let key in sliders) {
		
			if (sliders[key].subtitle == '') {
				const displayOut2 = 
				`
					<div class="swiper-slide ">
						<div class="cooperation__slider-wrapper ">
							<div class="cooperation__slider-text cooperation__slider-text--padding ${String(sliders[key].bg)} ">
								<h3 id="slider-title_2" class="cooperation__slider-subtext ">${sliders[key].title}</h3>
								<p id="slider-subtitle_2" class="cooperation__slider-subtitle"></p>
		
							</div>
							<a href="#" class="cooperation__slider-btn ${String(sliders[key].btn)}"></a>
						</div>
					</div>
				`
				outSliders.innerHTML += displayOut2;
			}else {
				const displayOut =
			 `
				<div class="swiper-slide">
					<div class="cooperation__slider-wrapper ${String(sliders[key].bg)} ">
						<div class="cooperation__slider-text   ">
							<h3 id="slider-title_1" class="cooperation__slider-title title--width">${sliders[key].title}</h3>
							<p id="slider-subtitle_1" class="cooperation__slider-subtitle">${sliders[key].subtitle}</p>
	
						</div>
						<a href="#" class="cooperation__slider-btn ${String(sliders[key].btn)}"></a>
					</div>
				</div>
				`
				outSliders.innerHTML += displayOut;
			}
		
		}
		
	});


}
	
//Анимированный счетчик для item'a сколько специалистов в лаборатории
if(document.querySelector('#out-counter')) {
	const time = 8000; // время за какое будет счетчик выводить число
	const step = 1; //шаг с которым будет выводиться число
	const dbnumber = firebase.database().ref('about-us/' + 'item-count/' + 'programmers').on('value', (elem)=>{
		const num = elem.val();
		const countOut = document.querySelector('#out-counter');
		n = 0;
		let timeOut = Math.round(time/(num/step));
		let interval = setInterval(()=>{
			n = n + step;
			if (n == num) {
				clearInterval(interval);
			}
			countOut.innerHTML = n;
		},timeOut)
	});	
}
	



// Вывод эллементов из базы дынных в  блок 'кто мы'
if( document.getElementById('out-rang')) {
	const dbRang = firebase.database().ref('about-us/' + 'item-rang/' + 'rang').on('value', (elem)=>{
		const outRang = document.getElementById('out-rang');
		const dbRangText = elem.val();
		outRang.innerHTML = dbRangText;
	
	});
}


if(document.getElementById('out-project')) {
	const dbProject = firebase.database().ref('about-us/' + 'item-project/' + 'project-num').on('value', (elem)=>{
		const outProject = document.getElementById('out-project');
		const dbProjectText = elem.val();
		outProject.innerHTML = dbProjectText;
	
	});
}



// Выводит текст как печетная машинка
if(document.querySelector('.text--typing')) {
	const typingText = firebase.database().ref('main-title/' + 'typing-text').on('value', (elem)=>{
		const typingTextList = elem.val();
		let line = 0;
		let count = 0;
		let result = '';
		function typeLine() {
			let interval = setTimeout(()=>{
				result += typingTextList[line][count];
				document.querySelector('.text--typing').innerHTML = result + '|';
				count++;
					if(count >= (String(typingTextList[line])).length){
						count = 0 ;
						result = '';
						line++;
						if (line == typingTextList.length) {
							result = typingTextList[line-1];
							clearTimeout(interval);
							document.querySelector('.text--typing').innerHTML = result;
							return true;
						}
						
					}
				
				
				typeLine();
			}, 250);
			
		}
		typeLine();
	});
}
	




//-------------- Bot --------------

// Присваивание id пользователю и хранение в Cookie
if (getCookie('id')) {
	// const nad = getCookie('id');
	// console.log(nad);
}else {
	function uuidv4() {
		return  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		  var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		  return v.toString(16);
		});
	};
	const userId = uuidv4();
	
	setCookie('id',userId)
	
};
if (document.getElementById('communication-out')) {
	const comInput = document.getElementById('communication-input');
	const comBtn = document.getElementById('communication-btn');
	const comOut = document.getElementById('communication-out');
	
	const userCookie = getCookie('id');
	
	
	
	
	
	//Заносит сообщение пользователя в Firebase
	
	comBtn.addEventListener('click', ()=>{
		let time = new Date ();
		let timeMessage = Date.parse(time);
			
		firebase.database().ref('messages/' + userCookie ).push(
			{
				sender:'user',
				data: timeMessage,
				text: comInput.value,
			}
			
		);
		
		comInput.value = '';
		
	});
	
	
	// Сортировка и  вывод ссобщений из  Firebase
	firebase.database().ref('messages/' + userCookie ).on('value', elem=>{
		const messageDb = elem.val();
		
		let displayMessage = '';
		let messageFilter = [];
		for(let key in messageDb) {
			messageFilter.push(messageDb[key]);
	
		}
		
		messageFilter.sort((a, b)=> a.data > b.data ? 1 : -1 );
		let timeWold = new Date();
		messageFilter.forEach((item, i)=>{
			
			let timeWorldParse = Date.parse(timeWold)
			const dataOut = new Date(item.data) ;
			let timeDay = dataOut.getDate();
			let timeYear = dataOut.getFullYear();
			let timeMonth = dataOut.getMonth();
			let timeOut = `${timeDay}.${(timeMonth)+1}.${timeYear}`;
			const timeList = [
				'1 минуту назад',
				'2 минуты назад',
				'5 минут назад',
				'1 час назад',
				'5 часов назад',
				'1 день назад',
				
			];
			let timeLast;
			
			
			if ((timeWorldParse - item.data) <= 60000 ) {
				timeLast = timeList[0]; 
			} else if ((60000 < (timeWorldParse - item.data)) && ((timeWorldParse - item.data) <= 240000)) {
				timeLast = timeList[1];
			} else if ((240000 < (timeWorldParse - item.data)) && ((timeWorldParse - item.data) <= 600000)) {
				timeLast = timeList[2];
			} else if ((600000 < (timeWorldParse - item.data)) && ((timeWorldParse - item.data) <= 7200000)) {
				timeLast = timeList[3];
			} else if ((7200000 < (timeWorldParse - item.data)) && ((timeWorldParse - item.data) <= 36000000)) {
				timeLast = timeList[4];
			} else if ((36000000 < (timeWorldParse - item.data)) && ((timeWorldParse - item.data) <= 172800000)) {
				timeLast = timeList[5];
			} else   {
				timeLast = '';
			}
			
			
			
	
			if((item.sender) === 'user') {
				displayMessage += 
						`
							<div class="user-message">
								
								<div class="time-user">${timeLast + " " +timeOut}</div>
								<p class ="message__wrapper">${item.text}</p>
							</div>
						`;
						comOut.innerHTML = displayMessage;
			}else {
				displayMessage += `
						<div  class="bot-message">
							<div class="time-bot">${timeOut}</div>
							<p class ="message__wrapper bot__style ">${item.text}</p>
						</div>
						`;
						comOut.innerHTML = displayMessage;
						
			}
		});
		
	
	
	});
	
}


// Работа с проетами на странице  'Проекты'
if (document.getElementById('projects-out')) {
	
				
	const blockBtn = document.getElementById('toggle-btn-block');
	const listBtn = document.getElementById('toggle-btn-list');
	const toggleActive = document.getElementById('toggle-active');
	const projectsOut = document.getElementById('projects-out');
	const projectsListDb = firebase.database().ref('projects').on('value', (elem)=>{
		let projectsList = elem.val(); 
		let projectsListArr = [];
		for (let key in projectsList) {
			projectsListArr.push(projectsList[key])
		};
		let projectsDisplay = '';
		
		
		projectsListArr.forEach(item=>{

		
			if (item.bg == 'none') {
				projectsDisplay = 
				`
					<div class="projects-item">
						<div  class="projects-item__box">
							<img class="projects-item__box-img" src="img/project-item-1.png" alt="">
						</div>
						<div class="projects-item__inner  ">
							<h3 class="projects-item__title  text--black">
								${item.title}
							</h3>
							<p class="projects-item__text text--silver">
							${item.text}
							</p>
							<div class="projects-item__icons">
								<div id='icons-${item.name}' class="projects-item__icons-box ">
									<div class="projects-item__programmers _icon-user">${item.programmers}</div>
									<div class="projects-item__worktime _icon-time">${item['time-spent']}</div>
								</div>
								<div class="projects-item__icons-complexity">
									<div id='${item.name}-item-1' class="projects-item__complexity-item "></div>
									<div id='${item.name}-item-2' class="projects-item__complexity-item "></div>
									<div id='${item.name}-item-3' class="projects-item__complexity-item "></div>
								</div>
							</div>
						</div>
					</div>


				

				`;
				projectsOut.innerHTML += projectsDisplay;
				const iconBox = document.getElementById( `icons-${item.name}`);
				const complexityItem1 = document.getElementById(`${item.name}-item-1`);
				const complexityItem2 = document.getElementById(`${item.name}-item-2`);
				const complexityItem3 = document.getElementById(`${item.name}-item-3`);
			
				if (item.lvl == '1') {
					iconBox.classList.add('text--green');
					complexityItem1.classList.add('lvl--green-border');
					complexityItem2.classList.add('lvl--green-border');
					complexityItem3.classList.add('lvl--green-border');
					complexityItem1.classList.add('lvl--green');
				} else if (item.lvl == '2') {
					iconBox.classList.add('text--orange');
					complexityItem1.classList.add('lvl--orange-border');
					complexityItem2.classList.add('lvl--orange-border');
					complexityItem3.classList.add('lvl--orange-border');
					complexityItem1.classList.add('lvl--orange');
					complexityItem2.classList.add('lvl--orange');
				} else if (item.lvl == '3') {
					iconBox.classList.add('text--red');
					complexityItem1.classList.add('lvl--red-border');
					complexityItem2.classList.add('lvl--red-border');
					complexityItem3.classList.add('lvl--red-border');
					complexityItem1.classList.add('lvl--red');
					complexityItem2.classList.add('lvl--red');
					complexityItem3.classList.add('lvl--red');
				}
			}else {
				projectsDisplay = 
				`
					<div class="projects-item">
						<div  class="projects-item__box">
							<img class="projects-item__box-img" src="img/project-item-1.png" alt="">
						</div>
						<div class="projects-item__inner ${item.bg} ">
							<h3 class="projects-item__title  ">
								${item.title}
							</h3>
							<p class="projects-item__text ">
							${item.text}
							</p>
							<div class="projects-item__icons">
								<div id='icons-${item.name}' class="projects-item__icons-box">
									<div class="projects-item__programmers _icon-user">${item.programmers}</div>
									<div class="projects-item__worktime _icon-time">${item['time-spent']}</div>
								</div>
								<div class="projects-item__icons-complexity">
									<div id='${item.name}-item-1' class="projects-item__complexity-item lvl--white-border "></div>
									<div id='${item.name}-item-2' class="projects-item__complexity-item lvl--white-border "></div>
									<div id='${item.name}-item-3' class="projects-item__complexity-item lvl--white-border "></div>
								</div>
							</div>
						</div>
					</div>




				`;
				projectsOut.innerHTML += projectsDisplay;
				const complexityItem1 = document.getElementById(`${item.name}-item-1`);
				const complexityItem2 = document.getElementById(`${item.name}-item-2`);
				const complexityItem3 = document.getElementById(`${item.name}-item-3`);
			
				if (item.lvl == '1') {
					complexityItem1.classList.add('lvl--white');
				} else if (item.lvl == '2') {
					complexityItem1.classList.add('lvl--white');
					complexityItem2.classList.add('lvl--white');
				} else if (item.lvl == '3') {
					complexityItem1.classList.add('lvl--white');
					complexityItem2.classList.add('lvl--white');
					complexityItem3.classList.add('lvl--white');
				}
			}
			
		})
	});
	blockBtn.addEventListener('click', ()=>{
	
		const projectsOut = document.getElementById('projects-out');
		projectsOut.classList.add('projects--display-grid');
		toggleActive.style.left = '5px';
		projectsOut.innerHTML = '';
		const projectsListDb = firebase.database().ref('projects').on('value', (elem)=>{
			let projectsList = elem.val(); 
			let projectsListArr = [];
			for (let key in projectsList) {
				projectsListArr.push(projectsList[key])
			};
			let projectsDisplay = '';
			
			
			projectsListArr.forEach(item=>{
	
			
				if (item.bg == 'none') {
					projectsDisplay = 
					`
						<div class="projects-item">
							<div  class="projects-item__box">
								<img class="projects-item__box-img" src="img/project-item-1.png" alt="">
							</div>
							<div class="projects-item__inner  ">
								<h3 class="projects-item__title  text--black">
									${item.title}
								</h3>
								<p class="projects-item__text text--silver">
								${item.text}
								</p>
								<div class="projects-item__icons">
									<div id='icons-${item.name}' class="projects-item__icons-box ">
										<div class="projects-item__programmers _icon-user">${item.programmers}</div>
										<div class="projects-item__worktime _icon-time">${item['time-spent']}</div>
									</div>
									<div class="projects-item__icons-complexity">
										<div id='${item.name}-item-1' class="projects-item__complexity-item "></div>
										<div id='${item.name}-item-2' class="projects-item__complexity-item "></div>
										<div id='${item.name}-item-3' class="projects-item__complexity-item "></div>
									</div>
								</div>
							</div>
						</div>
	
	
					
	
					`;
					projectsOut.innerHTML += projectsDisplay;
					const iconBox = document.getElementById( `icons-${item.name}`);
					const complexityItem1 = document.getElementById(`${item.name}-item-1`);
					const complexityItem2 = document.getElementById(`${item.name}-item-2`);
					const complexityItem3 = document.getElementById(`${item.name}-item-3`);
				
					if (item.lvl == '1') {
						iconBox.classList.add('text--green');
						complexityItem1.classList.add('lvl--green-border');
						complexityItem2.classList.add('lvl--green-border');
						complexityItem3.classList.add('lvl--green-border');
						complexityItem1.classList.add('lvl--green');
					} else if (item.lvl == '2') {
						iconBox.classList.add('text--orange');
						complexityItem1.classList.add('lvl--orange-border');
						complexityItem2.classList.add('lvl--orange-border');
						complexityItem3.classList.add('lvl--orange-border');
						complexityItem1.classList.add('lvl--orange');
						complexityItem2.classList.add('lvl--orange');
					} else if (item.lvl == '3') {
						iconBox.classList.add('text--red');
						complexityItem1.classList.add('lvl--red-border');
						complexityItem2.classList.add('lvl--red-border');
						complexityItem3.classList.add('lvl--red-border');
						complexityItem1.classList.add('lvl--red');
						complexityItem2.classList.add('lvl--red');
						complexityItem3.classList.add('lvl--red');
					}
				}else {
					projectsDisplay = 
					`
						<div class="projects-item">
							<div  class="projects-item__box">
								<img class="projects-item__box-img" src="img/project-item-1.png" alt="">
							</div>
							<div class="projects-item__inner ${item.bg} ">
								<h3 class="projects-item__title  ">
									${item.title}
								</h3>
								<p class="projects-item__text ">
								${item.text}
								</p>
								<div class="projects-item__icons">
									<div id='icons-${item.name}' class="projects-item__icons-box">
										<div class="projects-item__programmers _icon-user">${item.programmers}</div>
										<div class="projects-item__worktime _icon-time">${item['time-spent']}</div>
									</div>
									<div class="projects-item__icons-complexity">
										<div id='${item.name}-item-1' class="projects-item__complexity-item lvl--white-border "></div>
										<div id='${item.name}-item-2' class="projects-item__complexity-item lvl--white-border "></div>
										<div id='${item.name}-item-3' class="projects-item__complexity-item lvl--white-border "></div>
									</div>
								</div>
							</div>
						</div>
	
	
	
	
					`;
					projectsOut.innerHTML += projectsDisplay;
					const complexityItem1 = document.getElementById(`${item.name}-item-1`);
					const complexityItem2 = document.getElementById(`${item.name}-item-2`);
					const complexityItem3 = document.getElementById(`${item.name}-item-3`);
				
					if (item.lvl == '1') {
						complexityItem1.classList.add('lvl--white');
					} else if (item.lvl == '2') {
						complexityItem1.classList.add('lvl--white');
						complexityItem2.classList.add('lvl--white');
					} else if (item.lvl == '3') {
						complexityItem1.classList.add('lvl--white');
						complexityItem2.classList.add('lvl--white');
						complexityItem3.classList.add('lvl--white');
					}
				}
				
			})
		});	
				
	});
	listBtn.addEventListener('click', ()=>{
		const toggleBlock = document.getElementById('toggle');
		const toggleBtn = document.getElementById('toggle-btn');
		const projectsOut = document.getElementById('projects-out');
		

	
			toggleActive.style.left = '69px';
			projectsOut.classList.remove('projects--display-grid');
			projectsOut.innerHTML = '';	
			let projectsLine =
			`
				<div class="projects__out-inner">
					<div class="projects__title-block">
						<div class="projects_title-name title-margin">Название</div>
						<div class="projects__title-box">
							<div id='projects-sort-date' class="projects_title-name subtitle-margin ">Дата окончания</div>
							<div id='projects-sort-lvl' class="projects_title-name subtitle-margin">Сложность</div>
							<div id='projects-sort-time-spent' class="projects_title-name subtitle-margin">Длительность</div>
							<div id='projects-sort-programmers' class="projects_title-name subtitle-margin">Специалистов</div>
						</div>
					</div>
					<ul id='projects-out__list' class="projects-out__list">
				
				
				
					</ul>
	
				</div>
	
			`;
			projectsOut.innerHTML += projectsLine;
			let projectsListOut = document.getElementById('projects-out__list');
			const projectsListDb = firebase.database().ref('projects').on('value', (elem)=>{
				let projectsList = elem.val(); 
				let projectsDisplay = '';
				
				projectsDisplay.innerHTML += projectsLine;
				let monthOut = '';
				let projectsListArr = [];
				for (let key in projectsList) {
					projectsListArr.push(projectsList[key])
				};
				
				
				
				const dateSortBtn = document.getElementById('projects-sort-date');
				const lvlSortBtn = document.getElementById('projects-sort-lvl');
				const timeSpentSortBtn = document.getElementById('projects-sort-time-spent');
				const programersSortBtn = document.getElementById('projects-sort-programmers');
				dateSortBtn.addEventListener('click', sortDate);
				lvlSortBtn.addEventListener('click', sortLvl);
				timeSpentSortBtn.addEventListener('click', sortTimeSpent);
				programersSortBtn.addEventListener('click', sortProgrammers);
				let flag = true;
				
				
				function sortDate () {
					const projectsArr = JSON.parse(JSON.stringify(projectsListArr));
					
					document.querySelectorAll('.projects__title-box div').forEach(item=>{
						item.classList.remove('subtitle-arrow');
						item.classList.remove('subtitle-arrow--rotate');
					});
					if(flag) {
						dateSortBtn.classList.remove('subtitle-arrow');
						dateSortBtn.classList.add('subtitle-arrow--rotate');
						projectsArr.sort((a,b)=>{
							return new Date(a["date-finish"]) -  new Date(b["date-finish"])
						});
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}else {
						dateSortBtn.classList.remove('subtitle-arrow--rotate');
						dateSortBtn.classList.add('subtitle-arrow');
						projectsArr.sort((a,b)=>{
							return new Date(b["date-finish"]) - new Date(a["date-finish"])
						});
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}
					flag = !flag;
				};
				function sortProgrammers () {
					const projectsArr = JSON.parse(JSON.stringify(projectsListArr));
					document.querySelectorAll('.projects__title-box div').forEach(item=>{
						item.classList.remove('subtitle-arrow');
						item.classList.remove('subtitle-arrow--rotate');
					});
					if(flag) {
						programersSortBtn.classList.remove('subtitle-arrow');
						programersSortBtn.classList.add('subtitle-arrow--rotate');
						projectsArr.forEach(item=>{
							item['programmers'] = String(item['programmers']).replace(/\D/g, '');
							
						});
						projectsArr.sort((a,b)=>{
							return new Date(a["programmers"]) -  new Date(b["programmers"])
						});
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}else {
						programersSortBtn.classList.remove('subtitle-arrow--rotate');
						programersSortBtn.classList.add('subtitle-arrow');
						
					
						projectsArr.forEach(item=>{
							item['programmers'] = String(item['programmers']).replace(/\D/g, '');
							
						});
						projectsArr.sort((a,b)=>{
							return new Date(b["programmers"]) - new Date(a["programmers"])
						});
						
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}
					flag = !flag;
				};
				
				function sortTimeSpent () {
					const projectsArr = JSON.parse(JSON.stringify(projectsListArr));
					document.querySelectorAll('.projects__title-box div').forEach(item=>{
						item.classList.remove('subtitle-arrow');
						item.classList.remove('subtitle-arrow--rotate');
					});
					if(flag) {
						timeSpentSortBtn.classList.remove('subtitle-arrow');
						timeSpentSortBtn.classList.add('subtitle-arrow--rotate');
						projectsArr.forEach(item=>{
							item['time-spent'] = item['time-spent'].replace(/\D/g, '');
							
						});
						projectsArr.sort((a,b)=>{
							return new Date(a["time-spent"]) -  new Date(b["time-spent"])
						});
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent'] + ' мес.'}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']+ ' мес.'}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}else {
						timeSpentSortBtn.classList.remove('subtitle-arrow--rotate');
						timeSpentSortBtn.classList.add('subtitle-arrow');
						projectsArr.forEach(item=>{
							item['time-spent'] = item['time-spent'].replace(/\D/g, '');
							
						});
						projectsArr.sort((a,b)=>{
							return new Date(b["time-spent"]) - new Date(a["time-spent"])
						});
						projectsListOut.innerHTML = '';
						projectsArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']+ ' мес.'}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']+ ' мес.'}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}
					flag = !flag;
				};
				function sortLvl () {
					document.querySelectorAll('.projects__title-box div').forEach(item=>{
						item.classList.remove('subtitle-arrow');
						item.classList.remove('subtitle-arrow--rotate');
					});
					if(flag) {
						lvlSortBtn.classList.remove('subtitle-arrow');
						lvlSortBtn.classList.add('subtitle-arrow--rotate');
						projectsListArr.sort((a,b)=>{
							return new Date(a.lvl) -  new Date(b.lvl)
						});
						projectsListOut.innerHTML = '';
						projectsListArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}else {
						lvlSortBtn.classList.remove('subtitle-arrow--rotate');
						lvlSortBtn.classList.add('subtitle-arrow');
						projectsListArr.sort((a,b)=>{
							return new Date(b.lvl) - new Date(a.lvl)
						});
						projectsListOut.innerHTML = '';
						projectsListArr.forEach(item=>{
					
					
							if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
								monthOut = 'января';
							} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
								monthOut = 'февраля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
								monthOut = 'марта';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
								monthOut = 'апреля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
								monthOut = 'мая';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
								monthOut = 'июня';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
								monthOut = 'июля';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
								monthOut = 'августа';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
								monthOut = 'сентября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
								monthOut = 'октября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
								monthOut = 'ноября';
							}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
								monthOut = 'декабря';
							};
							if(item['bg-text'] == 'none') {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}else {
								projectsDisplay = 
								`
								<li class="projects-out__list-item">
									<div class="projects-out__list-img">
				
									</div>
									<div class="projects-out__list-wrapper">
										<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
										
										<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
										<div class="projects-out__list-lvl">
											<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
											<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
										</div>
										<div id='icons-${item.name}' class='projects-out__list-color'>
											<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
											<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
										</div>
									</div>
								</li>
								`;
								projectsListOut.innerHTML += projectsDisplay;
								const iconBox = document.getElementById( `icons-${item.name}`);
								const complexityItem1 = document.getElementById(`${item.name}-item-1`);
								const complexityItem2 = document.getElementById(`${item.name}-item-2`);
								const complexityItem3 = document.getElementById(`${item.name}-item-3`);
							
								if (item.lvl == '1') {
									iconBox.classList.add('text--green');
									complexityItem1.classList.add('lvl--green-border');
									complexityItem2.classList.add('lvl--green-border');
									complexityItem3.classList.add('lvl--green-border');
									complexityItem1.classList.add('lvl--green');
								} else if (item.lvl == '2') {
									iconBox.classList.add('text--orange');
									complexityItem1.classList.add('lvl--orange-border');
									complexityItem2.classList.add('lvl--orange-border');
									complexityItem3.classList.add('lvl--orange-border');
									complexityItem1.classList.add('lvl--orange');
									complexityItem2.classList.add('lvl--orange');
								} else if (item.lvl == '3') {
									iconBox.classList.add('text--red');
									complexityItem1.classList.add('lvl--red-border');
									complexityItem2.classList.add('lvl--red-border');
									complexityItem3.classList.add('lvl--red-border');
									complexityItem1.classList.add('lvl--red');
									complexityItem2.classList.add('lvl--red');
									complexityItem3.classList.add('lvl--red');
								}
							}
						})
					}
					flag = !flag;
				};
				
					
				
				
				
				projectsListArr.forEach(item=>{
					
					
					if ((((new Date(item['date-finish'])).getMonth())+1) == '1') {
						monthOut = 'января';
					} else if ((((new Date(item['date-finish'])).getMonth())+1) == '2') {
						monthOut = 'февраля';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '3') {
						monthOut = 'марта';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '4') {
						monthOut = 'апреля';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '5') {
						monthOut = 'мая';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '6') {
						monthOut = 'июня';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '7') {
						monthOut = 'июля';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '8') {
						monthOut = 'августа';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '9') {
						monthOut = 'сентября';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '10') {
						monthOut = 'октября';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '11') {
						monthOut = 'ноября';
					}else if ((((new Date(item['date-finish'])).getMonth())+1) == '12') {
						monthOut = 'декабря';
					};
					if(item['bg-text'] == 'none') {
						projectsDisplay = 
						`
						<li class="projects-out__list-item">
							<div class="projects-out__list-img">
		
							</div>
							<div class="projects-out__list-wrapper">
								<div class="projects-out__list-title">${item.title} </div>
								
								<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
								<div class="projects-out__list-lvl">
									<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
									<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
									<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
								</div>
								<div id='icons-${item.name}' class='projects-out__list-color'>
									<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
									<div class="projects-out__list-programmer">  <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
								</div>
							</div>
						</li>
						`;
						projectsListOut.innerHTML += projectsDisplay;
						const iconBox = document.getElementById( `icons-${item.name}`);
						const complexityItem1 = document.getElementById(`${item.name}-item-1`);
						const complexityItem2 = document.getElementById(`${item.name}-item-2`);
						const complexityItem3 = document.getElementById(`${item.name}-item-3`);
					
						if (item.lvl == '1') {
							iconBox.classList.add('text--green');
							complexityItem1.classList.add('lvl--green-border');
							complexityItem2.classList.add('lvl--green-border');
							complexityItem3.classList.add('lvl--green-border');
							complexityItem1.classList.add('lvl--green');
						} else if (item.lvl == '2') {
							iconBox.classList.add('text--orange');
							complexityItem1.classList.add('lvl--orange-border');
							complexityItem2.classList.add('lvl--orange-border');
							complexityItem3.classList.add('lvl--orange-border');
							complexityItem1.classList.add('lvl--orange');
							complexityItem2.classList.add('lvl--orange');
						} else if (item.lvl == '3') {
							iconBox.classList.add('text--red');
							complexityItem1.classList.add('lvl--red-border');
							complexityItem2.classList.add('lvl--red-border');
							complexityItem3.classList.add('lvl--red-border');
							complexityItem1.classList.add('lvl--red');
							complexityItem2.classList.add('lvl--red');
							complexityItem3.classList.add('lvl--red');
						}
					}else {
						projectsDisplay = 
						`
						<li class="projects-out__list-item">
							<div class="projects-out__list-img">
		
							</div>
							<div class="projects-out__list-wrapper">
								<div class="projects-out__list-title ${item['bg-text']}">${item.title} </div>
								
								<div class="projects-out__list-date">${((new Date(item['date-finish'])).getDate()) + " " + monthOut}</div>
								<div class="projects-out__list-lvl">
									<div id='${item.name}-item-1'  class="projects-item__complexity-item"></div>
									<div id='${item.name}-item-2'  class="projects-item__complexity-item"></div>
									<div id='${item.name}-item-3'  class="projects-item__complexity-item"></div>
								</div>
								<div id='icons-${item.name}' class='projects-out__list-color'>
									<div class="projects-out__list-time "> <span class='fonst-padding _icon-time'>${item['time-spent']}</span></div>
									<div class="projects-out__list-programmer"> <span class='fonst-padding _icon-user'>${item.programmers}</span></div>
								</div>
							</div>
						</li>
						`;
						projectsListOut.innerHTML += projectsDisplay;
						const iconBox = document.getElementById( `icons-${item.name}`);
						const complexityItem1 = document.getElementById(`${item.name}-item-1`);
						const complexityItem2 = document.getElementById(`${item.name}-item-2`);
						const complexityItem3 = document.getElementById(`${item.name}-item-3`);
					
						if (item.lvl == '1') {
							iconBox.classList.add('text--green');
							complexityItem1.classList.add('lvl--green-border');
							complexityItem2.classList.add('lvl--green-border');
							complexityItem3.classList.add('lvl--green-border');
							complexityItem1.classList.add('lvl--green');
						} else if (item.lvl == '2') {
							iconBox.classList.add('text--orange');
							complexityItem1.classList.add('lvl--orange-border');
							complexityItem2.classList.add('lvl--orange-border');
							complexityItem3.classList.add('lvl--orange-border');
							complexityItem1.classList.add('lvl--orange');
							complexityItem2.classList.add('lvl--orange');
						} else if (item.lvl == '3') {
							iconBox.classList.add('text--red');
							complexityItem1.classList.add('lvl--red-border');
							complexityItem2.classList.add('lvl--red-border');
							complexityItem3.classList.add('lvl--red-border');
							complexityItem1.classList.add('lvl--red');
							complexityItem2.classList.add('lvl--red');
							complexityItem3.classList.add('lvl--red');
						}
					}
				})
			})
		
		
	})
}

// Вывод на страницу pulse
const realTimeDate = new Date ();
const realTimeDateParse = Date.parse(realTimeDate);
if (document.getElementById('quarter__out')) {
	let quarterOut = document.getElementById('quarter__out'); 
	const quarterDb = firebase.database().ref('quarter/').on('value', elem=>{
		const quarterText = elem.val();
		quarterOut.innerHTML = quarterText.text;
		
	});
	const footer = document.getElementById('footer');
	footer.style.backgroundColor = 'transparent';


	const toImplementationOut = document.getElementById('to_implementation');
	const inWorkOut = document.getElementById('in_work');
	const completedOut = document.getElementById('completed');
	let searchArr = [];
	const pulseDb = firebase.database().ref('pulse/').on('value', elem =>{
		const pulseItemList = elem.val();
		
		pulseItemList.forEach(item =>{
			let pulseItemsOut = '';
			
			
			
			
			if(item['project-stage'] == '1') {
				let pulseItemOut = 
				`
				<li id='${item['name-project']}' class="pulse__list-item">
					<h5 class="pulse__list-title">
						${item.text}
					</h5>
					<div id='${item['name-project']}--icons' class="pulse__list-items ">
						<div class="pulse__list-box">
							<p class="pulse__list-time">
							${item['working-hours']}
							</p>
						</div>
					
					</div>
				</li>
				`;
				toImplementationOut.innerHTML += pulseItemOut;
				
			} else if (item['project-stage'] == '2') {
				let dateFinish = new Date(item['date-finish']);
				let dateStart = new Date(item['date-start']);
				let dateFinishParse = Date.parse(dateFinish) - realTimeDateParse; 
				let dateStartParse = realTimeDateParse - Date.parse(dateStart); 
				let progressBar = (dateStartParse * 100)/dateFinishParse;
				let pulseItemOut = 
				`
				<li id='${item['name-project']}' class="pulse__list-item">
					<h5 class="pulse__list-title">
						${item.text}
					</h5>
					<div id='${item['name-project']}--icons' class="pulse__list-items ">
						<div class="pulse__list-box">
							<p class="pulse__list-time">
							${item['working-hours']}
							</p>
							<div class="pulse__list-programmers">
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
							</div>
						</div>
						
					</div>
					<div id='progress-${item['name-project']}' class="pulse__list-progress pulse__list-progress--width"></div>
				</li>
				`;
				inWorkOut.innerHTML += pulseItemOut;
				const progressBarOut = document.getElementById(`progress-${item['name-project']}`);
				progressBarOut.style.width = progressBar + '%';
			}else if (item['project-stage'] == '3') {
				searchArr.push(item);
				let pulseItemOut = 
				`
				<li id='${item['name-project']}' class="pulse__list-item">
					<h5 class="pulse__list-title">
						${item.text}
					</h5>
					<div id='${item['name-project']}--icons' class="pulse__list-items ">
						<div class="pulse__list-box">
							<p class="pulse__list-time">
							${item['working-hours']}
							</p>
							<div class="pulse__list-programmers">
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
								<div style="background-image: url('../img/programmer.png');" class="pulse__list-programmers-img"></div>
							</div>
						</div>
						
					</div>
					<div class="pulse__list-progress pulse__list-progress--done"></div>
				</li>
				`;
				completedOut.innerHTML += pulseItemOut;
			}
			if(item.bg == 'gradient') {
				const nameProject = document.getElementById(`${item['name-project']}`);
				nameProject.classList.add('pulse-bg--animation');
				
			}

			const itemIcon = document.getElementById(`${item['name-project']}--icons`);
			if(item['type-projects'] == '1') {
				itemIcon.classList.add('type-projects-1');
			} else if (item['type-projects'] == '2') {
				itemIcon.classList.add('type-projects-2');
			} else if (item['type-projects'] == '3') {
				itemIcon.classList.add('type-projects-3');
			}

			if(item['lvl-project'] == '1') {
				itemIcon.classList.add('lvl-projects-1');
			} else if (item['lvl-project'] == '2') {
				itemIcon.classList.add('lvl-projects-2');
			} else if (item['lvl-project'] == '3') {
				itemIcon.classList.add('lvl-projects-3');
			} else if (item['lvl-project'] == '4') {
				itemIcon.classList.add('lvl-projects-4');
			};


			
		})
		let projectAddProject = 
			`
			<li class="pulse__list-item">
				<h5 class=" pulse__list-title--add">
					Добавить свой проект 
				</h5>
				<span class="pulse__list-title--btn"></span>
			</li>
			`;
			toImplementationOut.innerHTML += projectAddProject;
	});
	
	
}

if (document.getElementById('about-btns')) {
	const allBtns = document.querySelectorAll('#about-btns .about__btn');
	allBtns.forEach(item => {
		item.addEventListener('click', (e) => {
			const clickBtn = e.target;
			allBtns.forEach(item => {
				item.classList.remove('about__btn--active');
			})
			clickBtn.classList.add('about__btn--active');
		})
	})
}

if(document.getElementById('about__developers-out')) {
	const developersOut = document.getElementById('about__developers-out');
	const developersLsitDb = firebase.database().ref('developers').on('value', (elem)=>{

		function developerBlockOut (arr, outSelector, ) {
			document.getElementById(outSelector).classList.add('about__developers--block');
			let developerItem = '';
			arr.forEach((item,i) => {
				 developerItem = 
				`
					<li class="about__developer">
						<img class="about__developer-img" src="img/programmer.png" alt="img">
						<div class="about__developer-box">
							<div class="about__developer-info">
								<p class="about__developer-name">${item.name}</p>
								<div id='developer__contacts-${i}' class="about__developer-list-items">
								
								</div>
							</div>
							<p class="about__developer-text">
								${item.text}
							</p>
							<h4 class="about__developer-profile">Профиль:</h4>
							<div id='developer__skills-${i}' class="about__developer-skills">
	
							</div>
						</div>
					</li>
				`;
				document.getElementById(outSelector).innerHTML += developerItem;
				if(item['contacts']) {
					let developerContacts = document.getElementById(`developer__contacts-${i}`);
					let developerContact = '';
					item.contacts.forEach(contact => {
						if (contact == 'telegram') {
							developerContact += 
							`
								<div class="about__developer-list-item telegram"></div>
							`;
							developerContacts.innerHTML = developerContact;
						} else if (contact == 'slack') {
							developerContact += 
							`
								<div class="about__developer-list-item slack"></div>
							`;
							developerContacts.innerHTML = developerContact;
						} else if (contact == 'github') {
							developerContact += 
							`
								<div class="about__developer-list-item github"></div>
							`;
							developerContacts.innerHTML = developerContact;
						}
						
						
					});
				}
				
	
	
				if(item.skills) {
					let developerSkills = document.getElementById(`developer__skills-${i}`);
					let developerSkill = '';
					item.skills.forEach(skill => {
						if (skill == 'ios') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-blue">IOS</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'frontend') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-orange">Frontend</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'android') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-green ">Android</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'project manager') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-purple ">Project</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'design') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-grey ">Design</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'content') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-yellow ">Content</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'backend') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-red ">Backend</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'qa') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-pink">QA</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						
					})
				}
	
	
			})
		}
		function developerListOut (arr, outSelector, ) {
			document.getElementById(outSelector).classList.remove('about__developers--block');
			let developerItem = '';
			arr.forEach((item,i) => {
				 developerItem = 
				`
				<li class="about__developer-list">
					<img src="img/programmer.png" alt="img" class="about__developer-list-minimg">
					<p class="about__developer-list-name">${item.name}</p>
					<div id='developer__contacts-${i}' class="about__developer-list-items">
						
					</div>
					<p class="about__developer-list-text">
					${item.text}
					</p>
					<div id='developer__skills-${i}' class="about__developer-list-skills">
						
					</div>
				</li>
				`;
				document.getElementById(outSelector).innerHTML += developerItem;
				if(item['contacts']) {
					let developerContacts = document.getElementById(`developer__contacts-${i}`);
					let developerContact = '';
					item.contacts.forEach(contact => {
						if (contact == 'telegram') {
							developerContact += 
							`
								<div class="about__developer-list-item telegram"></div>
							`;
							developerContacts.innerHTML = developerContact;
						} else if (contact == 'slack') {
							developerContact += 
							`
								<div class="about__developer-list-item slack"></div>
							`;
							developerContacts.innerHTML = developerContact;
						} else if (contact == 'github') {
							developerContact += 
							`
								<div class="about__developer-list-item github"></div>
							`;
							developerContacts.innerHTML = developerContact;
						}
						
						
					});
				}
				
	
	
				if(item.skills) {
					let developerSkills = document.getElementById(`developer__skills-${i}`);
					let developerSkill = '';
					item.skills.forEach(skill => {
						if (skill == 'ios') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-blue">IOS</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'frontend') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-orange">Frontend</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'android') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-green ">Android</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'project manager') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-purple ">Project</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill  == 'design') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-grey ">Design</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'content') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-yellow ">Content</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'backend') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-red ">Backend</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						if (skill == 'qa') {
							developerSkill += 
							`
								<div class="about__developer-skill skill-pink">QA</div>
							`;
							developerSkills.innerHTML = developerSkill;
						}
						
					})
				}
	
	
			})
		}
		
		const developerList = elem.val();
		developerBlockOut(developerList, 'about__developers-out');
		

		
		const toggleActive = document.getElementById('toggle-active');

		
		let flag = true;
		function developerblockFilter (filterName) {
			if(e.target.id == filterName) {
				let developerListFilter = [];
				developerList.forEach(item => {
					item.skills.forEach(skill => {
						if(skill == filterName) {
							developerListFilter.push(item);
						} 
					})
				})	
				document.getElementById('about__developers-out').innerHTML = '';
				developerBlockOut(developerListFilter, 'about__developers-out')	
			}
		};

	
		function developerlistFilter (filterName) {
			if(e.target.id == filterName) {
				let developerListFilter = [];
				developerList.forEach(item => {
					item.skills.forEach(skill => {
						if(skill == filterName) {
							developerListFilter.push(item);
						} 
					})
				})	
				document.getElementById('about__developers-out').innerHTML = '';
				developerListOut(developerListFilter, 'about__developers-out')	
			}
		}
	
		document.getElementById('about-btns').addEventListener('click', (e) => {
			
			
			developerlistFilter('ios');
			developerlistFilter('frontend');
			developerlistFilter('design');
			developerlistFilter('android');
			developerlistFilter('qa');
			developerlistFilter('backend');
			developerlistFilter('content');
			developerlistFilter('project manager');
		
		
			
	
		})
		// document.getElementById('about-btns').addEventListener('click', (e) => {

		// 	developerblockFilter('ios');
		// 	developerblockFilter('frontend');
		// 	developerblockFilter('design');
		// 	developerblockFilter('android');
		// 	developerblockFilter('qa');
		// 	developerblockFilter('backend');
		// 	developerblockFilter('content');
		// 	developerblockFilter('project manager');

		// })
	
 		document.getElementById('toggle').addEventListener('click', () => {
			if(flag) {
				document.getElementById('about__developers-out').innerHTML = '';
				document.getElementById('about__developers-out').classList.remove('about__developers--block');
				toggleActive.style.left = '69px';
				developerListOut(developerList, 'about__developers-out');

				
				
				
			}
			if (!flag) {
				document.getElementById('about__developers-out').innerHTML = '';
				document.getElementById('about__developers-out').classList.add('about__developers--block');
				toggleActive.style.left = '5px';
				developerBlockOut(developerList, 'about__developers-out');
				
			}
			flag = !flag;
		})
	})
	
}
























;


