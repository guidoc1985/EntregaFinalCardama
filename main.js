const Producto = function(nombre,precio,stock){
  this.nombre= nombre,
  this.precio = precio
  this. stock = stock
}

let producto1= new Producto ("Remera Blanca", 10000, 20)
let producto2= new Producto ("Pantalon Chino", 45500, 26)
let producto3= new Producto ("Buzo Capucha canguro", 35000, 45)
let producto4= new Producto ("Camisa leñadora", 40000, 23)


let lista = [producto1,producto2,producto3,producto4]



const busqueda = document.getElementById("busqueda");
 busqueda.addEventListener("click", () => {filtrarProductos();});

function filtrarProductos() {  
  
  
  const main = document.querySelector('main');

  const input = document.getElementById('filtrarProducto').value  

  const palabraClave = input.trim().toUpperCase();

  const resultado = lista.filter((producto) => producto.nombre.toUpperCase().includes(palabraClave));

  if (resultado.length > 0) {  
    
      const container = document.createElement('div');
    container.classList.add('h2');

    resultado.forEach((producto) => { 
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

    main.appendChild(container);  
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'No se encontraron productos con ese nombre!',
      
    })
  }
} 






let carrito =[];



let contador = 0;

function agregarProducto(producto, precio){

  carrito.push({ nombre : producto, precio: precio });
  console.table(carrito)
 

  if (carrito.length >0){
      contador++
      document.querySelector(".contador").textContent = contador;
  }
  actualizarCarrito()

  
function actualizarCarrito() {
const carritoElemento = document.getElementById("carrito");
const totalElemento = document.getElementById("total");


carritoElemento.innerHTML = "";

let total = 0;


carrito.forEach(producto => {
    const li = document.createElement("li");
    li.textContent = `${producto.nombre} - $${producto.precio}`;
    carritoElemento.appendChild(li);
    total = producto.precio + total;
});

// Actualiza el precio total
totalElemento.textContent = total;
}

  


const guardarCarrito = () => {
  localStorage.setItem("carritoData", JSON.stringify(carrito));
  Swal.fire({
    icon: 'success',
    title: 'Yep!',
    text: 'Producto agregado al localStorage!',
    
  })
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



  


    