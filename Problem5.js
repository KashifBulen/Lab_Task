let find_average_and_Max = function(){
    let return_array =  new Array();
    let sum = 0;

    for(let i = 0; i<arguments.length ; i++){
        sum = sum + arguments[i];
     }
    return_array.push(sum/arguments.length);
    return_array.push(Math.max.apply(Math,arguments));
    return return_array;
     
}
let output = find_average_and_Max(4,5,7,3,2,6,8,7,9);
console.log("Average is : ", output[0],"\n","Max number is: ", output[1]);