const mainInfo = {
    firstName: "john",
    lastName: "Doe",
    birthYear: 2000,
    currentYear: new Date().getFullYear(),
}
const {firstName, lastName, birthYear, currentYear} = mainInfo
const age = currentYear - birthYear
const result = firstName +" "+ lastName  +" is "+ age +" years old,"

if(age >= 17){
    console.log(result + " and he is allowed to drive")
}else if(age < 17){
    console.log(result +" and he is not allowed to drive")
}else{
    console.log("Error")
}
