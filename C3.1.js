// Задание 1

// Написать, функцию, которая принимает в качестве аргумента объект 
// и выводит в консоль все ключи и значения только собственных свойств. 
// Данная функция не должна возвращать значение.
function showOwnKeys(obj) {
    for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
             console.log(`${key} - ${obj[key]}`); 
         }   
     }
 }

 const parentObject = {
    parent : "I'm parent object"
}

const childObject = Object.create(parentObject);

childObject.child = "I'm child object";
childObject.myOwnProperty = "It's a child only property";

showOwnKeys(childObject);