

var inorderTraversal = function*(arr) {
    // начало цикла while. 
    // проверка всех элементов

    n = 0
    while (true) {
        n++


        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] == 'object') {
                console.log(123);
            }
            
        }








        
        if (n == 50) {
            break
        }
    }



    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        yield arr[index];
    }
};

const gen = inorderTraversal([[[6]],[1,3],[]]);

console.log(gen.next().value);
console.log(gen.next().value);
