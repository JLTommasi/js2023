class ropa {
    constructor(prenda, talle, color, stock) {
        this.prenda = prenda;
        this.talle = talle;
        this.color = color;
        this.stock = stock;
    }
}
const tienda = [];
tienda.push(new ropa("camisa", 50 , "blanco", true));
tienda.push(new ropa("remera", 48 , "negro", true));
tienda.push(new ropa("pantalon", 52 , "azul", true));
tienda.push(new ropa("short", 46 , "rojo", false));
tienda.push(new ropa("zapatos", 40 , "marron", true));
console.log(tienda);

const resultado = tienda.find((el) => el.prenda === "remera")
console.log (resultado)

const resultado2 = tienda.filter((el) => el.talle < 50)
console.log (resultado2)

