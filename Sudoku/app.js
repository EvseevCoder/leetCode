const sudoku = [
    [9,0,6,7,0,8,5,0,0],
    [8,0,0,0,0,0,0,0,9],
    [0,1,3,0,0,0,0,0,7],
    [6,0,9,0,0,0,1,2,0],
    [0,7,2,1,0,0,9,0,8],
    [5,0,1,8,0,2,3,0,0],
    [1,9,0,0,0,6,0,5,0],
    [0,0,0,9,0,4,8,0,2],
    [2,0,8,5,0,7,6,0,4]
]

// const sudoku = [
//     [9,2,6,0,0,0,0,0,0],
//     [8,0,4,0,0,0,0,0,0],
//     [7,1,3,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
//     [0,0,0,0,0,0,0,0,0],
// ]

// const sudoku = [
//     [
//         9,
//         2,
//         6,
//         7,
//         4,
//         8,
//         5,
//         3,
//         1
//     ],
//     [
//         8,
//         5,
//         7,
//         3,
//         2,
//         1,
//         4,
//         6,
//         9
//     ],
//     [
//         4,
//         1,
//         3,
//         6,
//         0,
//         0,
//         0,
//         0,
//         7
//     ],
//     [
//         6,
//         8,
//         9,
//         4,
//         0,
//         0,
//         1,
//         2,
//         0
//     ],
//     [
//         3,
//         7,
//         2,
//         1,
//         0,
//         0,
//         9,
//         0,
//         8
//     ],
//     [
//         5,
//         4,
//         1,
//         8,
//         0,
//         2,
//         3,
//         0,
//         0
//     ],
//     [
//         1,
//         9,
//         4,
//         2,
//         8,
//         6,
//         7,
//         5,
//         3
//     ],
//     [
//         7,
//         6,
//         5,
//         9,
//         3,
//         4,
//         8,
//         1,
//         2
//     ],
//     [
//         2,
//         3,
//         8,
//         5,
//         1,
//         7,
//         6,
//         9,
//         4
//     ]
// ]

const values = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function sudokuSolver (sudoku) {
    // Массив, в который мы будем вставлять новые значения
    let res = [...sudoku]

    // Выбор текущего искомого элемента
    let activeRow = 0;
    let activeColumn = 0;

    // Ограничение от текурсии
    let activeIteration = 1;
    let iterations = 100;

    let breakFor = false;

    // В первую очередь, проверяем строку на наличие 0
    // Если находим 0 в строке, запомининаем его расположение в переменные
    for (activeIteration; activeIteration <= iterations; activeIteration++) {
        console.log('iteration number', activeIteration);        
        
        for (const row of res) {
            
            for (const item of row) {
                // let activeColumnTest = row.indexOf(item);
                // let activeRowTest = res.indexOf(row);                

                if (item === 0) {
                    activeColumn = row.indexOf(item);
                    activeRow = res.indexOf(row);

                    // let activeColumn = item;
                    // let activeRow = row;
    
                    let possibleMeanings = checkAvailableInRow(activeRow);
                    possibleMeanings = checkAvailableInColumn(activeColumn, possibleMeanings)
                    possibleMeanings = checkAvailableInSquare(activeRow, activeColumn, possibleMeanings)
        
                    if (possibleMeanings.length === 1) {
                        console.log(possibleMeanings, activeRow, activeColumn);
                        res[activeRow][activeColumn] = possibleMeanings[0];
                    }

                    console.log(activeRow, activeColumn);

                    // проверка отдельного значения
                    if (activeRow === 2 && activeColumn === 6) {
                        console.log('possibleMeanings', possibleMeanings);
                    } 
                }
            }
    
            if (breakFor) {
                break
            }
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

console.log(sudokuSolver(sudoku));
