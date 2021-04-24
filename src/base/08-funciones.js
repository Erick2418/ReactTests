
const saludar2 = (nombre) =>{
    return `hola ${nombre}`;
}
const saludar3 = (nombre) =>`hola ${nombre}`;
const saludar4 = () =>`hola Mundo`;


export const getUser= () => ({
        uid: 'ABC123',
        username: 'GG'
    });

export const getUsuarioActivo2= (nombre)=>({
    uid:'1234',
    Username:nombre
});
