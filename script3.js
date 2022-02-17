/* let nombreProductoA = 'Latas';
let stockProductoA = 1000;
let precioProductoA = 100;

let nombreProductoB = '710';
let stockProductoB = 1000;
let precioProductoB = 140;

let nombreProductoC = 'Litro';
let stockProductoC = 1000;
let precioProductoC = 160; */

//comienzo objetos

const productoA = {
    nombre: "Latas",
    stock: "1000",
    precio: "100"
}
/* const productoB = {
    nombre: "710",
    stock: "1000",
    precio: "140"
}
const productoC = {
    nombre: "Litro",
    stock: "1000",
    precio: "160"
} */

// comienzo funcion constructora, el nombre se define en mayuscula!, (el nombre, stock, precio de la izquierda es el nombre de la propiedad, el nombre de la derecha es el del valor q va a recibir).
function Producto (nombreValor, stockValor, precioValor){
    this.nombre = nombreValor;
    this.stock = stockValor;
    this.precio = precioValor;
    this.venta = function (cantidadCompra){
        this.stock -= cantidadCompra;
        alert("se vendieron: " + cantidadCompra + " unidades");
    }
}
const productoB = new Producto("710", 1000, 140);
const productoC = new Producto("Litro", 1000, 160);


alert('Estos son los productos que usted puede comprar: \n' + productoA.nombre + '\n' + productoB.nombre + '\n' + productoC.nombre );
let cantidadCompra;
let precioTotalVenta = 0;
let cantidadProductosCompra = parseInt(prompt('Que cantidad de productos distintos desea comprar'));


function stockInsuficiente(){
    alert ('no tenemos stock suficiente del producto que desea comprar')
}
function stockSuficiente(stock, precio, nombre){
    stock -= cantidadCompra;
    precioTotalVenta += precio * cantidadCompra;
    console.log('quedan ' + stock + nombre);
}
function compra(stock, precio, nombre){
    cantidadCompra = parseInt(prompt ('ingrese la cantidad de productos que desea comprar: '));
        if (cantidadCompra <= productoA.stock){
            stockSuficiente (stock, precio, nombre)
        }
        else {
    stockInsuficiente(stock)
        }
}

for(let i = 0; i < cantidadProductosCompra; i++ ){

    let nombreCompra = prompt('que producto desea comprar');

    if (nombreCompra == productoA.nombre){
        compra(productoA.stock, productoA.precio, productoA.nombre)
        }
    else if (nombreCompra == nombreProductoB){
        compra(productoB.stock, productoB.precio, productoB.nombre)
        
        }
    else if (nombreCompra == nombreProductoC){
        compra(productoC.stock, productoC.precio, productoC.nombre)
        
        }
    else {
        alert('no contamos con ese producto');
    }

}

alert('El precio total de su compra es de $' + precioTotalVenta);


/*stockProductoA = stockProductoA - cantidadCompra;

let precioTotalVenta = precioProductoA * cantidadCompra;

alert('el precio total de su compra es de $' + precioTotalVenta);
console.log('quedan ' + stockProductoA + ' latas');
*/
