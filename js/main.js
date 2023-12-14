document.addEventListener('DOMContentLoaded', function() {
    console.log("Contenido del DOM cargado");

    // Punto 2
    var origenTextarea = document.getElementById('origen');
    origenTextarea.value = '<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>';

    // Punto 3
    origenTextarea.addEventListener('input', function() {
        var inputs = document.querySelectorAll('input, button');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].disabled = false;
        }
    });

    // Punto 5a - Botón "Reemplazar"
    var btnReemplazar = document.getElementById('btn-reemplazar');
    btnReemplazar.addEventListener('click', function() {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            destinoDiv.innerHTML = origenTextarea.value;
        }
    });

    // Punto 5b - Botón "Agregar"
    var btnAgregar = document.querySelector('.btn-agregar');
    btnAgregar.addEventListener('click', function() {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            destinoDiv.innerHTML += origenTextarea.value;
        }
    });

    // Punto 5c - Botón "Agregar 5 veces"
    var btnAgregar5Veces = document.querySelector('.btn-agregar:nth-child(3)');
    btnAgregar5Veces.addEventListener('click', function() {
        agregarContenidoMultiplesVeces(5);
    });

    // Punto 5d - Botón "Agregar 10 veces"
    var btnAgregar10Veces = document.querySelector('.btn-agregar:nth-child(4)');
    btnAgregar10Veces.addEventListener('click', function() {
        agregarContenidoMultiplesVeces(10);
    });

    // Punto 5e - Botón "Agregar n veces"
    var btnAgregarNVeces = document.querySelector('.btn-agregar:nth-child(5)');
    btnAgregarNVeces.addEventListener('click', function() {
        var veces = prompt("Ingrese la cantidad de veces:");
        if (veces) {
            agregarContenidoMultiplesVeces(parseInt(veces));
        }
    });

    // Punto 6a - Botón "Vaciar"
    var btnVaciar = document.querySelector('.btn-vaciar');
    btnVaciar.addEventListener('click', function() {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            destinoDiv.innerHTML = '';
        }
    });

    // Punto 6b - Botón "Convertir a mayúsculas"
    var btnConvertirMayusculas = document.querySelector('.btn-convertir-a-mayusculas');
    btnConvertirMayusculas.addEventListener('click', function() {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            destinoDiv.innerHTML = destinoDiv.innerHTML.toUpperCase();
        }
    });

    // Punto 6c - Botón "Convertir a minúsculas"
    var btnConvertirMinusculas = document.querySelector('button[disabled]');
    btnConvertirMinusculas.addEventListener('click', function() {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            destinoDiv.innerHTML = destinoDiv.innerHTML.toLowerCase();
        }
    });

    // Punto 7
    var liElements = document.getElementsByTagName('li');
    for (var i = 0; i < liElements.length; i++) {
        liElements[i].innerHTML = "[Ok] " + liElements[i].innerHTML;
    }

    // Función auxiliar para agregar contenido múltiples veces
    function agregarContenidoMultiplesVeces(veces) {
        var destinoDiv = document.getElementById('destino');
        if (destinoDiv) {
            for (var i = 0; i < veces; i++) {
                destinoDiv.innerHTML += origenTextarea.value;
            }
        }
    }
});