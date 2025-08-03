let itemList = [
  { code: 1, title: "Shirt", rate: 450, count: 2 },
  { code: 2, title: "Jeans", rate: 900, count: 0 },
  { code: 3, title: "Cap", rate: 200, count: 1 },
  { code: 4, title: "Shoes", rate: 1500, count: 3 }
];

let inStock = itemList.filter(function(product) {
  return product.count > 0;
});
console.log(inStock);

let totalPrice = inStock.reduce(function(sum, product) {
  return sum + product.rate * product.count;
}, 0);
console.log("Total Price:", totalPrice);

let fewItems = itemList.slice(0, 2);
console.log(fewItems);

itemList.splice(1, 1);
console.log(itemList);

let newItemList = [...itemList];
newItemList.push({ code: 5, title: "Socks", rate: 100, count: 5 });
console.log(newItemList);

let newItem = {
  code: 6,
  title: "Jacket",
  rate: 1800,
  count: 1,
  displayInfo: function() {
    console.log("Title:", this.title);
    console.log("Rate:", this.rate);
    console.log("Count:", this.count);
  }
};

newItem.displayInfo();

let { title, rate, count } = newItem;
console.log(title);
console.log(rate);
console.log(count);