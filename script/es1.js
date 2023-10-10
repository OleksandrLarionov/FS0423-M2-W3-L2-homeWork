const inputName = document.getElementById('name');
const inviaBtn = document.getElementById('invia');
const resetBtn = document.getElementById('reset');
const myForm = document.getElementById('myForm');
const topName = document.getElementById('top');

const localStorageKey = 'saved-name';
const save = () => {
	const saveValue = inputName.value;
	localStorage.setItem(localStorageKey, saveValue);
	displayName();
	inputName.value = '';
};

const remove = () => {
	const sometshingSaved = localStorage.getItem(localStorageKey);
	if (sometshingSaved) {
		localStorage.removeItem(localStorageKey);
		topName.innerHTML = '';
		s = 0;
	} else {
		alert('Empty');
	}
};

inviaBtn.addEventListener('click', save);
resetBtn.addEventListener('click', remove);

const displayName = () => {
	const name = localStorage.getItem(localStorageKey);
	const myH1 = document.createElement('h1');
	myH1.innerHTML = `${name}`;
	topName.appendChild(myH1);
};

displayName();
// With current time
// const tempo = document.getElementById('counter');
// const myP = document.createElement('p');
// tempo.appendChild(myP);

// // tempo
// const myCounter = () => {
// 	let startTime = new Date();
// 	let h = '';
// 	let m = '';
// 	let s = '';
// 	// let mm = '';

// 	h = startTime.getHours() + ':';
// 	m = startTime.getMinutes() + ':';
// 	s = (startTime.getSeconds() / 1000) % 100;
// 	const time = ` ${s}`;
// 	// mm = startTime.getMilliseconds() + ':';

// 	sessionStorage.setItem(sessionStorageKey, time);
// 	const downTime = sessionStorage.getItem(sessionStorageKey);
// 	myP.innerHTML = `${downTime}`;
// };

// setInterval(myCounter, 1000);

// With Cronometer
const tempo = document.getElementById('counter');
const myP = document.createElement('p');
myP.classList.add('fw-bold');
myP.classList.add('mb-0');
tempo.appendChild(myP);

const sessionStorageKey = 'session';
let m = 0;
let s = 0;
let mm = 0;

if (sessionStorage.getItem(sessionStorageKey)) {
	s = parseInt(sessionStorage.getItem(sessionStorageKey));
}
const startTime = () => {
	const interval = setInterval(() => {
		mm++;
		if (mm === 100) {
			s++;
			mm = 0;
		}

		if (s === 600) {
			m++;
			s = 0;
		}
		let timer = `${s} seconds`;
		sessionStorage.setItem(sessionStorageKey, timer);
		const downTime2 = sessionStorage.getItem(sessionStorageKey);
		myP.innerHTML = `${downTime2}`;
	}, 10);
};

startTime();
// startTime();
