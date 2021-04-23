//desestructuracion de arreglo

const useState = (valor)=>{
    return [ valor, ()=>{ console.log('Hola Mundo'); } ];
 }
 const [nombre, setNombre]= useState('Erick');
 
 setNombre();