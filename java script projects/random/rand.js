let colorr=document.getElementById("box");

function colo()
{
    let a=["#D35400","#F1C40F","#229954","#2874A6","#884EA0","#839192","#2E4053","#D6EAF8","#000000"];
    let b= a[Math.floor(Math.random()*a.length)];
    colorr.style.backgroundColor = b;
}