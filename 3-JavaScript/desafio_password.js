function generarContrasena (longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    if (longitud < 8 || longitud > 16 || isNaN(longitud)) {
        console.log('La longitud debe estar entre 4 y 30 caracteres');
        return;
    }
    else {    console.log('longitud', longitud);}

};

generarContrasena(12, true, true, true);



function generarContrasena(longitud, incluirMayusculas, incluirNumeros, incluirSimbolos) {
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+=-{}[]|:;<>,.?/~`';
    
    let passwordChars = lowerCaseChars;
    if (incluirMayusculas) passwordChars += upperCaseChars;
    if (incluirNumeros) passwordChars += numberChars;
    if (incluirSimbolos) passwordChars += symbolChars;

    let password = '';
    for (let i = 0; i < longitud; i++) {
        let randomIndex = Math.floor(Math.random() * passwordChars.length);
        password += passwordChars[randomIndex];
    }

    return password;
}

console.log(generarContrasena(124, true, true, true));