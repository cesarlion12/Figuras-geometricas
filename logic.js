//código cuadrado

console.group("Cuadrados");

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

console.groupEnd();

// código triángulo 

console.group("Triangulos");

function perimetroTriangulo(lado1, lado2, baseTriangulo){
    const suma = Number(lado1) + Number(lado2) + Number(baseTriangulo);
    return suma;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}

console.groupEnd();

//código círculo 
console.group("Circulos");

function diametroCirculo(radio){
    return radio * 2;
}

//Pi 
const PI = Math.PI;
console.log("PI es: " + PI);

function areaCirculo(radio){
    return (radio * radio) * PI;
}

console.groupEnd();

// metodos para botenes

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert("El perímetro de su cuadrado es: " + perimetro.toFixed(3));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert("El área de su cuadrado es: " + area.toFixed(3));
}

//metodos cards circulos
function calcularPerimetroCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;
    const diametro = diametroCirculo(value);
    
    const perimetro = diametro * PI;
    alert("El perímetro de su círculo es: " + perimetro.toFixed(3));
}

function calcularAreaCirculo(){
    const input = document.getElementById("InputCirculo");
    const value = input.value;

    const area = areaCirculo(value);
    alert("El área de si círculo es: " + area.toFixed(3));
}

//metodos cards triangulo
function calcularPerimetroTriangulo(){
    const lado_A = document.getElementById("InputLadoA");
    const lado_B = document.getElementById("InputLadoB");
    const base = document.getElementById("InputBase");
    const value1 = lado_A.value;
    const value2 = lado_B.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert("El perimetro de su triángulo es " + perimetro.toFixed(3));
}

function calcularAreaTriangulo(){
    const base = document.getElementById("InputBase");
    const altura = document.getElementById("InputAltura");

    const value1 = base.value;
    const value2 = altura.value;
    
    const area = areaTriangulo(value1, value2);
    alert("El área de su triangulo es: " + area.toFixed(3));
}