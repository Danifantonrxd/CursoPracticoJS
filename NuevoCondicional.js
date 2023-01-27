let Suscripciones = {
    free: "Solo puedes tomar cursos gratis",
    basic: "Cursos limitados por un mes",
    expert: "Todos los cursos por 1 año",
    expertDuo: "Todos los cursos por 1 año para dos personas"
};

function comprobar(tipo){
    if(Suscripciones[tipo]){
        console.log(Suscripciones[tipo]);
    }
    else{
        console.warn("Ese tipo de suscripcion no existe");
    }
}