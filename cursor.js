// //..................................................................// cur.js /...........................................
let cursor=document.querySelector(".cursor");
 let  main=document.querySelector("#main");

main.addEventListener("mousemove",function(dest){
cursor.style.left=dest.x+"px"
cursor.style.top=dest.y+"px"
// console.log(dest);

})




// // ..............................................................// cur.html //...........................................

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cu.css">
</head>
<body>
    <div id="main">
        <div class="cursor"></div>
<h1>shreyash  patel...</h1>
    </div>

    <script src="curs.js"></script>
</body>
</html>


// //.........................................................................// cu.css //....................................................


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'gilroy';
    color: white;
}

html,
body {
    height: 100%;
    width: 100%;

}


#main{
    height:100%;
    width: 100%;
    background-color:rgb(0, 0, 0);
    align-items: center;
    justify-items: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cursor{
    background-color: white;
    width: 20px;
    height: 20px;
    mix-blend-mode: difference;
    position:absolute;
    border-radius: 50%;
}
h1{
    font-size: 9vw;
    font-weight: 900;
}
