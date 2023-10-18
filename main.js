



const Producto = function(nombre,precio,stock){
    this.nombre= nombre,
    this.precio = precio
    this. stock = stock
}

let producto1= new Producto ("Remera Blanca", 10000, 20)
let producto2= new Producto ("Pantalon Chino", 45500, 26)
let producto3= new Producto ("Buzo Capucha canguro", 35000, 45)
let producto4= new Producto ("Camisa leñadora", 40000, 23)

//LISTA DE PRODUCTOS DISPONIBLES
let lista = [producto1,producto2,producto3,producto4]


 
const busqueda = document.getElementById("busqueda");
   busqueda.addEventListener("click", () => {filtrarProductos();});

function filtrarProductos() {  
    
    
    const main = document.querySelector('main');
  
    const input = document.getElementById('filtrarProducto').value  //traigo el valor del imput
  
    const palabraClave = input.trim().toUpperCase();
  
    const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));
  
    if (resultado.length > 0) {  //si hay algun resultado, creo el container
      
        const container = document.createElement('div');
      container.classList.add('card-container');
  
      resultado.forEach((producto) => { //recorro el producto y creo el div,p,h2,etc...
        const card = document.createElement('div');
        card.classList.add('card');
  
        const nombre = document.createElement('p');
        nombre.textContent = producto.nombre;
        card.appendChild(nombre);
  
        const precio = document.createElement('p');
        precio.textContent = `Precio: $${producto.precio}`;
        card.appendChild(precio);
  
   
        container.appendChild(card);
      });
  
      main.appendChild(container);  //agrego el container como hijo del body
    } else {
      alert('No se encontraron coincidencias');
    }
  } 





//DECLARO UN ARRAY VACIO
let carrito =[];

//DECLARO UN CONTADOR EN 0 PARA QUE SE CUENTEN LOS PRODUCTOS EN EL ICONO CARRITO

let contador = 0;

 function agregarProducto(producto, precio){

    carrito.push({ nombre : producto, precio: precio });
    console.table(carrito)
   

    if (carrito.length >0){
        contador++
        document.querySelector(".contador").textContent = contador;
    }
    actualizarCarrito()

    // Función para sumar los productos
function actualizarCarrito() {
  const carritoElement = document.getElementById("carrito");
  const totalElement = document.getElementById("total");

 
  carritoElement.innerHTML = "";

  let total = 0;

  // Recorre el carrito y muestra los productos
  carrito.forEach(producto => {
      const li = document.createElement("li");
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      carritoElement.appendChild(li);
      total = producto.precio + total;
  });

  // Actualiza el precio total
  totalElement.textContent = total;
}

    

//FUNCION QUE GUARDA EN LOCAL STORAGE LOS PRODUCTOS
const guardarCarrito = () => {
    localStorage.setItem("carritoData", JSON.stringify(carrito));
    alert("Carrito guardado en el LocalStorage.");
};

const cargarCarrito = () => {
    if (localStorage.carritoData) {
        carrito = JSON.parse(localStorage.carritoData);
        
    }
};

window.addEventListener("load", cargarCarrito);
guardarCarrito()


const carritoStorage = JSON.parse(localStorage.getItem("carritoData"))


const guardado = document.getElementById("botonStorage")
guardado.addEventListener("click", function mostrarCarrito(){
  if(carritoStorage){
    console.log(carritoStorage)
  }

  

})

}



    