let items = [
  {
    name: 'a',
    price: 100,
    quantity:0
  },
  {
    name: 'b',
    price: 200,
    quantity:0
  },
  {
    name: 'c',
    price: 300,
    quantity:0
  },
]

let vm2 = new Vue ({
  el: '#app',
  data: {
    items: items
  }
})