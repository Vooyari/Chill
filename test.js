function calc(operation, a, b) {
    switch (operation) {
        case 'add':
            return a + b;
        case 'multi':
            return a * b;
        case 'subtract':
            return a - b;
        default:
            return 'Unknown operation';
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 3, 2));

const b = -30;
let temp = b;
let celsi = temp;
if(celsi<0) {
    console.log("Опасно холодно");
} else if (celsi<=5) {
    console.log('Очень холодно');
} else if (celsi<=20) {
    console.log('Прохладно');
} else if (celsi<30) {
    console.log('тепло');
} else {
    console.log('пекло');
}

const c = -20;
if (c>=1000 && c<5000) {
    console.log(c*0.95 + ' Итоговая цена со скидкой');
} else if (c>= 5000) {
    console.log(c*0.9 + ' Итоговая цена со скидкой');
} else if (c<1) {
    console.log('Неверно введённая сумма покупки');
} else {
    console.log(c + ' Итоговая цена без скидок');
}

function calc(operation, a, b) {
    if (operation=='add') {
        return a+b;
    } else if (operation=='multi') {
        return a*b;
    } else if (operation=='subtract') {
        return a - b;
    } else {
        return 'Неизвестный оператор'
    }
}
console.log(calc('add', 1, 2));
console.log(calc('multi', 1, 2));
console.log(calc('subtract', 1, 2));

