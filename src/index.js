/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

let buttonId = document.querySelector('.back-screen');
buttonId.addEventListener('click', () => {
    buttonBack();
});

function buttonBack() {
    document.querySelector('.text-encoder').style.display = 'block';
    document.querySelector('#number-code').value = '';
    document.querySelector('#insert-word-code').value = '';
    document.querySelector('.text-decoder').style.display = 'block';
    document.querySelector('#number-decode').value = '';
    document.querySelector('#insert-word-decode').value = '';
    document.querySelector('#decode').style.display = 'block';
    document.querySelector('#code').style.display = 'block';
    document.querySelector('.middle').style.display = 'none';
}

let choiceCodeId = document.querySelector('#code');
choiceCodeId.addEventListener('click', () => {
    choiceCode();
});

let choiceDecodeId = document.querySelector('#decode');
choiceDecodeId.addEventListener('click', () => {
    choiceDecode();
});

function choiceCode(){
    document.querySelector('.text-decoder').style.display = 'none';
    document.querySelector('#decode').style.display = 'none';
    document.querySelector('.middle').style.display = 'block';
}

function choiceDecode(){
    document.querySelector('.text-encoder').style.display = 'none';
    document.querySelector('#code').style.display = 'none';
    document.querySelector('.middle').style.display = 'block';
}

let numberTextId = document.querySelector('#button-code');
numberTextId.addEventListener('click', () => {
    numberText();
});

function numberText(){
    let numberCode= parseInt(document.querySelector('#number-code').value);
    let word= document.querySelector('#insert-word-code').value;
    return document.querySelector('#insert-word-code').value= encodeText(numberCode, word);
}

function encodeText(numberCode, word){
    let letters= '';
    let codCharASC= [];
    const alphaSize= 26;
    const firstUppercase= 65;
    const lestUppercase= 90;
    const firstLowercase= 97;
    const lestLowercase= 122;

    for(c= 0; c < word.length; c++){
        codCharASC= word[c].charCodeAt();
        if(codCharASC >= firstUppercase && codCharASC <= lestUppercase){
            letters= letters + (String.fromCharCode(((codCharASC - firstUppercase + (numberCode % alphaSize) + alphaSize) % alphaSize + firstUppercase)));
       
        } else if(codCharASC >= firstLowercase && codCharASC <= lestLowercase){
            letters= letters + (String.fromCharCode(((codCharASC - firstLowercase + (numberCode % alphaSize) + alphaSize) % alphaSize + firstLowercase)));
        } else{
            letters= letters + (String.fromCharCode(codCharASC));
        }
    }
    return letters;
}

let decodeNumberTextId = document.querySelector('#button-decode');
decodeNumberTextId.addEventListener('click', () => {
    decodeNumberText();
});

function decodeNumberText(){
    let desloc= parseInt(document.querySelector('#number-decode').value);
    let letter= document.querySelector('#insert-word-decode').value;
    return document.querySelector('#insert-word-decode').value= decodeText(desloc, letter);
}

function decodeText(desloc, letter){
    let letters= '';
    let codCharASC= [];
    const alphaSize= 26;
    const firstUppercase= 65;
    const lestUppercase= 90;
    const firstLowercase= 97;
    const lestLowercase= 122;

    for( c= 0; c < letter.length; c++ ){
        codCharASC= letter[c].charCodeAt();
        if(codCharASC >= firstUppercase && codCharASC <= lestUppercase){
            letters= letters + (String.fromCharCode(((codCharASC - firstUppercase - (desloc % alphaSize) + alphaSize) % alphaSize + firstUppercase)));
        }else if(codCharASC >= firstLowercase && codCharASC <= lestLowercase){
            letters= letters + (String.fromCharCode(((codCharASC - firstLowercase - (desloc % alphaSize) + alphaSize) % alphaSize + firstLowercase)));
        } else{
            letters= letters + (String.fromCharCode(codCharASC));
        }
    }
    return letters;
}
