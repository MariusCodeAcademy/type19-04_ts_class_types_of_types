// nusitaikyti i elementus
const els = {
    num1: document.getElementById('num1'),
    num2: document.getElementById('num2'),
    select: document.getElementById('action'),
};
const formEl = document.forms[0];
const resulP = document.getElementById('result-p');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const selectEl = document.getElementById('action');
// formai uzdeti event listeneri
formEl === null || formEl === void 0 ? void 0 : formEl.addEventListener('submit', makeCalucalion);
function makeCalucalion(event) {
    event.preventDefault();
    if (!num1El || !num2El || !selectEl)
        return;
    const val1 = num1El.valueAsNumber;
    const val2 = num2El.valueAsNumber;
    const selElVal = selectEl.value;
    console.log(val1, selElVal, val2);
    const rez = calculate(val1, val2, selElVal);
    console.log('rez ===', rez);
    if (!resulP)
        return console.warn('nera p el');
    // irasyti i resulP rez reiksme
    resulP.textContent = rez.toString();
    // addToHistory(rez);
}
// 2.1 sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata
function calculate(num1, num2, action) {
    // apskaiciavimas
    let rez;
    switch (action) {
        case "+" /* CalcActions.plus */:
            rez = num1 + num2;
            break;
        case "-" /* CalcActions.minus */:
            rez = num1 - num2;
            break;
        case "/" /* CalcActions.divide */:
            rez = num1 / num2;
            break;
        case "*" /* CalcActions.multiply */:
            rez = num1 * num2;
            break;
        default:
            console.warn('No action found');
            rez = 0;
    }
    return rez;
}
export {};
