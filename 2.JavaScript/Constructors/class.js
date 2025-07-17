class Employee{
   constructor(name,age, id,salary,isAdmin ){
        this.employeeName = name;
        this.employeeAge = age;
        this.employeeId = id;
        this.employeeSalary = salary;
    
        this.printName = function() {
            console.log(this.employeeName);
        };
    
        this.isAdmin = isAdmin;

        //Method to update employee's admin status
        this.makeUserAdmin = function() {
            this.isAdmin = true;
        };
    }
    
}

//create Employee1 object using the Employee constructor.
const employeee1 = new Employee("Tanya",20, 3465656, 100000, false);
console.log(employeee1);