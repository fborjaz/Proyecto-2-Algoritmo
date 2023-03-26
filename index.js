class Proyect {

    // Ejercicio 1, Convertir de base 10 a 2

    isDigitos(numero, base) {
        let digitos = []
        while (numero > 0) {
            digitos.push(numero % base)
            numero = parseInt(numero / base)
        }
        return digitos
    }

    base10_2() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (numero == 0) {
            $input.value = `Por favor ingresar mayor a 0`
        } else {
            let arreglo = this.isDigitos(numero, 2)
            let base10 = ""
            for (let i = arreglo.length - 1; i >= 0; i--) {
                base10 += arreglo[i].toString()
            }
            $input.value = `[Base 10 = ${numero}] ==> Base 2 = ${base10}`
        }
    }

    // Ejercicio 2, Convertir de base 10 a 16

    base10_16() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (numero === 0) {
            $input.value = `Por favor ingresar mayor a 0`
        } else {
            let arreglo = this.isDigitos(numero, 16)
            let base10 = ""
            for (let i = arreglo.length - 1; i >= 0; i--) {
                let digit = arreglo[i]
                if (digit >= 10) {
                    base10 += String.fromCharCode(digit + 55) // Convierte el dígito en su letra hexadecimal en ascii
                } else {
                    base10 += digit.toString()
                }
            }
            $input.value = `[Base 10 = ${numero}] ==> Base 16 = ${base10}`
        }
    }

    // Ejercicio 3, Convertir de base 10 a 8

    base10_8() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (numero === 0) {
            $input.value = `Por favor ingresar mayor a 0`
        } else {
            let arreglo = this.isDigitos(numero, 8)
            let base10 = ""
            for (let i = arreglo.length - 1; i >= 0; i--) {
                base10 += arreglo[i].toString()
            }
            $input.value = `[Base 10 = ${numero}] ==> Base 8 = ${base10}`
        }
    }

    // Ejercicio 4, Convertir de base 2 a 10

    isExponente(base, exp) {
        let res = 1
        for (let i = 1; i <= exp; i++) {
            res *= base
        }
        return res
    }

    base2_10() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (numero == 0) {
            $input.value = `Por favor ingresar mayor a 0`
        } else {
            let arreglo = this.isDigitos(numero, 10)
            let base2 = 0, limite = arreglo.length - 1
            for (let i = arreglo.length - 1; i >= 0; i--) {
                base2 = base2 + arreglo[i] * this.isExponente(2, limite)
                limite = limite - 1
            }
            $input.value = `[Base 2 = ${numero}] ==> Base 10 = ${base2}`
        }
    }

    // Ejercicio 5, Convertir de base 2 a 16

    base2_16() {
        let input = document.getElementById("result")
        let numero = parseInt(input.value, 2)
        if (isNaN(numero) || numero === 0) {
            input.value = `Por favor ingresar un número mayor a 0 en base 2`
        } else {
            let arreglo = this.isDigitos(numero, 16)
            let base16 = ""
            while (arreglo.length > 0) {
                let resto = arreglo.pop()
                if (resto >= 10) {
                    base16 = String.fromCharCode(resto + 55) + base16
                } else {
                    base16 = resto.toString() + base16
                }
            }
            input.value = `[Base 2 = ${numero.toString(2)}] ==> Base 16 = ${base16}`;
        }
    }

    // Ejercicio 6, Convertir de base 2 a 8

    base2_8() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value, 2)
        if (isNaN(numero) || numero <= 0) {
            $input.value = `Por favor ingresar mayor a 0`
        } else {
            let arreglo = this.isDigitos(numero, 8)
            let base8 = arreglo.reverse().join("")
            $input.value = `[Base 2 = ${numero}] ==> Base 8 = ${base8}`
        }
    }

    // Ejercicio 7, Convertir de base N a N



    // Ejercicio 8, Dar el vuelto 

    sacarvuelto(dolar) {
        let vuelto = [50, 20, 10, 5, 1], dinero = [];
        for (let c = 0; c < vuelto.length; c++) {
            let otrovuelto = vuelto[c]
            if (dolar >= otrovuelto) {
                let cvuelto = Math.floor(dolar / otrovuelto)
                dinero.push(`$${otrovuelto} : [${cvuelto}]`);
                dolar = dolar % otrovuelto;
            }
        }
        return dinero
    }

    darVuelto() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if (numero > 100) {
            $input.value = `Por favor ingresar cantidades menores a $100`
        } else {
            let resul = this.sacarvuelto(numero)
            $input.value = `[La cantidad ingresada ${numero}] a vuelto es ==> ${resul}`
        }
    }

    // Ejercicio 9, Se ingresa un numero natural y lo convierte a numero romano

    sacarromanos(numero) {
        let unidades = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
        let decenas = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC", "C"];

        let decena = Math.floor(numero / 10);
        let unidad = numero % 10;

        return decenas[decena] + unidades[unidad];
    }

    darRomanos() {
        let $input = document.getElementById("result");
        let numero = parseInt($input.value);
        if (numero < 1 || numero > 100) {
            $input.value = `Por favor ingresar un número entre 1 y 100`;
        } else {
            let resul = this.sacarromanos(numero);
            $input.value = `[La cantidad ingresada ${numero}] a romano es ==> ${resul}`;
        }
    }

    // Ejercicio 10, Ingresar frase que se guarde en una cadena y si se encuentra la subcadena dentro de la cadena presentar la posicion

    iscadena(cadena, subcadena) {
        for (let c = 0; c <= cadena.length - subcadena.length; c++) {
            let bandera = true;
            for (let pos = 0; pos < subcadena.length; pos++) {
                if (cadena[c + pos] !== subcadena[pos]) {
                    bandera = false;
                }
            }
            if (bandera) {
                return c;
            }
        }
        return -1; // subcadena no encontrada
    }

    encontrarsubcadena() {
        let $input = document.getElementById("result")
        let cadena = $input.value.toLowerCase()
        let subcadena = prompt("Ingrese dato a buscar").toLowerCase()
        if (cadena.trim() === "") {
            $input.value = `No se podra buscar una subcadena porque no se ingreso una cadena`
        } else {
            if (subcadena === null) {
                $input.value = `Se cancelo la operación, no se realiza ninguna acción`
            }
            let resultado = this.iscadena(cadena, subcadena)
            if (resultado === -1) {
                $input.value = (`La subcadena '${subcadena}' no se encontró en la cadena '${cadena}'.`);
            } else {
                $input.value = (`La subcadena '${subcadena}' se encontró en la posición ${resultado} de la cadena '${cadena}'.`);
            }
        }
    }

    // Ejercicio 11, Presnetar el elemnto mayor de un arreglo

    obtenerNumero(arreglo, tipo) {
        let resultado = arreglo[0];
        for (let c = 1; c < arreglo.length; c++) {
            if (tipo === "mayor" && arreglo[c] > resultado) {
                resultado = arreglo[c];
            } else if (tipo === "menor" && arreglo[c] < resultado) {
                resultado = arreglo[c];
            } else if (tipo === "igual" && arreglo[c] === resultado) {
                resultado = arreglo[c];
            }
        }
        return resultado;
    }

    numeromayor() {
        let $input = document.getElementById("result")
        let num = $input.value.trim()
        let rege = /[^0-9,]/g;  // Busca cualquier carácter que no sea un número o una coma
        num = num.replace(rege, '');   // Elimina calquier carácter que no sea un número o una coma
        if (!num) {
            $input.value = `No se ingreso ningún arreglo`
        } else {
            let arreglo = num.split(",")
            let mayor = this.obtenerNumero(arreglo, "mayor")
            $input.value = (`De la siguiente serie '${arreglo}' el número mayor es: ${mayor}.`);
        }
    }

    // Ejercicio 12, Presnetar el elemnto menor de un arreglo

    numeromenor() {
        let $input = document.getElementById("result")
        let num = $input.value.trim()
        let rege = /[^0-9,]/g;  // Busca cualquier carácter que no sea un número o una coma
        num = num.replace(rege, '');   // Elimina calquier carácter que no sea un número o una coma
        if (!num) {
            $input.value = `No se ingreso ningún arreglo`
        } else {
            let arreglo = num.split(",")
            let menor = this.obtenerNumero(arreglo, "menor")
            $input.value = (`De la siguiente serie '${arreglo}' el número menor es: ${menor}.`);
        }
    }

    // Ejercicio 13, Presentar la posicion de un valor dentro de un arreglo 

    buscadito(arreglo, buscado) {
        let pos = 0, c = 0
        while (c < arreglo.length && pos === 0) {
            if (arreglo[c] === buscado) {
                pos = c
            }
            c += + 1
        }
        return pos
    }

    buscar() {
        let $input = document.getElementById("result")
        let num = $input.value.trim()
        let rege = /[^0-9,]/g;  // Busca cualquier carácter que no sea un número o una coma
        num = num.replace(rege, '');   // Elimina calquier carácter que no sea un número o una coma
        if (!num) {
            $input.value = `No se ingreso ningún arreglo`
        } else {
            let arreglo = num.split(",")
            let buscar = prompt("¿Qué numero deseas buscar?")
            let resultado = this.buscadito(arreglo, buscar)
            $input.value = (`De la siguiente serie '${arreglo}' el número ${buscar} se encuentran en la posición: ${resultado}.`);
        }
    }

    // Ejercio 14, Elimina un elento dentro de un arreglo 

    eliminarelemento(arreglo, buscado) {
        let elimi = this.buscadito(arreglo, buscado)
        if (elimi !== -1) {
            for (let c = elimi; c < arreglo.length - 1; c++) {
                arreglo[c] = arreglo[c + 1];
            }
            arreglo.length = arreglo.length - 1;
        }
        return arreglo;
    }

    eliminar() {
        let $input = document.getElementById("result")
        let num = $input.value
        if (!num.trim()) {
            $input.value = `No se ingreso ningún arreglo`
        } else {
            let arreglo = num.split(",")
            let buscar = prompt("¿Qué número deseas eliminar?")
            let resultado = this.eliminarelemento(arreglo, buscar)
            $input.value = (`Si a la serie le elimianos el número ${buscar} quedaria así: ${resultado}.`);
        }
    }

    // Ejercicio 15, Insertar un elmento dentro de un arreglo

    agregarvalor(arreglo, numero) {
        let c = 0, band = 0, nuevovalor = []
        while (c < arreglo.length) {
            if (band == 0 && numero < arreglo[c]) {
                nuevovalor.push(numero);
                band = 1
            }
            nuevovalor.push(arreglo[c])
            c = c + 1
        }
        return nuevovalor;
    }

    ValorArreglo() {
        let $input = document.getElementById("result")
        let num = $input.value
        if (!num.trim()) {
            $input.value = `No se ingreso ningún arreglo`
        } else {
            let arreglo = num.split(",")
            let numero = prompt("¿Qué número deseas agregar en el arreglo?")
            let resultado = this.agregarvalor(arreglo, numero)
            $input.value = (`Si a la serie le agregamos el número ${numero} quedaria así: ${resultado}.`);
        }
    }

    // Ejercicio 16, se debe copiar una cadena en un arreglo dado un caracter

    caracterarreglo(cadena, caracter) {
        let agrega = "", arreglonuevo = []
        for (let c = 0; c < cadena.length; c++) {
            if (cadena[c] === caracter) {
                arreglonuevo.push(parseInt(agrega));
                agrega = "";
            } else {
                agrega += cadena[c]
            }
        }
        arreglonuevo.push(parseInt(agrega));
        return arreglonuevo;
    }

    cadenaArreglo() {
        let $input = document.getElementById("result")
        let cadena = $input.value
        if (!cadena.trim()) {
            $input.value = `No se ingreso ninguna cadena`
        } else {
        let caracter = prompt("Ingrese caracter")
        let resultado = this.caracterarreglo(cadena, caracter)
        $input.value = (`La caden ingresada es: ${cadena} y pasada a arreglo es: ${resultado}.`);
        }
    }

    // Ejercicio 17, se debe copiar un arreglo en una cadena dado un caracter

    caracterarreglo(arreglo, caracter) {
        let cadena = "";
        for (let i = 0; i < arreglo.length; i++) {
            cadena += arreglo[i];
            if (i !== arreglo.length - 1) {
                cadena += caracter;
            }
        }
        return cadena;
    }

    arreglocadena() {
        let input = document.getElementById("result");
        let num = input.value.trim();
        let arreglo = [num];
        if (!num) {
            input.value = "No se ha ingresado ninguna cadena.";
        } else {
            let caracter = prompt("Ingrese caracter");
            let resultado = this.caracterarreglo(arreglo, caracter);
            input.value = `El arreglo ingresado es: ${arreglo} y pasado a cadena es: ${resultado}.`;
        }
    }

    // Ejercicio 18, Se convierte una cadena a tipo oracion

    convertirCadena(cadena) {
        let oracion = '';
        let mayuscula = true;

        for (let c = 0; c < cadena.length; c++) {
            let letra = cadena.charAt(c);

            if (letra === ' ') {
                mayuscula = true;
                oracion += ' '; 
            } else {
                if (mayuscula) {
                    letra = letra.toUpperCase();
                    mayuscula = false;
                }
                oracion += letra;
            }
        }
        return oracion;
    }

    tipoOracion() {
        let $input = document.getElementById("result")
        let cadena = $input.value
        let resultado = this.convertirCadena(cadena)
        $input.value = (`La cadena es: ${cadena} y en oración es: ${resultado}`);
    }

    // Ejercicio 19, Se cuenta la cantidad de "," "." ";" ":" de una frase

    contarCaracteres(frase) {
        let Comas = 0;
        let Puntos = 0;
        let PuntoComa = 0;
        let DosPuntos = 0;

        for (let i = 0; i < frase.length; i++) {
            if (frase[i] === ",") {
                Comas++;
            } else if (frase[i] === ".") {
                Puntos++;
            } else if (frase[i] === ";") {
                PuntoComa++;
            } else if (frase[i] === ":") {
                DosPuntos++;
            }
        }
        return { Comas, Puntos, PuntoComa, DosPuntos };
    }

    Caracteres() {
        let $input = document.getElementById("result");
        let frase = $input.value.trim();
        if (frase === "") {
            $input.value = "No se ingresó ninguna frase";
        } else {
            let caracteres = this.contarCaracteres(frase);
            if (caracteres.Comas === 0 && caracteres.Puntos === 0 && caracteres.PuntoComa === 0 && caracteres.DosPuntos === 0) {
                $input.value = "No se encontraron caracteres especiales";
            } else {
                $input.value = (`Hay ${caracteres.Comas} "," ${caracteres.Puntos} "." ${caracteres.PuntoComa} ";" ${caracteres.DosPuntos} ":"`);
            }
        }
    }

}

let Present = new Proyect()