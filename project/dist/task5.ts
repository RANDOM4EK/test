interface Cat {
    name:string,
    age: number
}
interface Dog {
    weight:number,
    breed:string
}
type Pet = Cat | Dog

const obj1:Cat = {
    name: 'name',
    age:12,
}
const obj2:Dog = {
    weight:20,
    breed:'breed'
}

const getCar = (pet: Pet) => {
    console.log(pet)
}
getCar(obj1)
getCar(obj2)