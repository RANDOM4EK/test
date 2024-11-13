function identity<T>(box:T){
    console.log(box)
}
identity<number>(42)

function getArray<T>(arr:T){
    console.log(arr)
}
const arrNum:number[] = [42,43,32,12]
getArray(arrNum)