// let UserName = prompt('Как тебя завут?' );
// alert(`Привет,${UserName}!`);
// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);

// alert( +a + +b ); 
// let accessAllowed = age > 18;
// let age = prompt('Сколько вам лет?', '');
// let year = prompt('Какое «официальное» название JavaScript?','');
// if (year=='ECMAScript') {
//     alert('Верно!')
// } else {
//     alert('пидр чмо не знашь?')
// };
// let value = age;
// if (value>0) {
//     alert(1)
// } else if (value<0) {
//     alert(-1)
// } else if (value==0){
//     alert(0)
// };
// let result = (a + b < 4) ? 'Мало': 'Много' ;
// let message =  (login == 'Сотрудник') ? 'Привет':
//     (login == 'Директор') ? 'Здравствуйте':
//     (login == '') ? 'Нет логина':
//     '';
// if (!(age >= 14 && age <= 90));
// let UserName = prompt('Кто там?','');
// if (UserName=='Админ') {
//     if {(prompt('Пароль?',''))}
// } else {
//     alert('Я вас не знаю')
// };
// let userName = prompt("Кто там?", '');

// if (userName == 'Админ') {

//   let pass = prompt('Пароль?', ''); 

//   if (pass == 'Я главный') {
//     alert( 'Здравствуйте!' );
//   } else if (pass == '' || pass == null) {
//     alert( 'Отменено' );
//   } else {
//     alert( 'Неверный пароль' );
//   }

// } else if (userName == '' || userName == null) {
//   alert( 'Отменено' );
// } else {
//   alert( "Я вас не знаю" );

// for (let i = 2;i <= 10; i++ ) {
//   if (i % 2 == 0) {
//   alert(i);
//   }
// }
// for (let i = 0; i < 3; i++) {
//   alert( `number ${i}!` );
// }

// let i=0;
// while (i < 3) {
//   alert( `number ${i}!` );
//   i++;
// }


// while (true) {
//   let number = +prompt( 'Введи число!','');
//     if ((number > 100) || (number = '')) break;
// }
// alert('Готово!');

// let number;
// do {
//   let number = +prompt( 'Введи число!','');
// } while (number <=100 && number);

// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }
// let browser;
// if (browser = 'Edge') {
//   alert( "You've got the Edge!" );  
// } else if (browser == 'Chrome' || browser =='Firefox' || browser =='Safari' || browser== 'Opera'){
//   alert( 'Okay we support these browsers too' );
// } else {
//   alert( 'We hope that this page looks ok!' );
// }
// const number = +prompt('Введите число между 0 и 3', '');

// if (number === 0) {
//   alert('Вы ввели число 0');
// }

// if (number === 1) {
//   alert('Вы ввели число 1');
// }

// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const numb = prompt('Введите число между 0 и 3','');

// switch (numb) {
//   case '0':
//     alert('Вы ввели чиcло 0');
//     break;
//   case '1':
//     alert('Вы ввели число 1');
//     break;
//   case '2':
//   case '3':
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }
// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }
// function min(a,b) {
//   if(a>b){
//     return a
//   } else{
//     return b
//   }
// }
// let x = prompt('Введите число ?','');
// let n = prompt('Введите число ?','');
// function pow(x,n){
//   let numb = x ** n;
//   return alert(numb);
// }

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
  
// ask(
//     "Вы согласны?",
//     function() { alert("Вы согласились."); },
//     function() { alert("Вы отменили выполнение."); }
// );

// let ask = confirm("Вы согласны?") ?
//     () =>  alert("Вы согласились."):
//     () =>   alert("Вы отменили выполнение.");
// ask();

// function greet() {
//     alert ( "hello world!");
// }

// function greet() {
//     alert ( "hello world!");
//     }

// function isDivideBy(number, a, b) {
//     return (Number.isInteger(number/a) && Number.isInteger(number/b)) // good luck
// }
// function isDivideBy(number, a, b) {
//     return (Number.isInteger(number/a) && Number.isInteger(number/b)) {
//    return 'True'; // good luck
//   }
//   return 'Folse';
// function century(year) {
//     return Math.ceil(year / 100);
// }
// function fakeBin(x){
//   return x.replace(/[0-4]/g,'0').replace(/[5-9]/,'1');
// let x=( !(a || !b && !c))? true :false;
// alert(x);
// function number() {
//  return a=!(a || !b && !c),alert (a);
// }
// alert (Math.abs('Vasia'));

// let a; console.log(a);
// let a += 10;
// alert(a);
// const RS = 'rs';
// console.log('css', RS, 'js');
// alert((8 / 2 + 5 - -3 / 2));
// let a = 5;
// console.log(++a); console.log(a++);
// for (let i = 0; i <= 4; i++) {console.log(++i);}
// let name = 'Vasia'; name.length = 50;
// alert(name);
// const a = ''; 
// const b = 9;
// const c = null;
// alert (!(!a && b && !c));

