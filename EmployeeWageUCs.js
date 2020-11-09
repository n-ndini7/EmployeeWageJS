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
let empDailyHoursAndWage = new Array();
while((totalEmpHrs<=MAX_HRS_IN_MONTH)&&(totalWorkingDays<NUM_OF_WORKING_DAYS)){
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random()*10)%3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    empDailyHoursAndWage.push({
            dayNum:totalWorkingDays,
            dailyHours:empHrs,
            dailyWage:calcDailyWage(empHrs),
            toString(){
                return "\nDay : "+this.dayNum+" => Working hours is : "+this.dailyHours+"hrs And Wage earned : "+this.dailyWage+" $ ";
            },

        });

 }
 //UC11A - calculate total wages and total hours worked
 let totalWages = empDailyHoursAndWage.filter(dailyHsAndWage => dailyHsAndWage.dailyWage > 0).reduce((totalWage , dailyHsAndWage ) => totalWage +=dailyHsAndWage.dailyWage,0);
 let totalHours = empDailyHoursAndWage.filter(dailyHsAndWage => dailyHsAndWage.dailyWage > 0).reduce((totalHours , dailyHsAndWage ) => totalHours +=dailyHsAndWage.dailyHours,0);
 console.log("\nUC 11A - Total Hours : "+totalHours+" hrs Total Wages :"+totalWages+" $ ");

 //UC11B - show the full working days using for each
 console.log("UC 11B - logging full work days");
 empDailyHoursAndWage.filter(dailyHsAndWage => dailyHsAndWage.dailyHours == 8).forEach(dailyHsAndWage => console.log(dailyHsAndWage.toString())); 