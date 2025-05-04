const products = [
  { id: 1, name: "Product 1", price: 100.0,Image:"../images/image (1).jpg" },
  { id: 2, name: "Product 2", price: 250.0,Image:"../images/image (2).jpg"},  
  { id: 2, name: "Product 3", price: 200.0,Image:"../images/image (3).jpg"},  
  { id: 2, name: "Product 4", price: 280.0,Image:"../images/image (4).jpg"},  
  { id: 2, name: "Product 5", price: 320.0,Image:"../images/image (5).jpg"},  
  { id: 2, name: "Product 6", price: 400.0,Image:"../images/image (6).jpg"},  
]

let cart = [];

const productList=document.querySelector(".product-list");
const cartList=document.querySelector(".cart-items");
const cartTotal=document.querySelector(".cart-total");
const checkoutButton=document.querySelector(".checkout");


