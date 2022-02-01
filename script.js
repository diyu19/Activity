const date = new Date();
const year = date.getFullYear();
const year1 = year - 1;
const year2 = year;
const res = [year1, year2].join('-');
document.getElementById("date1").innerHTML = res;



const year3 = year;
const year4 = year + 1;
const res2 = [year3, year4].join('-');
document.getElementById("date2").innerHTML = res2;

const year5 = year + 1;
const year6 = year + 2;
const res3 = [year5, year6].join('-');
document.getElementById("date3").innerHTML = res3;

const year7 = year + 2;
const year8 = year + 3;
const res4 = [year7, year8].join('-');
document.getElementById("date4").innerHTML = res4;
const year9 = year + 3;
const year10 = year + 4;
const res5 = [year9, year10].join('-');
document.getElementById("date5").innerHTML = res5;