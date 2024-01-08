const taskTitle = document.getElementById('taskTitle')
const taskMsg = document.getElementById('taskMessage')
const taskBtn = document.querySelectorAll('taskButton')

const msgWrapper = document.getElementById('msg-wrapper')


const taskFunc1 = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    taskTitle.textContent = "შექმენით მასივი ნებისმიერი ტიპის და რაოდენობის ელემენტებით. ეკრანზე გამოიტანეთ ამ მასივის სიგრძე."
    taskMsg.textContent = "["+ arr +"]"+" "+"სიგრძე: "+ arr.length
}


const taskFunc2 = () => {
    let arr = ['a', 'b', 'c'];
    arr[3] = "d"
    arr[1] = "x"
    taskTitle.textContent = "მოცემულია მასივი arr. ინდექსის გამოყენებით მასივს დაამატეთ ახალი ელემენტი - d, ხოლო რიგით მეორე ელემენტი ჩაანაცვლეთ x-ით."
    taskMsg.textContent = "ძველი: ['a', 'b', 'c'] "+"ახალი: " + "[" + arr + "]"
}


const taskFunc3 = () => {
    let arr = []
    arr.push('a', 'b', 'c')
    taskTitle.textContent ="მოცემულია ცარიელი მასივი arr. მეთოდი .push-ის გამოყენებით მასივს დაამატეთ ახალი ელემენტები 'a', 'b' და 'c'"
    taskMsg.textContent = "ცარიელი: " + "arr = []," + " და დამატებული: "  + "arr = [" + arr + "]"
}
const taskFunc4 = () => {
    let arr = [1, 2, 3, 4, 5];
    let key1 = 1;
    let key2 = 2;

    let result = arr[key1] + arr[key2]
    taskTitle.textContent = "მოცემულია მასივი arr და ცვლადები key1, key2. key1-ის ინდექსის მქონე მასივის ელემენტს მიუმატეთ key2 ინდექსის მასივის ელემნტი და შედეგი კონსოლზე გამოიტანეთ"
    taskMsg.textContent = "arr[key1] + arr[key2]" + " = " + result
}
const taskFunc5 = () => {
    let arr = ['a', 'b', 'c', 'd', 'e'];
    const delArr = (arr) => {
        delete arr[1]
        delete arr[3]
        return arr
    }
    taskTitle.textContent = "მოცემულია მასივი arr. ოპერატორი delete-ით წაშალეთ მასივის რიგით მე-2 და მე-4 ელემენტები. კონსოლზე გამოიტანეთ ჯერ მასივის სიგრძე და მერე თვით ეს მასივიც. შეიცვალა თუ არა მასივის სიგრძე?"
    taskMsg.textContent = "თავდაპირველად: " + "[" + arr + "]" + " " + "სიგრძეა: " + arr.length + ". " + "delete-ის შემდეგ: მასივი: " + delArr(arr) + " მისი სიგრძეა: " + arr.length + ". სიგრძე არ შეცვლილა რადგან delete ელემენტების მნიშვნელობას Undefined-ით ანაცვლებს.(,,)" 
}

