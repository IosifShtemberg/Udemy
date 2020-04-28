'use strict';

let money , time;

function start() {
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате чч-мм-гггг");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true   
 };

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

function chooseExpenses() {
    for (let i = 0; i < 2; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце");
        let b = prompt("Во сколько обойдется?");
    
        if ( (typeof(a))=== 'string' && (typeof(a)) !=null && (typeof(b)) !=null 
        && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            console.log("Error");
            i--;
        } 
    }
}
chooseExpenses();

function detectDayBudget(){
    appData. moneyPerDay = (appData.budget / 30).toFixed();
    alert("ежедневный бюджет: " + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel() {

    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");

}    else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
        console.log("Средний уровень достатка");

}    else if (appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");

}    else {
        console.log("Произошла ошибка");
}
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений"),
            percent = +prompt("Под какой процент?");

        appData.mounthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {                             

    for (let q = 1; q < 4; q++) {   

        let a = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[q] = a;
    }

}
chooseOptExpenses();