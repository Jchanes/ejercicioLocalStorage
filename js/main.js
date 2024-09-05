// Declaracion de constantes
const btnGuardar = document.getElementById("btnGuardar");
const btnClear = document.getElementById('btnClear');   
const txtNombre = document.getElementById("Name");
const alertaRoja = document.getElementById("alertaRoja")

let isValid= true;
let guardados = new Array();

//funcion del boton que gaurda los nombres
btnGuardar.addEventListener("click", function(event){
    event.preventDefault();
    txtNombre.style.border = "";
    alertaRoja.innerHTML= "";
    alertaRoja.style.display = "none"

    if (txtNombre.value.length<3) {
        
        return false;
    }//longitud del nombre

    if (isValid) {
        //console log para  que en caso de que se tenga que mover el codigo verifica si si se capturan los datos
        console.log(`${txtNombre.value}`)
        let nombres ={
            "nombres": txtNombre.value
        };
        //funcion que guarda los nombres en el local storage
        guardados.push(nombres);
        localStorage.setItem("guardados", JSON.stringify(guardados));
    }

    return true
});

