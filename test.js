// вывод в консоль всякое

let goodMorn = 'good mornin';
let who = 'fuckin moron';

console.log (`${goodMorn} ${who}`);

//Операторы сравнения
let x = 3;
let y = 4;

console.log(x<y);

let string = 'boom';

console.log(x<y);

let string2 = 'kaboom'

console.log(string>string2);

// Название JavaScript

let name = prompt('Какое «официальное» название JavaScript?', '');

if (name = 'ECMAScript') {
    alert ('Верно!')
} else {
    alert('Не знаете? “ECMAScript”!')
};

// Покажите знак числа

let number = promt('Умоляю введи какое-нибудь число не букву', 0);

if (number < 0) {
    alert(-1)
} else if (number < 1) {
    alert(0)
} else {
    alert (1)
};

// Перепишите 'if' в '?'

let result = (a + b < 4) ? 'Мало' : 'Много';

// Перепишите 'if..else' в '?'

let message = (login = 'Сотрудник') ? 'Привет' : (login = 'Директор') ? 'Здравствуйте' : (login = '') ? 'Нет логина' : '';
