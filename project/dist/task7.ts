
const car ={
    make:'test',
    model:'test2',
    yers:2006,
    isElectric:true
}
type carCarType = typeof car

function funk (obj: carCarType) {
    console.log(obj)
}
funk(car)