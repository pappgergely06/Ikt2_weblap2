const submitButton = document.getElementById("submit")
const nev= document.getElementById("name")
const email = document.getElementById("email")

submitButton.addEventListener("click",() => {
    if(nev.value == "") alert("Kérlek add meg a neved!")
    else if (email.value == "") alert("Kérlek adj meg email címet!")
})