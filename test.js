
// console.log('123')
// const func = (begin, end) => {
//     for (let x = begin; x <= end; x ++) {
//       if ((!(x % 3 === 0)) && (!(x % 5 === 0))) console.log(x);
//       if (x % 3 === 0) console.log('Fizz');
//       if (x % 5 === 0) console.log('Buzz');
//     }
//   }
//   func(5, 15);
// const invertCase = (str) => {
//     for (let x = 0; x < str.length; x++) {
//       if (str[x] === str[x].toUpperCase) {
//         console.log(str[x]);
//       }
//       else {
//         console.log(str[x]);
//       }
//     }
//   }
//   invertCase('heLLO');

// const { capitalize } = require("lodash");
// import _, { remove } from "lodash";

// const { isArray } = require("lodash");

// const { indexOf } = require("lodash");







// const isHappyTicket = (str) => {
//     let firstPart = 0;
//     let secondPart = 0;
//     for (let x = 0; x < str.length / 2; x += 1) {
//       firstPart = firstPart + Number(str[x]);
//       console.log(firstPart);
//     }
//     for (let x = str.length / 2; (x >= str.length / 2) && (x < str.length); x += 1) {
//       secondPart = secondPart + Number(str[x]);
//       console.log(secondPart);
//     }
//     if (firstPart === secondPart) {
//         console.log(firstPart);
//         console.log(secondPart);
//         return true;
//     }
//     else {
//         // console.log(firstPart);
//         // console.log(secondPart);
//         return false;
//     }
//   };
// isHappyTicket('222132');


// let x = '315';
// let y = 15;
// z = y + Number(x[2]);
// console.log(z);




// str = '333555'
// let firstPart = 0;
//     let secondPart = 0;
//     for (let x = 0; x < str.length / 2; x += 1) {
//       firstPart = firstPart + Number(str[x]);
//       console.log(firstPart)
//     }







// let doReverse = (str) => {
//     let result = '';
//     for (let x = 0; x < str.length; x++) {
//         result = str[x] + result;
//     }
//     return result;
// }
// let x = 'asd';
// x = doReverse(x);
// console.log(x);






// const reverse = (str) => {
//     if (str.length === 0) {
//       return str;
//     }

//     // return `${str.slice(-1)}${reverse(str.slice(0, -1))}`;
//     // return str.slice(-1) // + 
//     return reverse(str.slice(0, -1));
//   };
// let x = 'asd';
// x = reverse(x);
// console.log(x);





// let x ='asdf';
// x = x.slice(0, -1);
// console.log(x);


// let reverseNumber = (number) => {
//     let result = '';
//     number = String(number);

//     for (let i = 0; i < number.length; i++) {
//       result = number[i] + result;
//       console.log(result);
//     }
//     console.log(result);
//   }
//   reverseNumber(12);



// let fib = (num) => {
//   let result = 0;
//   if (num === 1) return 1;
//   // if (num === 2) return 1;
//   let firstNum = 0;
//   let secondNum = 1;
//   for (let i = 2; i <= num; i++) {
//     result = firstNum + secondNum;
//     firstNum = secondNum;
//     secondNum = result;
//   }
//   return result;
// }
// console.log(fib(3));



// function swap(erray) {
//   if (erray.length <= 1) return erray;
// let temp = erray[0];
// erray[0] = erray.at(-1);
// erray[erray.length - 1] = temp;
// return erray;
// }
// const a = [1]
// console.log(swap(a))



// function getIndex (array, index, defaultResult = null) {
//   // if (index >= array.length) return defaultResult;
//   // if (array[index] === undefined) return defaultResult;
//   // return array[index];

//   return array[index] === undefined ? defaultResult: array[index];
// }
// export default getIndex;

// function getIndex (array, index, defaultResult = null) {
//   return index >= array.length || array[index] < 0 ? defaultResult : array[index];
// }
// const cities = ['moscow', 'london', 'berlin', 'porto'];

// console.log(getIndex(cities, 5, false)); 

// let a = [1]
// let c = a
// console.log(a)
// console.log(c)
// console.log(a === c)
// a.push(2)
// console.log(a)
// console.log(c)
// console.log(a === c)
// c = c[0] + 123
// console.log(c)
// a = a[0] + 12



// function genNewArray(array, prefix) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i += 1) {
//     newArray[i] = `${prefix} ${array[i]}`;
//   }
//   return newArray;
// }
// export default genNewArray;
// const names = ['john', 'smith', 'karl'];

