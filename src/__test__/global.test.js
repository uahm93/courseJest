const { beforeEach } = require("jest-circus");

const text = "Hola Mundo";
const fruits = ['manzana', 'melon', 'banana'];

test('Debe contener un text', () => {
    expect(text).toMatch(/Mundo/);
});

test('Tenemos una banana', () =>{
    expect(fruits).toContain('banana');
});

test('Mayor que', () =>{
    expect(10).toBeGreaterThan(9);
}),

test('Verdadero', () =>{
    expect(true).toBeTruthy();
});

const reverseString = (str, callback) => {
    callback(str.split("").reverse().join(""))
};

test('Probar callback', () => {
    reverseString('Hola', (str) => {
        expect(str).toBe('aloH');
    })
})

// test('Probar promesa', () => {
//     return reverseString2('Hola')
//     .then(string => {
//         expect(string).toBe('aloH')
//     });
// });

// test('Probar async await', async () => {

//     const string = await reverseString2('Hola')
//     expect(string).toBe('aloH')
    
// });

    // afterEach(() => console.log('Despues de cada prueba'));
    // afterAll(() => console.log('Despues de todas las pruebas'));

    // beforeEach(() => console.log('Antes de cada prueba'));
    // beforeAll(() => console.log('Antes de todas las pruebas'));

