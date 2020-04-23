'use strict';

let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате чч-мм-гггг");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: "false"   
 };

let question1 = prompt("Введите обязательную статью расходов в этом месяце");
let question2 = prompt("Во сколько обойдется?");
let question3 = prompt("Введите обязательную статью расходов в этом месяце");
let question4 = prompt("Во сколько обойдется?");

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;
alert("Бюджет на 1 день" + appData.budget / 30);