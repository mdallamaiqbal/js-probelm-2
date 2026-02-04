const height=[12,35,85,35,22,12,3];
function getMin(numbers){
    let min =numbers[0];
 for(const num of numbers){
   if(num<min){
     min = num;
   }
 }
 return min
}
const min =getMin(height);
console.log(min);



