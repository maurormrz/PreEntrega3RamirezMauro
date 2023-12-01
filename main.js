// Tema elegido: Calcular pagos en cuotas sobre un monto determinado.

function television() {

    // PASO N°1: Registro del usuario mediante nombre y apellido los cuales son guardados en variables. Si el usuario no ingresa ninguno o alguno de los datos, se los vuelve a pedir mediante un ciclo "do...while" hasta que nombre y apellido sean ingresados.

    let nombre, apellido;

    do {
        nombre = prompt("REGISTRO\n\nPor favor, ingrese su nombre:");
        apellido = prompt("REGISTRO\n\nPor favor, ingrese su apellido:");
    } while (nombre === "" || apellido === "");


    // PASO N°2: Se define un constructor llamado TV con tres parámetros (tipo, pulgadas, precio) y luego se crean tres instancias (objetos) de TV con valores específicos utilizando el constructor.

    function TV(tipo, pulgadas, precio) {
        this.tipo = tipo;
        this.pulgadas = pulgadas;
        this.precio = precio;
    }

    const tvPlasma = new TV("Plasma", 32, 30000);
    const tvLCD = new TV("LCD", 32, 60000);
    const tvLED = new TV("LED", 55, 140000);

    let tvsSeleccionadas = []; // Array para almacenar las TVs seleccionadas

    let opcion;

    do {

        // PASO N°3: Se da una bienvenida al usuario con su nombre y apellido ingresado y luego se muestra los tipos de TV con sus precios, estos mismos pueden ser elegidos mediante numeros.

        let seleccion = prompt(`¡Bienvenido ${nombre} ${apellido} a RAMIREZ TVs!\nPor favor, selecciona la Televisión de tu preferencia:\n\n1. TV Plasma 32 pulgadas: $30.000\n2. TV LCD 32 pulgadas: $60.000\n3. TV LED 55 pulgadas: $140.000\n\nIngresa el número de tu elección:`);

        // PASO N°4: Según el número ingresado, ingresar a un array la TV elegida, y luego preguntar si desea comprar otra TV más o seguir con la compra, si es el caso de querer comprar otra TV más, añadir al array la TV mediante un método y volver a preguntar si desea comprar otra TV más o seguir con la compra.

        switch (seleccion) {
            case '1':
                tvsSeleccionadas.push(tvPlasma);
                break;
            case '2':
                tvsSeleccionadas.push(tvLCD);
                break;
            case '3':
                tvsSeleccionadas.push(tvLED);
                break;
            default:
                alert("Selección no válida. Por favor, elige un número válido.");
        }

        opcion = prompt("¿Deseas comprar otra TV?\n1. Sí\n2. No");

    } while (opcion === '1');

    // PASO N°5: Calcular el total de las TVs seleccionadas y dar al usuario las formas de pago disponibles.

    let total = tvsSeleccionadas.reduce((sum, tv) => sum + tv.precio, 0);

    let cuotaSeleccionada = prompt(`Has seleccionado ${tvsSeleccionadas.length} TV(s). Total a pagar: $${Math.round(total)}\nElegir un método de pago:\n1. 1 Pago\n2. 6 Cuotas\n3. 12 Cuotas`);

    // PASO N°6: Según la forma de pago seleccionada (que puede ser en un solo pago o en cuotas) dar el precio total correspondiente a su forma de pago ocupando la función "Math.round()" para que no se den precios con numeros decimales muy largos.

    switch (parseInt(cuotaSeleccionada)) {
        case 1:
            alert(`Usted deberá de pagar el total de $${Math.round(total)} en un solo pago.`);
            break;
        case 2:
            alert(`Usted deberá de pagar el total de $${Math.round(total / 6)} en 6 cuotas.`);
            break;
        case 3:
            alert(`Usted deberá de pagar el total de $${Math.round(total / 12)} en 12 cuotas.`);
            break;
        default:
            alert("Opción Incorrecta. Recarga la página para intentarlo nuevamente.");
    }

}

television();