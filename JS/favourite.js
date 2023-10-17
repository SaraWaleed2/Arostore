var favProducts = localStorage.getItem("favProducts")
var row = document.querySelector(".product .row")

if (favProducts) {
    let item = JSON.parse(favProducts)
    drawproductsInCart(item);
}
else {
    row.innerHTML = `
    <h2 style="position: absolute;top: 50%;left: 50%;transform: translate(-50%,-50%);">No Favourite Products</h2>
    `
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
    row.innerHTML += `
    <div class="my-4 rounded w-50 mx-auto my-auto" style="background-color:rgb(255, 179, 0) ;color: white;" >
    <h3 class=" p-2">Favourite Products</h3>
    </div>
    `
}


function removeFromCart(id) {
    let favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
    favProducts = favProducts.filter((item) => item.id !== id);
    localStorage.setItem("favProducts", JSON.stringify(favProducts));
    drawproductsInCart(favProducts);
}
