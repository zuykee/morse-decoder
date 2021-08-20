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
    a = expr.match(/.{10}/g).toString();

    let result = new Array;
    const arr = a.replace(/\*{10}/g, ' ').replace(/10/g, '.').replace(/11/g, '-').replace(/0/g, '').split(',');
    
    for (i=0;i<arr.length;i++) {
        if (arr[i] !=' '){
    result[i] = [MORSE_TABLE[arr[i]]];
    } else {
        result[i] = arr[i];
    }
    }
    return result.join('');
}

module.exports = {
    decode
}