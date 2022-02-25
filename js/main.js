// ESLint

/*
Функция, возвращающая случайное целое число из переданного диапазона включительно.
Пример использования функции:

имя_функции(от, до); // Результат: целое число из диапазона "от...до"

Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте,
как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему.

*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomInteger(minNumber, maxNumber) {
  if (minNumber<maxNumber) {
    minNumber = Math.ceil(minNumber);
    maxNumber = Math.floor(maxNumber);
    return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber; //Максимум и минимум включаются
  }
}

getRandomInteger(22, 33);

// console.log(getRandomInteger(2, 33)); // Привет, Виктор. Почему-то мне линтером показывается ошибка (unexpected console statement), хотя в консоле всё работет.

/*
Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно. Будет использоваться для генерации временных географических координат в следующем задании. Пример использования функции:

имя_функции(от, до, количество_знаков_после_запятой); // Результат: число с плавающей точкой из диапазона "от...до" с указанным "количеством знаков после запятой"
Учтите, что диапазон может быть только положительный, включая ноль. А также придумайте, как функция должна вести себя, если передать значение «до» меньшее, чем значение «от», или равное ему. Не забудьте, что в случае с дробными числами диапазон может быть в десятых, сотых, тысячных и т. д. долях. Например, 1.1, 1.2 — корректный диапазон.

*/

// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntegerNumber(firstRangeNumber, lastRangeNumber) {
  if (firstRangeNumber>=0) {
    return Math.random() * (firstRangeNumber - lastRangeNumber) + lastRangeNumber;
  }

}
getRandomIntegerNumber(12,66);

/*
.foFixed(Number) позволяет указывать кол-во знаков после запятой.
А с вариантом как вставить в саму функцию я был неуверен
*/

// console.log(getRandomIntegerNumber(12,66).toFixed(3));