// const newNames = genNewArray(names, 'Mr');
// console.log(newNames);

// console.log(typeof names);



// function reverse(array) {
//   let result = [];
//   for(let i = 0; i < array.length; i += 1) {
//     result.unshift(array[i]);
//   }
//   array = result;
//   console.log(array);
//   return array;
// }
// function reverse(array) {
//   for(let i = 0; i < array.length / 2; i += 1) {
//     let element = array[i];
//     array[i] = array[array.length - 1 - i];
//     array[array.length - 1 - i] = element;
//     console.log(array);
//   }
// }

// const names = ['john', 'smith', 'karl', 1];

// reverse(names);
// console.log(names);

// && array.length % 2 !== 0) || (i < array.length / 2 && array.length % 2 === 0)




// function rentalCarCost(d) {
//   // Your solution here
//   if (d >= 7) return d * 40 - 50; 
//   if (d >= 3) return d * 40 - 20;
//   else return d * 40;
// }

// console.log(rentalCarCost(-1));


// function feast(beast, dish) {
//   //your function here
//     return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
//   }
//   console.log(feast('dick', 'disk'));



// function calculateAverage(array) {
//   if (array.length === 0) return null;
//   let result = 0;
//   for (const num of array) {
//     result = result + num;
//   }
//   result = result / array.length;
//   return result;
// }

// const temperatures1 = [37.5, 34, 39.3, 40, 38.7, 41.5];
// console.log(calculateAverage(temperatures1));


// function getSameParity(array) {
//   if (array === []) return result = [];
//   let result = [];
//   for (const item of array) {
//     if (Math.abs(item) % 2 !== 0) {
//       result.push(item);
//     }
//   }
//   return result;
// }
// console.log(getSameParity([1, 2, 8]));
// console.log(getSameParity([2, 2, 8]));


// const coll = ['one', 'two', 'three', 'four', 'stop', 'five'];
// for (const item of coll) {
//   if (false) {
//     // Условие никогда не выполнится, но цикл все равно завершит работу
//     break;
//   }

//   console.log(item);
// }


// function getTotalAmount(allValutes, valute){
//   let result = 0;
//    for (let i = 0; i < allValutes.length; i++) {
//     //  console.log(allValutes[i].slice(0, 3))
//     //  console.log(valute)
//      if (allValutes[i].slice(0, 3) === valute) {
//        result += Number(allValutes[i].slice(4));
//       //  console.log(result);
//      }
//    }
//    return result;
//  }
//  const money1 = [
//   'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
// ];
//  console.log(getTotalAmount(money1, 'usd'))



// let array = []
// for (let i = 1; i > 0; i++) {
//   array.push(i);
//   // console.log(array);
//   console.log('');
//   console.log(123);
// }


// for (let i = 0; i >= 0 ; i++){
//   console.log(i);
// }


//ОПИСАНИЕ ЗАДАНИЯ --->

// import makeCensored from '../strings';

// const sentence = 'When you play the game of thrones, you win or you die';
// const result = makeCensored(sentence, ['die', 'play']);
// // When you $#%! the game of thrones, you win or you $#%!

// const sentence2 = 'chicken chicken? chicken! chicken';
// const result2 = makeCensored(sentence2, ['?', 'chicken']);
// // '$#%! chicken? chicken! $#%!';




// function makeCensored (text, badWord) {

//   let result = '';
//   let dividedText = text.split(' ');

//   for (let i = 0; i < dividedText.length; i++){
//     for (let j = 0; j < badWord.length; j++){
//       if (dividedText[i] === badWord[j]) dividedText[i] = '$#%!';
//     }
//   }

//   result = dividedText.join(' ')
//   return result;
// }
// console.log(makeCensored(`i love you`, 'love'));

// import _ from 'lodash';

// function getSameCount(array1, array2) {

//   let result = 0;

//   const arrayUniqOnly1 = _.uniq(array1);
//   const arrayUniqOnly2 = _.uniq(array2);

//   if (array1.length === 0 && array2.length === 0) return result = 0;

//   for (let i = 0; i < arrayUniqOnly1.length; i++) {
//     for (let j = 0; j < arrayUniqOnly2.length; j++) {
//       if (arrayUniqOnly1[i] === arrayUniqOnly2[j]) result++;
//     }
//   }
//   return result;
// }

// console.log(getSameCount([], []));



// function countUniqChars (string) {

//   string.split('');
//   let newMassive = [];

//   for (let i = 0; i < string.length; i++){
//     if (!newMassive.includes(string[i])) newMassive.push(string[i]);;
//   }

