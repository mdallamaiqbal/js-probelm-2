function maxOfThree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        const result ='num1 is big';
        return result;
    }else if(num2>num1 && num2>num3){
        const result ='num2 is big';
        return result;
    }else{
        const result ='num3 is big';
        return result;
    }
}

const showTheBigNum=maxOfThree(120,40,90);
console.log(showTheBigNum);