// alert([1,2,3,4,5].length);
// const name = 'Vasia';
// alert(0.32 * 0.22 * 0.75);
// const first = 1, second = 2;

// const showRS = (year, quarter) => {return year, quarter};
// console.log('RSSchool ' + showRS('2021', 'Q3'));

// let i = 0; let c = 0; const str = 'Rolling Scopes School';
// while (i < str.length) { if (str[i] === 'o') { c++; } i++; } console.log(c);
// console.log('Hey there!'
// 7 * 3 + (4 / 2) - (8 + (2 - 1))
// alert(7 * 3 + (4 / 2) - (8 + (2 - 1)));
// let user ={
//    name:'Jhon',
//    surname: "Smith", 
// };
// user.name='Pete';
// delete user.name;

// let obj = {};
// function isEmpty(obj){
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }
// let salaries = {
//     John:100,
//     Ann:160,
//     Pete:130,
// };
// let sum =0 
// for (let key in salaries ){
//     sum += salaries[key];
// }
// alert (sum);
// let menu ={
//     widht:200,
//     height:300,
//     title:"My menu"
// };
// let multiplyNumeric=(menu)=>{
//  for(let key in menu){
//    if (typeof menu[key] == 'number'){
//        menu[key]*=2;
//    }  
//  }
// }
// let user={
//   name:"Джон",
//   age: 30
// };
// user.sayHi=function(){
//   alert('Привет');
// };
// user.sayHi();
// let styles =['Джаз','Блюз'];
// styles.push('Рок-н-ролл');
// styles[1]='Классика';
// alert( styles.shift() );
// styles.unshift('Регги');
// styles.unshift('Рэп');
// alert(styles);
// function sumInput() {
// const arr =[1,2,3,4,{}]
// arr.forEach((value,index,arr) =>{
//   console.log(value,index,arr)
// })// пройтись по массиву
// const arr =[1,2,3,4,{}]
// const arr2=arr.map((value,index,arr) =>{
//   return value +index
// })  
// console.log(arr2)// новый массив с сложением
// let numb = 123;
// function rev(numb) {
//   return 
// }
// let numb = 123;
// // module.exports = function reverse (n) {
// //     return strReverse = numb.split('').reverse().join(''); // 'длорпавыф'
// // }
// function reverse (numb) {
//   let str = (numb.split('').reverse().join('')); // 'длорпавыф'
// }

// let arr1=[1,3,5,7,9,11,12];
// let arr2=[1,2,3,4,5,10,12];
// function Numeric(a,b) {
//   if(a>b) return 1;
//   if(a===b) return 0;
//   if (a<b) return -1;
// }
// let arr3 = arr1.concat(arr2).sort(Numeric);
// let newarr = arr3.filter(function(elem,pos) {
//   return arr3.indexOf(elem)==pos;
// })
// console.log(newarr);
// var array = [1, 2, 1, 10, 5, 3, 4, 40, 50];
// var newArray = array.filter(function(elem, pos) {
//     return array.indexOf(elem) == pos;
// });
// console.log(newArray);
// let List = [
//   {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//   {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//  ]
// function sentence(List) {
//   return List
//     .sort((a,b)=> Object.keys(a)-object.keys(b))
//     .map((item) => Object.values(item))
//     .join(' ')
// }
// return List
//      .sort((a, b) => Object.keys(a) - Object.keys(b))
//      .map((item) => Object.values(item))
//      .join(' ')
// alert(123..toString(2));
// console.log(Math.round(24.2));
// console.log(+(1256.25.toFixed(10)));

// alert(isFinite('12'));

// console.log(Math.min(1,8,-10,15))
// let a= +prompt('Число а?','');
// let b= +prompt('Число b?','');
// let sum=a+b;
// alert(sum);
// alert((6.35*1).toFixed(1));
// function readNumber(){
// let num;
// do {
//    num = prompt('Число?',0)
// } while (!isFinite(num));
// }
// alert(`Число:${readNumber()}`);
// function ucFirst(str){
//    return str[0].toUpperCase() + str.slice(1);
// }
// alert(ucFirst('вacя'));

// function checkSpam(str){
//    let newstr=str.toLowerCase();
//    return newstr.includes('viagra') || newstr.includes('xxx');
//   }
// alert( checkSpam('buy ViAgRA now'));
// function truncate(str, maxlength) {
   
//    if(str.length > maxlength) {
//      return newstr= str.slice(0,maxlength); 
//    } else {
//       return str;
//    } 
// }

