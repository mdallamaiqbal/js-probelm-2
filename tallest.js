const height=[12,35,85,35,22,12,3];
function getMax(numbers){
  let max=numbers[0]
  for(const num of numbers){
    if(num > max){
     max = num;
    }
  }
  return max
}
const max=getMax(height);
console.log(max);
