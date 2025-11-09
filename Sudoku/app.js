// const sudoku = [
//     [0, 0, 0, 0, 0, 1, 4, 0, 6],
//     [0, 4, 0, 6, 0, 0, 0, 0, 0],
//     [1, 0, 6, 0, 0, 0, 0, 5, 0],
//     [9, 0, 4, 0, 7, 6, 5, 3, 0],
//     [0, 5, 7, 1, 0, 8, 0, 4, 0],
//     [0, 0, 0, 0, 4, 5, 8, 0, 7],
//     [0, 0, 8, 0, 0, 4, 0, 6, 0],
//     [4, 2, 0, 0, 6, 7, 1, 0, 5],
//     [5, 6, 1, 8, 2, 9, 0, 0, 0],
// ]

const sudoku = [
    '000360108',
    '603085000',
    '089000003',
    '000070005',
    '005031900',
    '830405002',
    '900000520',
    '500000000',
    '361952000',
]

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sudokuSolver (sudoku, isString = false) {
    // Массив, в который мы будем вставлять новые значения
    let res = [];
    if (isString) {
        res = sudoku.map(item => item.split('').map(row => Number(row)))
    } else {
        res = [...sudoku]
    }

    // Выбор текущего искомого элемента
    let activeRow = 0;
    let activeColumn = 0;

    // Ограничение от рекурсии
    let activeIteration = 1;
    let iterations = 15;

    // В первую очередь, проверяем строку на наличие 0
    // Если находим 0 в строке, запомининаем его расположение в переменные
    for (activeIteration; activeIteration <= iterations; activeIteration++) {
        console.log('iteration number', activeIteration);
        let findItems = 0;  
        
        for (const row in res) {     
            for (const item in res[row]) {

                if (res[Number(row)][Number(item)] === 0) {
                    activeColumn = Number(item);
                    activeRow = Number(row);
    
                    let possibleMeanings = checkAvailableInRow(Number(activeRow));
                    possibleMeanings = checkAvailableInColumn(Number(activeColumn), possibleMeanings)
                    possibleMeanings = checkAvailableInSquare(Number(activeRow), Number(activeColumn), possibleMeanings)

                    if (possibleMeanings.length < 3) {
                        console.log(possibleMeanings, activeRow + 1, activeColumn + 1);
                    } else {
                        // console.log(activeRow, activeColumn);
                    }
        
                    if (possibleMeanings.length === 1) {
                        console.log(possibleMeanings, activeRow + 1, activeColumn + 1);
                        res[activeRow][activeColumn] = possibleMeanings[0];
                        findItems++
                    } else {
                        // console.log(activeRow, activeColumn);
                    }
                }
            }
        }

        if (!findItems) {
            break;
        }
    }

    return res

    // Функция принимает позицию искомого элемента и возвращает массив возможных значений. Т.е. все возможные за вычетом тех, что есть в строке
    function checkAvailableInRow (row) {
        return values.filter(item => !res[row].includes(item))
    }

    // Функция принимает столбец искомого элемента (column) и массив возможных значений (possibles). 
    // Затем возвращает массив с вычетом значений, которые используются столбце
    function checkAvailableInColumn (column, possibles) {
        let columnValues = [];
        for (row of res) {

            if (row[column]) {
                columnValues.push(row[column])
            }
        }

        return possibles.filter(item => !columnValues.includes(item)) 
    }

    // Функция принимает позицию элемента и аозможные значения. Из которых вычитает значения, которые есть в ее квадрате
    function checkAvailableInSquare(row, column, possibles) {
        // Находим позицию нужного квадрата
        let rowSquare = 0;
        let columnSquare = 0;

        if (row < 3) {
            rowSquare = 0;
        } else if (row < 6) {
            rowSquare = 1;
        } else {
            rowSquare = 2;
        }

        if (column < 3) {
            columnSquare = 0;
        } else if (column < 6) {
            columnSquare = 1;
        } else {
            columnSquare = 2;
        }

        let valuesInSquare = []

        // Собираем все значения в нужной строке
        for (let item = 0; item != 3; item++) {
            valuesInSquare = valuesInSquare.concat(res[rowSquare * 3 + item].slice(columnSquare * 3, columnSquare * 3 + 3))
        }

        return possibles.filter(item => !valuesInSquare.includes(item)) 
    }
}

console.log(sudokuSolver(sudoku, true));