//   return newMassive.length;
// }

// function bubbleSort (array) {

//   let cycleEnding = true;

//   while (cycleEnding === true) {
//     cycleEnding = false;

//     for (let i = 0; i < array.length - 1; i++){

//       const temp = array[i + 1]
//       if (array[i] > array[i + 1]) {
//         array[i + 1] = array[i];
//         array[i] = temp;
//         cycleEnding = true;
//         // console.log(array);
//       }  
//     }
//   }
//   return array;
// }

// const testArray = [3, 10, 4, 3];
// bubbleSort(testArray);
// console.log(testArray);
// console.log((bubbleSort([11, 2, 29, 13, 15, 28, 26, 1, 27, 19, 18, 26, 23, 3, 1, 5, 4, 5, 22, 13, 22, 8, 30, 5, 22, 10])))











// МАСТЕРПИС









// function isBracketStructureBalanced(string) {

//   let array = string.split('');

//   let indexOfClosingBracket = 0;
//   let exceptionIndexes = [];
//   let arrayWithoutExceptions = array.slice(0);

//   while (true) {
//     if (exceptionIndexes.length === 0) {
//       exceptionIndexes = [];
//       arrayWithoutExceptions = array.slice(0);
//     }
//     else {
//       for (let i = 0; i < exceptionIndexes.length; i++) {
//         delete arrayWithoutExceptions[exceptionIndexes[i]];
//       }
//     }
//     switch (array[0]) {
//       case '(':
//         indexOfClosingBracket = arrayWithoutExceptions.indexOf(')');
//         break;
//       case '[':
//         indexOfClosingBracket = arrayWithoutExceptions.indexOf(']');
//         break;
//       case '{':
//         indexOfClosingBracket = arrayWithoutExceptions.indexOf('}');
//         break;
//       case '<':
//         indexOfClosingBracket = arrayWithoutExceptions.indexOf('>');
//         break;
//       case undefined:
//         return true;
//       default:
//         return false;
//     }

//     if (indexOfClosingBracket === -1) return false;

//     if (sumOfElements(array.slice(1, indexOfClosingBracket)) === 0) {
//       exceptionIndexes = [];
//       array.splice(0, 1);
//       array.splice(indexOfClosingBracket - 1, 1);
//       if (array.length === 0) return true;
//     }
//     else {
//       exceptionIndexes.push(indexOfClosingBracket);
//     }
//   }
// }

// function sumOfElements(array) {
//   let roundBrackets = 0; // круглые
//   let squareBrackets = 0; // квадратные
//   let curlyBrackets = 0; // фигурные
//   let angleBrackets = 0; // угловые

//   for (let i = 0; i < array.length; i++) {
//     switch (array[i]) {
//       case '(':
//         roundBrackets++;
//         break;
//       case ')':
//         roundBrackets--;
//         break;
//       case '[':
//         squareBrackets++;
//         break;
//       case ']':
//         squareBrackets--;
//         break;
//       case '{':
//         curlyBrackets++;
//         break;
//       case '}':
//         curlyBrackets--;
//         break;
//       case '<':
//         angleBrackets++;
//         break;
//       case '>':
//         angleBrackets--;
//         break;
//     }
//   }
//   if (roundBrackets === 0 && squareBrackets === 0 && curlyBrackets === 0 && angleBrackets === 0) {
//     return 0;
//   }
// }

// let a = '';

// console.log(isBracketStructureBalanced(a));



// function getIntersectionOfSortedArrays (firstArray, secondArray) {
//   const result = [];
//   let j = 0;
//   // let lengthSum = firstArray.length + secondArray.length;

//   // for (let i = 0; i < lengthSum || i < firstArray.length; ){
//   for (let i = 0; i <= firstArray.length; ){
//     if (firstArray[i] === secondArray[j]) {
//       result.push(firstArray[i]);
//       i++;
//       console.log(i);
//       j++;
//       console.log(j);
//       console.log(result);
//       continue;
//     }
//     firstArray[i] > secondArray[j] ? j++ : i++;

//   }
//   for (let i = 0; i < result.length; i++){
//     if (result[i] === result[i + 1]) {
//       result.splice(i, 1);
//       i--;
//     }
//   }
//   return result;
// }

// const getIntersectionOfSortedArrays2 = (arr1, arr2) => {
//   const size1 = arr1.length;
//   const size2 = arr2.length;

//   let i1 = 0;
//   let i2 = 0;
//   const result = [];

