const transporte = document.getElementById("transporte");
const respuesta = document.getElementById("respuesta");

transporte.addEventListener("change", function () {
    respuesta.textContent = "Opcion seleccionada: " + transporte.value;
});


const tipoEntrega = document.getElementById("tipo de entrega")
const salida = document.getElementById("salida")


tipoEntrega.addEventListener("change", function () {
    let opcion = tipoEntrega.value;

    if (opcion === "domicilio") {
        salida.textContent = "Entrega estimada: 2 días.";
    } else if (opcion === "tienda") {
        salida.textContent = "Puede recoger hoy.";
    } else {
        salida.textContent = "Seleccione una opción.";
    }
});
