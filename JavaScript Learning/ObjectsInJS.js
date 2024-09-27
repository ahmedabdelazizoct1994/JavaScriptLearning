// let person={
//     firstName:"Ahmed",
//     lastName:"ALi",
//     age:29
// };

// console.log(person["firstName"]);
// person["Weight"]=93;
// console.log(person.Weight);

// person["firstName"]="mohamed";
// console.log(person["firstName"]);

// //to remove
// delete person["age"];
// console.log(person["age"]);


//to read all properties names of the object
// for(let x in person){
//     // console.log(x);// to print names of the propeties 
//     // console.log(person[x]); //to print values of the properties
//     console.log(x+"  "+person[x]); // to print properties names along side its values
// }


//to create methods as a properties in object

let employee={
    name:"John",
    age:40,
    basical:10000,
    bouns:function(){
        return((this.basical*10)/100);

    }
};
// for(let x in employee){
//     console.log(x+"  "+employee[x]);
// }

console.log(employee.bouns());