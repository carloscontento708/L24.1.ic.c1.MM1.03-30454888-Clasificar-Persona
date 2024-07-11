function calcularEdad() {
    const anioActual = parseInt(document.getElementById("anioActual").value);
    const anioNacimiento = parseInt(document.getElementById("anioNacimiento").value);
    const edad = anioActual - anioNacimiento;

    let grupoEdad;

    switch (true) {
        case (edad >= 0 && edad <= 12):
            grupoEdad = "Niño";
            break;
        case (edad >= 13 && edad <= 19):
            grupoEdad = "Adolescente";
            break;
        case (edad >= 20 && edad <= 39):
            grupoEdad = "Adulto Joven";
            break;
        case (edad >= 40 && edad <= 59):
            grupoEdad = "Adulto Medio";
            break;
        case (edad >= 60 && edad <= 120):
            grupoEdad = "Persona mayor";
            break;
            case (edad >= 120 && edad <= 9999999999):
            grupoEdad = "Nadie vive tanto tiempo. Ingresa tus verdaderos datos.";
            break;
        default:
            grupoEdad = "Ingresa tus datos.";
    }

    const resultado = `Edad: ${edad} años<br>Grupo de edad a la que pertenece: ${grupoEdad}`;
    document.getElementById("resultado").innerHTML = resultado;
}
