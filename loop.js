const foodItem = {
  name: "Paneer Roll",
  price: 120,
  rating: 4.5,
  category: "Snacks"
};

for (let key in foodItem) {
  console.log(`${key.toUpperCase()}: ${foodItem[key]}`);
}
