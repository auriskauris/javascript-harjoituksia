console.log("Esimerkki 1")
//Laskuharjoituksia
function yhteenlasku (x,y){
    var summa = x+y;
    console.log("yhteenlaskun tulos on" + " " + summa);
}

yhteenlasku (34,21);
yhteenlasku (4.3,8);
yhteenlasku (43,9);

function vähennyslasku (x,y){
    var erotus = x-y;
    console.log("vähennyslaskun tulos on" + " " + erotus);
}

vähennyslasku (45,6);

function kertolasku (x,y){
    var tulo = x*y;
    console.log("kertolaskun tulos on" + " " + tulo);
}

kertolasku (3,2);

function jakolasku (x,y){
    var jako = x/y;
    console.log("jakolaskun tulos on" + " " + jako);
}

jakolasku (9,3);

console.log("\nHarjoitus 1")
//Merkkijonojen yhdistäminen

function merkkijono (nimi) {
    console.log("Hei, " + nimi + ", mitä kuuluu?");
}
merkkijono("Aura");
merkkijono("Iines");

console.log("\nHarjoitus 2")
//Neliöön korottaminen

function nelio (luku) {
console.log(luku**2)
}
nelio(2);
nelio(4);

console.log("\nHarjoitus 3")
//Täysi-ikäisyys

function taysi (ika) {
    if(ika >= 18){ 
        console.log("täysi-ikäinen")
    } else {
        console.log("alaikäinen")
    }
}
taysi(5);
taysi(34);
taysi(18);

console.log("\nHarjoitus 4")
//Suurempi luku

function suurempi (x,y) {
    if(x > y){
        console.log("Annetuista luvuista " + x + " ja " + y + " suurempi on " + x)
    } else if(x < y) {
        console.log("Annetuista luvuista " + x + " ja " + y + " suurempi on " + y)
    } else {
        console.log("Annetut luvut ovat yhtä suuret.")
    }
}
suurempi(5,8);
suurempi(9,2);
suurempi(6,6);
suurempi("Hei", 2);

console.log("\nHarjoitus 5")
//Kolmion pinta-ala

function ala (kanta,korkeus) {
    var pinttis= kanta*korkeus/2
    console.log("Kolmion pinta-ala on " + Math.round(pinttis*10)/10);
}
ala (10,10);
ala(10.0,10.0);
ala(13.6,23.5);
ala(3.2,1.5);

console.log("\nHarjoitus 6")
//Osamäärän laskeminen

function osamaara (jaettava,jakaja) {
    if(jakaja == 0){
        console.log("Nollalla ei voi jakaa")
    } else {
        console.log("Osamäärä on " + jaettava/jakaja);
    }
}
osamaara (10,2);
osamaara (10,0);
osamaara(0,2);

console.log("\nHarjoitus 7")
//Robotin värianalyysi

function robotti (aallonpituus) {
    if(aallonpituus >= 380 && aallonpituus < 450){
        console.log("Violetti")
    } else if(aallonpituus >= 450 && aallonpituus < 490) {
        console.log("Sininen")
    } else if(aallonpituus >= 490 && aallonpituus < 560) {
        console.log("Vihreä")
    } else if(aallonpituus >= 560 && aallonpituus < 590) {
        console.log("Keltainen")
    } else if(aallonpituus >= 590 && aallonpituus < 630) {
        console.log("Oranssi")
    } else if(aallonpituus >= 630 && aallonpituus < 760) {
        console.log("Punainen")
    } else {
        console.log("null");
    }
    
}
robotti(365);
robotti(677);
robotti(800);
robotti(490);

console.log("\nHarjoitus 8")
//Taksimatka

function taksi (henkilot,km) {
   
    var hinta;
    var aloitusmaksu= 5.40

    if(henkilot >=1 && henkilot <=2) {
        hinta= 1.6
    } else if(henkilot >2 && henkilot <=4) {
        hinta= 1.9
    } else if(henkilot >4 && henkilot <=6) {
        hinta= 2.0
    } else if(henkilot >6) {
        hinta= 2.2
    } else if(henkilot>8) {
        console.log("Liikaa asiakkaita")
    }   else {
        console.log("Tarkista tiedot")
    }
    console.log(hinta*km+aloitusmaksu + "€")
}
taksi(3,4);
taksi(7,2);
taksi(0.2,2);

console.log("\nHarjoitus 9")
//Pyöristys

function pyoro (x) {
    if(pyoro<0) {
        return "Pyöristetty arvo on " + Math.ceil(x-0.5);
    } else {
        return "Pyöristetty arvo on " + Math.floor(x+0.5);
    }
}
console.log(pyoro(2.3));
console.log(pyoro(-6.34));
console.log(pyoro(-1.2));

console.log("\nHarjoitus 10")
//Tuotteen hinta

function kokonaishinta(hinta,alv) {
    try{
    let prosentti = 0;
    if(hinta >= 100 && hinta <=200 ) {
        prosentti = 0.95;
    } else if(hinta > 200 && hinta <= 500 ) {
        prosentti = 0.90;
    } else if(hinta> 500 ) {
        prosentti = 0.85;
    } else if(hinta < 100 && hinta > 0 ) {
        prosentti = 1;
    } else if (hinta < 0){
        throw "oletko köyhä";
    } else {
        throw "tarkista";
    }
    let lasku = hinta*prosentti*alv;
    console.log("Tuotteen kokonaishinta on " + Math.round(lasku*100)/100 + "€")
    //return lasku;
    } catch(err) {
        console.log(err);
    }
}

//console.log("Tuotteen kokonaishinta on " + kokonaishinta(80, 1.24) + "€");
//console.log("Tuotteen kokonaishinta on " + kokonaishinta(250, 1.24) + "€");
//console.log("Tuotteen kokonaishinta on " + kokonaishinta(-5, 1.24) + "€");
kokonaishinta(-5,20);
kokonaishinta("kissa",20);
kokonaishinta(230,1.19);
console.log("\nLISÄTEHTÄVÄ");
//funktion korjaus
