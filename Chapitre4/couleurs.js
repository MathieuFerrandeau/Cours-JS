
var couleurTexte = prompt("Merci de choisir une couleur pour le texte :")
var couleurFond =  prompt("Merci de choisir une couleur pour le fond derrière le texte :")

var divsElts = document.getElementsByTagName("div");
for (var i = 0; i < divsElts.length; i++) {
    divsElts[i].style.color = couleurTexte;
    divsElts[i].style.backgroundColor = couleurFond;
}
