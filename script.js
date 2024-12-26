const passwordBox = document.getElementById('password');
const copyIcon = document.getElementsByTagName('img')[0];
const button = document.getElementsByTagName('button')[0];

let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMSNOPQRSTUVWXYZ1234567890#!@$)(&*%_-?{}|)';
let length = 12;
let password = '';

while (password.length <= length) {
    password += letters[Math.floor(Math.random()*letters.length)]
}
console.log(password)

button.addEventListener('click', function () {
    console.log(passwordBox)
    passwordBox.value = password;
})

button.addEventListener('click',function copyPassword() {
    passwordBox.select();
    document.execCommand('copy');
})

copyIcon.addEventListener('click',function(){
    passwordBox.value='';
})