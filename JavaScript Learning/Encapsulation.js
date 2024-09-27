class Students{
constructor(){
    let name,marks;
}
getName(){
    return this.name;

}
setName(name){
    this.name=name;
}
getMarks(){
    return this.marks;
}
setMarks(marks){
    this.marks=marks;
}

}
let stu=new Students();
stu.setName("ahmed");
stu.setMarks(100);
console.log(stu.getName(),stu.getMarks());
