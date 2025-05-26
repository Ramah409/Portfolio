function montitre(){
    let titre = document.getElementById("titre"); 
    let titre1 = document.createElement('h1'); 
    titre1.innerText = "Quelques Réalisations"; 
    titre.appendChild(titre1);
}
montitre();
// mes realisations 
function mesimages1(){
    let image1 = document.getElementById("image1");
    let monimage = document.createElement('img');
    monimage.setAttribute ('src', 'https://i.pinimg.com/736x/b4/39/7f/b4397fc0c5e1ec04553876d130583684.jpg'); 
    image1.appendChild(monimage); 
}
mesimages1(); 
// mon tableau qui contient plusieurs mes quatres projet 
let projets = [
    {
        Catégorie: "Web", 
        Description: "Un site web", 
        Technologies: "HTML, CSS", 
        Date: "10/05/25", 
        Objectif: "résoudre un problème", 
        Niveau: "facile",
        image: "https://i.pinimg.com/736x/a0/bc/f1/a0bcf1dac1f2754374f065f7b26cecb4.jpg", 
    }, 
    {
        Catégorie: "Web", 
        Description: "Mini-site e-commerce", 
        Technologies: "HTML, CSS JavaScript ", 
        Date: "06/05/25", 
        Objectif: "Appliquer la mise en page", 
        Niveau: "Moyen",
        image: "https://i.pinimg.com/736x/a0/bc/f1/a0bcf1dac1f2754374f065f7b26cecb4.jpg",
    },
    {
        Catégorie: "Web", 
        Description: "Formulaire", 
        Technologies: "HTML, CSS", 
        Date: "28/04/25", 
        Objectif: "responsive", 
        Niveau: "facile",  
        image: "https://i.pinimg.com/736x/a0/bc/f1/a0bcf1dac1f2754374f065f7b26cecb4.jpg",
    },
    {
        Catégorie: "Web", 
        Description: "Maquette", 
        Technologies: "HTML, CSS, Figma", 
        Date: "02/04/2025", 
        Objectif: "reproduire un design", 
        Niveau: "difficile",
        image: "https://i.pinimg.com/736x/a0/bc/f1/a0bcf1dac1f2754374f065f7b26cecb4.jpg",
    }
]; 


// je vais cree une function qui va fléchée mes projets
let afficheProjet = (projet) => {
    // cette partie me permet de verifier si la catégorie est different de web
    if (projet.Catégorie !== "Web"){
        // et si la categorie du projet n'est pas web cava m'afficher ce message
        console.log("projet non pertinent"); 
        return; 
    } 
    // affichage des Projets 
    let affichageprojet = document.getElementById("affichageprojet"); 
    let mondiv = document.createElement('div'); 
    // categoreies 
    let categorie = document.createElement('p'); 
    categorie.innerText = "Catégorie : " + projet.Catégorie; 
    // Description 
    let description = document.createElement('p'); 
    description.innerText = "Description : " + projet.Description; 
    // Teschnologies
    let technologies = document.createElement('p'); 
    technologies.innerText = "Technologies : " + projet.Technologies; 
    // Date 
    let date = document.createElement('p'); 
    date.innerText = "Date : " + projet.Date; 
    // Objetif
    let objectif = document.createElement('p'); 
    objectif.innerText = "Objectif : " + projet.Objectif; 
    // Niveau 
    let niveau = document.createElement('p')
    niveau.innerText = "Niveau : " + projet.Niveau; 
    // Image 
    let image = document.createElement('img');
    image.setAttribute('src', projet.image); 
    // button 
    let button = document.createElement('button'); 
    button.innerText = "Création d’un site "; 
   

  

    // j'ajoute chaque paragraphe 
    mondiv.appendChild(categorie); 
    mondiv.appendChild(description); 
    mondiv.appendChild(technologies); 
    mondiv.appendChild(date); 
    mondiv.appendChild(objectif); 
    mondiv.appendChild(niveau);
    mondiv.appendChild(image); 
    mondiv.appendChild(button);

    affichageprojet.appendChild(mondiv);

    
}
// pour afficher mes projets sur ma
projets.forEach(projet => afficheProjet(projet));