// console.log(truncate("Всем привет!", 20));
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }
// console.log(extractCurrencyValue('$120'));
// function camelize(str){
//   return str
//     .split('-')
//     .map((word,index) => index==0?word:word[0].toUpperCase()+word.slice(1) )
//     .join('')
// }
// alert(camelize("background-color"));

// function filterRange(arr, a, b) {
//  for( let i =0;i < arr.length; i++) {
//   let val = arr[i];
//   if(val<a || val>b ){
//     arr.splice(i,1);
//    }
//  }
// }
// let arr = [5, 3, 8, 1];
// filterRange(arr,1,4);
// alert(arr);

// function copySorted(arr) {
//   return arr.slice().sort()
// let arr =[1,2,3,4,5]
// let findResult = arr.filter((value,index) =>{ 
//   if(value >3 && value<5){
//     return true
//   } else if
//     (value===0){//фильтрация через интервал
//       return true
//     }else{
//       return false
//     }
//   })
// console.log(findResult)
// let arr = [5, 3, 8, 1];

// let findResult = arr.filter((value,index) =>{
//   if(value > 1 && value < 4){
//     return true
//   } else if
//     (value===0){//фильтрация через интервал
//       return true
//     }else{
//       return false
//     }
//   })
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);/* ... ваш код */

