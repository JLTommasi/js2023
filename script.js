let entrada =  prompt("SELECCIONAR UNA PRENDA DE 1 A 5 O ESC PARA SALIR");
while (entrada != 'ESC') {
    switch (entrada) {
        case "1":
            alert("zapatilla");
            break;
        case "2":
            alert("short");
            break;
        case "3":
            alert("Camiseta");
            break;
        case "4":
            alert("medias");
            break;
        case "5":
            alert("botines");
            break;    
        default:
            alert("UPS, EL NRO SELECCIONADO DEBE ESTAR ENTRE 1 Y 5");
            break;
    }
    entrada = prompt("SELECCIONAR UNA PRENDA DE 1 A 5 O ESC PARA SALIR");
}

