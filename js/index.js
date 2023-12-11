
// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.

// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.

// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4

function substract() {
  let firstNumber = +document.querySelector(".input-1").value;
  let secondNumber = +document.querySelector(".input-2").value;
  let result = firstNumber - secondNumber;
  document.querySelector(
    ".result-1"
  ).innerHTML = `${firstNumber} - ${secondNumber} = ${result}`;
}

// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.

// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.

// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12

function multiply() {
    let firstNumber = +document.querySelector('.input-3').value
    let secondNumber = +document.querySelector('.input-4').value
    let result = firstNumber * secondNumber
    document.querySelector('.result-2').innerHTML = `${firstNumber} * ${secondNumber} = ${result}`
}


// Функция divide() будет выполнять деление двух чисел и возвращать результат.

// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.

// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2

function divide() {
    let firstNumber = +document.querySelector('.input-5').value
    let secondNumber = +document.querySelector('.input-6').value
    let result = firstNumber / secondNumber 
    document.querySelector('.result-3').innerHTML =
    `${firstNumber} / ${secondNumber} = ${result}`
}

// Функция getMinutes() будет получать количество часов и возвращать количество минут

// Получает значения из одного input-поле

// Преобразует полученные значение в число с помощью Number() или +.

// Преобразует введенное число в минуты

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.

// Пример если input = 2 то результат будет: Результат: 2 часа = 120 минут

function getMinutes() {
    let firstNumber = +document.querySelector('.input-7').value
    let result = firstNumber * 60;
    document.querySelector('.result-4').innerHTML = `${firstNumber} hours = ${result} minutes`   
}

// Функция calculateAverage() будет показывать среднее значение из трех чисел

// Эта функция получает значения из трех input-полей

// Преобразует полученные значение в число с помощью Number() или +.

// Вычисляет среднее значение, разделив сумму чисел на их количество

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.

// Пример если input1 = 5, input2 = 2, input3 = 8 то результат будет: Среднее значение от: 5 + 2 + 8 = 15 / 3 = 5


function calculateAverage() {
    let firstNumber = +document.querySelector('.input-8').value
    let secondNumber = +document.querySelector('.input-9').value
    let thirdNumber = +document.querySelector('.input-10').value
    let sum = firstNumber + secondNumber + thirdNumber
    let result = sum / 3
    document.querySelector(".result-5").innerHTML = `Average value ${firstNumber} + ${secondNumber} + ${thirdNumber} = ${sum} / 3 = ${result}`;
}

