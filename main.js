

    function getPassword() {
        let length = document.getElementById('length').value;
        if (length === '') {
            length = 8; // Setting default length to 8
        }
        
        const includeLowercase = document.getElementById('includeLowercase').checked;
        const includeUppercase = document.getElementById('includeUppercase').checked;
        const includeSymbols = document.getElementById('includeSymbols').checked;
        const includeNumbers = document.getElementById('includeNumbers').checked;

      
        let chars = '';
        if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz';
        if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (includeSymbols) chars += '!@#$%&';
        if (includeNumbers) chars += '0123456789';
    
        let password = '';
        for (let i = 0; i < length; i++) {
            console.log(chars.charAt(Math.floor(Math.random()*chars.length)));
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
    
        document.getElementById('password').value = password;
    }
    

