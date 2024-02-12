interface ElementsIf {
  num1: HTMLInputElement | null;
  num2: HTMLInputElement | null;
  select: HTMLSelectElement | null;
}
// nusitaikyti i elementus

const els: ElementsIf = {
  num1: document.getElementById('num1') as HTMLInputElement | null,
  num2: document.getElementById('num2') as HTMLInputElement | null,
  select: document.getElementById('action') as HTMLSelectElement | null,
};

const formEl = document.forms[0] as HTMLFormElement | null;
const resulP = document.getElementById('result-p') as HTMLParagraphElement | null;
const num1El = document.getElementById('num1') as HTMLInputElement | null;
const num2El = <HTMLInputElement | null>document.getElementById('num2');
const selectEl = document.getElementById('action') as HTMLSelectElement | null;

// formai uzdeti event listeneri

formEl?.addEventListener('submit', makeCalucalion);

function makeCalucalion(event: SubmitEvent): void {
  event.preventDefault();
  if (!num1El || !num2El || !selectEl) return;
  const val1: number = num1El.valueAsNumber;
  const val2: number = num2El.valueAsNumber;
  const selElVal = selectEl.value as CalcActions;

  console.log(val1, selElVal, val2);
  const rez = calculate(val1, val2, selElVal);
  console.log('rez ===', rez);

  if (!resulP) return console.warn('nera p el');
  // irasyti i resulP rez reiksme
  resulP.textContent = rez.toString();

  // addToHistory(rez);
}

// function addToHistory(value) {
// sukurti nauja li el,
// prides i ji reiksme value
// patalpins ta el i ul
// }

// pateikiant forma paimti skaitiniu inputu reiksmes
// paimti selecto reiksme
//  atlikti veiksma  su calculate()

// 2. sukurti enum CalcActions kuris gali but plus, minus, divide, multiply

const enum CalcActions {
  plus = '+',
  minus = '-',
  divide = '/',
  multiply = '*',
}
// 2.1 sukurti skaiciuotuva kuris priima 2 skaicius ir veiksma ir grazina rezultata

function calculate(num1: number, num2: number, action: CalcActions): number {
  // apskaiciavimas
  let rez: number;
  switch (action) {
    case CalcActions.plus:
      rez = num1 + num2;

      break;
    case CalcActions.minus:
      rez = num1 - num2;

      break;
    case CalcActions.divide:
      rez = num1 / num2;

      break;
    case CalcActions.multiply:
      rez = num1 * num2;

      break;
    default:
      console.warn('No action found');
      rez = 0;
  }

  return rez;
}

export {};
