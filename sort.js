const newArr=[1,5,3,2,8,1,10];
const sortArray = newArr.sort((a,b) => b-a);
console.log(sortArray); 

const ascArray = newArr.sort((a,b) => a-b);
console.log(ascArray); 

const names = ['Ali', 'Hamza', 'Ali', 'hamza'];
const namesArray = names.sort((a,b) => a.localeCompare(b));
console.log(newArr); 
const [first,second, ...restArray] = newArr;
console.log(restArray);
const mobjec = {
    password: 123,
    sect: 'hello',
    Killer: 'Yes'
};
const copy = {...mobjec};

console.log(copy);

const objextarc = {
    name: "ok",
    age: 46,
    city: "LA"
}
const{name,age} = objextarc;
console.log(name, age);