
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


function flatten (array) {
  if (array === []) return array;

  let result = [];
  
  for (let i = 0; i < array.length; i++){
    if (typeof(array[i]) === 'object') {
      const [...innerArray] = array[i];
      result = [...result, ...innerArray]
    }
    else {
      result.push(array[i]);
    }
  }
  console.log(result);
}

flatten([1, [2, 4], "3"])