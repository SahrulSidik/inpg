/* Latihan 2
Buatlah function reverseString melakukan proses pembalikan string! */

function reverseString (text) {
  var tulisan ='';
  for(var i = text.length-1; i>0; i--) {
    tulisan+= text[i];
    }
  return tulisan;
}


// TEST CASES
console.log(reverseString('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(reverseString('John Doe')); // eoD nhoJ
console.log(reverseString('I am a bookworm')); // mrowkoob a ma I
console.log(reverseString('Coding is my hobby')); // ybboh ym si gnidoC
console.log(reverseString('Super')); // repuS
