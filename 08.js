const json = `[
  {
    "order_id": "SO-921",
    "created_at": "2018-02-17T03:24:12",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 2, "price": 13200 }, 
      { "id": 73, "name": "Sprei 160x200 polos", "qty": 1, "price": 149000 }
    ]
  },
  {
    "order_id": "SO-922",
    "created_at": "2018-02-20T13:10:32",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 83, "name": "Rice Cooker", "qty": 1, "price": 258000 },
      { "id": 24, "name": "Sapu Lidi", "qty": 1, "price": 13200 }, 
      { "id": 30, "name": "Teflon", "qty": 1, "price": 190000 }
    ]
  },
  {
    "order_id": "SO-923",
    "created_at": "2018-02-28T15:20:43",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 303, "name": "Pematik Api", "qty": 1, "price": 12000 }, 
      { "id": 49, "name": "Panci", "qty": 2, "price": 70000 }
    ]
  },
  {
    "order_id": "SO-924",
    "created_at": "2018-03-02T14:30:54",
    "customer": { "id": 40, "name": "Ririn" },
    "items": [
      { "id": 986, "name": "TV LCD 40 inch", "qty": 1, "price": 6000000 }
    ]
  },
  {
    "order_id": "SO-925",
    "created_at": "2018-03-03T14:52:22",
    "customer": { "id": 33, "name": "Ari" },
    "items": [
      { "id": 1033, "name": "Nintendo Switch", "qty": 1, "price": 4990000 }, 
      { "id": 2003, "name": "Macbook Air 11 inch 128 GB", "qty": 1, "price": 12000000 },
      { "id": 23, "name": "Pocari Sweat 600ML", "qty": 5, "price": 7000 }
    ]
  },
  {
    "order_id": "SO-926",
    "created_at": "2018-03-05T16:23:20",
    "customer": { "id": 58, "name": "Annis" },
    "items": [
      { "id": 24, "name": "Sapu Lidi", "qty": 3, "price": 13200 }
    ]
  }
]`

const jsonToArray = JSON.parse(json);

jsonToArray.forEach((a) => {
  a.created_at = new Date(a.created_at);
});
function filterMonth(month) {
  let onlyMonth = jsonToArray.filter((a) => {
      return a.created_at.getMonth() == month;
  })
  return onlyMonth;
}
function purchase(nama) {
  let onlyPerson = jsonToArray.filter((a) => {
      return a.customer.name === nama;
  })
  return onlyPerson;
}

function payUp(arrayToPay) {
  let sum = 0;
  arrayToPay.forEach((a) => {
      a.items.forEach((d) => {
          sum += (d.price) * (d.qty);
      })
  })
  return sum;
}

function underWhat(totalMax) {
  let underThis = [];
  whatSMyName(jsonToArray).forEach((g) => {
      if (payUp(purchase(g)) < totalMax) {
          underThis = underThis.concat(purchase(g));
      }
  })
  return underThis;
}

function whatSMyName(someOrd) {
  let myName = someOrd.map((a) => {
      return a.customer.name;
  }).filter((value, index, self) => {
      return self.indexOf(value) === index;
  });
  return myName;
}
console.log("Nama Semua : ",whatSMyName(jsonToArray))
console.log("Di Bulan Februari : ",filterMonth(1));
console.log("Ari Berhutang : ",payUp(purchase('Ari')));
console.log("Murahan : ",whatSMyName(underWhat(300000)));
