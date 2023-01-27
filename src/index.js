const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let morseWord = '';
  let morseLetter = '';
  
  for(let i=0; i < expr.length; i+=2){
    if(expr.substr(i, 2) === '10') morseLetter += '.';
    if(expr.substr(i, 2) === '11') morseLetter += '-';
    if(i % 10 === 8) {
      morseWord += MORSE_TABLE[morseLetter] || ' ';
      morseLetter = '';
    }
  }
  
  return morseWord;
}

module.exports = {
    decode
}