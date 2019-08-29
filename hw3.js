// Типы данных и переменные

var name = "Slav";
console.log(name);

name = "Basilevs";
console.log(name);

// В обоих случаях выводится верное значение

// Условный оператор if

if (1 == 1) {
    console.log("true");
}

if (1 == 2) {
    console.log("true");
} else {
    console.log("false");
}

// Циклический оператор for

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// Функции

function sum(p1, p2, p3) {
    let result = p1 + p2 + p3;
    return result;
}

let res = sum(10, 20, 30);
console.log(res);

res = sum(20, 40, 60);
console.log(res);