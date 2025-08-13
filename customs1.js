var button = document.createElement("p");

button.innerText = "Voir l'Anime One Piece >>";

button.className = "btn1";

button.addEventListener("click", function() {
  
  window.open("https://anime-sama.vip/voiranime/tags/one%20piece/", "_blank");
});
document.getElementById("btncnt1").appendChild(button);
