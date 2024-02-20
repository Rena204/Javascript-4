// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i <= 10; i++) {
    if (i === 0) {
        console.log(i + " – это ноль");
    } else if (i % 2 === 0) {
        console.log(i + " – четное число");
    } else {
        console.log(i + " – нечетное число");
    }
}


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
const newArr = arr.filter((num) => num !== 4 && num !== 5);
console.log(newArr);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

const randomArray = [];
for (let i = 0; i < 5; i++) {
    const randomNumber = Math.floor(Math.random() * 10);
    randomArray.push(randomNumber);
}

console.log("Массив:", randomArray);
const sum = randomArray.reduce((acc, curr) => acc + curr, 0);
console.log("Сумма элементов массива:", sum);

const minNumber = Math.min(...randomArray);
console.log("Минимальное число:", minNumber);

const hasNumberThree = randomArray.includes(3);
console.log("Наличие числа 3 в массиве:", hasNumberThree);
