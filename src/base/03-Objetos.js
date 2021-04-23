const persona= {
    nombre:'Erick',
    apellido: 'Limon',
    clave:'Iroman',
}
const persona2= { ...persona}
persona2.nombre='Joel';
console.log(persona2.nombre);
const persona3= persona;
persona3.nombre='Eri';
console.log(persona.nombre);

