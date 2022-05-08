rotulo.innerHTML = "Ingrese un número";

let btnEnviar = document.getElementById("btnEnviar");

btnEnviar.addEventListener("click", () => {
  //
let numero : number = Number (dato.value);

if (numero == 0) {
    console.log("El número no es par ni impar", numero);
  } else if (numero % 2 == 0 ){
    console.log("El numero es par", numero);
   } else{
    console.log("El numero es impar", numero);
  }
  }
});