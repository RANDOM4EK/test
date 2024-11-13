type Author ={
    name: string,
    birthYear: number
}
interface Book  {
    title: string,
    author : Author[],
    publishedYear: number,
    genre: string
}
const obj:Book = {
    title: 'string',
    author:[{name: 'name', birthYear:1980}],
    publishedYear: 2000,
    genre: 'string'
}
const getCar = (obj:{}) => {
    console.log(obj)
}
getCar(obj)