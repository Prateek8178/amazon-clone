// for cart
const boxes = document.querySelectorAll(".box");
const cartCount= document.getElementById("cart-count");
 let count=0;
 boxes.forEach(box =>{
    box.addEventListener("click", () => {
        if(!box.classList.contains("added")){
    count++;
    cartCount.innerText = count;
    box.style.border = "2px solid green";
    box.classList.add("added");   // ⭐ important
}

    });
 });

//for search
 const searchBtn = document.querySelector(".Search-icon");
 const searchInput = document.querySelector(".search-input");

 searchBtn.addEventListener("click", searchProducts);
 searchInput.addEventListener("keypress", function(e){
    if(e.key==="Enter"){
        searchProducts();
    }
 });

 function searchProducts(){
    let value = searchInput.value.toLowerCase().trim();
    if(value===""){
        alert("Please enter something to search");
        return;
    }
    boxes.forEach(box => {
        let title =box.querySelector("h2").innerText.toLowerCase();
        if(title.includes(value)){
            box.style.display="block";
        }
        else{
            box.style.display="none";
        }
    });
 }

 searchInput.addEventListener("input",function(){
    if(this.value===""){
        boxes.forEach(box=>{
            box.style.display="";
        })
    }
 });
//for reset
 const backTop=document.querySelector(".foot-pannel1");
 backTop.addEventListener("click",function(){
    window.scrollTo({
        top:0,
        behavior: "smooth"
    });
 });
 // sigoup login

 const accountBtn = document.getElementById("accountBtn");
 accountBtn.addEventListener("click",function(){
    window.location.href = "account.html";
 });