//   while (i1 < size1 && i2 < size2) {
//     const lastCommon = result.at(-1);
//     const item1 = arr1[i1];
//     const item2 = arr2[i2];
//     if (item1 === item2 && item1 !== lastCommon) {
//       result.push(item1);
//       i1 += 1;
//       i2 += 1;
//     } else if (item1 > item2) {
//       i2 += 1;
//     } else {
//       i1 += 1;
//     }
//   }

//   return result;
// };

// console.log(getIntersectionOfSortedArrays2([10, 11, 24, 30], [10, 13, 14, 18, 24, 30]));

// const getDistance = ([x1, y1], [x2, y2]) => {
//   const xs = x2 - x1;
//   const ys = y2 - y1;

//   return Math.sqrt(xs ** 2 + ys ** 2);
// };

// function getTheNearestLocation (locations, point) {
//   if (locations.length === 0) return null;
//   if (locations.length === 1) return locations[0];

//   const [x, y] = point;
//   let result = locations[0];

//   for (let i = 1; i < locations.length; i++){
//     if (getDistance([x, y], locations[i][1]) < getDistance([x, y], result[1])) {
//       result = locations[i];
//     }
//   }
//   return result;
// }

// const locations = [
//   ['Park', [10, 5]],
//   ['Sea', [1, 3]],
//   ['Museum', [8, 4]],
// ];
 
// const currentPoint = [5, 5];
 
// // Если мест нет, то возвращается null
// console.log(getTheNearestLocation(locations, currentPoint));


// function getMax ([...numbers]) {
//   if (numbers.length === 0) return null;
//   let result = numbers[0];

//   for (let i = 1; i < numbers.length; i++){
//     if (numbers[i] > result) {
//       result = numbers[i];
//     }
//   }
//   return result;
// } 

// console.log(getMax([1, 10, 8]));


// function flatten (array) {
//   if (array === []) return array;

//   let result = [];
  
//   for (let i = 0; i < array.length; i++){
//     if (typeof(array[i]) === 'object') {
//       const [...innerArray] = array[i];
//       result = [...result, ...innerArray]
//     }
//     else {
//       result.push(array[i]);
//     }
//   }
//   console.log(result);
// }

// flatten([1, [2, 4], "3"])


// for (let i = 0; i < 10; ++i){
//   console.log(i);
// }


// function normalise(data) {
//   data.name = _.capitalize(data.name);
//   data.description = data.description.toLowerCase();
// }

// const lesson = {
//   name: 'деструКТУРИЗАЦИЯ',
//   description: 'каК удивитЬ друзей',
// };

// normalise(lesson);

// const company1 = { name: 'Hexlet', state: 'moderating', website: 'https://hexlet.io' };
// const company2 = { name: 'CodeBasics', state: 'published', website: 'https://code-basics.com' };
// is(company1, company2); // false

// function isEqual(obj, obj2) {
//   if ((obj.name === obj2.name) && (obj.state === obj2.state) && (obj.website === obj2.website)) return true;
//   return false;
// }

// export default function getDomainInfo(url) {
//   const result = {};

//   const parts = url.split('://');
  
//   if (url.startsWith('https')) result.scheme = 'https';
//   else result.scheme = 'http';

//   result.name = parts.at(-1);
//   return result;
// }

// console.log(getDomainInfo('https://hexlet.io'));
// getDomainInfo('yandex.ru')
// {
//   scheme: 'http',
//   name: 'yandex.ru',
// }

// function countWords (sentence) {
// const result = {};

// sentence = sentence.toLowerCase();
// const array = _.words(sentence)

// for (let i = 0; i < array.length; i++){
//   if (Object.hasOwn(result, array[i])) result[array[i]] += 1;
//   else result[array[i]] = 1;
// }

// return result;
// }

// const text2 = 'another one sentence with strange Words words';

// console.log(countWords(text2));



// function pick (data, keywords) {
//   const result = {};
//   const entry = Object.entries(data);

//   for (let i = 0; i < entry.length; i++){
//     const [key, value] = entry[i];
//     if (keywords.includes(key)) result[key] = value; 
//   }

//   return result;
// }

// const data = {
//   user: 'ubuntu',
//   os: 'linux',
// };
 
// console.log(pick(data, ['os', 'user']));
// // console.log(Object.keys(pick(data, ['none'])).length);
//  // { user: 'ubuntu' }

// function get (obj, path) {
//   let result = obj;
//   for (let i = 0; i < path.length; i++){
//     result = result?.[String(path[i])];
//   }
//   return result ?? null;
// }

