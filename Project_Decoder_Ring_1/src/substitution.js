// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
   const engABC = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
   
   function substitution(input, alphabet, encode = true) {
     if (!alphabet || alphabet.length !== 26) return false; 
     else if (encode === true || encode === false) {
       for ( let i = 0; i < alphabet.length; i++) {
         const lastIndex = alphabet.lastIndexOf(alphabet[i]);
         if (lastIndex !== i && lastIndex > -1) return false;
       }
     }
   const splitAlphabet = alphabet.split('');
   const encoder = engABC.map((letter, index) => {
     if (encode) {
       return [letter, splitAlphabet[index]]
     } else {
       return [splitAlphabet[index], letter]
     }
   });
   const mapped = Object.fromEntries(encoder);
   return input.toLowerCase().replace(/[a-z!-/:@[-`{-~]/g, (whatever) => {
     return mapped[whatever];
   })
}
   return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
