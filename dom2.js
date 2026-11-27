// //......................................................// js //..................................................................
let st = document.querySelector("h5")
let add = document.querySelector("#add")

let n = 0;
add.addEventListener("click", function () {

    if (n == 0) {
        st.innerHTML = "friends"
        st.style.color = "green"
        add.innerHTML = "remove friend"
        n = 1;

    }
    else {
        st.innerHTML = "stranger";
        st.style.color = "red"
        add.innerHTML = "add friend"
        n = 0;
    }
})




// // ....................................................// html //..........................................................................




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>dom......</title>
    <link rel="stylesheet" href="c.css">

</head>

<body>
    <div id="card">
        <img src="https://images.unsplash.com/photo-1724184888115-e76e42f53dcc?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
            alt="">
        <h1>angel priya</h1>
        <h5>stranger</h5>

        <div id="btn-container">
           
            <button id="add">add friend</button>

        </div>
    </div>

    <script src="dom.js"></script>
</body>

</html>




// //.........................................................//  c.css //...............................................................................

              *{ margin: 0;
 padding: 0;
 box-sizing: border-box;
 font-family: 'gilroy';
}

html,body{
    height: 100%;
    width: 100%;

}
body{
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: cornflowerblue;
}
#card{
    height: 400px;
    width: 300px;
    background-color: white;
    border: 100px;
    border-radius: 10px;
    padding: 20px;

}
#card img
{
     height: 50%;
     width: 100%;
     object-fit: cover;
     object-position: center;
     border-radius: 10px;
}

#card h1{
    font-size: 30px;
    margin: 10px;
    margin-left: 22%;

}
#card h5{
    font-size: 25px;
    color: red;
    margin: 20px;
    margin-left:30%;

}
 #card button{
    background-color: cadetblue;
    color: #fff;
    font-weight: 700;
    padding: 12px 20px;
    border-radius: 5px;
   border:none;
   margin-left: 20px;
cursor: pointer; 
}
 #card #remove{
 background:#dadada;
 color: #111;
 }
