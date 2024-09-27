class Employee{
     constructor(id,name){
         this.id=id;
         this.name=name;
     }

}
    Employee.prototype.salary=100000;
    Employee.prototype.display=function(){
        console.log(this.name,this.id,this.salary);
    }

    employeeObject=new Employee(1,"ahmed");
    employeeObject.display();
    