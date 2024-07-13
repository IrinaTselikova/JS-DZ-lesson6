// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function sumSqrt (n1, n2) {
    return result = Math.pow(n1, 3) + Math.pow(n2, 3);
}

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

sumSqrt(num1, num2);
alert(result);
