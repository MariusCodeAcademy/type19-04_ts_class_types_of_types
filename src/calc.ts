// nusitaikyti i elementus

const num1El = document.getElementById('num1') as HTMLInputElement | null;
const num2El = <HTMLInputElement | null>document.getElementById('num1');
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