// const data = {
//   user: 'ubuntu',
//   hosts: {
//     0: {
//       name: 'web1',
//     },
//     1: {
//       name: 'web2',
//       null: 3,
//       active: false,
//       company: {
//         name: 'hexlet',
//       },
//     },
//   },
// }
// const a = ['hosts']['0'];
// console.log(data[a]);
//  console.log(get(data, [null]));
//  console.log(get(data, ['user']));
//  console.log(get(data, ['user', 'ubuntu']));
//  console.log(get(data, ['hosts', 1, 'name']));
//  console.log(get(data, ['hosts', 0]));
//  console.log(get(data, ['hosts', 1, null]));
//  console.log(get(data, ['hosts', 1, 'active']));
//  console.log(get(data, ['user', 'name', 'name']));
; // null
; // 'ubuntu'
; // null
; // 'web2'
; // { name: 'web1' }
; // 3
; // false




// function fill (object, keysToChange, newDate) {
//   if (keysToChange.length === 0) keysToChange = Object.keys(newDate);
//   const filtredNewData = _.pick(newDate, keysToChange);

//   _.merge(object, filtredNewData);
// }


// const company = {
//   name: null,
//   state: 'moderating',
// };
 
// const data = {
//   name: 'Hexlet',
//   state: 'published',
// };

// fill(company, [], data);
// console.log(company);
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// // }


// function cloneShallow (data) {
//   const result = {};
//   const keys = Object.keys(data);

//   for (const key of keys) {
//     result[key] = data[key];
//   }
//   return result;
// }

// const data = {
//   key: 'value',
//   key2: {
//     key: 'innerValue',
//     innerKey: {
//       anotherKey: 'anotherValue',
//     },
//   },
// };
 
// // result имеет такую же структуру, как и data
// const result = cloneShallow(data);
// console.log(result);


// function make (name, data = {}) {
//   const result = {name, state: 'moderating', createdAt: Date.now(), ...data};
//   return result;
// }

// const company = make('Hexlet');
// // {
// //   name: 'Hexlet',
// //   state: 'moderating',
// //   createdAt: <тут текущая дата>
// // }
// console.log(company);

// function getSortedNames (users) {
//   const names = [];
//   for (const user of users) {
//     const { name } = user;
//     names.push(name);
//   }
//   names.sort();
//   return names;
// }


// const users = [
//   { name: 'Bronn', gender: 'male', birthday: '1973-03-23' },
//   { name: 'Reigar', gender: 'male', birthday: '1973-11-03' },
//   { name: 'Eiegon', gender: 'male', birthday: '1963-11-03' },
//   { name: 'Sansa', gender: 'female', birthday: '2012-11-03' },
// ];
//  console.log(getSortedNames(users));




// import { bstr, buf, str } from "crc-32";

// function make() {
//   return [];
// }

// function set(map, key, value) {
//   const hash = str(key);
//   const index = Math.abs(hash) % 1000;
//   if (map[index] !== undefined) {
//     if (map[index][0] === key) {
//       map[index] = [key, value];
//       return true;
//     }
//     return false;
//   }
//   map[index] = [key, value];
//   return true;
// }

// function get(map, key, defaultValue = null) {
//   const hash = str(key);
//   const index = Math.abs(hash) % 1000;
//   if (map[index] !== undefined) {
//     if (map[index][0] === key) {
//       return map[index][1];
//     }
//   } 
//   return defaultValue;
// }


// const map = make();
// // let result = get(map, 'key');
// // console.log(result); // => null
 
// // result = get(map, 'key', 'default_value');
// // console.log(result); // => "default_value"
 
// // set(map, 'key2', 'value2');
// // result = get(map, 'key2');
// // console.log(result); // => "value2"

// set(map, 'key2', 'another value');
// const result5 = get(map, 'key2');
// console.log(result5);


// for (let i = 0; i < 110; i++){
//   console.log(Date.now());
// }


// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i < num; i++){
//     if (num % i === 0) return false; 
//   }
//   return true;

// }


// const sayPrimeOrNot = (num) => isPrime(num) ? console.log('yes') : console.log('no');

// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));
// console.log(isPrime(5));
// console.log(isPrime(6));
// console.log(isPrime(17));
// console.log(isPrime(19));
// console.log(isPrime(2124679));
// // 2, 3, 5, 7, 11, 13, 17, 19, 23,

// console.log(Math.sqrt(3));

