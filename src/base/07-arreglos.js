const arreglo=[1,2,3,4];
// NO ES RECOMENDADO USR PUSH PARA AGG VALORES AL ARREGLO

//arreglo.push(1);
//arreglo.push(2);
//arreglo.push(3);
//arreglo.push(4);

// SI SE CREA UNA COPIA DEL ARREGLO SE CAMBIAN LOS 2 
//USANDO EL PUSH... 
//let arreglo2 = arreglo;
//arreglo2.push(5);

// LOS 3 PUNTOS ES SPRET


let arreglo2= [...arreglo,5];
const arreglo3= arreglo2.map(function(numero){
return numero*2;
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
