
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()

let EsasSehife = document.querySelector(".EsasSehife")

EsasSehife.addEventListener("click", function () {
    window.location.href = "/MainSehife/index.html";
});

let daxilOl = document.querySelector(".daxilOl")

daxilOl.addEventListener("click", function () {
    window.location.href = "/HesabaDaxilOl/HesabaDaxilOl.html";
});

let Yarat = document.querySelector(".Yarat")
let Ad = document.querySelector(".Ad")
let IstifadeciAdi = document.querySelector(".IstifadeciAdi")
let Telefon = document.querySelector(".Telefon")
let Sifre = document.querySelector(".Sifre")
let user = JSON.parse(localStorage.getItem("user"))
let users = JSON.parse(localStorage.getItem("users")) || []
let form = document.querySelector(".form")
let alertgiris = document.querySelector(".alertgiris");
let alertgiris2 = document.querySelector(".alertgiris2");

alertgiris.style.display = "none",
    alertgiris2.style.display = "none"

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = users.find((e) => e.IstifadeciAdi === IstifadeciAdi.value);

    if (!user) {

        let Newuser = {
            Ad: Ad.value,
            Telefon: Telefon.value,
            IstifadeciAdi: IstifadeciAdi.value,
            Sifre: Sifre.value,
            Komplarim:[]
        };
       
        users.push(Newuser);
        localStorage.setItem("users", JSON.stringify(users));
        alertgiris.style.display = "block";
        alertgiris2.style.display = "none";

        setTimeout(() => {
            alertgiris.style.display = "none";
        }, 2000);

    } else {
        alertgiris.style.display = "none";
        alertgiris2.style.display = "block";
    }
})

