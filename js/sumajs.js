function sumacol1() {
  var num1 = Number(document.getElementById('number11').value);
  var num2 = Number(document.getElementById('number21').value);
  var num3 = Number(document.getElementById('number31').value);
  var num4 = Number(document.getElementById('number41').value);
  var num5 = Number(document.getElementById('number51').value);
  var num6 = Number(document.getElementById('number61').value);
  var num7 = Number(document.getElementById('number71').value);
  var num8 = Number(document.getElementById('number81').value);
  var num9 = Number(document.getElementById('number91').value);
  var num10 = Number(document.getElementById('number101').value);
  var num11 = Number(document.getElementById('number111').value);
  var num12 = Number(document.getElementById('number121').value);
  var res = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12;
  document.getElementById('res').value = res;
}
function sumacol2() {
  var num1 = Number(document.getElementById('number12').value);
  var num2 = Number(document.getElementById('number22').value);
  var num3 = Number(document.getElementById('number32').value);
  var num4 = Number(document.getElementById('number42').value);
  var num5 = Number(document.getElementById('number52').value);
  var num6 = Number(document.getElementById('number62').value);
  var num7 = Number(document.getElementById('number72').value);
  var num8 = Number(document.getElementById('number82').value);
  var num9 = Number(document.getElementById('number92').value);
  var num10 = Number(document.getElementById('number102').value);
  var num11 = Number(document.getElementById('number112').value);
  var num12 = Number(document.getElementById('number122').value);
  var res2 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12;
  document.getElementById('res2').value = res2;
}
function sumacol3() {
  var num1 = Number(document.getElementById('number13').value);
  var num2 = Number(document.getElementById('number23').value);
  var num3 = Number(document.getElementById('number33').value);
  var num4 = Number(document.getElementById('number43').value);
  var num5 = Number(document.getElementById('number53').value);
  var num6 = Number(document.getElementById('number63').value);
  var num7 = Number(document.getElementById('number73').value);
  var num8 = Number(document.getElementById('number83').value);
  var num9 = Number(document.getElementById('number93').value);
  var num10 = Number(document.getElementById('number103').value);
  var num11 = Number(document.getElementById('number113').value);
  var num12 = Number(document.getElementById('number123').value);
  var res3 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12;
  document.getElementById('res3').value = res3;
}
function sumacol4() {
  var num1 = Number(document.getElementById('number14').value);
  var num2 = Number(document.getElementById('number24').value);
  var num3 = Number(document.getElementById('number34').value);
  var num4 = Number(document.getElementById('number44').value);
  var num5 = Number(document.getElementById('number54').value);
  var num6 = Number(document.getElementById('number64').value);
  var num7 = Number(document.getElementById('number74').value);
  var num8 = Number(document.getElementById('number84').value);
  var num9 = Number(document.getElementById('number94').value);
  var num10 = Number(document.getElementById('number104').value);
  var num11 = Number(document.getElementById('number114').value);
  var num12 = Number(document.getElementById('number124').value);
  var res4 = num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 + num11 + num12;
  document.getElementById('res4').value = res4;
}


function comprobar120() {
  var num1 = Number(document.getElementById('res').value);
  var num2 = Number(document.getElementById('res2').value);
  var num3 = Number(document.getElementById('res3').value);
  var num4 = Number(document.getElementById('res4').value);
  var check120 = num1 + num2 + num3 + num4;
  document.getElementById('check120').value = check120;
  if (document.getElementById("check120").value != 120) {
    alert("¡ATENCIÓN!:Revisa tus respuestas. La suma de todas las columnas debe ser 120");
    return false;
  } else {
    alert("¡Genial!: Continúa para obtener los resultados")
    return true;
  }


}

function caec() {
  var num1 = Number(document.getElementById('res3').value);
  var num2 = Number(document.getElementById('res').value);
  var camenosec = num1 - num2;
  document.getElementById('camenosec').value = camenosec;

}

function eaor() {
  var num1 = Number(document.getElementById('res4').value);
  var num2 = Number(document.getElementById('res2').value);
  var eamenosor = num1 - num2;
  document.getElementById('eamenosor').value = eamenosor;

}

function solonumeros(e) {
  key = e.keyCode || e.which;
  teclado = String.fromCharCode(key);

  numeros = "1234";
  especiales = "8-37-38-46";

  teclado_especial = false;

  for (var i in especiales) {
    if (key == especiales[i]) {
      teclado_especial = true;
    }
  }
  if (numeros.indexOf(teclado) == -1 && !teclado_especial) {
    return false;
  }
}

function mostrar(){
  var a = document.getElementById('obj2').style.display = 'block';
}
function ocultar(){
  var b = document.getElementById('obj2').style.display = 'none';
}







