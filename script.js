// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

console.group('1:');

const student = {
    sayInfo: function () {
        console.group('Name is ' + this.name);
        console.log('Special is ' + this.special);
        console.log('CenterBal is ' + this.centerBal);
        console.log('Prohulav is ' + this.prohulav);
        console.groupEnd();
    }
};

const Ann = {
    name: 'Anna',
    special: 'Doctor',
    centerBal: 10,
    prohulav: 3
};

const Denis = {
    name: 'Denis',
    special: 'Programist',
    centerBal: 11,
    prohulav: 6
};

const Bohdan = {
    name: 'Bohdan',
    special: 'Programist',
    centerBal: 10,
    prohulav: 5
};

student.sayInfo.bind(Ann)();
student.sayInfo.call(Denis);
student.sayInfo.apply(Bohdan);

console.groupEnd();

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

const buttonHtml = document.querySelector('.html');
const buttonCss = document.querySelector('.css');

buttonHtml.addEventListener('click', function () {
    alert(
        'Стабільна версія була перевірена 25 січня 2025. HTML (англ. HyperText Markup Language — мова розмітки гіпертексту) — стандартизована мова розмітки документів для перегляду вебсторінок у браузері.'
    );
});

buttonCss.addEventListener('click', function () {
    alert(
        'CSS (англ. Cascading Style Sheets, укр. Каскадні таблиці стилів) — це спеціальна мова стилю сторінок, що використовується для опису їхнього зовнішнього вигляду. Самі ж сторінки написані мовами розмітки даних.'
    );
});

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

console.group('3:');

const fruits = {
    banana: {
        name: 'Banena',
        many: 30,
        cost: 4.5
    },
    cherry: {
        name: 'Cherry',
        many: 58,
        cost: 1.3
    },
    orange: {
        name: 'Orange',
        many: 89,
        cost: 3.4
    },

    seyFruits: function () {
        console.log(`${this.name} cost ${this.cost}$`);
    }
};

fruits.seyFruits.call(fruits.orange);
fruits.seyFruits.call(fruits.cherry);
fruits.seyFruits.call(fruits.orange);
