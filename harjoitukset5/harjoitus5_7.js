function arvaa() {
    while(true) {
        let x = prompt("anna luku");
        let i = Math.floor(Math.random() * (10)+1);
        if(i==x) {
            alert("Arvasit oikein");
            break;
        } else {
            alert("Arvaa uusiksi");
        }
    }
    
}


function arvaa2() {
    let x = 0;
    let i = 0;
    do {
        x = prompt("Anna luku väliltä 1-10");
        i = Math.floor(Math.random()*10)+1;
    }
    while (x != i);
    alert("Arvasit oikein");
}


