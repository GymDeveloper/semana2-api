// Este archivo va a contener las funcion de suma, resta, multiplicacion y division

// funcion para sumar 2 numeros
// NOTA: Cuando usamos el simbolo + en una variable, esta variable se va a converitr a un number
// "1" => +"1" => 1
// "1" =>  Number("1") => 1
//* swfit Int("1") => 1
//* js Number("1") => 1

export const sumar = (a, b) => Number(a) + Number(b);

export const restar = (a, b) => Number(a) - Number(b);

export const multiplicar = (a, b) => Number(a) * Number(b);

// Operador ternario es como un if de un linea 
// condicion ? si es true : si es false 
export const division = (a, b) => (b === 0 ? 0 : Number(a) / Number(b));
