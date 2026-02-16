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

function stockStatus1(listProducts1) {
  for (let i = 0; i < listProducts1.length; i++) {
    if (listProducts1[i].stock === 0) {
      listProducts1[i].status = "out";
    } else if (listProducts1[i].stock < 5) {
      listProducts1[i].status = "low";
    } else {
      listProducts1[i].status = "ok";
    }
  }

  return listProducts1;
}

const products = [
  { name: "Stylo", stock: 10 },
  { name: "Livre", stock: 3 },
  { name: "Clavier", stock: 0 },
];

console.log(stockStatus1(products));

// Je suis super étonnée du résultat. J'ai juste à ajouter le "listProducts[i].status = "" " pour que la clé status se créé ?
// Ca modifie le tableau actuel du coup si je veux plutôt créer un nouveau tableau

function stockStatus(listProducts) {
  const newArray = [];

  for (let i = 0; i < listProducts.length; i++) {
    if (listProducts[i].stock === 0) {
      listProducts[i].status = "out";
      newArray.push(listProducts[i]);
    } else if (listProducts[i].stock < 5) {
      listProducts[i].status = "low";
      newArray.push(listProducts[i]);
    } else {
      listProducts[i].status = "ok";
      newArray.push(listProducts[i]);
    }
  }

  return newArray;
}

console.log(stockStatus(products));
