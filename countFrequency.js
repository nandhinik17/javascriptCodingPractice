function countFrequency(str){
   const map = new Map();
   const arr = str.split('');
   arr.forEach(ch=>{
       if(!(map.has(ch))){
           map.set(ch, 1);
       }
       else{
           map.set(ch,map.get(ch)+1);
       }
   })
   console.log(map);
}
countFrequency("Nandhini");
