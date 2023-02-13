// const fs = require("fs");

// files = [
//   "accessories",
//   "base-units",
//   "corner-units",
//   "cutlery",
//   "klass-drawers",
//   "larder-units",
//   "slim-drawers",
//   "tandem-drawers",
//   "wiker-basket",
// ];

// for (let i = 0; i < files.length; i++) {
//   var filename =
//     "C:\\Users\\Tatv Kamdar\\Desktop\\Side Hustle\\FEDER\\feder\\src\\Assets\\products\\" +
//     files[i];
//   var prodfiles = fs.readdirSync(filename);
//   console.log(files[i] + "\n");
//   console.log(prodfiles);
//   //   console.log("\n\n");

//   let data = {};
//   data["products"] = [];

//   for (let j = 0; j < prodfiles.length; j++) {
//     const product = {
//       id: j,
//       name: prodfiles[j],
//       image: `../products/${files[i]}/${prodfiles[j]}`,
//       description: "This is a description",
//     };
//     data["products"].push(product);
//   }
//   console.log(data);

//   fs.writeFileSync(
//     `C:\\Users\\Tatv Kamdar\\Desktop\\Side Hustle\\FEDER\\feder\\src\\Assets\\Categories\\${files[i]}.js`,
//     JSON.stringify(data, null, 2)
//   );
// }
