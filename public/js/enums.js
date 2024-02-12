"use strict";
// 1. sukurti enmu kuriame galimos reiksme yra baltijos salys
const salisString = `as gyvenu ${"Lietuva" /* BaltStates.lt */}`;
// 2.1 sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata
function calculate(num1, num2, action) {
    // apskaiciavimas
    if (action === 0 /* CalcActions.plus */) {
        const rez = num1 + num2;
        console.log('rez ===', rez);
    }
    else if (action === 1 /* CalcActions.minus */) {
        const rez = num1 - num2;
        console.log('rez ===', rez);
    }
}
calculate(5, 10, 1 /* CalcActions.minus */);
