const resimler = ["cilek", "Ananas", "armut", "elma",
    "karpuz", "kiraz", "muz", "üzüm", "cilek_2",
    "Ananas_2", "armut_2", "elma_2", "karpuz_2", "kiraz_2",
    "muz_2", "üzüm_2"]
const new_resim = resimler[Math.floor((Math.random() * resimler.length))]
const container = document.querySelector(".container");
const kutu = document.querySelectorAll(".kutu");
const sayac = document.querySelector(".sayac");

const kutu_1 = []


//*! Start Button
const reloadButton = document.querySelector("#reload");
// // Reload everything:
function reload() {
    reload = location.reload();

    // // Event listeners for reload
    reloadButton.addEventListener(click, reload);
}


for (i = 0; i < resimler.length;) {
    let new_resim = resimler[Math.floor(Math.random() * resimler.length)];

    if (!kutu_1.includes(new_resim)) {
        kutu_1.push(new_resim)
        i++;
    }
}

console.log(kutu_1);

kutu_1.map((resim) => {
    container.innerHTML += `<div id="${resim}"class="kutu"><img src=./${resim}.jpeg alt=""></div>`
})

sil_kutu = []

box_kutu = []

sil_sayac = 0;

const boxes = document.querySelectorAll('.kutu');

for (const box of boxes) {
    box.addEventListener('click', function handleClick() {

        sil_sayac += 1
        sayac.innerHTML = sil_sayac

        console.log("sil_sayac: ", sil_sayac);


        if ((sil_kutu.length < 3) && (sil_kutu[0] != box.id)) {
            sil_kutu.push(box.id)
            box_kutu.push(box)

            console.log(sil_kutu);
        }

        if (sil_kutu.length == 2) {

            if (sil_kutu[0].slice(0, 3) == sil_kutu[1].slice(0, 3)) {

                sil_kutu = []

                box_kutu.map((i) => {
                    i.classList.remove("kutu");
                })

                if (sil_sayac == 8) {
                    console.log("Tebrikler");
                }

                box_kutu = []

            } else {
                sil_kutu = []

                box_kutu = []
            }
        }
    });
}







