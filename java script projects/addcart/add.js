function demo()
{
    let a=document.getElementById("next");
    let b=document.getElementById("list");

    let c=document.createElement("li");
    c.textContent=a.value;
    b.appendChild(c);
}