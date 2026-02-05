function multiply(num1,num2){
    if(typeof num1 !=='number' || typeof num2 !=='number'){
        return 'please provide number'
    }
    const result =num1*num2;
    return result;
}
const result=multiply('hi',5);
console.log(result);

function fullName(firstName,lastName){
    if(typeof firstName !=='string'){
        return 'first name should be string';
    }
    else if(typeof lastName !=='string'){
        return 'last name should be string'
    }
    const name=firstName+' '+lastName;
    return name;
}
const name=fullName('hablu','bablu');
console.log(name);
