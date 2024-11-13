const colors: string[] = ["Red", "Blue", "Green", "Yellow", "Purple"];
const numbers: number[] = [2,3,4,5,6]
interface Product {
    name:string,
    price:number
}
const products: Product[] = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

function test (colors:string[]){
    console.log(colors)
}
function test2 (numbers:number[]){
    console.log(numbers)
}
function test3 (products2:Product[]){
    console.log(products2)
}
test(colors)
test2(numbers)
test3(products)