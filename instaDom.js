// //........................................................// js //..............................................................................
let con=document.querySelector("#contenor");
let love=document.querySelector("i");

con.addEventListener("dblclick",function(){
love.style.transform="translate(-50%,-50%) scale(1)";
setTimeout(() => {
  love.style.transform= "translate(-50%,-50%) scale(0)"
}, 2000);
})

// //..........................................................// html //........................................................

  
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>insta</title>
    <link rel="stylesheet" href="in.css">
    <link href="https://cdn.jsdelivr.net/npm/remixicon@4.9.0/fonts/remixicon.css" rel="stylesheet" />
</head>

<body>
    <div id="contenor">
        <img src="https://plus.unsplash.com/premium_photo-1794344990756-f1b0da68178e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="">
            <i class="ri-heart-3-fill"></i>
    </div>

    <script src="insta.js"></script>
</body>

</html>
              

// //.....................................................// in.css //.............................................................................


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'gilroy';
}

html,
body {
    height: 100%;
    width: 100%;

}

body {
    background-color: rgb(4, 185, 185);
    align-items: center;
    display: flex;
    justify-content: center
}

#contenor {
    height: 300px;
    width: 250px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}


#contenor img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}


#contenor i {
    color: #fff;
    font-size:75px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.8;
    transition:all ease 0.5s;
}
