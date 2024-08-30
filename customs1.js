var button = document.createElement("p");

button.innerText = "VOIR l'ANIME ONE PIECE >>";

button.className = "btn1";

button.addEventListener("click", function() {
  
  window.open("https://fr.animesama.biz/26-one-piece.html", "_blank");
});
document.getElementById("btncnt1").appendChild(button);
