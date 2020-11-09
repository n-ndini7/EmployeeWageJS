//UC6 Store daily wage in array
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

function getWorkingHours(empCheck) {
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

function calcDailyWage(empHrs){
    return empHrs*WAGE_PER_HOUR;
}

let totalEmpHrs = 0;
let totalWorkingDays = 0;
let dailyWages = 0;
let empDailyWageArray = new Array();
let empDailyWageMap = new Map();
let empDailyHrsMap = new Map();
while((totalEmpHrs<=MAX_HRS_IN_MONTH)&&(totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArray.push(calcDailyWage(empHrs));
    empDailyHrsMap.set(totalWorkingDays,empHrs);
    empDailyWageMap.set(totalWorkingDays,calcDailyWage(empHrs));
}

let empWage = calcDailyWage(totalEmpHrs);
console.log("Daily Wage Array: "+empDailyWageArray);
console.log("UC6: Total working days: "+totalWorkingDays);
console.log("Total emp hours = "+totalEmpHrs+" Total employee wage = "+empWage);

//Array Helper Function
//UC 7A Calculate total wage using forEach or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArray.forEach(sum);
console.log("UC7A - Total Days: "+totalWorkingDays+" Total hrs: "+totalEmpHrs+" Emp Wage:"+totalEmpWage);

function totalWages(totalWage,dailyWage){
    return totalWage + dailyWage;
}
console.log("UC7A - Emp Wage with reduce: "+empDailyWageArray.reduce(totalWages,0)); 

//UC 7B - Show Day along with wage 
let dailyCounter =0;
function mapDayWithWage(dailyWage){
    dailyCounter++;
    return dailyCounter +" = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArray.map(mapDayWithWage);
console.log("UC 7B - Daily Wage Map:");
console.log(mapDayWithWageArr);

//UC 7C - Show days when full time wage were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC 7C - Days With Full Time Wage Earned Using Filter:");
console.log(fullDayWageArr);

//UC7D - Find First Occurence When Full Time Wage was earned
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

console.log("UC 7D - First time Full Time Wage earned on day: "+mapDayWithWageArr.find(findFullTimeWage));

//UC7E - Check if every element of Full Time Wage is truely holding full time wage
function isAllFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

//UC9A - calculate total wage and total hours worked
const findTotal = (totalVal,dailyVal) => {
    return totalVal+=dailyVal;
}
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArray.filter(dailyWage => dailyWage > 0 ).reduce(findTotal,0);
console.log("UC9A: Employee wage with Arrow."+" \nTotal Hours : "+totalHours+" \nTotal wage : "+totalSalary);

//UC9B - show the full working days , part working days and no working days
let nonWokingDays = new Array();
let partWorkingdays = new Array();
let fullWorkingDays = new Array()
empDailyHrsMap.forEach(( value , key ) => {
    if(value==8) fullWorkingDays.push(key);
    else if(value==4) partWorkingdays.push(key);
    else nonWokingDays.push(key);
});
console.log("UC9B ==> \nFull working days :" +fullWorkingDays);
console.log("Part working days :" +partWorkingdays);
console.log("Non working days :" +nonWokingDays);