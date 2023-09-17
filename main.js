

// menu interactivo

let opcion = parseFloat(prompt("Bienvenido a Portland SKate \nmenu: \n1.Remeras \n2.Buzos \n3.Camisas \n4.Pantalones \n5.  SALIR"))
let iva = 1.21
function precios (precioProducto){
    let precioFinal = precioProducto * iva;
  return precioFinal

}


while(opcion != 5){

switch(opcion){
case 1:
    alert("tenemos remeras a $ " + precios(6000) );
    break;
case 2:
    alert("tenemos buzos a $ " + precios(20000));
    break;
case 3:
    alert("tenemos camisas a $ " + precios(25000));
    break
case 4:
    alert("tenemos pantalones a $ " + precios(30000));
    break;
default:
        alert("NO tenemos esas prendas")
        break;
}

opcion =parseFloat(prompt(" Queres elegir algo más? \nmenu: \n1.Remeras \n2.Buzos \n3.Camisas \n4.Pantalones \n5. SALIR"))

}

