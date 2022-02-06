/*Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés. Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch)*/

let aviso = prompt("Ingresa por favor la palabra que quieres traducir al inglés, perro, mesa, gato o casa")
let perro = document.getElementById("perro")
let mesa = document.getElementById("mesa")
let gato = document.getElementById("gato")
let casa = document.getElementById("casa")

switch (aviso) {
    case "casa": 
        alert("Casa es igual a House") 
        casa.classList.remove("d-none")
        break;

        case "mesa": 
        alert("Mesa es igual a Table")
        mesa.classList.remove("d-none")
        break;

        case "perro": 
        alert("Perro es igual a Dog")
        perro.classList.remove("d-none")
        break;

        case "gato": 
        alert("Gato es igual a Cat")
        gato.classList.remove("d-none")
        break;

    default:
        break;
}