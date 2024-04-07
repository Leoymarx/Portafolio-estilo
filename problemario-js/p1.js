//problema 1
function calcular()
{
    var monto = parseFloat(document.getElementById("monto").value);
    var porcentaje = monto*0.02
    var total;

    total = monto + (porcentaje);
    document.getElementById("porcentaje").innerHTML = "Tu porcentaje de inversion seria de " + porcentaje;
    document.getElementById("total").innerHTML = "Tu inversion despues de un mes seria de " + total;
}
//problema 2
function montobase()
{
    var monto = parseFloat(document.getElementById("montobase").value);
    var venta1 = parseFloat(document.getElementById("venta1").value);
    var venta2 = parseFloat(document.getElementById("venta2").value);
    var venta3 = parseFloat(document.getElementById("venta3").value);
    var porcentaje = (venta1 + venta2 + venta3)/10
    var total;

    total =monto + porcentaje;
    document.getElementById("porcentaje").innerHTML = "Tu porcentaje por las 3 ventas individuales seria de " + porcentaje;
    document.getElementById("total").innerHTML = "El total seria" + total;
}
//problema 3
function descuento()
{
    var monto = parseFloat(document.getElementById("monto").value);
    var porcentaje = monto*15/100
    var total;

    total = monto - porcentaje;
    document.getElementById("porcentaje").innerHTML = "El descuento es de" + porcentaje;
    document.getElementById("total").innerHTML = "El precio total con descuento es de " + total;
}
//problema 4
function calificacion()
{
    var parcial1 = parseFloat(document.getElementById("parcial1").value);  
    var parcial2 = parseFloat(document.getElementById("parcial2").value);
    var parcial3 = parseFloat(document.getElementById("parcial3").value);
    var examen = parseFloat(document.getElementById("examen").value);
    var proyecto = parseFloat(document.getElementById("proyecto").value);
    var sumaparciales=parcial1 + parcial2 + parcial3 
    var valorparciales=(sumaparciales*55) / 30
    var valorexamen=(examen*30)/10
    var valorproyecto = (proyecto*15)/10
    var calificacionfinal = valorproyecto + valorexamen + valorparciales

    document.getElementById("3parciales").innerHTML = "el valor de tus 3 paricales es: " + valorparciales;
    document.getElementById("examen_final").innerHTML = "el valor de tu examen es: " + valorexamen;
    document.getElementById("proyecto").innerHTML = "el valor de tu proyecto es: " + valorproyecto;
    document.getElementById("total").innerHTML = "tu calificacion final es: " + calificacionfinal;
}
//problema 5
function alumno()
{
    var alumno = parseFloat(document.getElementById("alumno").value);  
    var alumna = parseFloat(document.getElementById("alumna").value);
    var alumnototal = (alumno + alumna)*0.01
    var porcentajeh = alumno / alumnototal
    var porcentajem = alumna / alumnototal

    document.getElementById("porcentaje_hombres").innerHTML = "El porcentaje hombres es de: " + porcentajeh + "%";
    document.getElementById("porcentaje_mujeres").innerHTML = "El porcentaje mujeres es de: " + porcentajem + "%";
}
//problema 6
function calcularEdad() {
    var fechaNacimiento = document.getElementById("birthDate").value;
    var fechaActual = new Date();
    var fechaNacimientoFormato = new Date(fechaNacimiento);
    
    var edad = fechaActual.getFullYear() - fechaNacimientoFormato.getFullYear();
    
    var mesActual = fechaActual.getMonth() + 1;
    var mesNacimiento = fechaNacimientoFormato.getMonth() + 1;
    
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && fechaActual.getDate() < fechaNacimientoFormato.getDate())) {
      edad--;
    }
    
    document.getElementById("result").innerHTML = "Tu edad es: " + edad + " años.";
  }