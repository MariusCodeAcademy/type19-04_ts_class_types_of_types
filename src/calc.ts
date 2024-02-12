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
const num1El = document.getElementById('num1') as HTMLInputElement | null;
const num2El = <HTMLInputElement | null>document.getElementById('num2');
const selectEl = document.getElementById('action') as HTMLSelectElement | null;

// formai uzdeti event listeneri

// pateikiant forma paimti skaitiniu inputu reiksmes
// paimti selecto reiksme
//  atlikti veiksma  su calculate()

// 2. sukurti enum CalcActions kuris gali but plus, minus, divide, multiply

const enum CalcActions {
  plus,
  minus,
  divide,
  multiply,
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