// let count = 0;
// for (let i = 1000000; i < 1010000; i++){
//   if (isPrime(i)) count++;
// }
// console.log(count);

// function getAverage(...nums) {
//   if (nums.length === 0) return null;
//   const sumOfElements = _.sum(nums);
//   return sumOfElements / nums.length;
// }
// // const getAverage = (...nums) => _.sum(nums) / nums.length;

// console.log(getAverage(-3, 4, 2, 10));



// function convert(...arrays) {
//   const result = [];
  
//   for (let i = 0; i < arrays.length; i++){
//     // arrays[i][1] += 1;
//     const date = new Date(...arrays[i]);
//     console.log(...arrays[i]);
//     result.push(date.toDateString());
//   }
//   return result;
// }

// console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 11, 18]));
// // console.log(convert([1993, 3, 24]));
// // console.log(convert([1993, 3, 24], [1997, 8, 12], [2001, 10, 18])
// // ['Sat Apr 24 1993', 'Fri Sep 12 1997', 'Sun Nov 18 2001']
// // );




// function takeLast(text, count) {
//   if (text.length < count) return null;
//   let result = '';
//   for (let i = 0; i < count; i++){
//     result = result + text[text.length - 1 - i];
//   }
//   return result;
// }

// console.log(takeLast('text', 4));

// function takeOldest(users, count = 1) {
// //  const sortedUsers = _.sortBy(users, [function (user) {return Date.parse(user.birthday)}]);
//  const sortedUsers = _.sortBy(users, [(user) => Date.parse(user.birthday)]);
//  const result = [];
//  for (let i = 0; i < count; i++){
//   result.push(sortedUsers[i]);
//  }
//  return result;
// }


// const users = [
//   { name: 'Tirion', birthday: 'Nov 19, 1988' },
//   { name: 'Sam', birthday: 'Nov 22, 1999' },
//   { name: 'Rob', birthday: 'Jan 11, 1975' },
//   { name: 'Sansa', birthday: 'Mar 20, 2001' },
//   { name: 'Tisha', birthday: 'Feb 27, 1992' },
//   { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];

// console.log(takeOldest(users, 3));


// console.log(Array);

// function getChildren(children) {
//   return children.map((child) => child.children).flat();
// }

 
// const users = [
//   {
//     name: 'Tirion',
//     children: [
//       { name: 'Mira', birthday: '1983-03-23' },
//     ],
//   },
//   { name: 'Bronn', children: [] },
//   {
//     name: 'Sam',
//     children: [
//       { name: 'Aria', birthday: '2012-11-03' },
//       { name: 'Keit', birthday: '1933-05-14' },
//     ],
//   },
//   {
//     name: 'Rob',
//     children: [
//       { name: 'Tisha', birthday: '2012-11-03' },
//     ],
//   },
// ];
 
// console.log(getChildren(users));



// function getGirlFriends(users) {
//   const listOfFriend = users.map((user) => user.friends).flat();
//   return listOfFriend.filter((friend) => friend.gender === 'female');
// }

// const users = [
//   {
//     name: 'Tirion',
//     friends: [
//       { name: 'Mira', gender: 'female' },
//       { name: 'Ramsey', gender: 'male' },
//     ],
//   },
//   { name: 'Bronn', friends: [] },
//   {
//     name: 'Sam',
//     friends: [
//       { name: 'Aria', gender: 'female' },
//       { name: 'Keit', gender: 'female' },
//     ],
//   },
//   {
//     name: 'Rob',
//     friends: [
//       { name: 'Taywin', gender: 'male' },
//     ],
//   },
// ];
 
// getGirlFriends(users);

// console.log(getGirlFriends(users));



// function groupBy(array, key) {
//   const result = {};
//   function cb(acc, element) {
//     if (!Object.hasOwn(acc, element[key])) {
//       acc[element[key]] = [element];
//     }
//     else {
//       acc[element[key]].push(element);
//     }
//     return acc;
//   }
//   array.reduce(cb, result);
//   return result;
// }

// const students = [
//   { name: 'Tirion', class: 'B', mark: 3 },
//   { name: 'Keit', class: 'A', mark: 3 },
//   { name: 'Ramsey', class: 'A', mark: 4 },
// ];
 
// // console.log(groupBy([], ''));
// console.log(groupBy(students, 'mark'));



// const freeEmailDomains = [
//   'gmail.com',
//   'yandex.ru',
//   'hotmail.com',
//   'yahoo.com',
// ];

