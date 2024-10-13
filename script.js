function generatePassword(){

    const passwordLength = document.getElementById("input").value;
    const includeLowercase = true;
    const includeUppercase = true;
    const includeNumbers = true;
    const includeSymbols = true;

    const password = generatePasswordString(passwordLength, 
                                            includeLowercase,
                                            includeUppercase,
                                            includeNumbers,
                                            includeSymbols);

    const result = document.getElementById("result");
    result.textContent = `Password is ${password}`;
}

function generatePasswordString(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~=-/';][]";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? uppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return "(Password length must be at least 1)";
    }
    if(allowedChars.length === 0){
        return "(At least 1 set of characters needs to be selected)";
    }
    for(let i = 0 ; i < length ; i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}
