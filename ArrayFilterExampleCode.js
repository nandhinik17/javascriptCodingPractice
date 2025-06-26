const person =[
    {name: "Nandhu", age: 29},
    {name: "Gowtham", age: 30},
     {name: "Kavitha", age: 32},
     {name: "Raji", age: 32},
     {name: "Elaki", age: 31},
    ];
    
    
const filterData = person.filter(person=>{
    return person.age>30;
});
console.log(filterData);
