  
function test(resultFuncao, resultCorreto){

    if(resultFuncao === resultCorreto){
        console.log('Funciona!');
    }else{
        console.log('Nao funciona!');
    }
}

console.log('Teste de codificacao de letras Minusculas:');
test(encodeText(1, 'abcd') , 'bcde');

console.log('Teste de codificacao de letras Maiusculas:');
test(encodeText(10, 'ABCD'), 'KLMN');

console.log('Teste de codificacao de letras minusculas com espaco:');
test(encodeText(20, 'w x y z'), 'q r s t');

console.log('Teste de codificacao de letras maiusculas com espaco:');
test(encodeText(27, 'A B C D'), 'B C D E');

console.log('Teste de codificacao de letras maiusculas com deslocamento alto:');
test(encodeText(50, 'FGHI'), 'DEFG');

console.log('Teste de codificacao de frases com letras maiusculas, minusculas e espaco:');
test(encodeText(5, 'Ola Fabiane'), 'Tqf Kfgnfsj');

console.log('Teste de codificacao de frase grande:');
test(encodeText(3, 'Era um biquini de bolinha amarelinha tao pequenininho Mal cabia na Ana Maria'), 'Hud xp eltxlql gh erolqkd dpduholqkd wdr shtxhqlqlqkr Pdo fdeld qd Dqd Pduld');

console.log('Teste de codificacao de frase com muito espacamento:');
test(encodeText(40, 'Com      MUITO      espaco'), 'Qca      AIWHC      sgdoqc');

console.log('Teste de codificacao de caracteres especiais:');
test(encodeText(1, 'Olá tudo bem?'), 'Pmá uvep cfn?');


console.log('Teste de decodificacao de letras minusculas:');
test(decodeText(1, 'bcde'), 'abcd');

console.log('Teste de decodificacao de letras maiusculas:');
test(decodeText(10, 'KLMN'), 'ABCD');

console.log('Teste de decodificacao de letras minusculas com espaco:');
test(decodeText(20, 'q r s t'), 'w x y z');

console.log('Teste de decodificacao de letras maiusculas com espaco:');
test(decodeText(27, 'B C D E'), 'A B C D');

console.log('Teste de decodificacao de letras maiusculas com deslocamento alto:');
test(decodeText(50, 'DEFG'), 'FGHI');

console.log('Teste de decodificacao de frases com letras maiusculas, minusculas e espaco:');
test(decodeText(5, 'Tqf Kfgnfsj'), 'Ola Fabiane');

console.log('Teste de decodificacao de frase grande:');
test(decodeText(3, 'Hud xp eltxlql gh erolqkd dpduholqkd wdr shtxhqlqlqkr Pdo fdeld qd Dqd Pduld'), 'Era um biquini de bolinha amarelinha tao pequenininho Mal cabia na Ana Maria');

console.log('Teste de decodificacao de frase com muito espacamento:');
test(decodeText(40, 'Qca      AIWHC      sgdoqc'), 'Com      MUITO      espaco');

console.log('Teste de decodificacao de caracteres especiais:');
test(decodeText(1, 'Pmá uvep cfn?'), 'Olá tudo bem?');

