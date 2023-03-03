function mistasti() {
    let x = Number(prompt("Mihin asti?"));
    let y = Number(prompt("Mistä lähtien?"));
    while (y <= x) {
        console.log(y);
        y++;
    }
}