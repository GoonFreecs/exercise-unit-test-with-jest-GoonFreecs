
const suma = (a , b) => {
    return a + b
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

 const fromEuroToDollar = function(valuenInEuro){
    let valuenInDollar = valuenInEuro * 1.07;
    return valuenInDollar;
 }

 const fromDollarToYen = function(valuenInDollar) {
    let valuenInYen = valuenInDollar * (156.5/1.07);
    return valuenInYen;
 }

 const fromYenToPound = function(valuenInYen) {
    let valuenInPound = valuenInYen * (0.87/156.5);
    return valuenInPound;
 }



module.exports = {suma,fromEuroToDollar, fromDollarToYen, fromYenToPound};