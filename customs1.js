var button = document.createElement("p");

button.innerText = "Voir l'Anime One Piece >>";

button.className = "btn1";

button.addEventListener("click", function() {
  
  window.open("https://v5.animesama.biz/26-one-piece.html", "_blank");
});
document.getElementById("btncnt1").appendChild(button);
