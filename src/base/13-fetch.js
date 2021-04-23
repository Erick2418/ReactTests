const apikey= '13EO7hsC5VDKZ6AU4rWId9SysAk3t1cR';
const peticion= fetch(`http://api.giphy.com/v1/gifs/random?apikey=${apikey}`);

peticion
  .then( resp=> resp.json() )
  .then( ({data})=>{
    const {url}=data.images.original;
    console.log(url);
    const img = document.createElement('img');
    img.src=url;
    document.body.append(img);

  })
.catch(console.warn);

