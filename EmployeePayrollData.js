class EmployeePayrollData{

    constructor (id,name,salary){
        this.id = id;
        this.name = name;
        this.salary= salary;
    }
    get name(){
        return this._name;
    }
    set name(name){
        console.log("Setting is : "+name);
        this._name=name;
    }
    toString(){
        return "ID = "+this.id+", Name = "+this.name+", Salary = "+this.salary+" $ ";
    }
}

let employeePayrollData = new EmployeePayrollData(1,"Mark",3000);
console.log(employeePayrollData.toString());
employeePayrollData.id = 2;
employeePayrollData.name="Jeff";
console.log(employeePayrollData.toString());
