// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("");
  
  function caesar(input, shift, encode = true) {
    let decoded = "";
    if (!shift || shift >= 26 || shift === 0 || shift <= -26) return false;

    if (!encode) shift *= -1;
    for (let letter of input) {
      let lowerCaseLett = letter.toLowerCase();
      if (letters.includes(lowerCaseLett)) {
        let newLetter = letters.indexOf(lowerCaseLett) + shift;
        if (newLetter > 25) {
          newLetter -= 26;
          } else if (newLetter < 0) newLetter += 26;
           decoded += letters[newLetter];
           } else {
             decoded += lowerCaseLett;
            }
          }
          return decoded;
        }
        return {caesar};
      })();
      
//console.log(caesar("thinkful", 3))
module.exports = { caesar: caesarModule.caesar };
