

var inorderTraversal = function*(arr) {
    let mass = []

    let inmass = function (arr) {
        for (const iterator of arr) {
            if (typeof iterator == 'object') {
                inmass(iterator)
            } else {
                mass.push(iterator)
            }
        }
    }

    inmass(arr)
    console.log(mass);




    console.log(arr);
    for (let index = 0; index < mass.length; index++) {
        yield mass[index];
    }
};


// ко мне тольько сейчас пришла идей испольщовать рекурсию

// mass = [[[6]],[1,3],[]]
mass = [4234,63453,123,[34545,867],[[0]],[[]]]

const gen = inorderTraversal(mass);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);