let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(){
 cart.push({name:"Lipstick", price:1200});
 localStorage.setItem("cart", JSON.stringify(cart));
 alert("Added to cart");
}

function showCart(){
 let total = 0;
 let html = "";
 cart.forEach((item,index)=>{
   total += item.price;
   html += `<p>${item.name} - Rs ${item.price}
   <button onclick="removeItem(${index})">Remove</button></p>`;
 });
 document.getElementById("cartItems").innerHTML = html;
 document.getElementById("total").innerText = total;
}

function removeItem(i){
 cart.splice(i,1);
 localStorage.setItem("cart", JSON.stringify(cart));
 showCart();
}

function login(){
 let email = document.getElementById("email").value;
 let pass = document.getElementById("password").value;
 if(email=="" || pass==""){
  document.getElementById("msg").innerText="Fill all fields";
 } else {
  document.getElementById("msg").innerText="Login Successful";
 }
}

if(document.getElementById("cartItems")){
 showCart();
}
function searchProducts() {
  let input = document.getElementById("searchInput").value.toLowerCase();
  let products = document.querySelectorAll(".featured-card");

  products.forEach(function(product) {
    let productName = product.querySelector("h3").innerText.toLowerCase();

    if (productName.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}