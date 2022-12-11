'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


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



// scrolling
btnScrollTo.addEventListener('click', () => section1.scrollIntoView({behavior: 'smooth'}));

// btnScrollTo.addEventListener('click', function(e) {
//   // const s1coords = section1.getBoundingClientRect();
//   // console.log(s1coords)

//   // console.log(e.target.getBoundingClientRect());

//   // console.log('Current Scroll (X/Y) ', window.pageXOffset,window.pageYOffset);

//   // console.log('height/width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)



// PAGE Navigation

// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     // console.log(id);
//     document.querySelector(id).scrollIntoView({behavior: 'smooth'});
//   });
// });




// 1. add event listener to common parent element
// 2. determine what element originated the event


// tabbed components




// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')))

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  //Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});



// Menu fade animation

const handleHover = function(e) {
  console.log(this, e.currentTarget)
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach( el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
}



// Passing an 'argument' into handler

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords)
window.addEventListener('scroll', function() {
  console.log(window.scrollY);
  
  if(window.scrollY > initialCoords.top) nav.classList.add('sticky')
  else nav.classList.remove('sticky');
});



/////////////////////////////////////////////////





// // scrolling

//   // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

//   // window.scroll({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({behavior: 'smooth'});
// });







/////////////////////////////////////////////////





document.querySelector('.nav__links').addEventListener('click', function(e) {
  console.log(e.target)
  e.preventDefault();




  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  }
})


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


  // document.documentElement.style.setProperty('--color-primary', 'green');





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








// Randon colors 

// rgb(255,255,255)

// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

// const randomColor = () => `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;


// console.log(randomColor(0, 255))
// console.log(randomColor(0, 255))
// console.log(randomColor(0, 255)) 


// document.querySelector('.nav__link').addEventListener('click', function(e) {
//   // console.log('Link');
//   this.style.backgroundColor = randomColor();
//   console.log('Link', e.target, e.currentTarget);



  // stop propagation
  // e.stopPropagation()
// });


// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   // console.log('Link');
//   this.style.backgroundColor = randomColor()
//   console.log('con', e.target, e.currentTarget);
//   console.log(e.currentTarget === this);
// });

// document.querySelector('.nav').addEventListener(
//   'click',
//   function (e) {
//     // console.log('Link')
//     this.style.backgroundColor = randomColor();
//     console.log('nav', e.target, e.currentTarget);
//   },
//   true
// );


// DOM Traversing

// const h1 = document.querySelector('h1');




// // going downwards : child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes)
// console.log(h1.children)
// h1.firstElementChild.style.color = 'white'
// h1.lastElementChild.style.color = 'orangered';


// // going upwards
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // going sideways: siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling)

// console.log(h1.parentElement)
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el){
//   if(el !== h1) el.style.transform = 'scale(0.5)';
// })