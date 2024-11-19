let table = new DataTable('#myTable');
let EsasSehife = document.querySelector(".EsasSehife")

EsasSehife.addEventListener("click", function () {
  window.location.href = "/EsasHisse/EsasHisse.html";
});
let modal2 = new bootstrap.Modal(document.querySelector('.modal2'));
let submitform = document.querySelector(".submitform")
let yenikomp = document.querySelector(".yenikomp")
let modal = new bootstrap.Modal(document.querySelector('.melumatmodal'));
let sekilinput = document.getElementById("validationCustom11")
let photo = document.querySelector(".photo")
let user = JSON.parse(localStorage.getItem("user"))
let users = JSON.parse(localStorage.getItem("users")) || []
let komplarim = JSON.parse(localStorage.getItem("Komplarim")) || []
let ad = document.getElementById("validationCustom03").value
let sekil = document.getElementById("validationCustom11").value
let qiymet = document.getElementById("validationCustom05").value
let Kateqoriya = document.getElementById("validationCustom01").value
let EmeliYaddas = document.getElementById("validationCustom02").value
let Prosessor = document.getElementById("validationCustom04").value
let DaimiYaddas = document.getElementById("validationCustom06").value
let Tesvir = document.getElementById("validationCustom07").value
let YaddasTipi = document.getElementById("validationCustom08").value
let Yeni = document.getElementById("validationCustom09").value
let EmeliyatSistemi = document.getElementById("validationCustom10").value
let Videokart = document.getElementById("validationCustom12").value
let tbody = document.querySelector("#myTable tbody");
let sifirla = document.querySelector(".sifirla")
let modalbody = document.querySelector(".modal-body")
yenikomp.addEventListener("click", function () {
  modal.show()
});

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



sekilinput.addEventListener("input", function () {
  let image = sekilinput.value;
  if (image) {
    let img = new Image();
    img.onload = function () {
      photo.innerHTML = `<img src="${image}" style="max-width: 80%; height: 70%;">`;
    };
    img.onerror = function () {
      photo.innerHTML = "<p>Sekil Yoxdur</p>";
    };
    img.src = image;
  } else {
    photo.innerHTML = '';
  }
});


function checkUser() {
  if (typeof user === "object") {
    let checkUser = users.find(function (e) {

      return e.IstifadeciAdi === user.IstifadeciAdi && e.Sifre === user.Sifre
    })

    if (!checkUser) {
      location.href = "/HesabaDaxilOl/HesabaDaxilOl.html"
    }

  }
  else {
    console.log("obyekt deil");
    location.href = "/HesabYarat/HesabYarat.html"

  }
}
checkUser()

submitform.addEventListener("submit", (e) => {
  let ad = document.getElementById("validationCustom03").value;
  let sekil = document.getElementById("validationCustom11").value;
  let qiymet = document.getElementById("validationCustom05").value;
  let tesvir = document.getElementById("validationCustom07").value
  let Yeni = document.getElementById("validationCustom09").value
  let Kateqoriya = document.getElementById("validationCustom01").value
  let EmeliYaddas = document.getElementById("validationCustom02").value
  let Prosessor = document.getElementById("validationCustom04").value
  let DaimiYaddas = document.getElementById("validationCustom06").value
  let YaddasTipi = document.getElementById("validationCustom08").value
  let EmeliyatSistemi = document.getElementById("validationCustom10").value
  let Videokart = document.getElementById("validationCustom12").value

  e.preventDefault();

  if (submitform.checkValidity()) {
    let komp = {
      id: generateId(),
      ad: ad,
      sekil: sekil,
      qiymet: qiymet,
      sahib: user.IstifadeciAdi,
      Tesvir: tesvir,
      Yeni: Yeni,
      Kateqoriya: Kateqoriya,
      EmeliYaddas: EmeliYaddas,
      Prosessor: Prosessor,
      DaimiYaddas: DaimiYaddas,
      YaddasTipi: YaddasTipi,
      EmeliyatSistemi: EmeliyatSistemi,
      Videokart: Videokart,
    };

    komplarim.push(komp);
    localStorage.setItem("Komplarim", JSON.stringify(komplarim));
    modal.hide();

    if (ad && sekil && qiymet) {
      table.row.add([
        komp.id,
        ad,
        `<img src="${sekil}" alt="" style="width: 50px; height: 20px; object-fit: cover;">`,
        qiymet,
        `<button onclick="removeCar(${komp.id})" class="sil btn btn-danger">Sil</button>
        <button onclick="edit(${komp.id})" class="redakte btn btn-primary">Redakte Et</button>`
      ]).draw();
    }
  }
});

function generateId() {
  if (komplarim.length > 0) {
    return komplarim[komplarim.length - 1].id + 1
  }
  else {
    return 1
  }
}

function displaykomp() {
  let Komplar = komplarim.filter(function (komp) {
    return komp.sahib === user.IstifadeciAdi;
  });

  tbody.innerHTML = "";
  Komplar.forEach(function (komp) {
    if (komp.ad && komp.sekil && komp.qiymet) {
      table.row.add([
        komp.id,
        komp.ad,
        `<img src="${komp.sekil}" alt="" onclick="sekilModal(${komp.id})" style="width: 50px; height: 20px; object-fit: cover;">`,
        komp.qiymet,
        `<button onclick="removeCar(${komp.id})" class="sil btn btn-danger">Sil</button>
         <button onclick="edit(${komp.id})" class="redakte btn btn-primary">Redakte Et</button>`
      ]).draw();
    }
  });
}

function removeCar(carid) {
  komplarim = komplarim.filter(function (item) {
    return item.id !== carid;
  });

  localStorage.setItem("Komplarim", JSON.stringify(komplarim));
  const row = event.target.closest("tr");
  table.row(row).remove().draw();
}

displaykomp();

function sekilModal(kompid) {
  modal2.show()
  let komp = komplarim.find(function (item) {
    return item.id == kompid
  })
  modalbody.innerHTML = `
<img src="${komp.sekil}" style="margin: auto;width: 200px;height: 250px;display: block;max-width: 200px;">
`
}
