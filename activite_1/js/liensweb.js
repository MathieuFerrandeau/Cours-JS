/*
Activité 1
*/

// Liste des liens Web à afficher. Un lien est défini par :
// - son titre
// - son URL
// - son auteur (la personne qui l'a publié)
var listeLiens = [
    {
        titre: "So Foot",
        url: "http://sofoot.com",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://Wikipedia.org",
        auteur: "annie.zette"
    }
];

// TODO : compléter ce fichier pour ajouter les liens à la page web

var liens = listeLiens;

liens.forEach(function (lien) {
  // Création d'une div pour chaque élément
  var divElt = document.createElement("div");
  divElt.setAttribute("class", "lien");
  divElt.style.height = "auto";
  divElt.style.width = "97%";

  // Ajout de la balise <a>
  var lienElt = document.createElement("a");
  lienElt.href = lien.url;
  lienElt.style.textDecoration = "none";

  // Ajout de la balise <h2>
  var titreElt = document.createElement("h2");
  titreElt.textContent = lien.titre;
  titreElt.style.color = "#428bca";
  titreElt.style.margin = "0";
  titreElt.style.display = "inline";

  // Ajout de la balise <p>
  var urlElt = document.createElement("p");
  urlElt.textContent = lien.url;
  urlElt.style.display = "inline";
  urlElt.style.marginLeft = "20px";

  // Ajout de la balise <span>
  var auteurElt = document.createElement("span");
  auteurElt.textContent = "Ajouté par " + lien.auteur;
  auteurElt.style.display = "block";

  divElt.appendChild(lienElt);
  lienElt.appendChild(titreElt);
  divElt.appendChild(urlElt);
  divElt.appendChild(auteurElt);

  document.getElementById("contenu").appendChild(divElt);
});
