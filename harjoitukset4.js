console.log("\nHarjoitus1");
//Tervehdys
function terve() {
    var aika = new Date().getHours(); //Hakee koneelta kellonajan

    if (aika < 10)
        console.log("Huomenta");
    else if (aika < 19)
        console.log("Päivää");
    else
        console.log("Iltaa");
}

terve(); //kutsuu funktiota

console.log("\nHarjoitus 2");
//Avaruusalus
function spaceship(nopeus, etaisyys) {
    var estimated_arrival = etaisyys/nopeus;     //määrittää laskukaavan
    return(estimated_arrival)                   //Kertoo vastauksen, joka palautetaan
}
var vauhti = 40;    //anna arvot!
var matka = 2;
console.log(vauhti + " km/h, etäisyys: " + matka + " km" + " = " + "Lento kestää " + spaceship(vauhti,matka) + " tuntia");

console.log("\nHarjoitus 3");
//Boolean ikä
function tarkistaSyote(luku) {

   if (luku <= 2021 && luku >= 1920) {
        return true;
   } else { 
        return false;
   }     
}

function laskeIka(luku) {
    var d = new Date(); 
    var n = d.getFullYear();
    return n - luku;
}

console.log(tarkistaSyote(1800));
console.log(tarkistaSyote(2002));

var vuosi = 1990
if (tarkistaSyote(vuosi) == true) {
    console.log(laskeIka(vuosi))
} else {
    console.log("Tarkista");
}


console.log("\nHarjoitus 4");
//Bensan hinta
function bensiini(x) {
    if (x >= 1.2 && x <= 2.2) {
        return true;
    } else {
        return false;
    }
}
bensiini(3.2);
bensiini(1.9);    

function kulutus(y) {
    if (y >= 2.0 && y <= 20) {
        return true;
    } else {
        return false;
    }
}
kulutus(22);
kulutus(4.5);

function kokosetti(matka) {
    if (bensiini(x) == true && kulutus(y) == true) {
        var laskelma = (matka * x)/100 * y;
        return "Jos kulutus on " + y + " litraa/100km " + x + " euron litrahinnalla, " +
        matka + " kilometrin matkalla kulutetun bensiinin hinnaksi tulee " + laskelma + "€";
    } else {
        return "Tarkista";
    }
}
var x = 2.0;
var y = 6.5;
var matka = 50;
console.log(kokosetti(matka));

var x = 3.0;
var y = 6.5;
var matka = 50;
console.log(kokosetti(matka));

var x = 2.0;
var y = 22;
var matka = 50;
console.log(kokosetti(matka));