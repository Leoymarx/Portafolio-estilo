function problema1(){
        var input = document.getElementById("p1-input").value;
        var palabras = input.split(" ").reverse();
        var resultado = palabras.join(" ");
        document.getElementById("p1-output").textContent = resultado;
    document.querySelector(".problema-button").addEventListener("click", invertirPalabras);
    
}


function problema2(){
    var p2_x1 = parseInt(document.querySelector('#p2-x1').value);
    var p2_x2 = parseInt(document.querySelector('#p2-x2').value);
    var p2_x3 = parseInt(document.querySelector('#p2-x3').value);
    var p2_x4 = parseInt(document.querySelector('#p2-x4').value);
    var p2_x5 = parseInt(document.querySelector('#p2-x5').value);

    var p2_y1 = parseInt(document.querySelector('#p2-y1').value);
    var p2_y2 = parseInt(document.querySelector('#p2-y2').value);
    var p2_y3 = parseInt(document.querySelector('#p2-y3').value);
    var p2_y4 = parseInt(document.querySelector('#p2-y4').value);
    var p2_y5 = parseInt(document.querySelector('#p2-y5').value);

    var v1 = [p2_x1, p2_x2, p2_x3, p2_x4, p2_x5];
    var v2 = [p2_y1, p2_y2, p2_y3, p2_y4, p2_y5];

    v1 = v1.sort(function(a, b){
        return a - b;
    });

    v2 = v2.sort(function(a, b){
        return a - b;
    });

    var p2_producto = 0;
    for(var i = 0; i < v1.length; i++){
        p2_producto += v1[i] * v2[i];
    }

    document.querySelector('#p2-output').textContent = 'El producto escalar mínimo es de: ' + p2_producto;
}


function problema3() {
    var input = document.getElementById("p3-input").value;
    var palabras = input.split(",");
    var palabraMasLarga = "";
    var maxCaracteresUnicos = 0;
    var caracteresUnicosPalabra = "";

    for (var i = 0; i < palabras.length; i++) {
        var palabra = palabras[i];
        var caracteresUnicos = 0;
        var caracteresVisitados = {};
        var caracteresUnicosEnPalabra = {};

        for (var j = 0; j < palabra.length; j++) {
            var caracter = palabra[j];
            if (/[A-Z]/.test(caracter) && !caracteresVisitados[caracter]) {
                caracteresUnicos++;
                caracteresVisitados[caracter] = true;
                caracteresUnicosEnPalabra[caracter] = true;
            }
        }

        if (caracteresUnicos > maxCaracteresUnicos) {
            maxCaracteresUnicos = caracteresUnicos;
            palabraMasLarga = palabra;
            caracteresUnicosPalabra = Object.keys(caracteresUnicosEnPalabra).join(", ");
        }
    }

    document.getElementById("p3-output").textContent = "La palabra con más caracteres únicos es: " + palabraMasLarga + " con " + maxCaracteresUnicos + " caracteres únicos: " + caracteresUnicosPalabra;
}

