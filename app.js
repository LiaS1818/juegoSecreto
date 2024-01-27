let numeroSecreto = 0;
let intentos = 0;
let numeroMaximo = 5;
let numerosSorteados = [];


condicionesIniciales();

function asginarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);

    elementoHTML.innerHTML = texto;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('numeroUsuario').value)
    if (numeroDeUsuario == numeroSecreto) {
        asginarTextoElemento('p', `Acertaste el número secreto, lo lograste en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'} `);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('boton').setAttribute('disabled', {});
    }else {
        if (numeroDeUsuario > numeroSecreto) {
            asginarTextoElemento('p', 'El numero secreto es menor');
        }else{
            asginarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.querySelector('#numeroUsuario').value = null;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    // Si ya sorteamos todos lo numeros 
    if (numerosSorteados.length == numeroMaximo) {
        
        asginarTextoElemento('p', 'Ya se sortearon todos lo numeros');
        
    }else{
        // comprovamos que el numero generado no se vuelva a utilizar en el juego
        // Si numero Generado existe en el arreglo numerosGenerados creamos otro numero
        if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); //regresamos a crear otro numero
        }else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }       
    }
    
    
}

function reiniciarJuego() {
    // Limpiar la caja
    limpiarCaja();
    // Indicar el mensaje de intervalo permitido
    // Generar el numero aleatorio
    // Reiniciar el numero de intentos
    condicionesIniciales();
    if (numerosSorteados.length == numeroMaximo) {
        document.getElementById('reiniciar').removeAttribute('disabled');
       
        
    }else{
        // Desabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
    // Habilitar el boton de Intentar
    document.getElementById('boton').removeAttribute('disabled');
    }
    document.getElementById('boton').removeAttribute('disabled');
}

function condicionesIniciales() {
    asginarTextoElemento('h1', 'Juedo del número secreto!');
    asginarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


//  GENERAR UN PARPADERO PARA SABER CUANDO LEYO EL NUMERO
var parrafo = document.getElementById('parrafo');
var intervaloParpadeo;

document.getElementById('boton').addEventListener('click', function () {
  iniciarParpadeo();
});

function iniciarParpadeo() {
  detenerParpadeo(); // Asegúrate de detener cualquier parpadeo existente antes de comenzar uno nuevo
  cambiarColorParrafo();
  setTimeout(function () {
    cambiarColorParrafo();
  }, 150); // Cambia el color después de 500 milisegundos
}

function detenerParpadeo() {
  clearInterval(intervaloParpadeo); // Detiene el intervalo actual
  parrafo.style.color = 'white'; // Restaura el color original
}

function cambiarColorParrafo() {
  var colorActual = parrafo.style.color;
  parrafo.style.color = (colorActual === 'white') ? 'black' : 'white'; // Alterna entre blanco y negro
}