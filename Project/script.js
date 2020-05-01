'use strict';

let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  time = prompt('Введите дату в формате чч-мм-гггг');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
}
start();

let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt('Введите обязательную статью расходов в этом месяце');
      let b = prompt('Во сколько обойдется?');

      if (
        typeof a === 'string' &&
        typeof a != null &&
        typeof b != null &&
        a != '' &&
        b != '' &&
        a.length < 50
      ) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        console.log('Error');
        i--;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
      console.log('Высокий уровень достатка');
    } else {
      console.log('Произошла ошибка');
    }
  },
  checkSavings: function () {
    if (appData.savings == true) {
      let save = +prompt('Какова сумма накоплений'),
        percent = +prompt('Под какой процент?');

      appData.mounthIncome = (save / 100 / 12) * percent;
      alert('Доход в месяц с вашего депозита: ' + appData.mounthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let q = 1; q < 4; q++) {
      let a = prompt('Статья необязательных расходов?');
      appData.optionalExpenses[q] = a;
    }
  },
  chooseIncome: function () {
    let items = prompt(
      'Что принесёт дополнительный доход? (перечислите через запятую)'
    );
    if (typeof items === 'string' && typeof items != null && items != '') {
      appData.income = items.split(',');
      appData.income.push(prompt('Может что-то ещё?'));
      appData.income.sort();
    } else {
      console.log('Неверные данные');
    }
    appData.income.forEach(function (item, i) {
      alert('Способы доп зароботка: ' + (i + 1) + '.' + item);
    });
  },
};

for (let key in appData) {
  console.log(
    'Наша программа включает в себя данные: ' + key + ': ' + appData[key]
  );
}

/////////////////////////////////////////////////////////////////////////////
// let i = 0;
// while (i < 2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");
//     i++;
//  if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
// && a != '' && b != '' && a.length < 50 ) {
//     console.log("done");
//     appData.expenses[a] = b;
// } else {
//     console.log("Error");
//     i--;
// }
// i++;
// }

////////////////////////////////////////////////////////////////////////////

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//     let b = prompt("Во сколько обойдется?");

//  if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null
// && a != '' && b != '' && a.length < 50 ) {
//     console.log("done");
//     appData.expenses[a] = b;

// }   else {
//     console.log("Error");
//     i--;
//     }
// i++;
// }
// while(i<2);

////////////////////////////////////////////////////////////////////////////