// const getFreeDomainsCount = (emails) => emails
//   .map((email) => email.split('@')[1])
//   .filter((domain) => freeEmailDomains.includes(domain))
//   .reduce((acc, elem) => {
//     Object.hasOwn(acc, elem) ? acc[elem] += 1 : acc[elem] = 1;
//     return acc;
//   }, {}
//   )

// const emails = [
//   'info@gmail.com',
//   'info@yandex.ru',
//   'info@hotmail.com',
//   'mk@host.com',
//   'support@hexlet.io',
//   'key@yandex.ru',
//   'sergey@gmail.com',
//   'vovan@gmail.com',
//   'vovan@hotmail.com',
// ];

// console.log(getFreeDomainsCount(emails));
// ;
// // {
// //   'gmail.com': 3,
// //   'yandex.ru': 2,
// //   'hotmail.com': 2,
// // };



// function sequenceSum(begin, end) {
//   if (begin > end) return NaN;
//   if (begin === end) return begin;
//   return begin + sequenceSum(begin + 1, end);
// }

// console.log(sequenceSum(1, 5));




// function smallestDivisor(n) {
//   const startNum = 2;
//   if (n < 2) return 1;

//   const iter = (n, acc) => {
//     if (n % acc === 0) return acc;
//     return iter(n, acc + 1); 
//   }

//   return iter(n, startNum);
// }

// console.log(smallestDivisor(15)); // 17
// console.log(smallestDivisor(17)); // 17




// const calculateDistance = (point1, point2) => Math.sqrt(((point2[0] - point1[0]) ** 2) + ((point2[1] - point1[1]) ** 2));

// const point1 = [0, 0];
// const point2 = [3, 4];
// console.log(calculateDistance(point1, point2));
// ; // 5




// function getMidpoint(point1, point2) {
//   const x = (point1.x + point2.x) / 2;
//   const y = (point1.y + point2.y) / 2;
//   return {x, y}
// }

// const point1 = { x: 0, y: 0 };
// const point2 = { x: 4, y: 4 };
// const point3 = getMidpoint(point1, point2);
// console.log(point3); // => { x: 2, y: 2 };




// const makeDecartPoint = (x, y) => {
//   const point = { x, y };
//   return point;
// };


// // const makeSegment = (beginPoint, endPoint) => {beginPoint, endPoint};
// function makeSegment (beginPoint, endPoint) {
//   return {beginPoint, endPoint};
// }

// function getMidpointOfSegment(segment) {
//   const midForX = (segment.beginPoint.x + segment.endPoint.x) / 2;
//   const midForY = (segment.beginPoint.y + segment.endPoint.y) / 2;
//   return [midForX, midForY];
// }

// const getBeginPoint = (segment) => segment.beginPoint;
// const getEndPoint = (segment) => segment.endPoint;


// const beginPoint = makeDecartPoint(3, 2);
// const endPoint = makeDecartPoint(0, 0);
// const segment = makeSegment(beginPoint, endPoint);

// console.log(segment);

// console.log(getMidpointOfSegment(segment));




// const makePoint = (x, y) => {
//   const point = {
//     angle: Math.atan2(y, x),
//     radius: Math.sqrt((x ** 2) + (y ** 2)),
//   };

//   return point;
// };

// function getX(point) {
//   const x = Math.round(point.radius * Math.cos(point.angle));
//   return x;
// }

// function getY(point) {
//   const y = Math.round(point.radius * Math.sin(point.angle));
//   return y;
// }


// const x = 4;
// const y = 8;
 
// // point хранит в себе данные в полярной системе координат
// const point = makePoint(x, y);
 
// // Здесь происходит преобразование из полярной в декартову
// console.log(getX(point));
// ; // 4

// console.log(getY(point));
// ; // 8




// const makeDecartPoint = (x, y) => {
//   const point = { x, y };
//   return point;
// };

// const getX = (point) => point.x;

// const getY = (point) => point.y;

// const getQuadrant = (point) => {
//   const x = getX(point);
//   const y = getY(point);

//   if (x > 0 && y > 0) {
//     return 1;
//   }
//   if (x < 0 && y > 0) {
//     return 2;
//   }
//   if (x < 0 && y < 0) {
//     return 3;
//   }
//   if (x > 0 && y < 0) {
//     return 4;
//   }

//   return null;
// };

// const makeRectangle = (point, width, height) => ({point, width, height});

// const getStartPoint = (rectangle) => rectangle.point;

// const getWidth = (rectangle) => rectangle.width;

// const getHeight = (rectangle) => rectangle.height;


