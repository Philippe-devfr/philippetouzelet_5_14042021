const getAllTeddies = async function () {
    try {
        let response = await fetch("http://localhost:3000/api/teddies", {
        mode: "cors"
})
        if (response.ok) {
            let teddies = await response.json();
                createCard(teddies);
        } else {
        console.error("Error", response.status)
    }
}   catch (e) {
    console.log(e);
}
};

getAllTeddies()

// CREATION DE 5 CARDS POUR CHAQUE OURSON
function createCard(teddies) {

    // UNE BOUCLE FOR POUR ITERER 5 CARDS PRINCIPALES
    
    for(let i = 0; i < teddies.length; i++) {
            
        let cardDiv = document.createElement("div");
        let div = document.getElementById("card");
        div.appendChild(cardDiv);
    
        // STRUCTURE HTML DES CARDS
    
        let imgCard = document.createElement("img");
        cardDiv.appendChild(imgCard);
        imgCard.src = teddies[i].imageUrl;
    
        let titleCard = document.createElement("h3");
        cardDiv.appendChild(titleCard);
        titleCard.textContent = teddies[i].name;
    
        let priceCard = document.createElement("p");
        cardDiv.appendChild(priceCard);
        priceCard.textContent = (teddies[i].price/10) + "€";
    
        // BOUTON VERS PAGE PRODUIT  
    
        let buttonCard = document.createElement("button");
        cardDiv.appendChild(buttonCard);
        buttonCard.textContent = "En savoir plus"; 
        
        //FONCTION DE RECUPERATION DE L'URL PAGE PRODUIT     
    
        function url() {
    
        //récupération de l'id de chaque ourson
            let getUrl = "?id=" + teddies[i]._id; 

        //redirection vers la page de produit unique
            window.location.href = "product.html" + getUrl;
        }
        
        //ECOUTE DE L'EVENEMENT AU CLIC DU BOUTON      
    
        //on recupére le bouton dans le DOM
        document.querySelector("button"); 
    
        //au clic, le bouton exécute la fonction
        buttonCard.addEventListener("click", url);
    }
}