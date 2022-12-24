// Задание 3

// Написать функцию, которая создает пустой объект, но без прототипа.
function createEmptyObject () {
    return Object.create(null);
}

console.log(Object.getPrototypeOf(createEmptyObject()));