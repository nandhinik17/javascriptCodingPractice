function fetchData(callback){
    let data= "BackEnd Data";
    console.log("Fetching Data...");
    callback(data);
}

function processData(data)
{
    console.log("Process The Data...." + data);
}
fetchData(processData);
