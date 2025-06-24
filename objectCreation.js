function objectCreation(){
   const person={
       name: "Nandhini",
       age: 27,
       num: "72829929292"
   }
  console.log(person);
  console.log("****************************************************")
  const person1 = new Object();
  person1.name="Gowtham";
  person1.age=30;
  person1.num = "626262626";
  console.log(person1)
  console.log("****************************************************")
  const person2 = new Object();
  person2["name"]="Kavi";
  person2["age"]=27;
  console.log(person2);
  console.log("****************************************************")
  const person3={
      name: "Nandhini",
      age: 27,
      action: function(){
          console.log("Automation Tester");
      }
  }
  console.log(person3)
}
objectCreation();
