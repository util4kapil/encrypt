/*
 * AES Encrypt / Decrypt Utility
 * Uses CryptoJS AES
 *
 * Requires:
 * js/aes.js
 */


// ===============================
// AES Encrypt
// ===============================

function cryptAES(value, secret) {

    var encrypted = CryptoJS.AES.encrypt(
        value,
        secret
    );

    return encrypted.toString();
}


// ===============================
// AES Decrypt
// ===============================

function decryptAES(encryptedValue, secret) {

    var decrypted = CryptoJS.AES.decrypt(
        encryptedValue,
        secret
    );

    return decrypted.toString(
        CryptoJS.enc.Utf8
    );
}


// ===============================
// Encrypt Button Handler
// ===============================

function startEncryptAES() {

    var value = document.getElementById("value").value;
    var password = document.getElementById("secret").value;

    var output = document.getElementById("encrypted");

    try {

        output.value = cryptAES(
            value,
            password
        );

    } catch (e) {

        output.value = "Encryption error";

    }
}


// ===============================
// Decrypt Button Handler
// ===============================

function startDecryptAES() {

    var encrypted = document.getElementById("encryptedValue").value;
    var password = document.getElementById("decryptSecret").value;

    var output = document.getElementById("decrypted");

    try {

        var result = decryptAES(
            encrypted,
            password
        );

        if (result.length === 0) {
            output.value = "Invalid password or encrypted text";
        }
        else {
            output.value = result;
        }

    } catch (e) {

        output.value = "Invalid encrypted text";

    }
}


// ===============================
// Utility Functions
// ===============================

function clearField(id) {

    document.getElementById(id).value = "";

}


function copyField(id) {

    var field = document.getElementById(id);

    field.select();
    field.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(
        field.value
    );
}
