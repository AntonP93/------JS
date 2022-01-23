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
const arr =[1,2,3,4,{}]
const arr2=arr.map((value,index,arr) =>{
  return value +index
})
console.log(arr2)