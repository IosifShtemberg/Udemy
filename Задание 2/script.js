'use strict';

let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате чч-мм-гггг");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false   
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

appData. moneyPerDay = appData.budget / 30;

alert("ежедневный бюджет: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000){
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
