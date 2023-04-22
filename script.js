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

    console.log(nuevoIngreso)
}
stock.addEventListener ("submit", nuevoIngreso)
    

    //tienda.push (nuevo)

    /*let listaPrendas = document.getElementById ("listaPrendas")
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
listaPrendas.addEventListener ("submit", nuevoIngreso)
/*function buscarTienda(ropa, prenda){
    return ropa.find(objeto => objeto.prenda === prenda);
}

for (let index = 0; index < tienda.length; index++) {
    let busqueda = buscarTienda(tienda, prompt("Ingresa el nombre de la prenda que quieras"));
    if(busqueda != undefined){
        alert("elegiste "+busqueda.prenda);
    }else{
        alert("En este momento no tenemos stock de la prenda solicitada");
    }
}

const resultado = tienda.filter((el) => el.precio > 18000)
console.log(resultado);
const resultado1 = tienda.filter((el) => el.precio < 18000)
console.log(resultado1);*/


