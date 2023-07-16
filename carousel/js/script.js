let radio = document.querySelector('.btn-manual')
let cont = 1

document.getElementById("r1").checked = true

setInterval(
    () => {
        proxImg()
    }
, 2000)

function proxImg() {
    cont++
    if (cont > 3) {
        cont = 1
    }
    document.getElementById("r" + cont).checked = true
}