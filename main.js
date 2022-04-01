/* let newDiv = document.getElementsByClassName ("newDiv"); */

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
          console.log(listaProductos);

        })

//comentando mis productos, pues uso fetch ahora
/* const producto1 = new Producto(
    "pack 6 surtidas",
    100,
    1380,
    "regalo",
    1,
    "../assets/img/pack6.png",
    "Gift Pack con 6 latas degustación (Mexican Lager, Oktoberfest, Schwarzbier, IPA Beta, Waldbier, Maracuyá Sour) Gift Pack 6 latas x 473 ml."
);
const producto2 = new Producto(
    "Isabella Italian",
    100,
    250,
    "nuevo",
    2,
    "../assets/img/Isabella.jpg",
    "Esta vez, realizamos catas, visitamos viñedos e hicimos degustaciones. De esta expedición nació Isabella Italian Grape Ale, nuestra nueva creación que combina la cerveza con el vino."
);
const producto3 = new Producto(
    "Isabella Sour",
    100,
    250,
    "nuevo",
    3,
    "../assets/img/isabellaSour.jpeg",
    "La nueva Cerveza ácida de Peñön con jugo de uva Frambua (Uva típica de Córdoba). Es una cerveza , refrescante y delicada, de color rosado y 4% de alcohol, con el perfil frutado característico de esta uva que aporta notas a ciruela y frutos tropicales. "
);
const producto4 = new Producto(
    "Kit 3 latas 2 copas",
    100,
    1550,
    "regalo",
    4,
    "../assets/img/kit-.png",
    "1 - Caja de Regalo. Material: Cartón. Color: Negro 2 - Moño. Color: Gris o Blanco. Otro color: ¡Pedir SIN CARGO! 3 - Viruta de papel. 4 - Tarjeta 'Un brindis en tu honor' o 'Un brindis por más amor'. ELEGÌ MOTIVO: 'Felicidades', 'Feliz Cumpleaños', 'Feliz Día', 'Gracias', 'Felicitaciones', 'Éxitos', 'Aniversario' o 'Te amo'. 5 - Tarjeta 'De:/Para:', vacía para completar."
); */

//array
const listaProductos = [];


let carrito = [];
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

        agregarAlCarrito(cardPadre);
        
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
    console.log(carrito, "esto es el carrito");

  }



  mostrarProductos();



