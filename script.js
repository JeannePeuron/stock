// Énoncé

// Tu as un stock de produits :

// [
//   { name: "Stylo", stock: 10 },
//   { name: "Livre", stock: 3 },
//   { name: "Clavier", stock: 0 }
// ]
// Écris une fonction stockStatus(products) qui retourne un nouveau tableau :

// Règles :

// si stock === 0 → status = “out”

// si stock < 5 → status = “low”

// sinon → status = “ok”

function stockStatus(listProducts) {
  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].stock === 0) {
      listProducts[i].status = "out";
    } else if (listProducts[i].stock < 5) {
      listProducts[i].status = "low";
    } else {
      listProducts[i].status = "ok";
    }
  }

  return listProducts;
}

const products = [
  { name: "Stylo", stock: 10 },
  { name: "Livre", stock: 3 },
  { name: "Clavier", stock: 0 },
];

console.log(stockStatus(products));

// Je suis super étonnée du résultat. J'ai juste à ajouter le "listProducts[i].status = "" " pour que la clé status se créé ?
