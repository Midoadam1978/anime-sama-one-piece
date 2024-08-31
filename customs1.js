var button = document.createElement("p");

button.innerText = "Voir l'Anime One Piece >>";

button.className = "btn1";

button.addEventListener("click", function() {
  
  window.open("https://fr.anime-sama.lol/26-one-piece.html", "_self");
});
document.getElementById("btncnt1").appendChild(button);
