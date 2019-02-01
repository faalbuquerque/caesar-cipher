## Cifra de Cesar:

Cifra de Cesar é um tipo de criptografia que substitui uma letra por outra do mesmo alfabeto  
em um numero fixo de vezes. A Cifra tem esse nome porque Júlio César utilizou este metodo   
nas mensagens enviadas a seus generais no qual cada letra da mensagem original era trocada     
pela letra localizada a três posições à sua frente.


>Alfabeto normal:  
>A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z   
>0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25   

>Alfabeto cifrado em tres posicoes:    
>D E F G H I J K L M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  A  B  C    

Para saber mais detalhes sobre a Cifra de Cesar clique [aqui!](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)  


Sobre o Projeto

A ideia do projeto é que os organizadores de uma festa surpresa troquem mensagens entre si     
codificando e decodificando as mensagens através de um programa, para que o aniversariante   
nao entenda caso descubra as mensagens.  

O programa deve receber a quantidade de deslocamento que o usuario escolher e codificar ou  
decodificar a mensagem digitada.    

>A formula utilizada para fazer o calculo de deslocamento do alfabeto é esta:    

>(codigoDaLetra + desloc)% tamDoAlfabeto  
>Exemplo: (codigoDaLetra + 7)%26  
>(5 + 7)%26  

Em javascript as letras sao codificadas em [ASCII](http://www.bosontreinamentos.com.br/hardware/tabela-ascii/)   

>Formula da Cifra de Cezar alterada para usar em Javascript:
>(aqui deve entrar uma explicacao da formula...)  

>((codigoDaLetraASC - cod1Letra + desloc) % tamDoAlfabeto) + cod1Letra
  

>![Diagrama de Bloco](https://github.com/faalbuquerque/caesar-cipher/blob/master/src/images/diagramadebloco.jpg)


