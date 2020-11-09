//UC13 - ability to check name starts with capital and has atleast 3 letters
class EmployeePayrollData{

    constructor (id,name,salary,gender,startDate){
        this.id = id;
        this.name = name;
        this.salary= salary;
        this.gender=gender;
        this.startDate=startDate;
    }
    get name(){
        return this._name;
    }
    set name(name){
        let nameRegex =RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameRegex.test(name))
        this._name = name;
        else throw "Name is Incorrect!!";
    }
    toString(){
        const options = { year: 'numeric', month: 'long' , day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return "ID = "+this.id+" ,Name = "+this.name+", Salary = "+this.salary+" ,Gender = "+this.gender+" ,Start date = "+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
try{
employeePayrollData.name="jeff";
console.log(employeePayrollData.toString());
}catch(e){
    console.error(e);
}
let employeePayrollData2 = new EmployeePayrollData(3,"Terrisa",9000,"F",new Date());
console.log(employeePayrollData2.toString());