// Espera a que el documento HTML esté completamente cargado y listo para la manipulación del DOM
document.addEventListener("DOMContentLoaded", function () {
    // Carga de Ionicons
    var ioniconsScriptModule = document.createElement("script");
    ioniconsScriptModule.type = "module"; // Define el tipo de módulo para el script
    ioniconsScriptModule.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"; // Especifica la fuente del script
    document.body.appendChild(ioniconsScriptModule); // Agrega el script al cuerpo del documento HTML

    var ioniconsScriptNomodule = document.createElement("script");
    ioniconsScriptNomodule.nomodule = true; // Indica que no es un módulo
    ioniconsScriptNomodule.src = "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"; // Especifica la fuente del script sin módulo
    document.body.appendChild(ioniconsScriptNomodule); // Agrega el script al cuerpo del documento HTML

    // Cambio entre formularios
    document.getElementById("show-register-form").addEventListener("click", function() {
        // Cuando se haga clic en el elemento con ID "show-register-form"
        document.getElementById("login-form").style.display = "none"; // Oculta el formulario de inicio de sesión
        document.getElementById("register-form").style.display = "block"; // Muestra el formulario de registro
    });
});
