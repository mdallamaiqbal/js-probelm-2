const phone=[
    {name:'Samsung', price:20000,camera:'12mp',color:'black'},
    {name:'Nokia', price:25700,camera:'12mp',color:'black'},
    {name:'Xaomi', price:22000,camera:'12mp',color:'black'},
    {name:'itel', price:15000,camera:'12mp',color:'black'},
    {name:'walton', price:32000,camera:'12mp',color:'black'}
]

function largestPhone(phones){
    let largestPhonePrice=phone[0]
   for(const phone of phones){
     if(phone.price>largestPhonePrice.price){
        largestPhonePrice=phone;
     }
   }
   return largestPhonePrice;
}
const maxPrice=largestPhone(phone);
console.log('largest phone is:',maxPrice);

function cheapestPhone(mobiles){
  let minPrice=phone[0];
  for(const mobile of mobiles ){
    if(mobile.price<minPrice.price){
        minPrice=mobile;
    }
  }
  return minPrice;
}
const minPrice=cheapestPhone(phone);
console.log('cheapest phone is:',minPrice);
