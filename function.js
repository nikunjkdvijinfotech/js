function say(){
    console.log("hello")
}

 say()

//

   const add=(a,b)=>{
 console.log(a+b)
 //return a+b;
   }

   add(10,20)
   //console.log(add(10+20));


//
   const  name=()=>{
    console.log("hello,world")
   }

   name()

//

   const add=(a,b)=>{
 console.log(a+b)
 //return a+b;
   }

   add(10,20)
   //console.log(add(5+20));



////function  expression

  const  name =function(na){
     console.log("hello", na)

  }

  name("nikunj")

//


const total = (price, quantity, taxRate) => {

    let subToal = price * quantity;
    let tex = subToal * (taxRate / 100);
    let tot=subToal + tex;
    console.log("total pay",tot)
}

total(100,10,5)




  const rectangal=(w,h)=>{
     return w*h;

    }

     let  area= rectangal(10,5)
     console.log(area)



// //  argyments   onliy  work  in function , not arrow function


// function arrowFunc() {         //  i  dont know  arguments    /help AI
//     for (i = 0; i <= arguments.length; i++)
// {
//         console.log(arguments[i]) 
//     }; 
// };
// arrowFunc(10, 20, 30);

// //

// function funcWithDefault(a = 55) {
//   arguments[0] = 99; // updating arguments[0] does not also update a
//   console.log(a);
// }
// funcWithDefault(10); // 10



// function funcWithDefault3(a = 55) {
//   console.log(arguments[0]);
//   console.log(arguments.length);
//   console.log(a)
// }
// funcWithDefault3(); // undefined; 0


// function funcWithDefault2(a = 55) {
//   a = 99; // updating a does not also update arguments[0]
//   console.log(a)
//   console.log(arguments[0]);
// }
// funcWithDefault2(10); // 10






 function  parent(){
    let money=100;

    return  function chaild(){
         console.log(" i have  money",money)
      }

 }
  let d= parent()
   d() 


//

 const  createMultiplie=(multiplier )=>{
        return (num)=>{
            return num*multiplier
        }
 }
   const to=createMultiplie(2)

   console.log(to(10))


   const  num1=(num)=>{
      return num2=(num2)=>{
        return num*num2;
      }
   }

     const to=num1(5)
     console.log(to(5))





function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

const counter1 = outer();
counter1();
counter1();

const counter2 = outer();
counter2();





const users = [
    { id: 1, name: 'Alice', isActive: true },
    { id: 2, name: 'Bob', isActive: false },
    { id: 3, name: 'Charlie', isActive: true }
];

const ac = () => {
    for (i = 0; i < users.length; i++) {
        if(users[i].isActive == false) {
            continue;
        }
        else {
            console.log(users[i])
        }
    }
}

ac()



  const words = ['hello', 'world', 'javascript'];

     const  word=()=>{
         const ans= words.map(word=>word[0].toUpperCase()+ word.slice(1))
     console.log(ans) }

      word()




 // i dont uderstudent


// 1. Function greetUser (accepts name and callback):
function greetUser(name, callback) {
    let formattedName = callback(name);
    return "Hello, " + formattedName + "!";
}

// 2. Callback function (formats name to uppercase):
const toUpper = (str) => {
    return str.toUpperCase();
};

// 3. Call the function:
const greeting = greetUser("Nikunj", toUpper);

console.log(greeting);
