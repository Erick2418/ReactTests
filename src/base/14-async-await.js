
//const getImagenPromesa = ()=> new Promise((resolve, reject)=>resolve('dsasdas'));
//getImagenPromesa().then(console.log)
//.catch(console.warn);

const getImagen = async() => {

  try {
    const apikey= '13EO7hsC5VDKZ6AU4rWId9SysAk3t1cR';
    const resp= await fetch(`http://api.giphy.com/v1/gifs/random?apikey=${apikey}`);
    const {data}= await resp.json();
   
    const {url}=data.images.original;
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);
  } catch (error) {
    console.log(error);
  }

}
getImagen();
