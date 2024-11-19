
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

let form = document.querySelector(".form")
let EsasSehife = document.querySelector(".EsasSehife")

EsasSehife.addEventListener("click", function () {
    window.location.href = "/MainSehife/index.html";
});

let HesabYarat = document.querySelector(".HesabYarat")

HesabYarat.addEventListener("click", function () {
    window.location.href = "/HesabYarat/HesabYarat.html";
});


form.addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("validationCustom03").value;
    let password = document.getElementById("validationCustom05").value;
    let users = JSON.parse(localStorage.getItem("users"));
    let user = users.find(e => e.IstifadeciAdi === username && e.Sifre === password);

    if (user) {
        localStorage.setItem("user",JSON.stringify(user))
        window.location.href = "/EsasHisse/EsasHisse.html";
    } else {
        alert("İstifadəci adi və ya sifre sehvdir.");
    }
});











