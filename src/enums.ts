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

function calculate(num1: number, num2: number, action: CalcActions) {
  // apskaiciavimas
  if (action === CalcActions.plus) {
    const rez = num1 + num2;
    console.log('rez ===', rez);
  } else if (action === CalcActions.minus) {
    const rez = num1 - num2;
    console.log('rez ===', rez);
  }
}
calculate(5, 10, CalcActions.minus);
