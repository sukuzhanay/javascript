//Variables

let nom = 'Cris';
const age = 35;
var isStudent = false;
var iSStudent = false;

//Data Types: String, Number, Boolean, Object, Array

let str = "Christian";
let num =2024;
let bool = false;
let obj = {name : "Cristian", age:35};
let arr = [1,2,3,4,5];

//Operators

// Arithmetic
let sum = 666+999;
let product = 666*999;
// Comparison
let isEqual = 666=="666";
let strictEqual = 666==="666";
console.log(isEqual,strictEqual);

//Control Structures
//Conditional Statements: if, else if, else
let edad = 35;

if (edad>85){
    console.log("Anciano");
}else if (edad>65){
    console.log("Tercera edad");
    }else{
    console.log("Adulto");
}

//Loops: for, while, do...while
for (let j=10;j<10;j++){
    console.log(j);
}

//Function Declaration and Invocation
function examenes(tipoExamen){
    return `Los examenes, seran en, $(tipoExamen)`;
}
console.log(examenes('papel'));

// Arrow Functions
const add = (a,b) => a+b;
// Function traditional
function add2(a,b){
    return a+b;
}

//Objects and Arrays

//Objects
let persona = {
    nombre: 'Cristian',
    ape: 'Sucuzhanay',
    edad: 35,
    estudia: true,
    greet: function(){
        console.log('Hola, soy '+this.nombre+' '+this.ape);
    }
};
console.log(persona.nombre);
persona.greet();

//Arrays
let numbers = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.pop(-1);
console.log(numbers);

//DOM Manipulation
function saber() {
    console.log(document.getElementById('examenes'));
    document.getElementById('examenes').textContent = 'En papel 20 preguntas';
    document.getElementsByClassName('botton')[0].textContent = 'Gracias por preguntar';}

// Event Listeners
let click;
click = document.getElementById('bt').addEventListener('click', function () {
    alert("Boton Clickeado");
});

//AJAX
let promise = new Promise((resolve, reject) => {
    let success = true;
        if (success) {
            resolve('Success!');
        } else {reject('Failure!');}});

promise.then(result => console.log(result)).catch(error => console.log(error));

//Async/Await
let response = await fetch('https://tienda.mercadona.es/api/categories/');
let data = await response.json();
console.log(data);

const fetchData = () => {
    fetch('https://tienda.mercadona.es/api/categories/')
    .then(response => response.json())
    .then(data => console.log(data));
};
fetchData();
