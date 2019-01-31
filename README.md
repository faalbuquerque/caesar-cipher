## Cifra de Cesar:

Cifra de Cesar é um tipo de criptografia que substitui uma letra por outra do mesmo alfabeto  
em um numero fixo de vezes. A Cifra tem esse nome porque Júlio César utilizou este metodo   
nas mensagens enviadas a seus generais no qual cada letra da mensagem original era trocada     
pela letra localizada a três posições à sua frente.

<<<<<<< HEAD
>Exemplo de troca de 3 posicoes:  
>
>*A passa a ser D
>*B passa a ser E
>*C passa a ser F
=======
>Alfabeto normal:   
>A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  
>0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25  
>>>>>>> ca312241fcff0bbdcc23f5a6fab6e8be41c879be

>Alfabeto cifrado em tres posicoes:  
>D E F G H I J K L M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  A  B  C  

<<<<<<< HEAD
>Alfabeto normal:   
>A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  
>0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25  
>Alfabeto cifrado em tres posicoes:  
>D E F G H I J K L M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  A  B  C  
=======
Para saber mais detalhes sobre a Cifra de Cesar clique [aqui!](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)  
>>>>>>> ca312241fcff0bbdcc23f5a6fab6e8be41c879be

[Para saber mais detalhes sobre a Cifra de Cesar clique](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar " aqui!")  

<<<<<<< HEAD

#Sobre o Projeto

A ideia do projeto é que os organizadores de uma festa surpresa troquem mensagens entre si   
codificando e decodificando as mensagens atraves de um programa, para que o aniversariante 
nao entenda caso descubra as conversas. 
=======
#Sobre o Projeto  

A ideia do projeto é que os organizadores de uma festa surpresa troquem mensagens entre si   
codificando e decodificando as mensagens atraves de um programa, para que o aniversariante 
nao entenda caso leia as mensagens. 
>>>>>>> ca312241fcff0bbdcc23f5a6fab6e8be41c879be

O programa deve receber a quantidade de deslocamento que o usuario escolher e codificar ou decodificar a mensagem digitada pelo usuario.

A formula utilizada para fazer o calculo de deslocamento do alfabeto é esta:  

>(codigoDaLetra + desloc)% tamDoAlfabeto
>Exemplo: (codigoDaLetra + 7)%26
>(5 + 7)%26


<<<<<<< HEAD
Como em javascript as letras sao codificadas em (http://www.bosontreinamentos.com.br/hardware/tabela-ascii/ "ASCII"), a formula foi alterada:
    
    
Em ASCII o alfabeto vai de 65 a 90:
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90
=======
Como em javascript as letras sao codificadas em [ASCII](http://www.bosontreinamentos.com.br/hardware/tabela-ascii/), a formula foi alterada:
    
    
Em ASCII o alfabeto vai de 65 a 90:  

A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90  
>>>>>>> ca312241fcff0bbdcc23f5a6fab6e8be41c879be

>Formula da Cifra de Cezar em Javascript:
>((codigoDaLetraASC - cod1Letra + desloc) % tamDoAlfabeto) + cod1Letra
  

<<<<<<< HEAD
  #Diagrama de Bloco do projeto:

  (aqui ainda nao terminei....)



=======
  #Diagrama de Bloco do projeto:  

  (ainda nao terminei....)
>>>>>>> ca312241fcff0bbdcc23f5a6fab6e8be41c879be
