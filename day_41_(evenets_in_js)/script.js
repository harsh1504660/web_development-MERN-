let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = 
    "<b>Yass you were clicked </b> Enjoy your clciked"

})

button.addEventListener("contextmenu",()=>{
   alert("right clcick please")

})

documnent.addEventListener("keydown",(e)=>{
    alert("right clcick please")
 
 })