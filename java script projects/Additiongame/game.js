let n1 = document.getElementById("b1");
let n2 = document.getElementById("b2");
let inp=document.getElementById("inp1");
let p=document.getElementById("tex");

var frn=Math.random()*100;
var srn=Math.random()*100;
n1.textContent = Math.ceil(frn);
n2.textContent = Math.ceil(srn);
imp.textContent="";
inp.value="";

function check()
{
    let a = n1.textContent;
    let b = n2.textContent;

    a=parseInt(a);
    b=parseInt(b);

    let sum = a+b;
    input = inp.value;  

    if(sum == input)
    {
        p.textContent="Intelligent ";
    }
    else{
        p.textContent="Better luck next time";
    }
}

function restart()
{
   
    let frn=Math.random()*100;
    let srn=Math.random()*100;
    n1.textContent = Math.ceil(frn);
    n2.textContent = Math.ceil(srn);
    inp.value="";
}
