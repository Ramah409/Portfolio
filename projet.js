/* j'avais essayer de cree mon menu sur js mais sur la partie css j'ai du mal et a allais me prendre enorment de temps du coup je supprimer 
function creerNavigation(){
    let menuaccueil = document.getElementById("menuaccueil"); 
    let lien1 = document.createElement('a');
    lien1.innerText = "🏠Accueill";
    lien1.setAttribute('href',"accueil.html");
    menuaccueil.appendChild(lien1);
    
    let lien2 = document.createElement(`a`);
   lien2.innerText = "👤 Profil" ; 
   lien2.setAttribute(`href`, "profil.html"); 
   menuaccueil.appendChild(lien2); 
  
   let lien3 = document.createElement(`a`); 
   lien3.innerText = "🧠 Compétences";
   lien3.setAttribute(`href`, "competence.html"); 
   menuaccueil.appendChild(lien3);
  
   let lien4 = document.createElement(`a`); 
   lien4.innerText = "🎨 Projets"; 
   lien4.setAttribute(`href`, "projet.html"); 
   menuaccueil.appendChild(lien4);
  
   let lien5 = document.createElement(`a`); 
   lien5.innerText = "📞 Contact"; 
   lien5.setAttribute(`href`, "contact.html"); 
   menuaccueil.appendChild(lien5);
}
creerNavigation();
*/
/* je veux quand l'utilisateur clique savoirplus ca affiche un message */
/*
function affiche() {
    // Crée un bouton normal
    let monboutton = document.createElement("button");
    monboutton.innerText = "En savoir plus"; 
  
    // Quand on clique sur le bouton, on affiche le texte caché
    monboutton.addEventListener("click", function() {
      let texte = document.getElementById("montexte");
      texte.style.display = "inline";
    }); 
  
    // Ajoute le bouton dans une div spécifique (par exemple avec id="zone")
    let zone = document.getElementById("zone");
    zone.appendChild(monboutton);
  } 
  */
  function affiche() {
    // Crée mon bouton
    let monboutton = document.createElement("button");
    monboutton.innerText = "En savoir plus"; 
    monboutton.classList.add("boutonaccueil");

    // Quand on clique, on affiche le texte caché
    monboutton.addEventListener("click", function() {
      let texte = document.getElementById("montexte");
      texte.style.display = "inline" ;

    });

    // Ajoute le bouton dans la zone prévue
    let zone = document.getElementById("zone");
    zone.appendChild(monboutton);
  }

  // Appelle la fonction pour créer le bouton automatiquement
  affiche();

  