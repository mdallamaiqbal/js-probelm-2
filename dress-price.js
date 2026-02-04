function dressPrice(shirtQuntity,pantQuntity,shoeQuntity){
    const shirtPrice=500;
    const panPrice =300;
    const shoePrice=900;

    const shirtTotal=shirtQuntity*shirtPrice;
    const pantTotal=pantQuntity*panPrice;
    const shoeTotal=shoeQuntity*shoePrice;
    const totalDress=shirtTotal+pantTotal+shoeTotal;
    return totalDress;
}

const dress=dressPrice(0,0,1);
console.log(dress);
