/*
 AES Encrypt / Decrypt
 Uses CryptoJS 4.2.0
*/


function encryptAES() {

    let text = document.getElementById("encryptText").value;
    let password = document.getElementById("encryptPassword").value;

    if (!text || !password) {
        alert("Enter text and password");
        return;
    }


    let encrypted = CryptoJS.AES.encrypt(
        text,
        password
    ).toString();


    document.getElementById("encryptedOutput").value = encrypted;
}



function decryptAES() {

    let encrypted = document.getElementById("decryptText").value;
    let password = document.getElementById("decryptPassword").value;


    if (!encrypted || !password) {
        alert("Enter encrypted text and password");
        return;
    }


    try {

        let decrypted = CryptoJS.AES.decrypt(
            encrypted,
            password
        );


        let result = decrypted.toString(
            CryptoJS.enc.Utf8
        );


        if (!result) {
            result = "Invalid password or encrypted text";
        }


        document.getElementById("decryptedOutput").value = result;


    } catch(e) {

        document.getElementById("decryptedOutput").value =
            "Decryption failed";

    }

}
