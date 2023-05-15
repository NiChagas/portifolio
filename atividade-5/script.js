
function chama() {
    //document.body.style.backgroundColor = "red";
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let batata = a + b;
    //alert("SOMA IGUAL A " + soma);
    console.log("SOMA IGUAL A " + batata)
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "SOMA IGUAL A " + soma
}
//ponto de mínimo / máximo
function exercicio1() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = parseInt(document.getElementById("c").value);

    let xv = -b/(2*a);
    let delta = b*b - 4*a*c;
    let yv = -delta/(4*a);
    //devolver o resultado para a tela
    document.getElementById("resultado").innerHTML = "O PONTO É (" + xv.toFixed(2) + "," + yv.toFixed(2) + ")";
}

//conversão de temperatura
function exercicio2() {
  //alert ("teste");//
  let resultado
  //pegar o que inserido nno form e converter para float
  let t = parseFloat(document.getElementById(valor).value);
  console.log("VALOR=" + valor);
  //pegar a opção e converter para inteiro
  let escala = parseInt(document.getElementById("opçao").value);
  console.log("PARA =" + escala);
  if (escala =="f") (escala == "c")
  //C = (F-32)*5/9
  resultado = (t-32)*5/9;
  document.getElementById("saida").innerHTML = t + "F value" + resultado + "c"
}
else {
//F = 9*C/S + 32
resultado = 9*temp/5 + 32
}