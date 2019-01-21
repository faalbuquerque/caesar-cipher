    Cifra de Cezar:

    É um tipo de criptografia onde cada letra de um texto é substituida por outra do mesmo alfabeto, 
    num numero fixo de vezes
     
    ex de troca de 3 posicoes: 
        A passa a ser D
        B passa a ser E
        C passa a ser F

    Normal:  A B C D E F G H I J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
             0 1 2 3 4 5 6 7 8 9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25
    Cifrado: D E F G H I J K L M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z  A  B  C


    Formula da Cifra de Cezar:

    (codigoDaLetra + desloc)% tamDoAlfabeto
    

    obs: O tamanho do alfabeto é 26 mesmo mostrando até 25(porque comeca a contar do 0)

    Ex: 
    (codigoDaLetra + 7)%26
    (5 + 7)%26


    Em javascript as letras sao codificadas em ASCII, em codigo decimal.
    http://www.bosontreinamentos.com.br/hardware/tabela-ascii/
    O alfabeto vai de 65 a 90:
    A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
    65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90

    Formula da Cifra de Cezar em Javascript:
    ((codigoDaLetraASC - cod1Letra + desloc) % tamDoAlfabeto) + cod1Letra


                                                OBJETIVO:

- Desenhar um produto pensando nos usuários
- Construir uma interface
- Escutar eventos básicos do DOM
- Escrever a lógica que cifra e descifra mensagens 
- Realizar testes básicos que comprovem (e documentem) esta lógica
- Manipular o DOM para que ele mostre e imprima os resultados.



Checklist
Parte Obrigatória

 - README.md com explicações e desenho do projeto
 - Usar VanillaJS.
 - Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser cifrado.
 - Mostrar o resultado da cifra corretamente.
 - Permitir escrever um texto, com letras maiúsculas e minúsculas, para ser descifrado.
 - Mostrar o resultado descifrado corretamente.
 - Permitir escolher o offset (deslocamento) a ser usado na cifragem/descifragem.
 - Implementa cipher.encode.
 - Implementa cipher.decode.
 - Criar testes unitários.