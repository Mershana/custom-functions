'use strict';

/* Инструкция return в JavaScript */

/* Задача 1⋕js.Pm.UF.Rt.1
Сделайте функцию, которая параметром принимает число, а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 и запишите его в переменную result. */
/* function cube(num){
	return num * num * num;
}
let result = cube(3);
console.log(result); */ // 27

/* Использование функций в выражении */
/* Задача 2⋕js.Pm.UF.Rt.2
Сделайте функцию, которая параметром принимает число, а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их на экран. */
/*  function func(num){
	return num * num * num
 }
let result = func(3) + func(4);
console.log(result); */ //91

/* Функции в функциях */
/* Задача 3⋕js.Pm.UF.Rt.
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, округляющая дробь до трех знаков в дробной части:
 */
/* function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
} */
/* С помощью этих функций найдите квадратный корень из числа 2 и округлите его до трех знаков в дробной части. */
/* function sqrt(num) {
	return Math.sqrt(num);
}
function round(num) {
	return num.toFixed(3);
}
let result = Number(round(sqrt(2)));
console.log(result); */ //1.414

/* Задача 4⋕js.Pm.UF.Rt.4
Eсть у вас есть функция, возвращающая квадратный корень из числа, и функция, возвращающая сумму трех чисел: */
/* function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
} */
/* С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную result. */
/* function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
let result = sum(sqrt(2), sqrt(3), sqrt(4));
console.log(result); */ //5.146264369941973

/* Задача 5⋕js.Pm.UF.Rt.5
Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части: */
/* function round(num) {
	return num.toFixed(3);
} */
/* С помощью этой функции модифицируйте предыдущую задачу так, чтобы в переменную result записывалась дробь, округленная до 3-х знаков в дробной части. */
/* function sqrt(num) {
	return Math.sqrt(num);
}

function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}

function round(num){
	return num.toFixed(3)
}
let result = round(sum(sqrt(2), sqrt(3), sqrt(4)));
console.log(result); */ //5.146

/* Тонкое место return */
/* function func(num) {
	return num;
	
	let result = num * num;
	return result;
}

console.log(func(3)); */ //выведет 3, т.к после первого ретурна функция остановится и просто передаси число на выход - (console.log(func(3)))

// Задача 7⋕js.Pm.UF.Rt.7
// Что выведет каждый из алертов в результате выполнения следующего кода:
/* function func(num) {
	if (num <= 0) {
		return Math.abs(num); 
	} else {
		return num * num;
	}
}
console.log( func(10) ); //выведет 100, т.к в условие сказано, что если число меньше равно 0, то просто выводи его, но 10 не меньше, получается это false и он попадет под алгоритм num * num, получается 10 * 10 = 100;
console.log( func(-5) ); */ //выведет 5, потому что -5 меньше равно нуля, это true, оно дойдет до return math.abs(num) и выведется в консоль, до следующего действия не сможет дойти
// Объясните почему.

/* Задача 8⋕js.Pm.UF.Rt.8
Что выведет каждый из алертов в результате выполнения следующего кода: */
/* function func(num) {
	if (num <= 0) {
		return Math.abs(num);
	}
	
	return num * num;
}
console.log( func(10) ); //100, десять не проходит по условию, поэтому сразу падает на второй ретурн где происходит умножение (10*10) = 100
console.log( func(-5) ); */ //5, все что меньше или равно нуля попадает в способ math.abs, поэтому просто возвратит в функцию, выводит его в консоль лог
// Объясните почему.

/* Цикл и return */
/* Задача 9
Что выведется на экран в результате выполнения следующего кода: */
/* function func(num) {
	let sum = 0;
	
	for (let i = 1; i <= num; i++) {
		sum += i;
	}
	return sum;
}
console.log( func(5) ); */ // 15  думаю, автор хотел узнать сумму чисел от 1 до НАМ. однако, он засунул ретерн вовнутрь цикла, поэтому получит результат первой итерации, то биш 0+1=1. для того, что бы получить сумму чисел от 1 до 5 надо выставить ретерн после цикла.

/* Применение return в цикле */
/* Задача 10⋕js.Pm.UF.Rt.10
Напишите функцию, которая параметром будет принимать число и делить его на 2 столько раз, пока результат не станет меньше 10. Пусть функция возвращает количество итераций, которое потребовалось для достижения результата. */
/* function number(num){
let result = 1;
while (true){
	num /= 2; 
	if(num < 10){
		return result
	}
	result++;
}
}
console.log(number(110)) */ // 4

/* Приемы работы с return */

/* Задача 11⋕js.Pm.UF.Rt.11
Дана следующая функция:
function func(num1, num2) {
	let result;
	
	if (num1 > 0 && num2 > 0) {
		result = num1 * num2;
	} else {
		result = num1 - num2;
	}
	
	return result;
}
alert(func(3, 4));
Перепишите ее в сокращенной форме согласно изученной теории.
 */
//Решение
/* function func(num1, num2) {
	
	if (num1 > 0 && num2 > 0) {
		 return num1 * num2;
	} else {
		 return num1 - num2;
	}
}
console.log(func(3, 4)); */ //12