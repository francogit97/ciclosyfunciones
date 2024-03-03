//ejercicio 1

function ParImpar (número){
   
    if (número % 2 == 0) {
        console.log(número + "es un número par");
    }
    else {
        console.log(número + "es un número impar");
    }
}

let número = prompt("ingrese un número")


ParImpar  ();

console.log("/////////// ejercicio 2 //////////")
//ejercicio 2

function indicarNumeroMayor(num1, num2) {
    if (num1 > num2) {
        console.log(num1 + " es mayor que " + num2);
    } else if (num2 > num1) {
        console.log(num2 + " es mayor que " + num1);
    } else {
        console.log(" Ambos números son iguales ");
    }
}


indicarNumeroMayor(21, 5);    
indicarNumeroMayor(19, 18);  
indicarNumeroMayor(5, 5);  

console.log("///////// ejercicio 3 /////////")

function esMultiploDeCinco(numero){
    if (numero % 5 === 0) {
        console.log(numero + " es multiplo de 5 ");

    } 
    else {
        console.log(numero + " no es multiplo de 5 ");
    }
}

esMultiploDeCinco(20);
esMultiploDeCinco(6);
esMultiploDeCinco(25);
esMultiploDeCinco(9);
esMultiploDeCinco(11);


console.log("//////// ejercicio 4 //////////")

function NumeroHasta(numero) {
    for(let i = 0; i <= numero; i++){
        console.log(i);
    }
}
NumeroHasta(10);

console.log("/////// ejericio 5 ////////"); 

function PalabraRepeticion(palabra, repeticion) {
    for (let i = 1; i <= repeticion; i++) {
        console.log(palabra)
    }
}

PalabraRepeticion("Esto es javascript", 2);

console.log("//////// ejercicio 6 /////////")

function imprimirArray(array){
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

 imprimirArray("1 2 3 4 5");


 console.log("/////ejercicio 7//////");


 const imprimirArrayMenosCinco = array => {
    for (let i = 0; i < array.length; i++) {
        if(i === 4) {
            continue;
        }
        console.log(array[i]);
    }
 }

 imprimirArrayMenosCinco([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


 console.log("////////ejercicio 8//////////");

const multiplicarArray = (array, número) => {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i] * número);
    }

}

multiplicarArray([1, 2, 3, 4, 5], 2);


 

