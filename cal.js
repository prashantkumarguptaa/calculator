console.log("jinda hai")






function sum()
{
    var f1 = Number(document.getElementById("first").value)
    var f2 = Number(document.getElementById("second").value)
    let z = f1 + f2
         document.getElementById("res").value=z
}
function sub()
{
    var f1 = Number(document.getElementById("first").value)
    var f2 = Number(document.getElementById("second").value)
    let z = f1 - f2
         document.getElementById("res").value=z
}
function mul()
{   
    var f1 = Number(document.getElementById("first").value)
    var f2 = Number(document.getElementById("second").value)
    let z = f1*f2
         document.getElementById("res").value=z
}
function div()
{
    var f1 = Number(document.getElementById("first").value)
    var f2 = Number(document.getElementById("second").value)
    let z = f1/f2
         document.getElementById("res").value=z
}
function clr()
{
    var f1 = document.getElementById("first").value=null
    var f2 = document.getElementById("second").value=null
    
         document.getElementById("res").value=null
}


