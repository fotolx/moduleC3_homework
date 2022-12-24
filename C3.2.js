// Задание 2

// Написать функцию, которая принимает в качестве аргументов строку и объект,
// а затем проверяет, есть ли у переданного объекта свойство с данным именем. 
// Функция должна возвращать true или false.
function haveProperty(str, obj) {
    if (obj.hasOwnProperty(str)) {
        return true; 
    }
    return false;
}

const parentObject = {
    parent : "I'm parent object"
}

const childObject = Object.create(parentObject);

childObject.child = "I'm child object";
childObject.myOwnProperty = "It's a child only property";

console.log(haveProperty('parent', childObject));
console.log(haveProperty('child', childObject));
console.log(haveProperty('child', parentObject));
console.log(haveProperty('parent', parentObject));
