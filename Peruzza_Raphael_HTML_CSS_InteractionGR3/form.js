let pseudo = document.querySelector("#pseudo");
console.log(pseudo);
let bt = document.querySelector("#bt");
let mail = document.querySelector("#mail");
let mdp = document.querySelector("#mdp");
function check(e) {
  e.preventDefault();
  let pseudoValue = pseudo.value;
  console.log(pseudoValue);
  let mailValue = mail.value;
  console.log(mailValue);
  let mdpValue = mdp.value;
  console.log(mdpValue);
}
bt.addEventListener("click", check);

function changetext() {
  document.body.style.color = colortxt.value;
}
const colortxt = document.getElementById("colortxt");
colortxt.addEventListener("input", changetext);

function changebkg() {
  document.body.style.backgroundColor = colorbkg.value;
}
const colorbkg = document.getElementById("colorbkg");
colorbkg.addEventListener("input", changebkg);

document.addEventListener("DOMContentLoaded", function () {
  //obtient les references de licone du menu burger et du menu de navigation
  const burgerIcon = document.getElementById("burger-icon");
  const menu = document.getElementById("menu");

  //ajoute un ecouteur devenement ai clic sur licone du menu burger
  burgerIcon.addEventListener("click", function () {
    //bascule la clsse 'active' pour affiche/masquer le menu de navigation
    menu.classList.toggle("active");
  });
});
const body = document.querySelector("body");
const btnMode = document.querySelector(".btnMode");

btnMode.addEventListener("click", () => {
  body.classList.toggle("dark");
});
