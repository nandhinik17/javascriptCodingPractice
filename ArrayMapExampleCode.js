const person =[
    {name: "Nandhu", age: 29},
    {name: "Gowtham", age: 30},
     {name: "Kavitha", age: 32},
     {name: "Raji", age: 32},
     {name: "Elaki", age: 31},
    ];
    
    
const upperCaseName = person.map(p=>{
    return p.name.toUpperCase();
})


console.log(upperCaseName);
