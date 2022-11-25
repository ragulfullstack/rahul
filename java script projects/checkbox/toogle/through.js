let p=document.getElementById("divid");
let chid="checkid";
let lblid="lblid";

function demo()
{
    lbl.classList.toggle("line");
}
let inp=document.createElement("input");
inp.type="checkbox";
inp.id=chid;
inp.onclick=function()
{
    demo();
}
p.appendChild(inp);
let lbl=document.createElement("label");
lbl.id=lblid;
lbl.setAttribute("for",chid);
lbl.textContent="RAHUL";
p.appendChild(lbl);