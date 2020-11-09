//UC14 - check employee id and salary are non zero positive number and gender is M or F and date is not a future date
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
        else throw "Name is Incorrect!! "+name;
    }
    get id(){
        return this._id;
    }
    set id(id){
        let idRegex = RegExp('^[1-9][0-9]{0,}$');
        if(idRegex.test(id))
        this._id=id;
        else throw "Id is Incorrect!! "+id;
    }
    get salary()
    {
        return this._salary;
    }
    set salary(salary){
        let salRegex = RegExp("^[1-9][0-9]{0,}$");
        if(salRegex.test(salary))
        this._salary = salary;
        else throw "Salary is Invalid!! "+salary;
    }
    get gender(){
        return this._gender;
    }
    set gender(gender){
        let genderRegex = RegExp('^[MF]$');
        if(genderRegex.test(gender))
        this._gender = gender;
        else throw "Gender is Invalid!! "+gender;
    }
    get startDate(){
        return this._startDate;
    }
    set startDate(startDate){
        if(startDate.getMonth()<=(new Date()).getMonth()
        &&startDate.getDay()<=(new Date()).getDay()
        &&startDate.getFullYear()<=(new Date()).getFullYear())
         this._startDate = startDate;
     else throw "Date is Incorrect!! "+startDate;   
    }
    toString(){
        const options = { year: 'numeric', month: 'long' , day: 'numeric'};
        const empDate = this.startDate === undefined ? "undefined":this.startDate.toLocaleDateString("en-US",options);
        return "ID = "+this.id+" ,Name = "+this.name+", Salary = "+this.salary+" ,Gender = "+this.gender+" ,Start date = "+empDate;
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",3000,"M",new Date());
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
let employeePayrollData2 = new EmployeePayrollData(3,"Terrisa",9000,"F",new Date());
console.log(employeePayrollData2.toString());
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(0,"Ritu",8000,"F",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(9,"ritu",8000,"F",new Date());
    console.log(employeePayrollData.toString());
    }catch(e){
        console.error(e);
    }
    
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(9,"Ritu",-8000,"F",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(9,"Ritu",8000,"W",new Date());
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.error(e);
}
try{
    let newEmployeePayrollData3 = new EmployeePayrollData(9,"Ritu",8000,"F",new Date('2021-04-11T10:20:30Z'));
    console.log(newEmployeePayrollData3.toString());
} catch(e){
    console.log(e);
}