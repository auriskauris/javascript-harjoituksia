console.log("\nHarjoitus 1");
//Matemaattiset operaatiot & muuttujat

var kokonaisluku1 = 5
var kokonaisluku2 = 7

var summa = kokonaisluku1+kokonaisluku2;
var erotus = kokonaisluku1-kokonaisluku2;
var tulo = kokonaisluku1*kokonaisluku2;
var osam = kokonaisluku1/kokonaisluku2;
var jakojaannos = kokonaisluku1%kokonaisluku2;

console.log("Luvut ovat " + kokonaisluku1 + " ja " + kokonaisluku2);
console.log("Summa on " + summa);
console.log("Erotus on " + erotus);
console.log("Tulo on " + tulo);
console.log("Osamäärä on " + osam);
console.log("Jakojäännös on " + jakojaannos);

console.log("\nHarjoitus 2");
//Matemaattiset operaatiot funktiona

function laskut (x,y) {
    var summa = x+y;
    var erotus= x-y;
    var tulo = x*y;
    var osam = x/y;
    var jakojaannos = x%y;

    console.log("Summa on " + summa +
    "\nErotus on " + erotus +
    "\nTulo on " + tulo +
    "\nOsamäärä on " + osam +
    "\nJakojäännös on " + jakojaannos);
}
laskut(5,7);
laskut(2,4);

console.log("\nHarjoitus 3");
//Toistorakenne

let i = 11
while (i >= 0, i-- ) {
   if (i%2 == 1)
    console.log(i)
  }

  console.log("\nHarjoitus 3 osa 2");
for (let i = 10; i >= 1; i--){
    if (i%2==1) {
        console.log(i); 
    }
   
}

console.log("\nHarjoitus 4");
//Ympyrän piiri, säde ja pinta-ala

function halkaisija (x) {
    var sade = x/2;
    var piiri = 2*Math.PI*sade;
    var ala = Math.PI*sade**2;
    console.log("Ympyrän säde on " + sade);
    console.log("Ympyrän piiri on " + piiri);
    console.log("Ympyrän pinta-ala on " + ala);
}
halkaisija (5);
 
console.log("\nHarjoitus 5");
//Tilikauden tulos
function tilikausi (tuotto, kulut) {
    var tulos = tuotto - kulut;
    if (tulos>0){
        console.log("Voittoa");
    } 
    else if (tulos < 0) {
        console.log("Tappiota");
    } else if (tulos == 0) {
        console.log("nollatulos");
    }    
}
tilikausi (20,10);
tilikausi (346,500);
tilikausi (40,22);
tilikausi (100,100);

console.log("\nHarjoitus 6");
//Nelilaskin
function nelilaskin (x, y, laskutoimitus) {
    switch(laskutoimitus) {
        case "summa":
            console.log(x + " + " + y + " = " + (x+y)); 
          // code block
          break;
        case "erotus":
            console.log(x + " - " + y + " = " + (x-y));
          // code block
          break;
        case "tulo":
            console.log(x + " * " + y + " = " + (x*y));
          break;
        case "osamäärä":
            console.log(x + " / " + y + " = " + (x/y));
          break;

      }
}
nelilaskin (4,3, "summa");
nelilaskin (2,6, "tulo");
nelilaskin (7,4, "erotus");
nelilaskin (15,3, "osamäärä");

console.log("\nHarjoitus 7");
//Suurempi luku switch-case
function suurempi (x,y) {
    switch(true) {
        case x>y:
        console.log("Annetuista luvuista " + x + " ja " + y + " suurempi on " + x)
        break;
        case x<y:
        console.log("Annetuista luvuista " + x + " ja " + y + " suurempi on " + y)
        break;
        case x==y:
        console.log("Annetut luvut ovat yhtä suuret.")
        break;
        default:
            console.log("null");
    }
}
suurempi (6,3);
suurempi (2,8);
suurempi (5,5);
suurempi ("kissa");

console.log("\nHarjoitus 8");
//Tuumat senteiksi
function muunna(tuuma) {
    var sentti;
    sentti = 2.54*tuuma;
    var tulostus = (tuuma + " tuumaa on " + sentti + " senttimetriä")
    return(tulostus);
}

console.log (muunna(4));
console.log (muunna(5));
console.log (muunna(6));
console.log (muunna(10));

console.log("\nHarjoitus 9");
//On välissä
function onValissa(luku) {
    if(luku>=0 && luku <=10) {
        console.log("True");
    } else console.log("False");
}
onValissa(4);
onValissa(11);
onValissa(10);
onValissa(-2);

console.log("\nHarjoitus 10");
//Valuuttalaskin
function valuuttaa(kurssi, eurot) {
    var muutos = (eurot-2.50)*kurssi;

    console.log("Asiakas saa " + Math.round(muutos*100)/100);
}
valuuttaa(1.14, 200);

console.log("\nHarjoitus 11");
//Fahrenheit
function asteita(celcius) {
        var fahrenheit = Math.round((celcius*1.8 + 32) *100)/100;
        var tulostus = celcius + " celsiusta on " + fahrenheit + " Fahrenheitia";
        return (tulostus);
}

console.log(asteita(12));
console.log(asteita(30));
console.log(asteita(9));


console.log("\nHarjoitus 12");
//Suurin kolmesta
function suurin_kolmesta(a,b,c) {
    var suurin;
    if(a>b && a>c) {
            suurin = a;
    } else if(b>a && b>c) {
            suurin = b;
    } else if(c>a && c>b) {
            suurin = c ;
    } else if(c == a && c == b) {
            return("Luvut ovat yhtä suuria");
    } else {
        return("Error");
    }
    var tulostus = "Suurin arvoista " + a +", " + b + " ja " + c + " on " + suurin;
    return (tulostus); 
}
console.log(suurin_kolmesta(4,4,7));
console.log(suurin_kolmesta(8,5,11));
console.log(suurin_kolmesta(11,16,0));
console.log(suurin_kolmesta(4,4,4));
console.log(suurin_kolmesta(4,7,4));

console.log("\nHarjoitus 13");
//Suuruusjärjestys
function lukujono(a,b,c) {
    let elias= [a,b,c];
    elias.sort((a,b) => a-b);
    console.log("annetut luvut pienimmästä suurimpaan ovat:" + elias);
}
lukujono(4,5,6);
lukujono(7,3,11);
lukujono(7,12,7);
