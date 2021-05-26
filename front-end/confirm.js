// on récupère les données stockées dans le localstorage

let retrievedData = localStorage.getItem("allCart");
let myCart = JSON.parse(retrievedData);
let data = localStorage.getItem("price");
let total = JSON.parse(data);

console.log(myCart);
console.log(total);

// CREATION DE LA STRUCTURE HTML DE LA PAGE

const div = document.createElement("div");
div.classList.add("bg-success");
let diiv = document.getElementById("confirm");
diiv.appendChild(div);
let p = document.createElement("p");
p.classList.add("text-center", "font-weight-bold");
div.appendChild(p);
p.textContent = " Votre commande a bien été enregistré. ";

let confirm = document.createElement("div");
div.appendChild(confirm);

// CREATION D'UNE FONCTION POUR CREER NOMBRE ALEATOIRE DE COMMANDE

let p3 = document.createElement("p");
document.createElement("p");
div.appendChild(p3);
let min = 1;
let max = 1000000;
let random = Math.floor(Math.random() * (max - min)) + min;
p3.textContent = " Identifiant de  commande à conserver : " + random ;