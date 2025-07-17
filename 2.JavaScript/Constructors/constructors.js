//console.log('hey');

function Employee(name,age, id,salary,isAdmin ){
    this.employeeName = name;
    this.employeeAge = age;
    this.employeeId = id;
    this.employeeSalary = salary;

    this.printName = function() {
        console.log(this.employeeName);
    };

    this.isAdmin = isAdmin;
    Employee.prototype.makeUserAdmin = function() {
        this.isAdmin = true;
    };
}

let Employee1 = new Employee('John', 25, 6546767, 125000,true);
console.log(Employee1);

let Employee2 = new Employee('Julie',24, 6546777, 125000,false);
console.log(Employee2);

Employee1.printName();
Employee2.printName();



console.log(Employee1);
console.log(Employee2);