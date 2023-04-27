const calculateArrayObject = require('./aula6-ex3');

const operationInputArray = [{
        number1: 2,
        number2: 5,
        operation: '+'
    },
    {
        number1: 2,
        number2: 5,
        operation: '-'
    },
    {
        number1: 2,
        number2: 5,
        operation: '*'
    },
    {
        number1: 2,
        number2: 5,
        operation: '/'
    },
    {
        number1: 2,
        number2: 0,
        operation: '/'
    },
    {

    },
    {
        number1: 2,

    },
    {
        number1: 2,
        number2: 5,

    },
    {
        number1: '2',
        number2: 5,
        operation: '+'
    },
];


const expectedResultArray = [7, -3, 10, 0.4, NaN, NaN, NaN, NaN, 7];

test('Test Operations', () => {
    const arrayResult = calculateArrayObject(operationInputArray);
    expect(arrayResult.length).toBe(9);
    arrayResult.forEach((element, index) => {
        expect(element.result).toBe(expectedResultArray[index]);
    });
});