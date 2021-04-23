/*const saludar = function (nombre) {
    return `hola ${nombre}`;
}*/
/*const saludar2 = (nombre) =>{
    return `hola ${nombre}`;
}SE PUEDE SIMPLIFICAR SI SOLO RETORNA ALGO.. EJEMPLO EN
SALUDAR3*/
//const saludar3 = (nombre) =>`hola ${nombre}`;
//const saludar4 = () =>`hola Mundo`;

//console.log(saludar('Erick'));
//console.log(saludar3('Joel'));
//console.log(saludar4());

/*--------- RETORNA UN USUARIO -----------*/ 
/*const getUser= ()=>{
    return {
        uid: 'ABC123',
        username: 'GG'
    }
}*/
/*--------- RETORNA UN USUARIO -----------*/ 
//const getUser2= ()=>({ uid: 'ABC123',username: 'GG'});

//console.log(getUser2());

//DEBER TRASNFORMAR UNA FUNCION DE FECHA
/*function getUsuarioActivo(nombre) {
        return{uid:'1111',Username:nombre}
};*/
//const usuaruiActivo= getUsuarioActivo('Erick');
//console.log(usuaruiActivo);

const getUsuarioActivo2= (nombre)=>({uid:'1234',Username:nombre});
const usuaruiActivo2= getUsuarioActivo2('Erick');
console.log(usuaruiActivo2);
