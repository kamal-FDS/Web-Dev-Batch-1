const num=[1, 2, 3, 4,5];
console.log("numbers" ,num)
const[num1 ,num2,num3,...others]=num;
console.log("value" ,num1,num2,num3,others);
const value=[num1, num2, ...others];
console.log("value" , value)
