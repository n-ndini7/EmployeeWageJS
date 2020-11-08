//UC7A - calculate total wage using array for each or reduce method
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS =10;
const MAX_HRS_IN_A_MONTH =100;
function getWorkingHours(empCheck){
switch(empCheck){
    case IS_PART_TIME:
        return PART_TIME_HOURS;
    case IS_FULL_TIME:
        return FULL_TIME_HOURS;    
    default:
        return 0;    
} 
}
 function calculateDailyWage(empHrs){
     return empHrs * WAGE_PER_HOUR;
 }
let totalEmpHrs =0;
let totalWorkingDays =0;
let empDailyWageArr = new Array();
let empHrs = 0;
let totalWage = 0;
while(totalEmpHrs<= MAX_HRS_IN_A_MONTH && totalWorkingDays< NUM_OF_WORKING_DAYS){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    empHrs=getWorkingHours(empCheck);
    totalEmpHrs += getWorkingHours(empCheck);
    empDailyWageArr.push(calculateDailyWage(empHrs));
}
function sum(dailyWage){
    totalWage +=dailyWage;
}
 empDailyWageArr.forEach(sum);
 console.log("UC7 - Total days : "+totalWorkingDays+" \nTotal hours : "+totalEmpHrs+" \nEmployee wage: "+totalWage);

 function totalWages(totalWage,dailyWage){
     return totalWage += dailyWage;
 }
 console.log("UC7A - Employee wage with reduce : "+empDailyWageArr.reduce(totalWages,0));

 //7B - show the day alongwith daily wage using array map helper function
 let dailyCntr=0;
 function mapDayWithWage(dailyWage){
     dailyCntr++;
     return dailyCntr+" = "+dailyWage;
 }
  let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
  console.log("UC7B - Daily Wage Map :");
  console.log(mapDayWithWageArr);

//7C - show days when full time wage of 160 were earned using filter function
function fulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
let fullDayWageArr = mapDayWithWageArr.filter(fulltimeWage);
console.log("UC7C - Daily Wage filter when  fulltime  wage  earned :");
console.log(fullDayWageArr); 

//7D - find first occurence when full time wage was earned using function
function findFullTimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7D - first time Fulltime wage was earned on day : "+mapDayWithWageArr.find(findFullTimeWage));

//7E - check if every element of full time wage is truly holding full time wage
function isAllFulltimeWage(dailyWage){
    return dailyWage.includes("160");
}
console.log("UC7E - check all element have full time wage: "+fullDayWageArr.every(isAllFulltimeWage));

//7F - check if there is any part time wage
function ifanyPartTimeWage(dailyWage){
    return dailyWage.includes("80");
}
console.log("UC7F - check if any part time wage: "+mapDayWithWageArr.some(ifanyPartTimeWage));

//7G - find the number of days the employee worked
function totalDaysWorked(numOfDays,dailyWage){
    if(dailyWage>0) return numOfDays+1;
    return numOfDays;
}
console.log("UC7G - Number of days employee worked : "+empDailyWageArr.reduce(totalDaysWorked,0));