function generatePassword() {
    // define possible characters for password
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-={}[]|\\:;<>,.?/~`';

    // concatenate all possible characters
    const allChars = lowercaseLetters + uppercaseLetters + numbers + symbols;

    // get length of password from input
    const lengthInput = document.getElementById('lengthInput');
    const length = lengthInput.value;

    // generate random password using possible characters
    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    // display generated password
    const passwordDisplay = document.getElementById('passwordDisplay');
    passwordDisplay.innerText = password;

    // enable copy button
    const copyButton = document.getElementById('copyButton');
    copyButton.disabled = false;

    // show pop-up message
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.innerText = 'Password generated!';
    copyMessage.style.display = 'block';

    // hide pop-up message after 2 seconds
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 2000);
}

function copyPassword() {
    // get password from display element
    const passwordDisplay = document.getElementById('passwordDisplay');
    const password = passwordDisplay.innerText;

    // create temporary textarea to copy password to clipboard
    const textarea = document.createElement('textarea');
    textarea.value = password;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);

    // copy password to clipboard
    textarea.select();
    document.execCommand('copy');

    // remove temporary textarea
    document.body.removeChild(textarea);

    // show pop-up message
    const copyMessage = document.getElementById('copyMessage');
    copyMessage.innerText = 'Password copied to clipboard!';
    copyMessage.style.display = 'block';

    // hide pop-up message after 2 seconds
    setTimeout(function() {
        copyMessage.style.display = 'none';
    }, 2000);
}
