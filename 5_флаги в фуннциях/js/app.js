'use strict';

/* Флаги в функциях JavaScript */

/* Проверка по массиву */
/* Задача 1⋕js.Pm.UF.Fl.1
Сделайте функцию, которая параметром будет принимать массив с числами, и проверять, что все элементы в этом массиве являются четными числами. */
/* function checkEvenNumbers(arr) {
	for (let elem of arr) {
		if (elem % 2 !== 0) {
			return false;
		}
	}
	return true;
}
console.log(checkEvenNumbers([2, 4, 8])); // true
console.log(checkEvenNumbers([2, 3, 4, 5, 6])); */  // false
/* идешь ты мимо домов и тебе нужно сказать все ли красные. 
кaк только ты встретишь НЕ красный. ты тут же говоришь. что нет, не все.
вот она и проверка на обратное. */

/* Задача 2⋕js.Pm.UF.Fl.2
Сделайте функцию, которая параметром будет принимать число и проверять, что все цифры это числа являются нечетными. */
/* function checkingOddNumbers(num){
	let str = String(num)
	for (let i = 0; i < num; i++){
		if (str[i] % 2 === 0){
			return false;
		}
	}
	return true;
}
console.log(checkingOddNumbers(33)); // true
console.log(checkingOddNumbers(44)); */ // false

/* Задача 3⋕js.Pm.UF.Fl.3
Сделайте функцию, которая параметром будет принимать массив и проверять, есть ли в этом массиве два одинаковых элемента подряд. */
/* function twoIdenticalElements(arr){
	for (let i = 0; i < arr.length; i++){
		if (arr[i] == arr[i-1]){
			return true;
		}
	}
	return false;
}
console.log(twoIdenticalElements([1, 1, 3, 4, 5])); //true
console.log(twoIdenticalElements([1, 2, 3, 4, 5, 6]));  *///false 