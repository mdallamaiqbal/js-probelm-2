const products=[
    {name:'Shampo',price:2400},
    {name:'Oil',price:2000},
    {name:'FaceWash',price:1400},
    {name:'Powder',price:400}
];

function getShoppingTotal(products){
   let total=0;
   for(const product of products){
     total =total+product.price
   }
   return total;
}
const total=getShoppingTotal(products);
console.log('total ajke khosbe: ',total);

const productsQuantity=[
    {name:'Shampo',price:2400,quantity:5},
    {name:'Oil',price:2000,quantity:2},
    {name:'FaceWash',price:1400,quantity:2},
    {name:'Powder',price:400,quantity:4}
];
function cartTotal(products){
   let total =0;
   for(const product of products){
     const thisProductCost=product.price*product.quantity;
    total=total+thisProductCost
   }
   return total;
}
const shoppingCart=cartTotal(productsQuantity);
console.log(shoppingCart);
