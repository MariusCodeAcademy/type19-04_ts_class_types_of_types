// 1. sukurti enmu kuriame galimos reiksme yra baltijos salys

const enum BaltStates {
  lt = 'Lietuva',
  lv = 'Latvija',
  est = 'Estija',
}

const salisString: string = `as gyvenu ${BaltStates.lt}`;
// console.log('salisString ===', salisString);
// sukutri kintamaji kuriame bus stringas ir jo reiksme

// as gyvenu [baltijos salis is enum]

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
const m1 = calculate(5, 10, CalcActions.multiply);
console.log('m1 ===', m1);
