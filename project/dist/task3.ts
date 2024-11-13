type car = {
    make: string,
    model: string,
    year: number,
    isElectric: boolean
}

const obj: car ={
    make: 'string',
    model: 'string',
    year: 2000,
    isElectric: false
}
const getCar = (obj:{}) => {
    console.log(obj)
}
getCar(obj)