// alert( names ); // Вася, Петя, Маша

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user => ({
//   fullName:`${user.name} ${user.surname}`, id:user.id}) ) /* ... ваш код ... */


// alert( usersMapped[0].id) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин
// function sortByAge(arr) {arr.sort((a,b) => a.age > b.age?1:-1);} 
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let arr = [ vasya, petya, masha ];

// sortByAge(arr);
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// function unique(arr) {
// let result= [];
// for(let str of arr){
//   if(!result.includes(str)){
//   result.push(str);
// }}
// return result;
// }

// let strings = ["кришна", "кришна", "харе", "харе",
//   "харе", "харе", "кришна", "кришна", ":-O"
// ];
// alert( unique(strings) );
// var questions = [{
//   question: "What's the currency of the USA?",
//   choices: ["US dollar", "Ruble", "Horses", "Gold"],
//   corAnswer: 0
// }, {
//   question: "Where was the American Declaration of Independence signed?",
//   choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
//   corAnswer: 0
// }];
// for(let i=0; i<questions.length;i++) {
//   questions[i].usersAnswer=null;
// }
// console.log(questi
//  colourAssociation = array => array.map(([a,b]) =>({[a]:b}));


// const objA = { a: 10, b: 20, c: 30 }
// const objB = { a: 3, c: 6, d: 3 }
// const objC = { a: 5, d: 11, e: 8 }
// const objD = { c: 3 }

// // let newobj = objC.concat(objA,objB);
// // console.log(newobj);

// console.log(Object.entries(objA));
// function combine(...obj){
//     let newobj = {};
//     for(let i=0;i<obj.length;i++){
//         let temp = Object.assign({},obj[i],newobj);
//         if(i!==0){
//         for(let key in obj[i]){
//                 if(newobj[key] !== undefined){
//                     temp[key]+=obj[i][key]
//                 }    
//             }
//         }
//         newobj = temp        
//     } 
//     return newobj;
// }
// console.log(combine(objA,objB,objC,objD));

// function positiveSum(arr) {
//     let result=0
//  for(let item of arr){
//      if(item>0){
//         result+=item
//      } else if( item<0) { 
       
//     } else {
       
//     }
//  }
//  return result;
// }
// //   let result = arr.filter(number => number>=0)
// //   if(result=)
// // //   .reduce((previousValue, currentValue) => previousValue + currentValue);
  
// // // //   for(let item of result){
// // // //      return result+=item;
// // // //   }

// // // //   if(result=[]){
// // // //       return result=0
// // // //   }else{
// //  return result;
// //   } 
// console.log(positiveSum([1,2,3,4,5]))

// function squareSum(numbers){
//     let result=0
// for(let item of numbers){
//     result+=(item*item);
// //     if(item>0){
// //         result+=item*2;
// //     } else if
// } 
// return result;   
// }
// console.log(squareSum([3,-17]))

// function positiveSum(arr) {
//     let result=0
//  for(let item of arr){
//      if(item>0){
//         result+=item
//      } else if( item<0) { 
       
//     } else {
       
//     }
//  }
//  return result;

//   function getCount(str) {
//     let vowelsCount = 0;
//     let SplitStr = str.split('')
//     for (let char of SplitStr) {
//         if((char == 'a')||(char =='e')||(char =='i')||(char =='o')||(char =='u')){
//             vowelsCount += 1 
//         } 
//     }    
    
//     return vowelsCount;
//   }
// console.log(getCount('o a kak ushakov lil vo kashu kakao'));
// function squareDigits(num){
// let numberArr  = (Array.from(String(num)));
// let result=[];
// for(i=0;i<numberArr.length;i++){
//     result.push((numberArr[i])*((numberArr[i]))); 
// }
// let answer = result.join('')
// return Number(answer);
// }
// console.log(squareDigits(3212));
// // let number = (Array.from(String(3212)));
// // console.log(number);
// function descendingOrder(n){
//    let nArr =  (Array.from(String(n)).sort((a,b)=>b-a).join(''));
// //    let sortArr= nArr.sort((a,b)=>b-a);     
//    return Number(nArr)  //...
//   }
//   console.log(descendingOrder(1));

// //   let nArr =  (Array.from(String(num)));
// // console.log(nArr) 
// function highAndLow(numbers){
//   let ArrNum = numbers.split(' ').sort((a,b)=>b-a)
//   let result=[]
//   result[0]=ArrNum[0];
//   result[1] = ArrNum[ArrNum.length-1]
//   return result.join(''); 
//  }
//  console.log(highAndLow("1 2 3 4 5"))
// function disemvowel(str) {
//    let arr = str.split('');
//    let resultStr = ''
//    for(let letter of arr ){
//       if(letter !='a' && letter !='e' && letter !='i' && letter !='o' && letter !='u' && letter !='A' && letter !='E' && letter !='I' && letter !='O' && letter !='U'){
//          resultStr += letter
//       }
//    }
//    return resultStr;
//  }
// console.log(disemvowel("This website is for losers LOL!"))
// function maxTriSum(numbers){
//   let newNum = [...new Set(numbers)];
//   let Arr = numbers.filter( (el)=>!newNum.includes(el) )
//   return newNum;
//  }
//  console.log(maxTriSum([3,2,6,8,2,3]))

// var myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

// // and this one:
// var toRemove = ['b', 'c', 'g'];
// //  let arr = myArray.filter(item => ! toRemove.includes(item));
// //  console.log(myArray.filter(item => ! toRemove.includes(item)));
// myArray = myArray.filter( function( el ) {
//    return toRemove.indexOf( el ) < 0;
//  } );
// console.log(myArray);
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [1, 2, 4];

// const s = new Set(arr2);
// console.log(arr1.filter(e => !s.has(e)));
// function maxTriSum(numbers){
//     let temp = [...new Set(numbers)];
//     let sortarr = temp.sort((a,b)=>b-a);
//     return sortarr[0]+sortarr[1]+sortarr[2]
//   }
// console.log(maxTriSum([3,2,6,8,2,3]))
// function add(num1, num2) {
//     let temp1 = num1.toString().split('').reverse() 
//     let temp2 = num2.toString().split('').reverse()
//     let sum = []
//     let len = temp1.length<temp2.length?temp2.length:temp1.length
//     for(let i=0;i<len;i++){
//         let a = temp1[i]!==undefined?+temp1[i]:0
//         let b = temp2[i]!==undefined?+temp2[i]:0
//         sum[i] = a+b
//     }
//     return +sum.reverse().join('') 
//   }
// console.log(add(2, 11))
// function findMissing(arr1, arr2) {
//     let arr1s=arr1.sort((a,b)=>a-b)
//     let arr2s=arr2.sort((a,b)=>a-b)
//     let temp1
//     let temp2
//     if(arr1s.length>arr2s.length){
//       temp1 = arr1s
//       temp2=arr2s
//     }else{
//     temp1 = arr2s
//     temp2=arr1s
//     }
    
//     for(let i=0;i<temp1.length;i++){
//         if(temp1[i]!==temp2[i]){
//             return temp1[i]
//         }
//     }
// }  
//   console.log(findMissing([8, 61, 8, 3, 4],[4, 3, 3, 61, 8, 8] ))
  
// function getDecimal(n){
//   let str = n.toString().split('.') 
//   str[0]=0
//   return +str.join('.'); // fix me 
// }
// console.log(getDecimal(2.4))

// function myLanguages(results) {
// let temp ={}
// for (let key in results){
//   if(results[key]>=60){
//     temp[key] = results[key];
//   }
// }
// let arr = Object.entries(temp)
// arr.sort((a,b)=>b[1]-a[1])
// let ArrFinish=[]
// for(let i=0;i<arr.length;i++){
//   // console.log(arr[i])
//   ArrFinish.push(arr[i][0])
// }
// return ArrFinish

// }
// console.log(myLanguages({"Hindi": 60, "Dutch" : 93, "Greek": 71} ))
function nicknameGenerator(name){

if(name.length <=3){
return "Error: Name too short"
} else{
let promt = name.split('')
if(promt[2] !=='a' && promt[2]!=='e' && promt[2]!=='i' && promt[2]!=='o' && promt[2]!=='u'){
   promt.length=3
} else{
   promt.length=4
   }
  return promt.join('') 
  }
} 
console.log(nicknameGenerator('Jean'))
