const storeName = "TechLink";
let storeLocation = "SM Bacoor, Cavite";
let storeCapacity = 250;

console.log(`Store Name: ${storeName}`);
console.log(`Store Location: ${storeLocation}`);

//product array
let product = [
	{name: "Laptop", price: 18999, quantity: 50},
	{name: "Smartphone", price: 9999, quantity: 100},
	{name: "Tablet", price: 12999, quantity: 80}
];

//calculate total inventory
let totalInventory = 0;

for (let i = 0; i < product.length; i++){
	totalInventory += product[i].quantity;

}
console.log(`Total Number of Product: ${totalInventory}`);

//calculate total value
let totalInventoryValue = 0;

for (i = 0; i < product.length; i++){
	totalInventoryValue += product[i].price * product[i].quantity;

}
console.log(`Total Inventory Value: ${totalInventoryValue}`);

//modify quantity of laptop
modifiedQuantity = product[0].quantity + 10;
console.log(`Update Laptop Quantity: ${modifiedQuantity}`);

//Most expensive product
let expValue = 0;

for (i = 0; i < product.length; i++) {

	if (expValue < product[i].price) {
		expValue = product[i].name; 
	}
}
console.log(`Most Expensive Product: ${expValue}`);

product.push({name: "Headset", price: 1500, quantity: 20});

for (i = 0; i < product.length; i++) {
	totalInventoryValue += product[i].price * product[i].quantity;
}
console.log(`Updated Total Inventory Value: ${totalInventoryValue}`);