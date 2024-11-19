let Komputerlerim = document.querySelector(".Komputerlerim")
let basla = document.querySelector(".basla")
let hesabaDaxil = document.querySelector(".hesabaDaxil")
let daxil = document.querySelector(".daxil")
let user = JSON.parse(localStorage.getItem("user"))
let users = JSON.parse(localStorage.getItem("users")) || []
let span = document.querySelector(".span")
let cixis = document.querySelector(".cixis")

basla.addEventListener("click", function () {
    window.location.href = "../KompAl/KompAl.html";
});


function checkUser() {
    if (user && typeof user === "object") {
        let checkUser = users.find(function (e) {
            return e.IstifadeciAdi === user.IstifadeciAdi && e.Sifre === user.Sifre
        })

        if (!checkUser) {
            Komputerlerim.style.display = "none"
            basla.style.display = "inline-block"
            daxil.style.display = "inline-block"
  hesabaDaxil.style.display = "none"
        } else {
            Komputerlerim.style.display = "inline-block"
            daxil.style.display = "none"
            basla.style.display = "inline-block"
            hesabaDaxil.style.display = "inline-block"
            span.innerHTML = user.IstifadeciAdi
        }

    }
    else {
        Komputerlerim.style.display = "none"
        basla.style.display = "inline-block"
        daxil.style.display = "inline-block"
  hesabaDaxil.style.display = "none"
    }
}
checkUser()

hesabaDaxil.addEventListener("click", (e) => {
    cixis.style.display="block"
    setTimeout(() => {
        cixis.style.display="none"
    }, 1000);
  
    
})
function Cix() {
    hesabaDaxil.style.display = "none"
    Komputerlerim.style.display = "none"
    basla.style.display = "inline-block"
    daxil.style.display = "inline-block"
    span.innerHTML=""
    localStorage.removeItem("user")
}
daxil.addEventListener("click", function () {
    window.location.href = "/HesabaDaxilOl/HesabaDaxilOl.html";
});

Komputerlerim.addEventListener("click", function () {
    window.location.href = "/Komputerlerim/Komputerlerim.html";
});



