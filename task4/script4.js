// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения 
//     в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, 
//     функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity 
//     делать не нужно.

const sum = (a, b) => console.log(a + b);
    
function diff(a, b) {
    let diffNum;
    if (a > b) {
        diffNum = a - b;
    } else {
        diffNum = b - a;
    }
    console.log(diffNum);
}

const product = (a, b) => console.log(a * b);

const division = (a, b) => console.log(a / b);

let num1 = Number(prompt('Введите первое число'));
let num2 = Number(prompt('Введите второе число'));

sum(num1, num2);
diff(num1, num2);
product(num1, num2);
division(num1, num2);