let nombreProductoA = 'Latas';
let stockProductoA = 1000;
let precioProductoA = 100;

let nombreProductoB = '710';
let stockProductoB = 1000;
let precioProductoB = 140;

let nombreProductoC = 'Litro';
let stockProductoC = 1000;
let precioProductoC = 160;

alert('Estos son los productos que usted puede comprar: \n' + nombreProductoA + '\n' + nombreProductoB + '\n' + nombreProductoC );
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
        if (cantidadCompra <= stockProductoA){
            stockSuficiente (stock, precio, nombre)
        }
        else {
    stockInsuficiente(stock)
        }
}

for(let i = 0; i < cantidadProductosCompra; i++ ){

    let nombreCompra = prompt('que producto desea comprar');

    if (nombreCompra == nombreProductoA){
        compra(stockProductoA, precioProductoA, nombreProductoA)
        }
    else if (nombreCompra == nombreProductoB){
        compra(stockProductoB, precioProductoB, nombreProductoB)
        
        }
    else if (nombreCompra == nombreProductoC){
        compra(stockProductoC, precioProductoC, nombreProductoC)
        
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
