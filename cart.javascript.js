let cart=document.querySelectorAll(".btn-primary")
let products=[
    {
        tag:'first',
        name:'headphos',
        price:2000,
        qty:0

    }
]

for (i=0,i<cart.length,i++)
{
 cart(i).addEventListner("click",()=>{
 
    alert("Added to Cart");
    function(productsofi);
 });
}
function cartnumbers(products){
let productsnumber =localStorage.getItem("cartnumbers");
productsnumber=parseInt("productsnumber");
if(productsnumber){localStorage.setItem("cartnumber","productnumbers"+1);
document.querySelector(".nav-link sup").textContent=productsnumber+1
}
else {
    localStorage.setItem("cartnumbers",1)
    document.querySelector(".nav-link sup").textContent=1
}
setItems(products);

}
function setItems(products);
let cartitems=localStorage.getItem("productsqty");
cartitems=JSON.parse("cartitems");
if{
    cartitems!=null;
}

if
{
    cartitems
}



