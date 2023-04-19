class ropa {
    constructor(prenda, talle, color, precio, stock) {
        this.prenda = prenda;
        this.talle = talle;
        this.color = color;
        this.precio = parseFloat (precio)
        this.stock = stock;
    }
}
const tienda = [];
tienda.push(new ropa("camisa", 50 , "blanco", 15000, true));
tienda.push(new ropa("remera", 48 , "negro", 10000, true));
tienda.push(new ropa("pantalon", 52 , "azul", 18000, true));
tienda.push(new ropa("short", 46 , "rojo", 8000, false));
tienda.push(new ropa("zapatos", 40 , "marron", 20000, true));
console.log(tienda);

function buscarTienda(ropa, prenda){
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
console.log(resultado1);


