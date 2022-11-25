let profileodj={

    imgsrc:"https://www.kindpng.com/picc/m/78-785975_icon-profile-bio-avatar-person-symbol-chat-icon.png",
    name:"Rahul.R",
    age:21

};


let img=document.getElementById("img1");
let b1=document.getElementById("a1");
let b2=document.getElementById("a2");


img.src=profileodj.imgsrc;
b1.textContent=profileodj.name;
b1.style.color="red";
b1.style.padding="20px";
img.style.height="300px";
b2.textContent=("Age:"+profileodj.age);
b2.style.color="blue";