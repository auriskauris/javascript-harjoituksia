function anna() {
    let summa = 0;
    let lukum = 0;
    while (true) {
    let x = Number(prompt("Anna luku:"));
       if (x == -1) {
           alert("Kiitos ja näkemiin! Lukujen summa on: " + summa + "Lukuja on: " + lukum + "kpl");
           break;
       } else {
           summa = summa + x;
           lukum = lukum +1
       }
    }
}