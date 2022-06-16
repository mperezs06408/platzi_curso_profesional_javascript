//Boolean
/**
 * Al declarar variables en TS es posible declarar
 * explícitamente el tipo de variable que queremos
 * utilizar.
 */
let muted: boolean = true;

muted = false;
//muted = 'callao' //No se puede cambiar el tipo de dato que posee una variable

//Números
let age = 6;

let numerador: number = 42;
let denominador: number = age;

let resultado = numerador / denominador;

//String
let nombre: string = 'Santiago';
let saludo: string = `Me llamo ${nombre}`;

//Arreglos
let people: string[] = [];

people = ['Isabell', 'Nicol', 'Raul'];

//people.push('9000')

let peopleAndNumbers: Array<string | number> = [];

peopleAndNumbers.push('Ricardo');
peopleAndNumbers.push(900);

//enum
enum Color {
    Rojo = "red",
    Verde = "green",
    Azul = "blue",
}


let colorFavorito: Color = Color.Rojo;

console.log(`Mi color favorito es ${colorFavorito}`);