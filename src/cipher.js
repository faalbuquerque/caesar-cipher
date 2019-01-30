//window.cipher = { }; - professor pediu para ignorar por enquanto.
function numeroTexto(){
    let numberCode= parseInt(document.getElementById("number-code1").value);
    let word= document.getElementById("insert-word1").value;
    return document.getElementById("insert-word1").value = encodeText(numberCode, word);
  }

function encodeText(numberCode, word){
  let letras= "";
  let codigoDaLetraASC= [];
  let tamDoAlfabeto= 26;
  let cod1Maiuscula= 65;
  let codUltimaMaiuscula= 90;
  let cod1Minuscula= 97;
  let codUltimaMinuscula= 122;
  let espaco = 32;
  
  for( c= 0; c < word.length; c++ ){
    codigoDaLetraASC= word[c].charCodeAt();

    if(codigoDaLetraASC >= cod1Maiuscula && codigoDaLetraASC <= codUltimaMaiuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Maiuscula + numberCode) % tamDoAlfabeto) + cod1Maiuscula));
    } 
    
    if(codigoDaLetraASC >= cod1Minuscula && codigoDaLetraASC <= codUltimaMinuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Minuscula + numberCode) % tamDoAlfabeto) + cod1Minuscula));
    } 

    if(codigoDaLetraASC === espaco){
      letras= letras + (String.fromCharCode(codigoDaLetraASC));
    } 
  }
  return letras;
}

/*
var teste = encodeText(1,"abcd");
if(teste === "bcde"){
console.log("Funciona!")
} else{
console.log("Nao funciona!")
}*/

function decodeNumeroTexto(){
  let desloc= parseInt(document.getElementById("number-code2").value);
  let palavra= document.getElementById("insert-word2").value;
  return document.getElementById("insert-word2").value = decodeText(desloc, palavra);
}

function decodeText(desloc, palavra){
  let letras= "";
  let codigoDaLetraASC= [];
  let tamDoAlfabeto= 26;
  let cod1Maiuscula= 65;
  let codUltimaMaiuscula= 90;
  let cod1Minuscula= 97;
  let codUltimaMinuscula= 122;
  let espaco = 32;
 
  for( c= 0; c < palavra.length; c++ ){
    codigoDaLetraASC= palavra.charCodeAt(c);

    if(codigoDaLetraASC >= cod1Maiuscula && codigoDaLetraASC <= codUltimaMaiuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Maiuscula - (desloc % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto +cod1Maiuscula)));
    } 
    
    if(codigoDaLetraASC >= cod1Minuscula && codigoDaLetraASC <= codUltimaMinuscula){
      letras= letras + (String.fromCharCode(((codigoDaLetraASC - cod1Minuscula - ( desloc % tamDoAlfabeto) + tamDoAlfabeto)%tamDoAlfabeto + cod1Minuscula)));
    } 

    if(codigoDaLetraASC === espaco){
      letras= letras + (String.fromCharCode(codigoDaLetraASC));
    }
  }
  return letras;
}