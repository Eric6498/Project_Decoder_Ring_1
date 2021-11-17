// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polysSq = [
    
    {num: "11", char: "a"},
    {num: "21", char: "b"},
    {num: "31", char: "c"},
    {num: "41", char: "d"},
    {num: "51", char: "e"},
    {num: "12", char: "f"},
    {num: "22", char: "g"},
    {num: "32", char: "h"},
    {num: "42", char: "i"},
    {num: "42", char: "j"},
    {num: "52", char: "k"},
    {num: "13", char: "l"},
    {num: "23", char: "m"},
    {num: "33", char: "n"},
    {num: "43", char: "o"},
    {num: "53", char: "p"},
    {num: "14", char: "q"},
    {num: "24", char: "r"},
    {num: "34", char: "s"},
    {num: "44", char: "t"},
    {num: "54", char: "u"},
    {num: "15", char: "v"},
    {num: "25", char: "w"},
    {num: "35", char: "x"},
    {num: "45", char: "y"},
    {num: "55", char: "z"},
    {num: "00", char: " "},
  ];

  function encoder(input) {
    let result = "";
    input.toLowerCase().split('').forEach(char => {
      const obj = polysSq.find(value => char === value.char);
      if (obj.char === "i" || obj.char === "j") {
        obj.num = 42;
      }
      result += obj.num;
    });
    return result.replace("00", " ");
  }

  function decoder(input) {
    const zerosInput = input.replace(" ", "00");
    const zerosLength = zerosInput.length;
    if (zerosLength % 2 != 0) return false;
    
    let result = "";
    zerosInput.match(/.{1,2}/g).forEach(pair => {
      let obj = polysSq.find(value => pair === value.num);
      if (!obj) {
        obj = {num: "42", char: "(i/j)"};
      }
      result += obj.char;
    });
    return result;
  }

  function polybius(input, encode = true) {
    const result = encode ? encoder(input) : decoder(input);
    return result;
  }
  
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
