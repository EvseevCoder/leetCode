let toInt = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}

function RomanToInteger(roman) {
    let result = 0;
    const wordsRed = roman.split('');
    let skipNext = false;

    const next = (word) => {
        result -= toInt[word];
        skipNext = true;
    }

    for (const word of roman) {
        wordsRed.shift();

        if (skipNext) {
            continue;
        }

        if (word === 'I' && ['V', 'X']?.includes(wordsRed[0])) {
            next(word);

        } else

        if (word === 'X' && ['L', 'C']?.includes(wordsRed[0])) {
            next(word);
        } else

        if (word === 'C' && ['D', 'M']?.includes(wordsRed[0])) {
            next(word);
        } else
        
        {result += toInt[word];}

        skipNext = false;
    }

    return result
}

const roman = 'LVIIIXI'

console.log( RomanToInteger(roman) )
