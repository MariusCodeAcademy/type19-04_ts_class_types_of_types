// nusitaikyti i elementus
const els = {
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    select: document.getElementById('action'),
};
const formEl = document.forms[0];
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const selectEl = document.getElementById('action');
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
export {};
