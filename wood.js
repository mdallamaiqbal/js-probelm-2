function woodQuantity(chairQuntity,tableQuntity,bedQuantity){
    const chairWood=3;
    const tableWood=10;
    const bedWood=50;
    const chairTotal=chairQuntity*chairWood;
    const tableTotal=tableQuntity*tableWood;
    const bedTotal=bedQuantity*bedWood;
    const totalWood=chairTotal+tableTotal+bedTotal;
    return totalWood;
}
const wood=woodQuantity(1,0,3);
console.log(wood);
