// //  q1

//  const   car={
//     make:"toyota",
//     model:"camry",
//     year:2020

//  }


//  const person={}

//  person.name="patel"
//  person.age=35


//  car.year=2023

//   console.log(person,car)



// Q2


// jyare  arrow function hoy tyare main(car.data) name use karvu jem ama che tem( CAR) and jyare normol fuction hoy tyare this  keyword no use  thaye che


// car.data=()=>{
//     return  "this is a"+" "+car.year +" "+car.make+" "+ car.model+"."
//  }
//  console.log(car.data())



//  const cal={
//     add:(a,b)=>{
//         return a+b;
//     }

//  }
//   console.log(cal.add(10,20))


//  person.grret=()=>{

//          return  "hello may namr is "+ person.name
//  }

//  console.log(person.grret())


// q3


// const book =
// {
//     titel: "habit",
//     author: "sol"
// }




//  book.getdata=()=>{
//   return book.titel +" by " +book.author

//   }

//   console.log(book.getdata())





//   const books =
// {
//     titel: "habit",
                                //             i dnt  know  how  to work this function
//      reguler:function(){
//         return  "book name::" +this.titel
//      },
//         arrow :()=>{
// console.log("Arrow Function: " + this.title);
//         }
// } 
// console.log(books.reguler())
// books.arrow()




// function prodect(name , price) {
//     this.name = name;
//     this.price = price;

//     this.display = () => {
//         console.log("prodect :: " + this.name + "PRICE ::" + this.price)
//     };
// }
//  const prodect1= new prodect("leptop",5000);
//   const prodect2 = new prodect("pc",1000);

// prodect1.display()
// prodect2.display()



// Q4
// // help  AI suggetion


// const person = {
//     name: "nikunj",
//     age: 20
// };

// //  const { name:pName , age:pAge}=person;   // one method

// //  console.log(pName)
// //  console.log(pAge)

// //second method
// const show = () => {
//     const { name: Pname, age: pAge } = person
//     console.log("name", Pname)
//     console.log("age", pAge)
// }
// show();

// // //3 method

// // person.p = () => {
// //     return person.name + " " + person.age
// // }
// // console.log(person.p())

// //  console.log(pName)
// //  console.log(pAge) 



//help AI

//  const car ={
//      make:"toyota",
//      model:"corolla",
//      year:2023,
//      color:"black"
//  }

//   const {make ,...allinfo}=car
//    console.log(make)
//    console.log(allinfo)



   //

// //4.3
    // const user={
    //     name:"john",
    //     address:{
    //         city:"boston",
    //         zip:"02108"
    //     }
    // }

    //  const {address:{city}}=user
    //  console.log(city)
    
    // //   5 and 6   i dont  understand
