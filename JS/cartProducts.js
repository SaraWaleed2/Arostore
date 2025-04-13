var productsInCart = JSON.parse(localStorage.getItem("productsInCart")) || [];
var row = document.querySelector(".product .row");

updateCartDisplay();

function updateCartDisplay() {
    if (productsInCart.length > 0) {
        drawProductsInCart(productsInCart);
    } else {
        row.innerHTML = `<h2 style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">No Products in Cart</h2>`;
    }
}

function drawProductsInCart(items) {
    let newProduct = items.map((item) => {
        return `
            <div class="col-md-4 mb-4">
                <div class="product-item shadow">
                    <img src="${item.productImage}" alt="AirPods" class="productImage">
                    <div class="product-item-info lh-lg">
                        <a href="#" class="productName fw-bolder fs-5">${item.productName}</a>
                        <div class="productRate">
                            ${item.productRate}
                        </div>
                        <p class="productPrice fw-bold" id="price-${item.id}">${(item.productPrice * item.quantity).toFixed(2)}$</p>
                        <button type="button" onclick="removeFromCart(${item.id})" class="productBtn btn btn-dark fw-bold mb-4">Remove from Cart</button>
                        <div class="productCart">
                            <p class="category fw-bold">${item.category}</p>
                            <div class="pQuantity">
                                <span class="minus" onclick="decrement(${item.id})" style="font-size:20px;font-weight:800">-</span>
                                <span class="num" style="padding:5px;font-size:18px;font-weight:800" id="quantity-${item.id}">${item.quantity}</span>
                                <span class="plus" onclick="increment(${item.id})" style="font-size:20px;font-weight:800">+</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    });

    row.innerHTML = newProduct.join(" ");

    let totalPrice = items.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);
    row.innerHTML += `
        <div class="my-4 rounded w-50 mx-auto d-block h-25" style="background-color:rgb(255, 179, 0);color: white;">
            <h3 class="p-2">Total Price: <span id="totalPrice">${totalPrice.toFixed(2)}$</span></h3>
        </div>
    `;
}

function increment(id) {
    let item = productsInCart.find((item) => item.id === id);
    if (item) {
        item.quantity++;
        updateCartItem(id);
    }
}

function decrement(id) {
    let item = productsInCart.find((item) => item.id === id);
    if (item && item.quantity > 1) {
        item.quantity--;
        updateCartItem(id);
    }
}

function updateCartItem(id) {

    let quantityElement = document.getElementById(`quantity-${id}`);
    let item = productsInCart.find(item => item.id === id);
    if (quantityElement && item) {
        quantityElement.textContent = item.quantity;
    }
    let priceElement = document.getElementById(`price-${id}`);
    if (priceElement && item) {
        priceElement.textContent = `${(item.productPrice * item.quantity).toFixed(2)}$`;
    }
    updateTotalPrice();
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
}

function updateTotalPrice() {
    let totalPriceElement = document.getElementById("totalPrice");
    if (totalPriceElement) {
        let total = productsInCart.reduce((sum, item) => sum + item.productPrice * item.quantity, 0);
        totalPriceElement.textContent = `${total.toFixed(2)}$`;
    }
}

function removeFromCart(id) {
    productsInCart = productsInCart.filter((item) => item.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
    updateCartDisplay();
}