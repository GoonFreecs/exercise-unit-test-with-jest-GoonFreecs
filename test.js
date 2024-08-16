const { suma } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    let total = suma(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be a yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yenes = fromDollarToYen(1);
    const expected = 1 * (156.5/1.07);
    expect(fromDollarToYen(1)).toBe(146.26168224299064); 
})

test("One yen should be b Pound", function() {
    const { fromYenToPound } = require('./app.js');
    const librasEsterlinas = fromYenToPound(1);
    const expected = 1 * (0.87/156.5);
    expect(fromYenToPound(1)).toBe(0.005559105431309904); 
})
