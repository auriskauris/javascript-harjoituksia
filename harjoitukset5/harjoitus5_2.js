function vuosi() {
    var d = new Date();
    var n = d.getFullYear();
    for (let i = 1; i <= 5; i++) {
    console.log(n);
    n++;
    }
}
vuosi();