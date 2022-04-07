let contenidoCarrito = document.querySelector(".contenido_carrito");

const divCarrito = document.querySelector(".product-detail");

const btnCarrito = document.querySelector (".navbar-shopping-cart");

document.addEventListener("DOMContentLoaded", ()=>{
  actualizarContador();
})

btnCarrito.addEventListener("click",()=>{
  divCarrito.classList.toggle("active");
})

class Producto {
    constructor(nombre, stock, precio, categoria, id, img, descripcion) {
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.categoria = categoria;
        this.id = id;
        this.img = img;
        this.descripcion = descripcion;
    }
    
}
//agregando fetch
fetch("../data.json")
        .then(response => response.json())
        .then(data =>{
          data.forEach(producto =>
            listaProductos.push(
              new Producto(
                producto.nombre,
                producto.stock,
                producto.precio,
                producto.categoria,
                producto.id,
                producto.img,
                producto.descripcion

              )
            )
          );
          mostrarProductos();
          
        })
//array
const listaProductos = [];
let carrito = JSON.parse(localStorage.getItem("carrito"))|| [];
let contenedor = document.querySelector(".bebidas");


const mostrarProductos = () => {
    listaProductos.forEach((producto) => {
      
        contenedor.innerHTML += `
      <div  id= "card1">
        <div class="col-xs-12 my-4" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1500">
          <div class="card" style="width: 18rem;">
            <img src=${producto.img} alt="pack" />
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <p>${producto.descripcion}</p>
              <div class="d-flex justify-content-between align-items-center">
              <button class= "btn btn-primary btn-agregar" data-id="${producto.id}">Comprar</button>
              <div class="precio"> $ <span> ${producto.precio} </span> </div>
              </div>
            </div>
          </div>
        </div>
      </div>`;

    });

    const btnAgregar = document.querySelectorAll(".btn-agregar");
    btnAgregar.forEach((e)=> e.addEventListener("click", (e)=>{
        let cardPadre = e.target.parentElement;
        agregarAlCarrito(cardPadre);
        //agregando libreria
        Swal.fire({
          title: 'Producto agregado al carrito, porfavor revisar consola',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          imageUrl: '../assets/img/cervezaDelivery.jpg',
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: 'Custom image',
        
        })
      })
      )
    }

//agregar productos
const agregarAlCarrito = (cardPadre)=>{
  let producto = {
    nombre: cardPadre.parentElement.querySelector(".card-title").textContent,
    precio: Number(cardPadre.parentElement.querySelector(".precio span").textContent),
    cantidad: 1, 
    img: cardPadre.parentElement.parentElement.parentElement.querySelector("img").src,
    id: Number(cardPadre.querySelector("button").getAttribute("data-id"))
    
  };


  let productoEncontrado = carrito.find((element)=>element.id === producto.id);

  if (productoEncontrado){
    productoEncontrado.cantidad++
  }
    else {
      carrito.push(producto);
      
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
    actualizarContador();

  }

function mostrarCarrito (){
  contenidoCarrito.innerHTML = "";

    carrito.forEach (element => {
      let {nombre,precio,id,img,cantidad} = element;

      contenidoCarrito.innerHTML += `
        <div class = "shopping-cart">
          <figure>
          <img src="${img}" alt= "${nombre}">
          </figure>
          <div>
          <p>${nombre}</p>
          <p>cantidad:${cantidad}</p>
          </div>
          <p>${precio*cantidad}</p>
          <button class = "btn-restar" data-id = "${id}">-</button>
          <button class = "btn-borrar" data-id = "${id}">x</button>
          
        </div>
      
      `
    })
}
function restarProducto(idProductoRestar){
  let productoEncontrado = carrito.find(element => element.id === Number (idProductoRestar));
  console.log(productoEncontrado);
  if (productoEncontrado) {
    productoEncontrado.cantidad--;
  if (productoEncontrado.cantidad < 1){
    borrarProducto(idProductoRestar);
  }
  }

  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();

}
function borrarProducto(idProductoBorrar){
  carrito = carrito.filter(element => element.id !== Number(idProductoBorrar));
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  actualizarContador();

}
function actualizarContador(){
  let carrito = JSON.parse(localStorage.getItem("carrito"));
  let total = carrito.reduce((acc,ite)=> acc + ite.cantidad, 0);
  document.querySelector(".navbar-shopping-cart div").textContent = total;
}




const escucharEventosCarrito = () => {
  divCarrito.addEventListener("click", (e) => {
    if (e.target.classList.contains("btn-restar")) {
      restarProducto(e.target.getAttribute("data-id"));
    }
    if (e.target.classList.contains("btn-borrar")) {
      borrarProducto(e.target.getAttribute("data-id"));
    }
  });
};



mostrarProductos();
mostrarCarrito();
escucharEventosCarrito();




