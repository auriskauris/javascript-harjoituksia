function kerronta() {
    let x = Number(prompt("Anna luku:"));
    let n = 1;
    let i = 1;
    while (x >= i) {
        n = n*i;
        i++;
    }
    console.log(n);
}