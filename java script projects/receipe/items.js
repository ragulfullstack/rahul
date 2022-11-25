let a=document.getElementById("top");
let b=document.getElementById("img1");
let c=document.getElementById("topic");
let d=document.getElementById("list");

let food={

    title:"FOOD COURT",
    imgsrc:"https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    products:"INGREDIENTS",
    menu:["briyani","veg meals","dosa","nonvegmeals"]


};

a.textContent=food.title;
b.src=food.imgsrc;
c.textContent=food.products;


let e=food.menu;

for(let ing of e)

{

    let d1=document.createElement("li");

    d1.textContent=ing;
    d.appendChild(d1);
}