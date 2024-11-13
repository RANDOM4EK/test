const obj = {
    title: 'string',
    author: [{ name: 'name', birthYear: 1980 }],
    publishedYear: 2000,
    genre: 'string'
};
const getCar = (obj) => {
    console.log(obj);
};
getCar(obj);
export {};
