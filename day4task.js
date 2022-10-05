//task1
var req = new XMLHttpRequest();

req.open ("GET","https://restcountries.com/v2/all");

req.send();

req.onload = function(){
    var res = JSON.parse(req.response);
    //console.log(res);
    for(var key in res){
        console.log(res[key].flag);
        console.log("Name:",res[key].name,"subregion:",res[key].subregion,"population:",res[key].population);
    }
//task 1

var obj1 = {"name":"person1","age":"5"};
var obj2 = {"age":"5","name":"person1"};

var flag=true;

if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] == obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("is object equal"+flag);}