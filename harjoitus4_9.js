function taysi() {
    let luku1 = Number(prompt("Syötä ikä"))
    if(luku1 >= 18) {
        alert(" olet täysi-ikäinen");
    }  else if (luku1 < 18 && luku1 >= 0) {
        alert(" olet alaikäinen");
    } else {
        alert("Tarkista luvut")
    }
}