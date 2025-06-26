const user = {
  name: "Nandhini",
  age: 27,
  city: "Coimbatore"
};
//accessing objects
console.log(user.name);
console.log(user['name']);
//loops
for(let key in user){
    console.log(key + " " + user[key]);
}

//convert object to array
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
