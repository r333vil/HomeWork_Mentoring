// You have an array of objects representing products. Each product has name, category, and price. Write a function that groups 
// the products by category and then returns an object that, for each category, contains the number of products in that category 
// and the average price of those products (rounded to two decimal places).

// Expected result:
// {
//   Fruits: { count: 3, averagePrice: 2.57 },
//   Vegetables: { count: 2, averagePrice: 2.00 }
// }

const products = [
  { name: "Banana", category: "Fruits", price: 3.5 },
  { name: "Apple", category: "Fruits", price: 2.0 },
  { name: "Carrot", category: "Vegetables", price: 1.5 },
  { name: "Spinach", category: "Vegetables", price: 2.5 },
  { name: "Orange", category: "Fruits", price: 2.2 },
  { name: "ORA", category: "Toys", price: 22}
];

const keyProducts = {};

products.forEach(curr => {
    const keyCategory = curr.category;
    const price = curr.price;
    if(!keyProducts[keyCategory]){
        keyProducts[keyCategory] = {
            count: 1,
            totalprice: price,
        }
    }else{
        keyProducts[keyCategory].count += 1
        keyProducts[keyCategory].totalprice += price
    }
})

Object.values(keyProducts).forEach(curr => {
    curr.averageprice = parseFloat((curr.totalprice / curr.count).toFixed(2));
})

console.log(keyProducts);