const taskFunc6 = () => {
    let names = ['ხვიჩა', 'გოგა', 'მაკა', 'ანა', 'ინა']
    taskTitle.textContent = "მოცემულია მასივი ["+ names +"]. დაასორტირეთ მასივი ჯერ ანბანის თანმიმდევრობით, შემდეგ საწინააღმდეგოდ.შედეგები გამოიტანეთ ეკრანზე."
    taskMsg.textContent = "თანმიმდევრობით: " + "[" + names.sort() + "]" + " " + "და საწინააღმდეგოდ(Reverse): " + "[" + names.reverse() + "]"
}
const taskFunc65 = () => {
    let arr = [11, 22, 33, 44, 55];
    let finalArr = arr[arr.length - 1];
    taskTitle.textContent = "მოცემულია კოდი: let arr = [11, 22, 33, 44, 55]; \n console.log(arr[arr.length]); რომელმაც კონსოლზე უნდა გამოიტანოს მასივის ბოლო ელემენტი. აღმოაჩინეთ შეცდომა კოდში."
    taskMsg.textContent = "პასუხი: arr[arr.length - 1] = " + finalArr + ". რადგან მასივში ინდექსაცია 0-დან იწყება, მასივის სიგრძე 1-ით მეტია ამავე მასივის ბოლო ელემენტის ინდექსზე."
}
const taskFunc7 = () => {
    let arr = [10, 11, 12, 13, 14];
    console.log(arr.length);
    taskTitle.textContent = "მოცემულია კოდი: let arr = {10, 11, 12, 13, 14}; console.log(arr.length]); რომელმაც კონსოლზე უნდა გამოიტანოს მასივის სიგრძე. აღმოაჩინეთ შეცდომა კოდში."
    taskMsg.textContent = "შეცდომა: 1) მასივი ოთხკუთხედი ფრჩხილებით იწერება. 2) arr.length-ის ბოლოში ოთხკუთხედი ფრჩხილი არ უნდა"
}
const taskFunc8 = () => {
    taskTitle.textContent = "მოცემულია კოდი: let arr = [10, 11, 12, 13, 14]; console.log(arr.lenght);  რომელმაც კონსოლზე უნდა გამოიტანოს მასივის სიგრძე. აღმოაჩინეთ შეცდომა კოდში."
    taskMsg.textContent = "პასუხი: length და არა lenght"
}
const taskFunc9 = () => {
    let arr = [1, 2, 3, 4, 5, 6, 7]
    taskTitle.textContent = "შექმენით ფუნქცია getBlankArray ისე, რომ მან [" + arr + "]-სგან დააბრუნოს ცარიელი მასივი."
    const getBlankArray = () => arr.slice(0, -arr.length)

    taskMsg.textContent = "თავდაპირველად: arr = [" + arr + "]. getBlankArray() შემდეგ: arr[" + getBlankArray() + "]."
    //splice() აბრუნებს ამოშლილ ელემენტებს და arr მასივს ცვლის

    //slice() აბრუნებს მასივის ელემენტებს და ძველ arr მასივს ხელუხლებელს ტოვებს

}


const taskFunc10 = () => {
    let components = [1, 2, 3, 6, 5, 3]
    const getNumOfComponents = (array) => array.length

    taskTitle.textContent = "შექმენით ფუნქცია getNumOfComponents ისე, რომ მან დააბრუნოს მასზე გადაცემული components მასივის ელემენტების რაოდენობა. ამ შემთხვევაში: components=[" + components + "]"
    taskMsg.textContent = "components მასივის ელემენტების რაოდენობაა: " + getNumOfComponents(components)
}


const taskFunc11 = () => {
    const arr1 = [1, 2, 5, 6, 4, 7, 8, 4]

    const priceSum = (arr) => {
        let count = 0
        for(let i of arr1){
            count += i
        }
        return count

    }
    taskTitle.textContent = "განსაზღვრეთ ისრული ფუნქცია priceSum, რომელიც დააბრუნებს მასზე გადაცემული ფასების მასივის ჯამს."
    taskMsg.textContent = "მასივი: [" + arr1 + "]" + "და მისი ჯამი" + priceSum(arr1)
}

const taskFunc12 = () => {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego'];
    const addBoll = (arr) => {
        arr.push("ბურთი")
        return arr
    }
    taskTitle.textContent = 'შექმენით ფუნქცია addBoll ისე, რომ მან დაამატოს "ბურთი" მასზე გადაცემულ toys მასივს და დააბრუნოს იგივე მასივი.'
    taskMsg.textContent = "toys= ['ოვერბორდი', 'პაზლი', 'Lego'] და addBoll(toys) შემდეგ [" + addBoll(toys) + "]"
}

const taskFunc13 = () => {
    let toys = ['ჰოვერბორდი', 'პაზლი', 'Lego'];
    let toy = 'Yo-yo'
    function addToy(toys, toy){
        toys.push(toy)
        return toys
    }
    taskTitle.textContent = "მოცემულია მასივი toys და ცვლადი toy. შექმენით ფუნქცია addToy, რომელსაც გადაეცემა პარამეტრებად ცვლადი toy და მასივი toys. ფუნქციამ უნდა დააბრუნოს toys მასივი, რომელშიც დამატებული იქნება toy ცვლადის მნიშვნელობა."
    taskMsg.textContent = "[" + addToy(toys, toy) + "]"
}

const taskFunc14 = () => {
    let toys = ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo'];
    const getLastToy = (arr) => arr[arr.length - 1]
    taskTitle.textContent = "შექმენით ფუნქცია getLastToy, ისე რომ დააბრუნოს მასზე გადაცემული მასივის ბოლო ელემენტი. ამ შემთხვევაში: ['ოვერბორდი', 'პაზლი', 'Lego', 'Yo-yo']"
    taskMsg.textContent = "[" + getLastToy(toys) + "]"
}