let EsasSehife = document.querySelector(".EsasSehife")

EsasSehife.addEventListener("click", function () {
    window.location.href = "../EsasHisse/EsasHisse.html";
});

let komplarim = JSON.parse(localStorage.getItem("Komplarim")) || []
let carsparent = document.querySelector(".carsparent")
let ad = document.getElementById("validationCustom03")
let sekil = document.getElementById("validationCustom11")
let qiymet = document.getElementById("validationCustom05")
let Yeni = document.getElementById("validationCustom09")
let Tesvir = document.getElementById("validationCustom07")
let Kateqoriya = document.getElementById("validationCustom01")
let EmeliYaddas = document.getElementById("validationCustom02")
let Prosessor = document.getElementById("validationCustom04")
let DaimiYaddas = document.getElementById("validationCustom06")
let YaddasTipi = document.getElementById("validationCustom08")
let EmeliyatSistemi = document.getElementById("validationCustom10")
let Videokart = document.getElementById("validationCustom12")
let modalhead = document.querySelector(".modalhead")
let modalbody = document.querySelector(".modalbody")

function carInfo(carid) {

    let komp = komplarim.find(function (item) {
        return item.id == carid
    })
    modalhead.innerHTML = ` 
    <img src="${komp.sekil}">
    `
    modalbody.innerHTML = ` 
    <p class="ad"><span style="background-color: blue;color:white;">ad:</span> ${komp.ad}<p>
    <p class="tesvir"><span style="background-color: blue;color:white;">Tesvir:</span>${komp.Tesvir} <p>
    <p class="qiymet"><span style="background-color: blue;color:white;">Qiymet:</span>${komp.qiymet}</p>
    <p class="yeni"><span style="background-color: blue;color:white;">Yeni:</span> ${komp.Yeni} <p>
    <p class="emeliyaddas"><span style="background-color: blue;color:white;">EmeliYaddas:</span> ${komp.EmeliYaddas} <p>
    <p class="daimiyaddas"><span style="background-color: blue;color:white;">DaimiYaddas:</span>${komp.DaimiYaddas}</p>
    <p class="tip"><span style="background-color: blue;color:white;">YaddasTipi:</span>${komp.YaddasTipi}</p>
    <p class="emeliyaddas"><span style="background-color: blue;color:white;">EmeliYaddas:</span> ${komp.EmeliYaddas} <p>
    <p class="emeliyyatsistemi"><span style="background-color: blue;color:white;">EmeliyyatSistemi:</span>${komp.EmeliyatSistemi}</p>
    <p class="kart"><span style="background-color: blue;color:white;">VideoKart:</span>${komp.Videokart}</p>

    `
}


function displayKomp(komplarim) {
    carsparent.innerHTML = ""
    komplarim.forEach(komp => {
        let element = `
       <div class="col-4">

                <div class="card" style="width: 18rem;">
                    <img src="${komp.sekil}" style="height:250px" class="card-img-top" alt="...">
                    <div class="card-body">
                        <p><span style="background-color: yellowgreen;">ad:</span> ${komp.ad} </p>
                        <p> <span style="background-color: yellowgreen;">tesvir:</span> ${komp.Tesvir}</p>
                        <p><span style="background-color: yellowgreen;">qiymet</span>${komp.qiymet}</p>
                        <p><span style="background-color:yellowgreen;">yeni:</span> ${komp.Yeni}</p>
                        <button onclick="carInfo(${komp.id})" style="  margin-left:85px;"   class="btn btn-primary "data-bs-toggle="modal" data-bs-target="#exampleModal" ">Etrafli</button>
                    </div>
                </div>
            </div>

    `

        carsparent.innerHTML += element

    });
}
displayKomp(komplarim)

let searchinput = document.querySelector(".inputs")

searchinput.addEventListener("input", () => {
    let filterKomp = komplarim.filter(function (komplar) {
        console.log(komplar);
        return komplar.ad.toLowerCase().includes(searchinput.value.toLowerCase())
    })
    displayKomp(filterKomp)
})

let listitems=document.querySelectorAll(".choosekomp li")

listitems.forEach(function (item) {
    item.addEventListener("click",(e)=>{
        listitems.forEach(function (k) {
            k.classList.remove("reng")
        })
      console.log(e.target.innerHTML);
      e.target.classList.add("reng")
      let filterKomp=komplarim.filter(function (komp) {
        return komp.ad.includes(e.target.innerHTML)
      })
      displayKomp(filterKomp)
    })
})
