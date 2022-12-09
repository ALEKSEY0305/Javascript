'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});










/////////////////////////////////////////////////


// Selecting elements
// console.log(document.documentElement)
// console.log(document.head)
// console.log(document.body)

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

document.getElementById('section-1');
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons)

// console.log(document.getElementsByClassName('btn'))






// Creaating and inserting elements
// .insertAdjascentHTML

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookie for improved functionality and analtics.'
message.innerHTML = 'We use cookie for improved functionality and analtics. <button class="btn btn--close-cookie">Got it!<button>';

// header.prepend(message);  // up
// header.append(message);    down
// header.append(message.cloneNode(true));



// header.before(message);
// header.after(message);



// Delete elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//     // message.parentElement.removeChild(message)
//   });


  //styles

  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';
 
  // console.log(message.style.color);
  // console.log(message.style.backgroundColor);
  // console.log(getComputedStyle(message).color)
  // console.log(getComputedStyle(message).height)

  message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';


  document.documentElement.style.setProperty('--color-primary', 'lightblue');





  // Attributes

  const logo = document.querySelector('.nav__logo');
  // console.log(logo.alt);


  // Non-standart

  // console.log(logo.designer);
  // console.log(logo.getAttribute('designer'));


  // Set attribute
  logo.setAttribute('company', 'Toss')






  // console.log(logo.src);
  // console.log(logo.getAttribute('src'));




const link = document.querySelector('.twitter-link');


// // S A M E
// console.log(link.href);
// console.log(link.getAttribute('href'));



// // Data Attributes
// console.log(logo.dataset.versionNumber);


// Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');


// Bad    MUTATES CLASSES      Don't use
// logo.className = 'alex'

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', () => section1.scrollIntoView({behavior: 'smooth'}));

// btnScrollTo.addEventListener('click', function(e) {
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords)

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current Scroll (X/Y) ', window.pageXOffset,window.pageYOffset);

//   // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)



// // scrolling

//   // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

//   // window.scroll({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({behavior: 'smooth'});
// });











//------------------------------------------------
//    EVENTS

//New Way
// const h1 = document.querySelector('h1')


// const alertH1 = function(e) {
//   alert('addEventListener: You are reading the header!')

//   h1.removeEventListener('mouseenter', alertH1);

// }

// h1.addEventListener('mouseenter', alertH1);

  // setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//Old way
// h1.onmouseenter = function(e) {
//   alert('onmouseenter: You are reading the header!')
// };








// rgb(255,255,255)

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


console.log(randomColor(0, 255))
console.log(randomColor(0, 255))
console.log(randomColor(0, 255)) 


document.querySelector('.nav__link').addEventListener('click', function(e) {
  // console.log('Link');
  this.style.backgroundColor = randomColor();
  console.log('Link', e.target, e.currentTarget);



  // stop propagation
  // e.stopPropagation()
});


document.querySelector('.nav__links').addEventListener('click', function(e) {
  // console.log('Link');
  this.style.backgroundColor = randomColor()
  console.log('con', e.target, e.currentTarget);
  console.log(e.currentTarget === this);
});

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    // console.log('Link')
    this.style.backgroundColor = randomColor();
    console.log('nav', e.target, e.currentTarget);
  },
  true
);