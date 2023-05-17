let passwordHistory = [];

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

    // store generated password and its timestamp
    const generatedPassword = {
        password,
        timestamp: new Date().toISOString()
    };
    passwordHistory.push(generatedPassword);
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

    // save password history to JSON file
    const passwordHistoryJSON = JSON.stringify(passwordHistory, null, 2);
    const blob = new Blob([passwordHistoryJSON], { type: 'application/json' });
    const filename = 'password_history.json';

    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        // For IE browser
        window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
        // For other browsers
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(url);
    }

    // show confirmation message
    alert('Password copied to clipboard!');
}
