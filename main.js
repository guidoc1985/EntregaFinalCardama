

// menu interactivo

const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}

let producto1= new Producto ("Remera", 10000, 20)
let producto2= new Producto ("Pantalon", 45500, 26)
let producto3= new Producto ("Buzo", 35000, 45)
let producto4= new Producto ("Camisa", 40000, 23)

//LISTA DE PRODUCTOS DISPONIBLES
let lista = [producto1,producto2,producto3,producto4]


//FUNCION QUE FILTRA LOS PRODUCTOS Y MUESTRA EL PRECIO Y EL STOCK
function filtrarProductos(){
    let palabraClave = prompt("ingresa el producto que deseas buscar: \nREMERA \nPANTALON \nBUZO \nCAMISA \nCARRITO").trim().toUpperCase()
    let resultado = lista.filter((producto)=> producto.nombre.toUpperCase().includes(palabraClave))

    if (resultado.length > 0){
        console.table(resultado)
        alert("Tenemos el producto que buscas!")
    }
 // BUCLE QUE ME REPITE LA OPCION HASTA QUE ELIJO CARRITO Y SALE
while(palabraClave!="CARRITO"){
    filtrarProductos()
    break
}
}      
filtrarProductos()

//DECLARO UN ARRAY VACIO
let carrito =[];

//FUNCION QUE BUSCA UN NOMBRE CON UN PROMPT Y LUEGO CON LA VARIABLES AGREGAR PRODUCTO LO FILTRA SI ESTA EN LA LISTA
function agregarProducto(){
    let nombre = prompt ("Te gusto el producto? ingresa el nombre del producto para agregarlo al carrito").trim().toUpperCase()
 
    let agregarProducto = lista.filter((producto)=> producto.nombre.toUpperCase().includes(nombre))

    // SI EL PRODUCTO ESTA EN LA LISTA LO PUSHEA A CARRITO
    if(agregarProducto.length > 0){
        alert("producto agregado con exito!")
    carrito.push(nombre)
    console.table(carrito)
    }
  
}

//FUNCION QUE OFRECE AGREGAR UN PRODUCTO MAS SI SE VIO
function ofrecerMasProductos(){
    let nombre = prompt ("Queres agregar mas productos?  " ).trim().toUpperCase()
    let agregarProducto = lista.filter((producto)=> producto.nombre.toUpperCase().includes(nombre))
    if (agregarProducto.length > 0){
        alert("producto agregado con exito!")
        carrito.push(nombre)
        console.table(carrito)
        }

    if(agregarProducto.length>0){
        alert("Gracias por tu compra!")
    }
}


agregarProducto()
ofrecerMasProductos()
 



    