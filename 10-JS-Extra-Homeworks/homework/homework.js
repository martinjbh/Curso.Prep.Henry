// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto) {
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matrizRetornar = []


  for (clave in objeto) {
    let array = []
    array.push(clave)
    array.push(objeto[clave])
    matrizRetornar.push(array)

  }

  return matrizRetornar


}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var resultado = {}


  for (let index = 0; index < string.length; index++) {
    var letra = string[index]
    if (resultado[letra] === undefined) {
      resultado[letra] = 1
    } else {
      resultado[letra] += 1
    }
  }
  return resultado
}




function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var minusculas = ''
  var mayusculas = ''
  var letra
  for (let index = 0; index < s.length; index++) {
    letra = s[index]
    if (letra === letra.toUpperCase()) {
      mayusculas += letra
    } else {
      minusculas += letra
    }


  }

  return mayusculas + minusculas
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí

  var espejo=str.split(' ')
  var palabra=''
  for (let index = 0; index < espejo.length; index++) {
    for (let i = espejo[index].length-1 ; i >= 0; i--) {
      
      palabra+= espejo[index][i]
    }
    palabra+=' '
    
  }
  return palabra.slice(0,-1)

}


function capicua(numero) {
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí

  var numeroString = numero.toString()
  if (numeroString[numeroString.length - 1] == numeroString[0] && numeroString[numeroString.length - 2] == numeroString[1]) {

    return "Es capicua"

  } else {
    return "No es capicua"
  }


}


function deleteAbc(cadena) {
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí

  var descarte = ''

  for (let index = 0; index < cadena.length; index++) {

    if (cadena[index] != "a" && cadena[index] != "b" && cadena[index] != "c") {


      descarte+=cadena[index]
    }

  }
  
  return descarte
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
arr.sort(function(a,b){
  console.log(a,b)

  return a.length - b.length;

})

return arr

}

//    sort(next,prev) si es negativo la resta entre los dos me coloca next antes de prev.
//                    si la resta entre los dos numeros es positivo me coloca prev antes q next.
//                    si es cero no hace nada




function buscoInterseccion(arreglo1, arreglo2) {
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoArray=[]

  for (let i = 0; i < arreglo1.length; i++) {
  
  
  
    for (let j = 0; j < arreglo2.length; j++) {
      if(arreglo1[i]==arreglo2[j]){
  
        nuevoArray.push(arreglo1[i])
      }
    }
  
  
  }
  
  return nuevoArray
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  deObjetoAmatriz,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};

