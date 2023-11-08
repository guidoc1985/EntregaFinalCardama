

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
  
  
  if (localStorage.getItem("carrito")) {
    carrito = JSON.parse(localStorage.getItem("carrito"));
    actualizarCarrito();
  }
  
  if (localStorage.getItem("contador")) {
    contador = parseInt(localStorage.getItem("contador"));
    document.querySelector(".contador").textContent = contador;
  }
  
  function agregarProducto(producto, precio){
  
    carrito.push({ nombre : producto, precio: precio });
    console.table(carrito)
    Swal.fire({
      icon: 'success',
      title: 'Yep!',
      text: 'Producto agregado al localStorage!',
      
    })
   
   
   localStorage.setItem("carrito", JSON.stringify(carrito));
  
   
   contador++;
   localStorage.setItem("contador", contador);
  
   document.querySelector(".contador").textContent = contador;
   actualizarCarrito();
  }
    
  
  function eliminarProducto(index) {
    carrito.splice(index, 1);
    console.table(carrito);
  
    
    localStorage.setItem("carrito", JSON.stringify(carrito));
  
    
    contador--;
    localStorage.setItem("contador", contador);
  
    document.querySelector(".contador").textContent = contador;
    actualizarCarrito();
  }
  
    
  function actualizarCarrito() {
  const carritoElemento = document.getElementById("carrito");
  const totalElemento = document.getElementById("total");
  
  
  
  carritoElemento.innerHTML = "";
  
  let total = 0;
  
  
  carrito.forEach((producto, index) => {
      const li = document.createElement("li");
      li.style.margin= "10px"
      li.style.fontFamily="fuente-principal"
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      const eliminarBoton = document.createElement("button");
      eliminarBoton.style.fontFamily ="fuente-principal"
      eliminarBoton.style.background= "grey"
      eliminarBoton.style.padding= "5px"
      eliminarBoton.style.marginLeft= "20px"
      eliminarBoton.textContent = "Eliminar";
      eliminarBoton.onclick = () => eliminarProducto(index);
      li.appendChild(eliminarBoton);
      carritoElemento.appendChild(li);
      total = producto.precio + total;
     
      
  });
  
  
  totalElemento.textContent = total;
  }
  actualizarCarrito()
    
  

  const now = luxon.DateTime.now()
  console.log( now.toLocaleString() )
  const fehca = document.getElementById("fecha");
  fecha.textContent = now.toLocaleString();
    
  
  
  
  fetch("productos.json")
  .then(respuesta => respuesta.json())
  
  .then( data=> {
  
  
    const productos = data.productos
  
    const productosContainer = document.getElementById("productos-container")
    productosContainer.className=("producto-estilos")
  
    productos.forEach( producto =>{
      const productoElemento = document.createElement("div");
  
      const imagenElement = document.createElement("img");
      imagenElement.src = producto.image;
      imagenElement.className=("foto-grid")
  
        const nombreElement = document.createElement("p")
        nombreElement.textContent = `Nombre: ${producto.nombre} `
  
        const precioElement = document.createElement("p")
        
       precioElement.textContent= ` Precio:$ ${producto.precio}`
        
  
       const buttonElemento = document.getElementById("boton")
       buttonElemento.addEventListener("click", function agregarProducto(){
  
       })
  
  
        
        productoElemento.appendChild(imagenElement)
        productoElemento.appendChild(nombreElement)
        productoElemento.appendChild(precioElement)
       productoElemento.append(buttonElemento)
       
        productosContainer.append(productoElemento)
    })
  
  })
  