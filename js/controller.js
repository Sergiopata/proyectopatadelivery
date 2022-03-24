/* window.addEventListener('hashchange',() => {
  //console.log(window.location.hash);
  router(window.location.hash);
})

let contenido = document.getElementById('control');

const router = (hash) => {
  contenido.innerHTML = ''
  switch(hash){
    case '#':{
      contenido.appendChild(home())
      return console.log("home");
    }
    case '#./pages/productos.html':{
      contenido.appendChild(productos())
      return console.log("productos");
    }
    case '#./pages/fotos.html':{
      contenido.appendChild(fotos())
      return console.log("fotos");
    }
    case '#./pages/novedades.html':{
      contenido.appendChild(novedades())
      return console.log("novedades");
    }
    case '#./pages/contacto.html':{
      contenido.appendChild(contacto())
      return console.log("contacto");
    }
    default:
      contenido.appendChild(notFound())
      return console.log("404, esa pagina no existe")
  }
} */