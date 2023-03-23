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
        let vuelto = [50,20,10,5,1], dinero = [];
        for(let c = 0; c <vuelto.length; c++){
            let otrovuelto = vuelto[c]
                if (dolar >= otrovuelto) {
                    let cvuelto = Math.floor( dolar / otrovuelto )
                    dinero.push(`$${otrovuelto} : [${cvuelto}]`);
                    dolar = dolar % otrovuelto;
                  }
        }
        return dinero
    }

    darVuelto() {
        let $input = document.getElementById("result")
        let numero = parseInt($input.value)
        if(numero >= 100){
            $input.value = `Por favor ingresar cantidades menores a $100`
        } else {
            let resul = this.sacarvuelto(numero)
            $input.value = `[La cantidad ingresada ${numero}] a vuelto es ==> ${resul}`
        }
    
    }

    // Ejercicio 9, Se ingresa un numero natural y lo convierte a numero romano



}

let Present = new Proyect()