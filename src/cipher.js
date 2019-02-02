
function botaoVoltar() {
  document.getElementById("text-encoder").style.display = "block";
  document.getElementById("number-code1").value = "";
  document.getElementById("insert-word1").value = "";
  document.getElementById("text-decoder").style.display = "block";
  document.getElementById("number-code2").value = "";
  document.getElementById("insert-word2").value = "";
  document.getElementById("decode").style.display = "block";
  document.getElementById("code").style.display = "block";
  document.getElementById("middle").style.display = "none";
}

function choiceCode(){
  document.getElementById("text-decoder").style.display = "none";
  document.getElementById("decode").style.display = "none";
  document.getElementById("middle").style.display = "block";
  
}

function choiceDecode(){
  document.getElementById("text-encoder").style.display = "none";
  document.getElementById("code").style.display = "none";
  document.getElementById("middle").style.display = "block";
}
 
function numeroTexto(){
  let numberCode= parseInt(document.getElementById("number-code1").value);
  let word= document.getElementById("insert-word1").value;
  return document.getElementById("insert-word1").value= encodeText(numberCode, word);
}

function encodeText(numberCode, word){
  let letras= "";
  let codigoDaLetraASC= [];
  const tamDoAlfabeto= 26;
  const cod1Maiuscula= 65;
  const codUltimaMaiuscula= 90;
  const cod1Minuscula= 97;
  const codUltimaMinuscula= 122;

  for(c= 0; c < word.length; c++){
    codigoDaLetraASC= word[c].charCodeAt();
    if(codigoDaLetraASC >= cod1Maiuscula && codigoDaLetraASC <= codUltimaMaiuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Maiuscula + (numberCode % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto + cod1Maiuscula)));
       
    } else if(codigoDaLetraASC >= cod1Minuscula && codigoDaLetraASC <= codUltimaMinuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Minuscula + (numberCode % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto + cod1Minuscula)));
    } else{
      letras= letras + (String.fromCharCode(codigoDaLetraASC))
    }
  }
  return letras;
}


function decodeNumeroTexto(){
  let desloc= parseInt(document.getElementById("number-code2").value);
  let palavra= document.getElementById("insert-word2").value;
  return document.getElementById("insert-word2").value= decodeText(desloc, palavra);
}

function decodeText(desloc, palavra){
  let letras= "";
  let codigoDaLetraASC= [];
  const tamDoAlfabeto= 26;
  const cod1Maiuscula= 65;
  const codUltimaMaiuscula= 90;
  const cod1Minuscula= 97;
  const codUltimaMinuscula= 122;

  for( c= 0; c < palavra.length; c++ ){
    codigoDaLetraASC= palavra[c].charCodeAt();
    if(codigoDaLetraASC >= cod1Maiuscula && codigoDaLetraASC <= codUltimaMaiuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Maiuscula - (desloc % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto + cod1Maiuscula)));
    }else if(codigoDaLetraASC >= cod1Minuscula && codigoDaLetraASC <= codUltimaMinuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Minuscula - (desloc % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto + cod1Minuscula)));
    } else{
      letras= letras + (String.fromCharCode(codigoDaLetraASC))
    }
  }
  return letras;
}
