const numeroFavorito = 20

const entradaNumero = document.getElementById("numeroingresado");
const botonProbar = document.getElementById("botonProbar");
const mensaje = document.getElementById("mensaje");


function adivinar() {
  const intento = Number(entradaNumero.value);

  if (!intento) {
    mensaje.innerText = "Ingresa un numero valido";
  } else if (intento < numeroFavorito) {
    mensaje.innerText = "Muy bajo";
  } else if (intento > numeroFavorito) {
    mensaje.innerText = "Muy alto";
  } else {
    mensaje.innerText = "Correcto";
  }
}
botonProbar.addEventListener("click", adivinar);

selector.addEventListener("change", function() {
  imagen.src = selector.value;
});
