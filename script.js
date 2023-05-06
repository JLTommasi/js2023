let id = 0


class ropa {
    constructor(prenda, talle, color, precio) {
        this.id = id++;
        this.prenda = prenda;
        this.talle = talle;
        this.color = color;
        this.precio = parseFloat (precio)
    }
}
const tienda = [];
tienda.push(new ropa("camisa", 50 , "blanco", 15000));
tienda.push(new ropa("remera", 48 , "negro", 10000));
tienda.push(new ropa("pantalon", 52 , "azul", 18000));
tienda.push(new ropa("short", 46 , "rojo", 8000));
tienda.push(new ropa("zapatos", 40 , "marron", 20000));

let listaPrendas = document.getElementById("listaPrendas")

for (const dato of tienda) {
    let li = document.createElement ("li") 
    
    li.innerHTML = `Prenda ${dato.prenda}, 
    Talle ${dato.talle}, 
    Color ${dato.color}, 
    Precio ${dato.precio}`
    
    listaPrendas.appendChild(li)
}

let stock = document.getElementById("stock")
console.log(stock)

const nuevoIngreso = (e) => {
    e.preventDefault ()
    id++;
    let prenda = e.target
    let talle = e.target
    let color = e.target
    let precio = e.target
    
    let nuevo = new ropa (
        prenda.children [1].value,
        talle.children [3].value,
        color.children [5].value,
        precio.children [7].value,
    );

    tienda.push (nuevo)
    
    let listaPrendas = document.getElementById ("listaPrendas")
    listaPrendas.innerHTML = "";
    tienda.forEach(ropa => {
        let li = document.createElement ("li")
        li.innerHTML = `Prenda ${ropa.prenda}, 
        Talle ${ropa.talle}, 
        Color ${ropa.color}, 
        Precio ${ropa.precio}`

        listaPrendas.appendChild (li)
    })
}
stock.addEventListener ("submit", nuevoIngreso)


//Local storage

let baseDeDatos = tienda;
let inventario = JSON.parse(localStorage.getItem("BD"));

if (inventario === null) {
    inventario= baseDeDatos;
    localStorage.setItem("BD",JSON.stringify(inventario))
}

let formulario = document.querySelector('#stock');
let inputNombre =document.getElementById('nombre');
let inputTalle =document.getElementById('talle');
let inputColor =document.getElementById('color');
let inputPrecio =document.getElementById('precio');

formulario.addEventListener('submit', function (event){
    event.preventDefault();
    let newProd = new ropa(inputNombre.value, inputTalle.value, inputColor.value, inputPrecio);
    inventario.push(newProd);
    localStorage.setItem("BD", JSON.stringify(inventario));
})

