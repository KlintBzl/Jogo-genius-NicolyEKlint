const btnAlternarE = document.getElementById("alternarE");
const btnAlternarC = document.getElementById("alternarC");
const troca = document.querySelector("body");
btnAlternarE.addEventListener("click", (e) => {
      troca.classList.add("escurecer")
});

btnAlternarC.addEventListener("click", (e) => {
      troca.classList.remove("escurecer")
})