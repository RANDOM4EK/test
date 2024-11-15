// interface IUser {
//   price: number[];
//   quantity: number[];
// }
// const tovar: IUser = {
//   price: [2000, 3000, 4000],
//   quantity: [2, 3, 4],
// };
export {};
// function totalPrice(obj: IUser):number {
//   let arr = obj.price
//     .map((x, i) => x * obj.quantity[i])
//     .reduce((acc, value) => acc + value);
//   return arr
// }
// console.log(totalPrice(tovar));
// interface IUser {
//   email: string;
// }
// const person: IUser = {
//     email:'test@gmail.com'
// };
// const person2: IUser = {
//     email:'test@gmailcom'
// };
// function correctEmail (obj:IUser){
//     if(obj.email.includes('@') && obj.email.includes('.')){
//         if(obj.email.split('@').map((x)=>x.length>0) &&obj.email.split('.').map((x)=>x.length>0)){
//             return true
//         }
//     }else{
//         return false
//     }
// }
// console.log(correctEmail(person))
// console.log(correctEmail(person2))
// let str:string[] =['a','b','c','d','f']
// let upStr:string[] = ['A','B','C','D','F']
// let randomStrIndex = Math.floor(Math.random() * str.length);
// let randomUpStrIndex = Math.floor(Math.random() * upStr.length);
// let randomFirsNum = Math.floor(Math.random() * 10000);
// let randomMidlNum = Math.floor(Math.random() * 10000);
// let randomLastNum = Math.floor(Math.random() * 10000);
// console.log(randomFirsNum+str[randomStrIndex]+randomMidlNum+upStr[randomUpStrIndex]+randomLastNum);
// let tovar = [
//     {
//         name: 'asd',
//         price: 850
//     },
//     {
//         name: 'asd2',
//         price: 350
//     },
//     {
//         name: 'asd3',
//         price: 1250
//     }
// ]
// function sort(tovar: { name: string, price: number }[]){
//     let result = tovar.filter((a)=> a.price >600)
//     console.log(result)
// }
// sort(tovar)
// let test = [
//     {
//         name:'test1',
//         grade:4
//     },{
//         name:'test2',
//         grade:4
//     },{
//         name:'test3',
//         grade:4
//     }
// ]
// function totalGrade(arr:{name:string,grade:number}[]){
//     let result = arr
//     .map((x)=>x.grade)
//     .reduce((acc,cur)=>acc+cur)
//     let result2 = arr.map((x)=>x.grade)
//     console.log(Math.floor(result/result2.length))
// }
// totalGrade(test)
// let test = [
//     {
//         password:'21gd653ik234',
//         email:'test1@gmail.com'
//     },{
//         password:'test2',
//         email:'gmail'
//     },{
//         password:'2',
//         email:'hello@gmail.com'
//     }
// ]
// function validate_value(arr:{password:string,email:string}[]){
//     let lengthPassword = arr.map((x)=>x.password)
//     let lengthEmail = arr.map((x)=>x.email)
//     lengthPassword.forEach((elem)=>{
//         if(elem.length<6){
//             console.log('Не надёжный пароль')
//         }
//         else{
//             console.log('Надёжный пароль')
//         }
//     })
//     lengthEmail.forEach((elem)=>{
//         if(elem.includes('@') && elem.includes('.')){
//             console.log('Верный адресс')
//         }
//         else{
//             console.log('Не верный адресс')
//         }
//     })
// }
// validate_value(test)
// interface IUser{
//     age:number,
//     name:string,
//     surname:string,
//     email:string,
//     password:string
// }
// const obj:IUser ={
//     age:20,
//     name:'string',
//     surname:'string',
//     email:'string',
//     password:'string'
// }
// console.log(obj)
// let test = [
//     {
//         speed:2,
//         distance:1000
//     },{
//         speed:10,
//         distance:2000
//     },{
//         speed:4,
//         distance:400
//     }
// ]
// function name(params:{speed:number,distance:number}[]) {
//     let result = params.map((x)=>x.speed)
//     let result2 = params.map((x)=>x.distance)
//     let result3 = result2.map((x,i)=>x / result[i])
//     console.log(result)
//     console.log(result2)
//     console.log(result3)
// }
// name(test)
// let test = [
//     {
//         name:'test',
//         couter:2
//     },{
//         name:'test',
//         couter:12
//     },{
//         name:'test',
//         couter:0
//     }
// ]
// function hasTovar(tovar:{name:string,couter:number}[]){
//     let result = tovar.map((x)=>x.couter)
//     result.forEach((elem)=>{
//         if(elem <= 0){
//             console.log('нет в наличии')
//         }
//         else{
//             console.log('есть в наличии')
//         }
//     })
// }
// hasTovar(test)
// let test = [
//     {
//         name:'USD',
//         currency:2
//     },{
//         name:'RUB',
//         currency:12
//     }
// ]
// function converter(converter:{name:string,currency:number}[]){
//     let sum = converter.map((x)=>x.currency)
//     let rubUsd = 0.1
//     let usdRub = 10
//     console.log(sum[1]*rubUsd)
//     console.log(sum[0]*usdRub)
// }
// converter(test)
// let test = [
//     {
//         name:'Уборка',
//         priority:3
//     },{
//         name:'Готовка',
//         priority:4
//     },{
//         name:'Вышивание',
//         priority:1
//     },{
//         name:'Чтение',
//         priority:2
//     }
// ]
// function sort(priority:{name:string,priority:number}[]){
//     return priority.sort((a, b) => b.priority - a.priority);
// }
// console.log(sort(test))
// let test = [
//     {
//         user:'user1',
//         like:1
//     },{
//         user:'user2',
//         like:1
//     },{
//         user:'user3',
//         like:0
//     },{
//         user:'user4',
//         like:1
//     }
// ]
// function accLike(like:{user:string,like:number}[]){
//     let result = like.reduce((acc,x)=>acc + x.like,0)
//     console.log(result)
// }
// accLike(test)
// let test = [
//     {
//         version:'1.2.3'
//     },{
//         version:'1.2.3'
//     }
// ]
// function takeVersion(version:{version:string}[]){
//     let arrStr = version
//     .map((x)=>x.version)
//     let arrNum = arrStr.map(x=>x.split('.').map(Number))
//     let vers1 = arrNum[0] || 0
//     let vers2 = arrNum[1] || 0
//     vers1.forEach((elem,i)=>{
//         if(elem > vers2[i]){
//             console.log(1)
//         }
//         if(elem < vers2[i]){
//             console.log(2)
//         }
//     })
// }
// takeVersion(test)
// let test = [
//     {
//         name:'user',
//         shoulders:48,
//         breast:52,
//         hight:72
//     }
// ]
// function takeParams(params:{name:string,shoulders:number,breast:number,hight:number}[]){
//     const sizeRanges = [
//         {
//             size: 'S',
//             shoulders: { min: 45, max: 47 },
//             breast: { min: 49, max: 51 },
//             hight: { min: 70, max: 71 }
//         },
//         {
//             size: 'M',
//             shoulders: { min: 48, max: 50 },
//             breast: { min: 52, max: 54 },
//             hight: { min: 72, max: 74 }
//         }
//     ];
//     for (let size of sizeRanges) {
//         const matches = params.some((x) => 
//             x.shoulders >= size.shoulders.min && x.shoulders <= size.shoulders.max &&
//             x.breast >= size.breast.min && x.breast <= size.breast.max &&
//             x.hight >= size.hight.min && x.hight <= size.hight.max
//         );
//         if (matches) {
//             console.log(size.size);
//         }
//     }
// }
// takeParams(test)
