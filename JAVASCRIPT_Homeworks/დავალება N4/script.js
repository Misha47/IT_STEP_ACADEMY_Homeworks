const numbersTitleP = document.getElementById('fromZeroToInputTitle');
const numbersDiv = document.getElementById('numbersFromZeroToDiv');
const taskInput = document.getElementById('taskInput')


const firstTaskBtn = document.getElementById('firstTaskBtn')

const secondTaskBtn = document.getElementById('secondTaskBtn')

const thirdTaskBtn = document.getElementById('thirdTaskBtn')

const fourthTaskBtn = document.getElementById('fourthTaskBtn')

const fifthTaskBtn = document.getElementById('fifthTaskBtn')

const sixthTaskBtn = document.getElementById('sixthTaskBtn')

const seventhTaskBtn = document.getElementById('seventhTaskBtn')


const firstTaskFunc = () => {
    let arr = []
    numVal = Number(taskInput.value)
    for(let i=1; i < numVal; i++){
        arr.push(' '+ i)
        numbersTitleP.textContent = arr.toString()
    }
}


const secondTaskFunc = () => {
    let arr = []
    numVal = taskInput.value
    const numFinal = numVal.split(",")
    if(numFinal.length === 2){
        for(let i=0; i <= numFinal[0]; i++){
            if(numFinal[1] % i === 0){
                arr.push(i)
                numbersTitleP.textContent = numFinal[0] +"-მდე რიცხვები, რომლებიც უნაშთოთ იყოფიან "+ numFinal[1] +"-ზე: "+ arr.toString()
            }
        }
    }else{
        numbersTitleP.textContent = "უნდა შეიყვანო მხოლოდ ორი რიცხვი/ციფრი."
    }

}

const thirdTaskFunc = () => {
    let arr = []
    let min_100 = 100
    let max_200 = 200

    let min_300 = 300
    let max_500 = 500

    randNumFirst = Math.round(Math.random() * (max_200 - min_100) + min_100)
    randNumSecond = Math.round(Math.random() * (max_500 - min_300) + min_300)
    
    if(randNumFirst % 5 === 0 && randNumSecond % 5 === 0){
        numbersTitleP.textContent = "100-დან 200-მდე:  "+ randNumFirst +" და 300-დან 500-მდე: "+ randNumSecond
    }else{
        numbersTitleP.textContent = "ჯერჯერობით დამთხვევა ვერ მოხდა. კიდევ სცადეთ"

    }
    
}

const fourthTaskFunc = () => {
    let min = 20
    let max = 50
    randNum = Math.round(Math.random() * (max-min) + min)
    for(let i=0; i <= 30; i++){
        if(randNum === i){
            numbersTitleP.textContent = "დამთხვევა: "+ randNum +" დაემთხვა ციკლის რიცხვ"+ i +"-ს. არიქა"
            break;
        }else{
            numbersTitleP.textContent = "დამთხვევა ვერ მოხდა დევიღუპეთ.(კიდევ სცადეთ)"
            
        };
    }
    return true;
}


const fifthTaskFunc = (n) => {
    if (n > 1 && n <= 6) {
        return n * fifthTaskFunc(n-1);
    }else if(n === 0){
        return 0;
    }else {
        return 1;
    }
}

const sixthTaskFunc = () => {
    let arr = []
    let num = Number(taskInput.value)
    for(let i=0; i <= num; i++){
        if(num % i === 0){
            arr.push(i)
        }
    }
    if(arr.length === 2){
        numbersTitleP.textContent = num +" მარტივია."

    }else if(arr.length > 2){
        numbersTitleP.textContent = num +" შედგენილია"
    }
}

firstTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    firstTaskFunc()
})

secondTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    secondTaskFunc()
})

thirdTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    thirdTaskFunc()
})

fourthTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    fourthTaskFunc()
})

fifthTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let num = Number(taskInput.value)
    if(num < 6){
        numbersTitleP.textContent = num +"-ის ფაქტორიალია: "+ fifthTaskFunc(num)
    }else if(isNaN(num)){
        numbersTitleP.textContent = "უნდა შეიყვანო მხოლოდ ციფრი"
        
    }else{
        numbersTitleP.textContent = "უნდა შეიყვანო 6-ზე ნაკლები ციფრი"

    }
})

sixthTaskBtn.addEventListener('click', (e) => {
    e.preventDefault()
    sixthTaskFunc()
})





