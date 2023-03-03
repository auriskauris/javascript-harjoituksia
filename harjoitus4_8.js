function suurempi() {
    let luku1 = Number(prompt("Syötä luku"))
    let luku2 = Number(prompt("Syötä toinen luku"))
    if(luku1 > luku2) {
        alert(luku1 + " on suurempi");
    }  else if (luku1 < luku2) {
        alert(luku2 + " on suurempi");
    } else {
        alert("Tarkista luvut")
    }
}