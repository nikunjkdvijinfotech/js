 // old


// let para =document.getElementById("para");
// // console.log(para.innerText);
// para.innerText="dom stared.."
// console.log(para.innerHTML);
// console.log(para.innerText);

//  const p=document.getElementById("para2")
// console.log(p.innerHTML) 
// console.log(p.innerText)

//let italic= document.getElementsByClassName("para")


// const italic=document.getElementsByClassName("italic");
// console.log(italic);
// console.log(italic[1].innerText);

// let p=document.getElementsByTagName("p");
// console.log(p[0].innerText)
// console.log(p[1].innerText)




//  // new method


// let p=document.querySelector("p")
// console.log(p.innerText);


// let para=document.querySelector("#para")
// console.log(para.innerText);
//  let para = document.querySelector(".italic");
//  console.log(para.innerText);


// let  p1 = document.querySelectorAll(".italic");
                                                              //forEach
// p1.forEach((item)=>{
// console.log(item.innerText);
// })
// console.log(p1[0].innerText);




// shreyans code

// var a=document.querySelector("p");
// a.style.color="red"
// a.style.backgroundColor="black"

// event

// var p=document.querySelector("p");
// p.addEventListener("click",function(){
//    p.innerHTML="me bhi  badal gaya hu tri ex ki tarah ja ...";
//    p.style.color="red";
//    p.style.backgroundColor="black";

// })

let bulb = document.querySelector("#ye");
let btn = document.querySelector("button")

let flag = 0;
btn.addEventListener("click", function () {
    if (flag == 0) {

        bulb.style.backgroundColor = "yellow";
        flag = 1;
    }

    else {
        bulb.style.backgroundColor = "transparent";
        console.log("off")
    
    }
})


let  p1 = document.querySelectorAll(".italic");
//                                                              forEach
p1.forEach(function(item)=>{
console.log(item.innerText);
})
console.log(p1[0].innerText);






//  //........................................//     html code  //.......................................



// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
//     <link rel="stylesheet" href="index.css">
// </head>
// <body>

// <div id="ye"></div>
// <button>on</button>





//     <!-- <p id="para">this is paragrap tag</p>
    
//     <p> hello patel person</p>
//     <i class="italic">italic text</i>
//     <i class="italic">italic text work</i> -->
//     <script src="script.js"></script>

// </body>
// </html>



//  // ................................................ // CSS //  ..........................................



// htm,body{
//     height: 100%;
//     width: 100%;
// }
// #ye{
//     height: 300px;
//     width: 300px;
//     border-radius: 50%;
//     border: 4px solid #000;
    
// }
// button{
//     padding:10px 30px;
//     font-size:20px;
//     margin: 80px;
// }







