//  function multiplica(x, y) {
//      // Retorna el resultado de su multiplicación.
//      //  Tu Código:
//      return x * y;
//   };


// modulo
// console.log (21%5);
// console.log(20%5);


// var str = "gomez";
// function agregarSimboloExclamacion(str) {
//     // Agrega un símbolo de exclamación al final del string "str" y retórnalo
//     // Ejemplo: "hello world" ---> "hello world!"
//     // Tu código:
//    return str + "vero";
//  };

//  console.log(agregarSimboloExclamacion(str));

// var comida = ['pizza', 'pancho', 'tarta'];
// for(comida of comida){
//     console.log(comida);
// }

function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    let nuevoArr = [];
    for ( var i = 0; i <10;  i ++ ){
    nuevoArr.push(i = i+2); 
    }
  }; 
 console.log(breakStatement(2,3,4,11,20));

//  primero hacer el aumento, despues retornar 
//  num++
//  return num
