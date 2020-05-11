'use strict';

let run = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value')[0];
let levelValue = document.getElementsByClassName('level-value')[0];
let expensesValue = document.getElementsByClassName('expenses-value')[0];
let daybudgetValue = document.getElementsByClassName('daybudget-value')[0];
let optionalexpensesValue = document.getElementsByClassName(
  'optionalexpenses-value'
)[0];
let incomeValue = document.getElementsByClassName('income-value')[0];
let monthsavingsValue = document.getElementsByClassName(
  'monthsavings-value'
)[0];
let yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0];
let expensesItem = document.getElementsByClassName('expenses-item');
let expensesItemBtn = document.getElementsByTagName('button')[0];
let countBudgetBtn = document.getElementsByTagName('button')[2];
let optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item');
let optionalExpensesBtn = document.getElementsByTagName('button')[1];
let chooseInc = document.querySelector('.choose-income');
let checksaving = document.querySelector('#savings');
let chooseSum = document.querySelector('.choose-sum');
let choosePercent = document.querySelector('.choose-percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money, time;
let appData = {
  budget: money,
  timeData: time,
  expenses: {},
  optionalExpenses: {},
  income: [],
  savings: false,
};

expensesItemBtn.disabled = true;
countBudgetBtn.disabled = true;
optionalExpensesBtn.disabled = true;

run.addEventListener('click', function () {
  time = prompt('Введите дату в формате YYYY-MM-DD');
  money = +prompt('Ваш бюджет на месяц?');

  while (isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }
  appData.budget = money;
  appData.timeData = time;
  budgetValue.textContent = money.toFixed();
  yearValue.value = new Date(Date.parse(time)).getFullYear();
  monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
  dayValue.value = new Date(Date.parse(time)).getDate();

  expensesItemBtn.disabled = false;
  countBudgetBtn.disabled = false;
  optionalExpensesBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function () {
  let sum = 0;

  for (let i = 0; i < expensesItem.length; i++) {
    let a = expensesItem[i].value;
    let b = expensesItem[++i].value;

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
      sum += +b;
    } else {
      console.log('Error');
      i--;
    }
  }
  expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
  for (let i = 0; i < optionalexpensesItem.length; i++) {
    let opt = optionalexpensesItem[i].value;
    appData.optionalExpenses[i] = opt;
    optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' ';
  }
});

countBudgetBtn.addEventListener('click', function () {
  if (appData.budget != undefined) {
    appData.moneyPerDay = (
      (appData.budget - +expensesValue.textContent) /
      30
    ).toFixed();
    daybudgetValue.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      levelValue.textContent = 'Минимальный уровень достатка';
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      levelValue.textContent = 'Средний уровень достатка';
    } else if (appData.moneyPerDay > 2000) {
      levelValue.textContent = 'Высокий уровень достатка';
    } else {
      levelValue.textContent = 'Произошла ошибка';
    }
  } else {
    daybudgetValue.textContent = 'Произошла ошибка';
  }
});

chooseInc.addEventListener('input', function () {
  let items = chooseInc.value;
  appData.income = items.split(',');
  incomeValue.textContent = appData.income;
});

checksaving.addEventListener('click', function () {
  if (appData.savings == true) {
    appData.savings = false;
  } else {
    appData.savings = true;
  }
});

chooseSum.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;
    appData.mounthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;
    monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});

choosePercent.addEventListener('input', function () {
  if (appData.savings == true) {
    let sum = +chooseSum.value;
    let percent = +choosePercent.value;
    appData.mounthIncome = (sum / 100 / 12) * percent;
    appData.yearIncome = (sum / 100) * percent;
    monthsavingsValue.textContent = appData.mounthIncome.toFixed(1);
    yearsavingsValue.textContent = appData.yearIncome.toFixed(1);
  }
});
