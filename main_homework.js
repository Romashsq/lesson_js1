//1
let myNum = 10;
let myStr = "hello";
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = { first: "First Name", last: "Last Name" };

console.log(myNum);
console.log(myStr);
console.log(myBool);
console.log(myArr);
console.log(myObj);

// Вызначает тип выражения переменной
console.log(typeof myNum);
console.log(typeof myStr);
console.log(typeof myBool);
console.log(typeof myArr);
console.log(typeof myObj);

// Объекты - к ним не относятся самые простые типы переменной

let object = { name: "Name" }; //объекты
array = [1, 2, 3, 4, 5]; //масив
func = function () {}; //функция
regex = /w+/g; //регулярні вирази
error = new Error(); //об'єкт помилки
map = new Map(); //колекції: Maps, Sets
set = new Set(); //WeakMaps, WeakSets

// ++ --
// 3 Прибавления после каждого следующего действия?
let i = 5;
//+
console.log(i++);
console.log(i);
console.log(i);
console.log(i);
console.log(++i);
console.log(i);
//-
console.log(i--);
console.log(i);
console.log(--i);
console.log(i);

//Меняем объект

let obj = { number: 25 };

obj.number = "You have new number 26!";
console.log(obj);

// Меняем масив

let arrayM = [1, 2, 3];

arrayM[2] = 777;
console.log(arrayM);

// Меняем буквы текста
let myText = "Lorem ipsum dolor sit amet.";
console.log(myText);
console.log(myText.toUpperCase());
console.log(myText.toLocaleLowerCase());

//Для того, щоб створити такий об'єкт,
// ми будемо використовувати конструктор Number():

//2 Задаем переменную нам как объект
let Num = new Number(10); //Number() ми створюємо об'єкт і така змінна буде об'єктом:
console.log(typeof Num);
console.log(Num.toFixed(2)); // TO-fixed задает количество 0 после числа
console.log(Num.toFixed(3));

// 4 Присвоение

let myTest = 20;

myTest += 5;
console.log(myTest);

myTest -= 5;
console.log(myTest);

myTest *= 5;
console.log(myTest);

myTest /= 5;
console.log(myTest);

myTest %= 5;
console.log(myTest);

//5 MATH - PI - ROUND - RANDOM

const pi = Math.PI; //Число пи через метод Матх
console.log(pi);

const myRound = Math.round(89.279); // Метод раунд для округления числа если оно не целое
console.log(myRound);

const myRandom = Math.random() * 3; // Метод рандом для рандома чисел до зазначенного максимума "3"
console.log(myRandom);

//6 Задаем объекту текст и с помощью метода length узнаем длинну текста

strObject = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length, //узнаем длину текста
};

console.log(strObject);

//7 idk
let isRamaPos = strObject.str.indexOf("рама");
let isRama = isRamaPos !== -1;

console.log(isRamaPos);
console.log(isRama);

//8 idk
let strObj = {
  str: "Мама мыла раму, рама мыла маму",
  length: "Мама мыла раму, рама мыла маму".length,
};

// Перейменовуємо підрядки
let strReplace = strObj.str
  .replace("мыла", "моет")
  .replace("рама", "Рама")
  .replace("маму", "держит маму");

console.log(strReplace);

//9 LowerCase = little bykvi Upper = BIG BYKVI

let someStr = "some STRING";
let upperStr = someStr.toLocaleLowerCase(); //LITTLE
let lowerStr = someStr.toUpperCase(); //BIGGER

console.log(upperStr);
console.log(lowerStr);
