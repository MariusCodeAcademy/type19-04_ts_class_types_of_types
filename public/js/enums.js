"use strict";
// 1. sukurti enmu kuriame galimos reiksme yra baltijos salys
const salisString = `as gyvenu ${"Lietuva" /* BaltStates.lt */}`;
// 2.1 sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata
function calculate(num1, num2, action) {
    // apskaiciavimas
    let rez;
    switch (action) {
        case 0 /* CalcActions.plus */:
            rez = num1 + num2;
            break;
        case 1 /* CalcActions.minus */:
            rez = num1 - num2;
            break;
        case 2 /* CalcActions.divide */:
            rez = num1 / num2;
            break;
        case 3 /* CalcActions.multiply */:
            rez = num1 * num2;
            break;
        default:
            console.warn('No action found');
            rez = 0;
    }
    return rez;
}
const m1 = calculate(5, 10, 3 /* CalcActions.multiply */);
console.log('m1 ===', m1);
