interface Person {
    name:string,
    age: number
}
interface Employee {
    weight:number,
    breed:string
}
type EmployeeProfile = Person & Employee

const obj1:EmployeeProfile = {
    name:'name',
    age: 12,
    weight: 28,
    breed: 'breed'
}


const getCar = (employeeProfile: EmployeeProfile) => {
    console.log(employeeProfile)
}
getCar(obj1)