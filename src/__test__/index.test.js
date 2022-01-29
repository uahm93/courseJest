const indexTests = require('../index')

describe('Probar funcionalidades de randomStrings', () => {

    test('Probar la funcionalidad', () =>{
        expect(typeof (indexTests.randomString())).toBe('string');
    });

    test('Comprobar que no existe una ciudad', () =>{

        expect(indexTests.cityIsExist('Tokyo')).toBeTruthy();

    });

});