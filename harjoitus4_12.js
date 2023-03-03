function soraja123(sokeri) {
    let rasva = sokeri * 200 
    let jauho = sokeri * 3
    let lasku = "Rasvaa tulee " + rasva + "g ja jauhoja tulee " + jauho + "dl"
    return lasku;
}
function paaohjelma () {
    let sokeri = Number(prompt("Syötä sokerin desilitramäärä"));
    let tulostus = soraja123(sokeri);
    console.log(tulostus);
    alert("Katso vastaus painamalla F12 ja valitsemalla 'console'");
}