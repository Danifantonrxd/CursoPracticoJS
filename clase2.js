let input1 = document.getElementById("calculo1");

let form = document.getElementById("form");

let input2 = document.getElementById("calculo2");

let btn = document.getElementById("btnCalcular");

form.addEventListener("submit", btnOnClick);

function btnOnClick(event){
    console.log(event);
    event.preventDefault();
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);
    let suma = num1 + num2;

    let elemento = document.createElement("p");
    elemento.textContent = "La suma es: " + suma;
    elemento.style.color = "darkred";
    document.body.appendChild(elemento);
    console.log(suma);
}