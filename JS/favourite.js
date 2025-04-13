var favProducts = localStorage.getItem("favProducts");
var row = document.querySelector(".product .row");

if (favProducts) {
    let item = JSON.parse(favProducts);
    if (item.length > 0) {
        drawproductsInCart(item);
    } else {
        showNoProductsMessage();
    }
} else {
    showNoProductsMessage();
}

function drawproductsInCart(product) {
    let newProduct = product.map(
        (item) => {
            return `
            <div class=" col-md-4  mb-4">
                <div class="product-item shadow">
                    <img src="${item.productImage}" alt="AirPods" class="productImage">
                    <div class="product-item-info lh-lg">
                        <a href="#" class="productName fw-bolder fs-5">${item.productName}</a>
                        <div class="productRate">
                            ${item.productRate}
                        </div>
                        <p class="productPrice fw-bold">${item.productPrice}$</p>
                        <button type="button" onclick="removeFromCart(${item.id})"  class="productBtn btn btn-dark fw-bold mb-4">Remove from Favourite</button>
                        <div class="productCart">
                            <p class="category fw-bold">${item.category}</p>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    );

    row.innerHTML = newProduct.join(" ");
}

function removeFromCart(id) {
    let favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
    favProducts = favProducts.filter((item) => item.id !== id);
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
    
    if (favProducts.length > 0) {
        drawproductsInCart(favProducts);
    } else {
        showNoProductsMessage();
    }
}

function showNoProductsMessage() {
    row.innerHTML = `
    <h2 style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">No Favourite Products</h2>
    `;
}