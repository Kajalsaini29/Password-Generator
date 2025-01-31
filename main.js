
function generatePassword() {
    const length = document.getElementById('length').value;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;
            
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';
            
    let allChars = '';
    if (includeLowercase) allChars += lowercaseChars;
    if (includeUppercase) allChars += uppercaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;
            
    if (allChars === '') {
        alert('Please select at least one character type.');
        return;
    }
            
    let password = '';
    for (let i = 0; i < length; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
            
    document.getElementById('password').value = password;
    }
        
    function copyPassword() {
        const passwordField = document.getElementById('password');
        passwordField.select();
        document.execCommand('copy');
        alert('Password copied to clipboard!');
    }
