//récupération des données stockées dans le localstorage

let retrievedData = localStorage.getItem("allCart");
let myCart = JSON.parse(retrievedData);

//STRUCTURE HTML DU PANIER
function addCart() {

    for (let i = 0; i < myCart.length; i++) {
    
      let cartInfo = document.createElement("div");
      cartInfo.classList.add("cartInfo", "bg-info");
      document.getElementById("cart");
      cart.appendChild(cartInfo);
    
    
}}