const firstName = "Santiago";
const firstNameWithUpperCase = firstName.toUpperCase();

console.log(firstNameWithUpperCase);

const list = [];
list.push(157, 333);

console.log(list[1]);

const persona = {
    nombre: "Santiago",
    twitter: "@tulosgdn",
    isDeveloper: true,
    age: 24,
};

console.log(persona.age);

const field = "twitter";
persona[field];

console.log(persona[field]);

const sumar = (a, b) => {
    return a + b;
};

const resultado = sumar(2, 5);

console.log(resultado);
