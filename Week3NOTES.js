 // 02.05.19 session 3 - functions 

// functions : a block of code that performs a specific task and makes it reusable

function createRandomNumber(max) {
	let num ('I am returning' + Math.floor(Math.random() * max));
	console.log(num);
}

createRandomNumber(100);

function convertToCelsius(deg_fah) {
	let converted_deg = (deg_fah-32) * 5/9;
	console.log('The converted temperature is', converted_deg);
}
// deg_fah only exists within the function

const far = 32;
convertToCelsius(far);

// 1st class object **** needs review
function convertToCelsius(deg_fahren = 32){
	let fixed_place = 4;
	let converted_deg = (deg_fahren-32) * 5/9;
	converted_deg = converted_deg.toFixed(
		fixed_place);
	return(converted_deg);
}

let converted = convertToCelsius(100);
console.log('the converted value is ' + converted);

const clonefunction = convertToCelsius;
clonefunction(100);

function outputValue(converter, temperature){
	console.log('the converted value is ' + converter(temperature));
}

outputValue(convertToCelsius, 200);



// assign anonymous function to variable **** needs review
const convertToCelsius = function(deg_fah) {
	let converted_deg = (deg_fah-32) * 5/9;
	return converted_deg;
};

// function alt.definitions
const convertToCelsius = deg_fah => (deg_fah-32) * 5/9;

// ---------------


//revisiting array methods **** needs review
var my_array = ["blue", "red", "green"];

// let upp_array = [];
// for (value of my_array){
// 	upp_array.push(value.toUpperCase());
// }

function convertToUpper (value){
	return value.toUpperCase();
}

upp_array = my_array.map(function(value));{
	return value.toUpperCase();
}

console.log(upp_array); 


// same as

upp_array = my_array.map( val => val.toUpperCase());

console.log(upp_array); 

//  **** needs review

const array_num = [1,2,3,4,5];
array_sum = array_num.reduce(function(prev, current){
	return prev + current ;
});

console.log(array_sum);


//closures **** needs review

let outerFunc = function (line){
	let message = line;
	// console.log(message);
	let innerFunc = function (){
		return message;
	}
	return innerFunc;
}

let myFunc = outerFunc('this is a line');


//another example

function multiplier (factor){
	let ret = function (number){
		return number * factor;
	}
	return ret;
}


three = multiplier(3);
three(3)




