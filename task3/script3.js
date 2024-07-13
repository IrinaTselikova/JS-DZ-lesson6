// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

function maxNumber(n1, n2, n3) {
    let max;
    if (n1 > n2) {
        max = n1;
    } else {
        max = n2;
    }

    if (max > n3) {
        console.log(`максимальное значение ${max}`);
    } else {
        console.log(`максимальное значение ${n3}`);
    }
    
}

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));
let num3 = Number(prompt('Введите третье число'));

maxNumber(num1, num2, num3);