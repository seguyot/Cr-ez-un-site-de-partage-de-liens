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
        url: "http://sofoot.com/",
        auteur: "yann.usaille"
    },
    {
        titre: "Guide d'autodéfense numérique",
        url: "http://guide.boum.org/",
        auteur: "paulochon"
    },
    {
        titre: "L'encyclopédie en ligne Wikipedia",
        url: "http://wikipedia.org/",
        auteur: "annie.zette"
    }
];

listeLiens.forEach(function (listeLiens) {
    var newdiv = document.createElement("div");
    newdiv.className = "lien";
    document.getElementById("contenu").appendChild(newdiv);

    var lien = document.createElement("h4");
    lien.innerHTML = "<a href="+ listeLiens.url+" style='color:#428bca;'>"  +listeLiens.titre  +"</a>"  + " <span>" + listeLiens.url + "<br>"  +listeLiens.auteur + "</span>";
    newdiv.appendChild(lien);
});