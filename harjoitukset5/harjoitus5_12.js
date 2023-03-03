function anna() {
    let summa = 0;
    while (true) {
    let x = Number(prompt("Anna luku:"));
       if (x == -1) {
           alert("Kiitos ja näkemiin! Lukujen summa on: " + summa);
           break;
       } else {
           summa = summa + x;
       }
    }
}