function codetorunlater() {
    for (var i=0; i<1111; i++) {
        console.log("Running" + i);
    
    }

}

setTimeout(codetorunlater, 1000);



console.log("Done Running");