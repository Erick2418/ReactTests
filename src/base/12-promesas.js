import { getHeroeById } from './bases/11-imp-exp'
// const promesa= new Promise( (resolve, reject)=>{
//   setTimeout( ()=>{
//     const heroe= getHeroeById(2);
//     resolve(heroe);
//   },2000);
// });
// promesa.then( (heroe)=>{
//   console.log('Heroe', heroe)
// })
// .catch( err=>console.log(err));

const getHeroeByIdAsync = (id)=>{
 return new Promise( (resolve, reject)=>{
   setTimeout( ()=>{
     const heroe= getHeroeById(id);
     if(heroe){
      resolve(heroe);
     }else{
       reject('No se encontro el heroe :c');
     }
     
   },2000);
 });

}

getHeroeByIdAsync(1)
// LA FORMA LARGA
  //.then( (heroe)=>{console.log('Heroe', heroe);})
  //.catch(console.warn('Error ',err));
  //LA FORMA CORTA
  .then( console.log )
  .catch( console.warn );
  