// function containsOrigin(rectangle) {
//   const getOppositePoint = (rectangle) => {
//     const startPoint = getStartPoint(rectangle);
//     const x = getX(startPoint) + getWidth(rectangle);
//     const y = getY(startPoint) - getHeight(rectangle);
//     const oppositePoint = makeDecartPoint(x, y);
//     return oppositePoint;
//   }

//   if (getQuadrant(getStartPoint(rectangle)) !== 2) return false;
//   if (getQuadrant(getOppositePoint(rectangle)) !== 4) return false;
//   return true;
// }


// const p = makeDecartPoint(0, 1);
// const rectangle = makeRectangle(p, 4, 5);

// // console.log(rectangle);
 
// console.log(containsOrigin(rectangle));
// // ; // false
 
// const rectangle2 = makeRectangle(makeDecartPoint(-4, 3), 5, 4);

// console.log(containsOrigin(rectangle2));
// // ; // true


// // const frt = (point, width, height) => {point, width, height};

// // console.log(frt());

// const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

// const makeRatToNewDenom = (rat, newDenom) => {
//   const ratio = getDenom(rat) / newDenom;
//   const newNumer = getNumer(rat) / ratio;
//   const newRat = {numer: newNumer, denom: newDenom};
//   return newRat;
// }

// const bringToCommonDenominator = (rat1, rat2) => {
//   let newRat1 = rat1;
//   let newRat2 = rat2;
//   if (getDenom(rat1) !== getDenom(rat2)) {
//     const newDenom = getDenom(rat1) * getDenom(rat2);
//     newRat1 = makeRatToNewDenom(rat1, newDenom);
//     newRat2 = makeRatToNewDenom(rat2, newDenom);
//   }
//   return { newRat1, newRat2 };
// }

// function normalise(rat) {
//   let numer = getNumer(rat);
//   let denom = getDenom(rat);
//   while (getGcd(numer, denom) !== 1) {
//     const gcd = getGcd(numer, denom);
//     numer = numer / gcd;
//     denom = denom / gcd;
//   }
//   return makeRational(numer, denom);
// }

// function makeRational(numer, denom) {
//   const rat = { numer, denom };
//   if (getGcd(rat.numer, rat.denom) !== 1) {
//     const normalisedRat = normalise(rat);
//     return normalisedRat;
//   }
//   return rat;
// }

// const getNumer = (rat) => rat.numer;

// const getDenom = (rat) => rat.denom;

// const add = (rat1, rat2) => {
//   const { newRat1, newRat2 } = bringToCommonDenominator(rat1, rat2);

//   const result = makeRational(getNumer(newRat1) + getNumer(newRat2), getDenom(newRat1));
//   return result;
// }

// const sub = (rat1, rat2) => {
//   const { newRat1, newRat2 } = bringToCommonDenominator(rat1, rat2);
  
//   const result = makeRational(getNumer(newRat1) - getNumer(newRat2), getDenom(newRat1));
//   return result;
// }

// //tests
// const rat = makeRational(2, 4);
// console.log(rat);
// const rat2 = makeRational(2, 6);
// console.log(rat2);
// console.log(getNumer(rat2));
// console.log(add(rat, rat2));
// console.log(sub(rat, rat2));
// // console.log(getGcd(2, 3));



// if (get({1: 2, test: 'test'}, 1, 'eee') !== 2) {
// throw new Error();
// }

// if (get({2: 2, test: 'test'}, 1, 'eee') !== 'eee') {
//   throw new Error();
// }

// if (get({1: 2, test: 'test'}, 1) !== 2) {
//   throw new Error();
// }

// import {strict as assert} from 'node:assert';


// assert(get({1: 2, test: 'test'}, 1) === 2);

// const fill = (coll, value, start = 0, end = coll.length) => {
//   const collLength = coll.length;

//   if (collLength === 0) return coll;
//   if (start < 0) start = 0;
//   if (end > coll.length) end = 0;

//   coll[0] = value;

//   console.log(end);
//   for (let i = start; i < end; i++) {
//     coll[i] = value;
//   }
//   return coll;
// };

// const coll1 = [0, 1, 2, 3, 4];
// fill(coll1, '*');
// console.log(coll1);


// function removeFirstLevel(tree) {
//   const treeWithoutLeafs = tree.filter((elem) => Array.isArray(elem));
//   console.log(treeWithoutLeafs);
//   const result = treeWithoutLeafs.flat();
//   return result;
// } 

// const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2];
// console.log(removeFirstLevel(tree3));
