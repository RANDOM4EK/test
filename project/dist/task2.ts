interface IUser {
    name : string,
    age : number,
    email : string
}

const person :IUser = {
    name: 'Roma',
    age : 19,
    email : 'person@gmail.com'
}
console.log(person.name)