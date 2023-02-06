const fs = require("fs");

for (let j = 1; j <= 10; j++) {
  let data = {};
  data["products"] = [];
  console.log(data);
  for (let i = 1; i <= 20; i++) {
    const product = {
      id: i,
      name: `Product ${i}`,
      image: `https://picsum.photos/370/270`,
      price: Math.floor(Math.random() * (2000 - 1200 + 1) + 1200),
      description: "This is a description",
    };
    data["products"].push(product);
  }
  console.log(data);

  fs.writeFileSync(`./category${j}.json`, JSON.stringify(data, null, 2));
}
