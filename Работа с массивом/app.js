

var inorderTraversal = function*(arr) {
    // начало цикла while. 
    // проверка всех элементов

    n = 0
    while (true) {
        n++


        for (let index = 0; index < arr.length; index++) {
            if (typeof arr[index] == 'object') {
                // создаем элемент, по которому в дальнейшем будем удалять из массива
                obj = arr[index]
                
                // перебор элементов внутри массива
                // for (let index2 = 0; index2 < arr[index].length; index2+=1) {
                //     console.log(arr[index], 'Это внутренний массив')

                //     // вставка элемента под. массива в главный массив
                //     arr.splice(index, 0, arr[index][index2]);
                //     console.log(`вставили элемент ${arr[index]}`);

                //     console.log(arr);
                // }


                // Второй вариант
                for (const iterator of arr[index]) {

                    // вставка элемента под. массива в главный массив
                    // Можно суммировать с итератором, но пока не вышло
                    arr.splice(index + arr.indexOf(iterator), 0, iterator);
                    console.log(`"Элемент ${iterator} вствлен на место ${index + arr.indexOf(iterator)}. Итератор номер - ${arr.indexOf(iterator)}`);

                    console.log(arr);
                }

                // Удаление разбитого элемента
                arr.splice(arr.indexOf(obj), 1)
            }
            
        }



        
        if (n == 5) {
            break
        }

        console.log(arr);
    }

    console.log(arr);
    for (let index = 0; index < arr.length; index++) {
        yield arr[index];
    }
};


// ко мне тольько сейчас пришла идей испольщовать рекурсию

mass = [[[6]],[1,3],[]]
// mass = [4234,63453,123,[34545,867],[[0]],[[]]]

const gen = inorderTraversal(mass);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);