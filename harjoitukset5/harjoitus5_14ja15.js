function anna() {
    let summa = 0;
    let lukum = 0;
    let keskiarvo = 0;
    let parilliset = 0;
    let parittomat = 0;
    while (true) {
    let x = Number(prompt("Anna luku:"));
       if (x == -1) {
           alert("Kiitos ja näkemiin! Lukujen summa on: " + summa + "Lukuja on: " + lukum + "kpl, keskiarvo on:" 
           + keskiarvo + "parillisia lukuja on:" + parilliset + "sekä parittomia on:" + parittomat);
           break;
       } else {
           summa = summa + x;
           lukum = lukum +1;
           keskiarvo = summa/lukum;
           parilliset = x%2==0;
           parittomat = x%2!=0;
       }
    }
}