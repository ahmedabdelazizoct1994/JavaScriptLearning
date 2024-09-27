class Test{

    static a=10;
    b=20;

    static m1(){
        console.log("i am static method");

    }
    m2(){
        console.log("I am not static method");
    }

}
// console.log(Test.a);
// Test.m1();
console.log(Test.b);
Test.m2();
