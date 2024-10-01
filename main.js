
const passwordBox = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const selectLengthBtns = Array.from(document.getElementById('select-length-btns').children);
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
const numbers = "0123456789";
const allChars = upperCaseLetters + lowerCaseLetters + symbols + numbers;
let passwordLengthSelection = [8, 12, 16, 20];
let passwordLength = 8;

function selectPasswordLength() {
    selectLengthBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            passwordLength = passwordLengthSelection[btn.dataset.number];
            document.getElementById('select-length-btns').classList.add('hide');
            selectLengthBtns.forEach(btn => {
                btn.disabled = true;
            });
            createPassword();
        });
    });
}

function createPassword() {
    let password = "";
    while (password.length !== passwordLength) {
        let randomChar = allChars[Math.floor(Math.random() * allChars.length)];
        if (!password.includes(randomChar)) {
            password += randomChar;
        }
    }
    passwordBox.value = password;
}

generateBtn.addEventListener('click', () => {
    document.getElementById('select-length-btns').classList.toggle('hide');
    selectLengthBtns.forEach(btn => {
        btn.disabled = !btn.disabled
        if (btn.disabled) {
            btn.style.cursor = 'auto';
        }
        else {
            btn.style.cursor = 'pointer';
        }
    });
    if (!document.getElementById('select-length-btns').classList.contains('hide')) {
        selectPasswordLength();
    }
});

copyBtn.addEventListener('click', _ => navigator.clipboard.writeText(passwordBox.value));


