const firstCredential = prompt("შეიყვანე პირველი რიცხვი/ციფრი არითმეტიკული ოპერაციისთვის")
Number(firstCredential)

const Operator = prompt("შეიყვანე არითმეტიკული ოპერატორი ( + - * /)")

const secondCredential = prompt("ახლა შეიყვანე მეორე რიცხვი/ციფრი არითმეტიკული ოპერაციისთვის")

Number(secondCredential)
if(!firstCredential || !Operator || !secondCredential){
    alert("აუცილებელია მონაცემის შეყვანა")
}
const result = eval(firstCredential + Operator + secondCredential)

alert(result)

alert("მზად ხარ მეორე დავალებისთვის? მაშინ გლიჯე OK-ის")

const passPhrase = "itstep2023"

const passPrompt = prompt("შეიყვანე პაროლი")

if(passPrompt === passPhrase){
    document.body.style.display = "flex"
    document.body.style.flexDirection = "column"
    document.body.style.alignItems = "center"
    const element = document.createElement('h1')
    element.innerText = "Congradulation"
    document.body.appendChild(element)
}else{
    console.log("პაროლი არასწორია")
}