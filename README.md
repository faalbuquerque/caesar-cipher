### Cifra de Cesar:

Cifra de Cesar é um tipo de criptografia que substitui uma letra por outra do mesmo alfabeto  
em um numero fixo de vezes. A Cifra tem esse nome porque Júlio César utilizou este metodo   
nas mensagens enviadas a seus generais no qual cada letra da mensagem original era trocada     
pela letra localizada a três posições à sua frente.

Para saber mais detalhes sobre a Cifra de Cesar clique [aqui!](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)  

## Sobre o Projeto: 

A ideia do projeto é que os organizadores de uma festa surpresa troquem mensagens entre si     
codificando e decodificando as mensagens através de um programa, para que o aniversariante   
nao entenda caso descubra as mensagens.  

O programa deve receber a quantidade de deslocamento que o usuario escolher e codificar ou  
decodificar a mensagem digitada.    

> A formula base utilizada para fazer o calculo de deslocamento do alfabeto é esta:    
> (codigoDaLetra + desloc)% tamDoAlfabeto  


Em javascript as letras sao codificadas em [ASCII](http://www.bosontreinamentos.com.br/hardware/tabela-ascii/)   

> A formula da Cifra de Cezar alterada para usar em Javascript é esta:
> ((codigoDaLetraASC - cod1Letra + desloc) % tamDoAlfabeto) + cod1Letra

> A formula alterada para codificar caracteres especiais e numeros negativos é esta:
> ((codigoDaLetraASC - cod1Letra - (desloc % tamDoAlfabeto) + tamDoAlfabeto) % tamDoAlfabeto + cod1letra)
  
## Diagrama de Bloco:

![Diagrama de Bloco](https://github.com/faalbuquerque/caesar-cipher/blob/master/src/images/diagramadebloco.jpg)


# Planejamento:

* Escrevi todo HTML base;
* Apliquei o CSS basico;
* Estudei a logica das formulas de codificacao;
* Estudei o funcionamento de Arrays em javaScript;
* Criei as funcoes em JavaScript e alimentei o HTML;
* Criei os teste unitarios;
* Adicionei funcoes extras e layout melhorado.






