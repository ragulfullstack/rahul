let p=document.getElementById("divid");

let chid="checkid";

let lbid="lblid";

function demo()
{
  lbid.classList.toogle("line");
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
  lbl.id=lbid;
  lbl.setAttribute("for",chid);

  lbl.textContent="Ragul";
  p.appendChild(lbl);