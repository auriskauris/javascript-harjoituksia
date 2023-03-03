function kokonimi() {
    let nimi1 = prompt("Etunimi")
    let nimi2 = prompt("Sukunimi")
    let kokonimi = nimi1 + " " + nimi2
    document.getElementById("Vastaus").innerHTML = kokonimi;
    console.log(kokonimi);
}
