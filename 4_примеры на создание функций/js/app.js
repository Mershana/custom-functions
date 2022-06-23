'use strict';

// Примеры на создание функций в JavaScript
/* Задача 1⋕js.Pm.UF.Ex.1
Напишите функцию, которая будет находить сумму квадратов элементов массива. */
/* function sumElemArray(arr) {
	let sum = 0;

	for (let elem of arr) {
		sum += elem * elem;
	}
	return sum;
}
let arr1 = [1, 2, 3, 4, 5]
console.log(sumElemArray(arr1)); */ // 55

/* Задача 2⋕js.Pm.UF.Ex.2
Сделайте функцию getDigitsSum, которая параметром будет принимать целое число и возвращать сумму его цифр. */
/* function getDigitsSum(num){
	let sum = 0;
	let str = String(num);
	for (let i = 0; i < str.length; i++){
	sum += Number(str[i]);
	}
	return sum;
	}
console.log(getDigitsSum(1111)); */ // 4

/* Задача 3⋕js.Pm.UF.Ex.3
Реализуйте функцию getDivisors, которая параметром будет принимать число и возвращать массив его делителей, то есть чисел, на которое делится наше число. К примеру, если мы передадим число 24 - мы должны получить следующий массив:
[1, 2, 3, 4, 6, 8, 12, 24] */
// 1
/* function getDivisors(num){
	let result = [];
	for (let i = 0; i <= num; i++){
		if(num % i == 0){
			result.push(i);
		}
	}
	return result;
} 
console.log(getDivisors(24)) */ //[1, 2, 3, 4, 6, 8, 12, 24]
//2
/* function getDivisors(num){
	let result = [];
	for (let i = 0; i <= num; i++){
		if (num % i == 0){
			result.push(i)
		}
	}
	return result;
}
console.log(getDivisors(54));  */// [1, 2, 3, 6, 9, 18, 27, 54];
//3
/* function getDivisors(num){
	let arr = [];
	for (let i = 0; i <= num; i++){
		if(num % i == 0){
			arr.push(i);
		}
	}
	return arr;
}
console.log(getDivisors(88)); */ //[1, 2, 4, 8, 11, 22, 44, 88];

/* Задача 4⋕js.Pm.UF.Ex.4
Сделайте функцию reverseStr, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке. Решите задачу без цикла, используя комбинацию стандартных функций JavaScript. */
/* function reverseStr(num){
	return num.split('').reverse().join('');
}
console.log(reverseStr('elosnoc')); */ //console

/* Задача 5⋕js.Pm.UF.Ex.5
Сделайте функцию delElem, которая параметрами будет принимать значение и массив и удалять из массива все элементы с таким значением. */
/* function delElem(elem, array ) {
	for(let i = 0; i < array.length; i++){
		if(elem == array[i]){
			array.splice(i, 2);
		}
	}
	return array;
}
let arr = [1, 2, 2, 3, 4, 5, 6, 7, 7, 8, 9];
console.log(delElem(7, arr)); */ // [1, 2, 2, 3, 4, 5, 6, 8, 9];

/* Задача 6⋕js.Pm.UF.Ex.6
Сделайте функцию, заполняющую массив целыми числами от 1 до заданного. Пример работы такой функции:
console.log(func(5)); // выведет [1, 2, 3, 4, 5] */
/* function Numbers(num){
	let array = [];
	for (let i = 1; i <= num; i++){
		array.push(i);
	}
	return array;
}
console.log(Numbers(9)); */ //[1, 2, 3, 4, 5, 6, 7, 8, 9];

/* Задача 7⋕js.Pm.UF.Ex.7
Сделайте функцию, заполняющую массив целыми числами от начального до конечного заданных чисел. Пример работы такой функции:
console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7] */
/* function numbersArray(num1, num2){
	let array = [];
	for (let i = num1; i <= num2; i++){
		array.push(i)
	}
	return array;
}
console.log(numbersArray(2, 8)); */ //[2, 3, 4, 5, 6, 7, 8];