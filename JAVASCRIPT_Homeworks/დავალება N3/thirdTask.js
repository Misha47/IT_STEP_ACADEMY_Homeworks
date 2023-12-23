const regexSize = /[A-z0-9]{8,20}/
const regexUpperCase = /([A-Z]){1,10}/
const regexLowerCase = /([a-z]){1,10}/
const regexDigits = /[0-9]{1,10}/
const regexSymbols = /([\!\@\#\$\%\^\&\*\(\)\_\+\?\<\>]){1,10}/

const inputRegex = document.getElementById('thirdTaskInput')
const valMsg01 = document.getElementById('thirdTaskValidationMessage01')
const valMsg02 = document.getElementById('thirdTaskValidationMessage02')
const valMsg03 = document.getElementById('thirdTaskValidationMessage03')
const valMsg04 = document.getElementById('thirdTaskValidationMessage04')
const valMsg05 = document.getElementById('thirdTaskValidationMessage05')


inputRegex.addEventListener('input', (e) => {
    
    //upperCase test
    if(regexUpperCase.test(e.target.value)){
        valMsg01.textContent = "უნდა შეიცავდეს დიდ ასოებს ✓"
        valMsg01.style.color = 'green'

    }else{
        valMsg01.textContent = "უნდა შეიცავდეს დიდ ასოებს 𐄂"
        valMsg01.style.color = 'red'
    }

    //lower case test
    if(regexLowerCase.test(e.target.value)){
        valMsg02.textContent = "უნდა შეიცავდეს პატარა ასოებს ✓"
        valMsg02.style.color = 'green'

    }else{
        valMsg02.textContent = "უნდა შეიცავდეს პატარა ასოებს 𐄂"
        valMsg02.style.color = 'red'
    }
    
    //digit test
    
    if(regexDigits.test(e.target.value)){
        valMsg03.textContent = "უნდა შეიცავდეს რიცხვს ✓"
        valMsg03.style.color = 'green'
        
    }else{
        valMsg03.textContent = "უნდა შეიცავდეს რიცხვს 𐄂"
        valMsg03.style.color = 'red'
    }

    //size test

    if(regexSize.test(e.target.value)){
        valMsg04.textContent = "უნდა იყოს 8 სიმბოლოზე მეტი ✓"
        valMsg04.style.color = 'green'

    }else{
        valMsg04.textContent = "უნდა იყოს 8 სიმბოლოზე მეტი 𐄂"
        valMsg04.style.color = 'red'

    }


    //Symbols test

    if(regexSymbols.test(e.target.value)){
        valMsg05.textContent = "უნდა შეიცავდეს სიმბოლოებს (!@%$&\*()\_-=+) ✓"
        valMsg05.style.color = "green"

    }else{
        valMsg05.textContent = "უნდა შეიცავდეს სიმბოლოებს (!@%$&\*()\_-=+) 𐄂"
        valMsg05.style.color = "red"

    }
})