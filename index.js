
class CaesarCipher {

    #uppercase = () =>
        [...Array(26)].map((n, i) => `${String.fromCharCode(i + "A".charCodeAt())}`);
    #lowercase = () =>
        [...Array(26)].map((n, i) => `${String.fromCharCode(i + "a".charCodeAt())}`);

    #mod = (a, b) => {
        const c = a % b;
        return c < 0 ? c + b : c;
    };

    #chiper = (array, shift) => {
        const cipher = {};
        array.forEach((value, index) => {
            cipher[value] = array[this.#mod(index + shift, array.length)];
        });
        return cipher;
    };

    #caesarChipher = (shift) => {
        return {
            ...this.#chiper(this.#uppercase(), shift),
            ...this.#chiper(this.#lowercase(), shift),
        };
    };

    #getEncodeCharacter = (alphabet, character) => {
        return alphabet[character] ?? character;
    }

    #getDecodeCharacter = (alphabet, character) => {
        if (character === ' ') return ' ';
        return Object.keys(alphabet).find(key => alphabet[key] === character);
    }

    encode = (text, shift) => {
        const caesar = this.#caesarChipher(shift);

        return [...text].map((c) => this.#getEncodeCharacter(caesar, c)).join("");
    }

    decode = (text, shift) => {
        const caesar = this.#caesarChipher(shift);

        return [...text].map((c) => this.#getDecodeCharacter(caesar, c)).join("");
    }
}


const caesarCipher = new CaesarCipher();

const str = 'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'
const encodeValue = caesarCipher.encode(str,23);
const decodeValue = caesarCipher.decode(encodeValue, 23);

console.log('========', encodeValue, "====", decodeValue);

