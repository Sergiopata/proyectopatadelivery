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
const producto1 = new Producto(
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
);

//array
const listaProductos = [producto1, producto2, producto3, producto4];

let carrito = [];

/* let inputSearch = document.getElementById("search");

inputSearch.addEventListener("input", function (e) {
    console.log(e);
}); */

/* const listaSegunCategoria = listaProductos.filter(x => x.categoria == categoriaProducto); */

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
        alert("producto agregado al carrito, porfavor revisar consola")
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


/* for (const producto of listaProductos){

}
   */

/* document.body.appendChild(contenedor); */

/* let contador = 0; */
/* let cantidad = 0; */
/* let listadoProductos = "Estos son nuestras novedades ideales para regalar: "; */

/* //recorrer array
for (const producto of productos){
  contador++
  listadoProductos += "\n" + contador + "- " + producto.nombre
}

//funciones
function mostrarProductos (){
  let respuesta = prompt (`Que productos desea comprar ? \n ${listadoProductos} \n Seleccione el numero de producto: `);
  
  if(respuesta == 1){
      cantidad = prompt(`el producto seleccionado es ${producto1.nombre} cuantas unidades desea comprar: ` )
      comprar(producto1.precio);
  }

  else if (respuesta == 2){
    cantidad = prompt(`el producto seleccionado es ${producto2.nombre} cuantas unidades desea comprar: ` )
    comprar(producto2.precio);
  }
  else if (respuesta == 3){
    cantidad = prompt(`el producto seleccionado es ${producto3.nombre} cuantas unidades desea comprar: ` )
    comprar(producto3.precio);
  }
  else if (respuesta == 4){
    cantidad = prompt(`el producto seleccionado es ${producto4.nombre} cuantas unidades desea comprar: ` )
    comprar(producto4.precio);
  }
  else {
    alert("Ingrese un valor válido");
    mostrarProductos();
  }
}

function comprar(precio){
  let total = precio * cantidad;
  confirm(`usted a decidido comprar ${cantidad} productos y el total de su compra es de:$${total}`);


}




mostrarProductos();

 */

/* <div class="container justify-content-between">
        <div class="row" id= "card1">
          <div class="col-xs-12 col-md-6 my-4" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <div class="card" style="width: 18rem;">
              <img src="../assets/img/pack 6.png" alt="pack" />
              <div class="card-body">
                <h5 class="card-title">Pack 6 surtidas</h5>
                <p>Gift Pack con 6 latas degustación (Mexican Lager, Oktoberfest, Schwarzbier, IPA Beta, Waldbier, Maracuyá Sour) Gift Pack 6 latas x 473 ml.</p>
              </div>
            </div>
          </div>
    
          <div class="col-xs-12 col-md-6 my-4" data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500">
            <div class="card" style="width: 18rem;">
              <img src="../assets/img/Isabella.jpg" alt="Isabella" />
              <div class="card-body">
                <h5 class="card-title">Isabella Italian Grape Ale</h5>
                <p>Esta vez, realizamos catas, visitamos viñedos e hicimos degustaciones. De esta expedición nació Isabella Italian Grape Ale, nuestra nueva creación que combina la cerveza con el vino.</p>
              </div>
            </div>
          </div>
        
          <div class="col-xs-12 col-md-6 my-4" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div class="card" style="width: 18rem;">
              <img src="../assets/img/isabellaSour.jpeg" alt="kit" />
              <div class="card-body">
                <h5 class="card-title">Isabella Sour</h5>
                <p>La nueva Cerveza ácida de Peñön con jugo de uva Frambua (Uva típica de Córdoba).
                  Es una cerveza , refrescante y delicada, de color rosado y 4% de alcohol, con el perfil frutado característico de esta uva que aporta notas a ciruela y frutos tropicales.</p>
              </div>
            </div>
          </div>

          <div class="col-xs-12 col-md-6 my-4" data-aos="fade-up"
          data-aos-anchor-placement="center-bottom" data-aos-duration="1500">
            <div class="card" style="width: 18rem;">
              <img src="../assets/img/kit-.png" alt="kit" />
              <div class="card-body">
                <h5 class="card-title">Kit 3 latas + 2 copas<h5>
                <p>1 - Caja de Regalo. Material: Cartón. Color: Negro
                  2 - Moño. Color: Gris o Blanco. Otro color: ¡Pedir SIN CARGO!
                  3 - Viruta de papel.
                  4 - Tarjeta "Un brindis en tu honor" o "Un brindis por más amor"
                  ELEGÌ MOTIVO: "Felicidades", "Feliz Cumpleaños", "Feliz Día", "Gracias", "Felicitaciones", "Éxitos", "Aniversario" o "Te amo".
                  5 - Tarjeta "De:/Para:", vacía para completar.</p>
              </div> */
