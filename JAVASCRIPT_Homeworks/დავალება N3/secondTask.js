const Phrase = "   $this is a String which includes symbols: %$#@   "

const stringTitle = document.getElementById('stringTitle')
stringTitle.innerHTML = Phrase
WordArray = []

const ResetButtonFunc = () => {
    window.location.reload()
}

const middleWordFunc = () => {
    splitWord = Phrase.split(' ')
    stringTitle.innerHTML = splitWord
    resultSplit = splitWord[Math.floor(splitWord.length / 2)]
    console.log(resultSplit)
    stringTitle.innerHTML = resultSplit
}

const replaceWordFunc = () => {
    const FromInput = document.getElementById('fromInput')
    const ToInput = document.getElementById('toInput')
    fromCred = FromInput.value
    toCred = ToInput.value
    replaceWord = Phrase.replace(fromCred, toCred)
    stringTitle.innerHTML = replaceWord
}

const createArrayFunc = () => {
    splitWord = Phrase.split(' ')
    for(let i = 0; i < splitWord.length; i++){
       WordArray.push(splitWord[i])
    }
    console.log(WordArray)
}

const ifIncludesFunc = () => {
    const includesOrNot = document.getElementById('includesOrNot')
    const inputIncludesOrNot = document.getElementById('inputIncludesOrNot')
    
    if(Phrase.toLowerCase().includes(inputIncludesOrNot.value)){
        includesOrNot.style.color = "green"
        includesOrNot.innerHTML = "დიახ შეიცავს"
        
    }else{
        includesOrNot.style.color = "red"
        includesOrNot.innerHTML = "არა, არ შეიცავს"

    }
}


const upperCaseFunc = () => {
    titleToUpperCase = Phrase.toUpperCase()
    stringTitle.innerHTML = titleToUpperCase
}

const trimSpaceFunc = () => {
    titleTrim = Phrase.trim()
    stringTitle.innerHTML = titleTrim
}

const firstLetterStartFunc = () => {
    const firstLetterMsg = document.getElementById('firstLetterMessage')
    firstLetterInput = document.getElementById('firstLetterInput')

    const resultLetter = firstLetterInput.value
    if(Phrase.trim().charAt(0) === firstLetterInput.value){
        firstLetterMsg.innerHTML = 'დიახ ტექსტი იწყება "' + firstLetterInput.value + '" ასო / სიმბოლოთი'
        firstLetterMsg.style.color = "green"
    }else if(firstLetterInput.value.length > 1){
        firstLetterMsg.innerHTML = "თქვენ უნდა შეიყვანოთ მხოლოდ ერთი ასო / სიმბოლო"
        firstLetterMsg.style.color = "red"
    }else{
        firstLetterMsg.innerHTML = 'არა ტექსტი არ იწყება "'+ firstLetterInput.value + '" ასო სიმბოლოთი'
        firstLetterMsg.style.color = "yellow"
    }
}









const resetBtn = document.getElementById('ResetButton')
resetBtn.setAttribute('onclick', 'ResetButtonFunc()')

const middleWordBtn = document.getElementById('middleWordButton')
middleWordBtn.setAttribute('onclick', 'middleWordFunc()')

const replaceBtn = document.getElementById('replaceButton')
replaceBtn.setAttribute('onclick', 'replaceWordFunc()')

const createArrayBtn = document.getElementById('createArrayButton')
createArrayBtn.setAttribute('onclick', 'createArrayFunc()')

const ifIncludesBtn = document.getElementById('ifIncludesButton')
ifIncludesBtn.setAttribute('onclick', 'ifIncludesFunc()')

const upperCaseBtn = document.getElementById('upperCaseButton')
upperCaseBtn.setAttribute('onclick', 'upperCaseFunc()')
const trimSpaceBtn = document.getElementById('trimSpaceButton')
trimSpaceBtn.setAttribute('onclick', 'trimSpaceFunc()')

const firstLetterBtn = document.getElementById('firstLetterButton')
firstLetterBtn.setAttribute('onclick', 'firstLetterStartFunc()')