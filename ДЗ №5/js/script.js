'use strict';

let menu = document.getElementsByClassName('menu');
let menuItems = document.getElementsByClassName('menu-item');

menu[0].insertBefore(menuItems[2], menuItems[1]);

let item = document.createElement('li');
item.classList.add('menu-item');
item.textContent = 'Пятый пункт';
menu[0].appendChild(item);

document.body.style.backgroundImage = 'url(img/apple_true.jpg)';

let title = document.getElementById('title');
title.textContent = 'Мы продаем только подлинную технику Apple.';

let adv = document.getElementsByClassName('adv');
adv[0].remove();

let prt = document.getElementsByClassName('prompt');
let question = prompt('Как вы относитесь к технике Apple?');

prt[0].textContent = question;
