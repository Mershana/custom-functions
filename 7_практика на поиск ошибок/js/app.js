'use strict';

// Поиск ошибок в коде с функциями JavaScript

/* Задача 2⋕js.Pm.UF.Mst.2
Код должен найти сумму элементов массива: */
/* function sum(arr) {
	let res = 0;

	for (let elem of arr) {
		res += elem;
		return res;
	}
}
console.log(sum([1, 2, 3, 4, 5])); */
//solution
/* function sum(arr) {
	let res = 0;

	for (let elem of arr) {
		res += elem;
	}
	return res;
}
console.log(sum([1, 2, 3, 4, 5])); */ // 15

/* Задача 3⋕js.Pm.UF.Mst.3
Код должен найти сумму элементов массива, однако, ничего не выводит на экран:
let arr = [1, 2, 3, 4, 5];

function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	alert(res);
} */
//solution
/* function func(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	return res;
} 
let arr = [1, 2, 3, 4, 5];
console.log(func(arr)); */ //15

/* Задача 4⋕js.Pm.UF.Mst.4
Код должен найти сумму результатов работы двух функций:
function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1 + func2 ); */
//solution
/* function func1() {
	return 3;
}
function func2() {
	return 5;
}
console.log( func1() + func2() ); */ //8

/* Задача 5⋕js.Pm.UF.Mst.5
Код должен найти сумму элементов массива: */
/* let sum = sum([1, 2, 3, 4, 5]);
alert(sum);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return elem;
} */
//solution
/* function func(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
}

let arr = ([1, 2, 3, 4, 5]);
console.log(func(arr)); */ // 15

/* Задача 6⋕js.Pm.UF.Mst.6
Код должен найти сумму элементов массива: */
/* let res = sum([1, 2, 3, 4, 5]);
alert(res);

function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
} */
//solution
/* let res = sum([1, 2, 3, 4, 5]);
console.log(res); // 15
function sum(arr) {
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	return sum;
} */

/* Задача 7⋕js.Pm.UF.Mst.7
Функция добавляет ноль к числу от 1 до 9, а числа больше 9 возвращает без изменений:
function add(num) {
	if (num <= 9) {
		return '0' + num;
	}
} */
//solution
/* function add(num) {
	if (num <= 9) {
		return '0' + num;
	} else 
	 return Math.abs(num)
	
}
console.log(add(11)); */ // 11

/* Задача 8⋕js.Pm.UF.Mst.8
Код должен найти сумму элементов массива:
let arr = [1, 2, 3, 4, 5];
let sum = sum(arr);
console.log(sum);

function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
} */
//solution
/* function sum(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;
	}
	
	return res;
}
let arr = [1, 2, 3, 4, 5];
let suma = sum(arr);
console.log(suma);  */// 15

/* Задача 9⋕js.Pm.UF.Mst.9
Код должен найти сумму цифр числа:
let num = 12345;
let res = getDigitsSum(num);
console.log(res);

function getDigitsSum(num) {
	let arr = num.split('');
	let sum = 0;
	
	for (let elem of arr) {
		sum += elem;
	}
	
	return sum;
} */
//solutin
/* function getDigitsSum(num) {
	let str = String(num);
	let sum = 0;
	
	for (let i = 0; i < str.length; i++) {
		sum += Number(str[i]);
	}
	
	return sum;
}
let num = 12345;
let res = getDigitsSum(num);
console.log(res); */ // 15