class Students{
    constructor(sid,sname){
        this.sid=sid;
        this.sname=sname;

    }
    
 dislplay()
{
    console.log(this.sid,this.sname);

}
}
let stu=new Students(100,"ahmed");
stu.dislplay();