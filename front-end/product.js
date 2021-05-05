// CREATION DE LA CARD PRINCIPALE CONTENANT LE PRODUIT

function createCard(myTeddy) {

    let cardDiv = document.createElement("div");
    let div = document.getElementById("card");
    div.appendChild(cardDiv);

// CREATION DU CONTENU DE L'ELEMENT CARD (PRODUIT)

    let imgCard = document.createElement("img");
    cardDiv.appendChild(imgCard);
    imgCard.src = myTeddy.imageUrl;

    let titleCard = document.createElement("h3");
    cardDiv.appendChild(titleCard);
    titleCard.textContent = myTeddy.name;

    let priceCard = document.createElement("p");
    cardDiv.appendChild(priceCard);
    priceCard.textContent = (myTeddy.price/10 + "€");

    let infoCard = document.createElement("p");
    cardDiv.appendChild(infoCard);
    infoCard.textContent = myTeddy.description;

    let color = document.createElement("h4");
    cardDiv.appendChild(color);
    color.textContent = "Choisissez votre couleur dans la liste:";
}
