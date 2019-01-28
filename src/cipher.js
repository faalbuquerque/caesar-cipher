//window.cipher = { }; - professor pediu para ignorar por enquanto.


function choicecode(){
  //escrever funcao para escolher codificar mensagem
  
}

function choicedecode(){
  //escrever funcao para escolher decifrar mensagem
}


function decodeText(palavra){
  //escrever funcao para decifrar mensagem
}



function positionDesloc(){
 var numdigitado= document.getElementsByClassName("button-padrao1").value;
  return numdigitado
}


var desloc= 3;

function encodeText(palavra){
  let letras= "";
  let codigoDaLetraASC= [];
  let tamDoAlfabeto= 26;
  let cod1Maiuscula= 65;
  let codUltimaMaiuscula= 90;
  let cod1Minuscula= 97;
  let codUltimaMinuscula= 122;

  for( c= 0; c < palavra.length; c++ ){
    codigoDaLetraASC= palavra.charCodeAt(c);

    if(codigoDaLetraASC >= cod1Maiuscula && codigoDaLetraASC <= codUltimaMaiuscula){
      letras= letras+ (String.fromCharCode(((codigoDaLetraASC - cod1Maiuscula + desloc) % tamDoAlfabeto) + cod1Maiuscula ));
    console.log(codigoDaLetraASC)

    } else if(codigoDaLetraASC >= cod1Minuscula && codigoDaLetraASC <= codUltimaMinuscula){
      letras= letras+ (String.fromCharCode(((codigoDaLetraASC - cod1Minuscula + desloc) % tamDoAlfabeto) + cod1Minuscula));
      console.log(codigoDaLetraASC)
      } 
  }

  return letras;
}





/* formula para descobrir o cod em ascii e pular o deslocamento:
((codigoDaLetraASC - cod1Letra + desloc) % tamDoAlfabeto) + cod1Letra

+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

codigoDaLetraASC em letra maiuscula= [65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 
85, 86, 87, 8, 89, 90];

codigos da tabela ascii em minusculo vao de 97 a 122!!!!!
+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//let texto= document.getElementById("insert-word");
function decodeText(){
    let texto= document.getElementById("insert-word2");
    return document.write("Mensagem decifrada: " + texto.value);

*/
