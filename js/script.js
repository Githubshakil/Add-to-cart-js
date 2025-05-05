const products = [
  { id: 1, name: "Product 1", price: 100.0, description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (1).jpg" },
  { id: 2, name: "Product 2", price: 250.0,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (2).jpg"},  
  { id: 2, name: "Product 3", price: 200.0,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (3).jpg"},  
  { id: 2, name: "Product 4", price: 280.0,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (4).jpg"},  
  { id: 2, name: "Product 5", price: 320.0,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (5).jpg"},  
  { id: 2, name: "Product 6", price: 400.0,description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae tempore enim corrupti ab nobis accusamus amet cum id assumenda repudiandae?",Image:"../images/image (6).jpg"},  
]

let cart = [];

const productList=document.querySelector(".product-list");
const cartItems=document.querySelector(".cart-items");
const cartTotal=document.querySelector(".total");
const checkoutButton=document.querySelector(".checkout");

function renderProducts() {
  productList.innerHTML = "";
  products.forEach(product=>{
    const productDiv=document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML=`
    <img src=${product.Image} alt="">
        <div class="product-info">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <button class="add-to-cart" data-id="${product.id}">Add To Cart</button>
        </div>
    `
    productList.appendChild(productDiv);
  })
  
}

function renderCart() {
 cartItems.innerHTML = "";
 if(cart.length === 0){
    // cartItems.innerHTML = "<p>Your cart is empty</p>";
    // cartTotal.innerHTML = "Total: $0.00";
    // checkoutButton.style.display = "none";
 }else{
  cart.forEach(item=>{
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML=`
    <img src="${item.Image}" alt="">
      <div class="cart-item-info">
          <h2>${item.name}</h2>
          <p>Price: ${item.price.toFixed(2)} x ${item.quantity} = TK${item.price*item.quantity}</p>
          <div class="quantity">
              <button class="decrease" data-id="${item.id}">-</button>
              <span>${item.quantity}</span>
              <button class="increase" data-id="${item.id}">+</button>
          </div>
          <button class="remove" data-id="${item.id}">Remove</button>
      </div>
    `

    cartItems.appendChild(cartItem);
  })
 }
}
renderCart()
renderProducts()
