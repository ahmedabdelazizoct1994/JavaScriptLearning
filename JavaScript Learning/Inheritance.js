class A{
    display(){
        console.log("iam class a");

    }


}
class B extends A{
    show(){
        console.log("i am class b");

    }
    

}
 x=new B;
    x.display();
    x.show();