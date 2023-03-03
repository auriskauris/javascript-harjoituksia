function koiraika(ika1) {
    let lasku = ika1*7;
    return lasku;

}
function paaohjelma() {
    let ika = Number(prompt("Syötä koiran ikä"));
    let tulostus = koiraika(ika);
    console.log("Koirasi on " + tulostus + " vuotta ihmisen iässä.");
    alert("Katso vastaus painamalla F12 ja valitsemalla 'console'");
}