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

let oldName = prompt('Какое «официальное» название JavaScript?', '');

if (oldName == 'ECMAScript') {
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



//Проверка значения из диапазона || Проверка значения вне диапазона

let age = prompt('Скока те лет?', 0);

if (age >= 14 && age <= 90) {
    alert('Родился, потерпел и умер')
} else if (age < 14 || age > 90) {
    alert('Те ваще нельзя пользоваться интернетом')
} else {
    alert('Ты код мне не ломай бога ради')
};


//Проверка логина

let login = prompt('Ты кто', '');

if (login == 'Админ') {
    let password = prompt('а теперь пинкод мы точно не мошенники')
    if (password == 'Я Главный') {
        alert('Здравствуйте!')
    } else if (password === null || password == '') {
        alert('Отменено')
    } else {
        alert('Неверный пароль')
    }
} else if (login === null || login == '') {
    alert('Отменено')
} else {
    alert('Ты кто такой я вас не звал')
}