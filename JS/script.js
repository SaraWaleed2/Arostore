var barToggle = document.querySelector("#barToggle")
var barToggle2 = document.querySelector("#barToggle2")
var list = document.querySelector(".list")

barToggle.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        barToggle.style.display = "none"
        barToggle2.style.display = "block"
        list.style.display = "block"
        list.style.top = "99px"
        list.style.opacity = "1"
        list.style.visibility = "visible"

    }
})

barToggle2.addEventListener("click", () => {
    if (window.matchMedia("(max-width: 900px)").matches) {
        barToggle.style.display = "block"
        barToggle2.style.display = "none"
        list.style.top = "90px"
        list.style.opacity = "0"
        list.style.visibility = "hidden"
    }
}

)

//////////////////////////////////////////////////////////////////


var row = document.querySelector(".product .row")

let filterarray = [];

let allProducts = [
    {
        id: 1,
        productImage: "Images/img1.jpg",
        productName: "Apple AirPods Pro 2023",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 250.00,
        category: "AirPods",
        quantity: 0


    },
    {
        id: 2,
        productImage: "Images/img2.jpg",
        productName: "A9 Silver Series 8 GPS",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>` ,
        productPrice: 200.00,
        category: "Watches",
        quantity: 0


    }, {
        id: 3,
        productImage: "Images/img3.jpg",
        productName: "Apple 11 iPad Pro 128GB",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 300.00,
        category: "Ipad",
        quantity: 0


    }, {
        id: 4,
        productImage: "Images/img4.jpg",
        productName: "A9 White Series 8 GPS",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 150.00,
        category: "Watches",
        quantity: 0


    }, {
        id: 5,
        productImage: "Images/img5.jpg",
        productName: "Dell Vostro i7",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 350.00,
        category: "LabTops",
        quantity: 0


    }, {
        id: 6,
        productImage: "Images/img6.jpg",
        productName: "Apple AirPods  2023",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 280.00,
        category: "AirPods",
        quantity: 0


    }, {
        id: 7,
        productImage: "Images/img7.jpg",
        productName: "Asus Zenbook",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 400.00,
        category: "LabTops",
        quantity: 0


    }, {
        id: 8,
        productImage: "Images/img8.jpg",
        productName: "Smart JBL",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-regular fa-star-half-stroke"></i>` ,
        productPrice: 200.00,
        category: "JBL",
        quantity: 0


    },
    {
        id: 9,
        productImage: "Images/img9.jpg",
        productName: "Xiaomi Green Watch",
        productRate: `<i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>` ,
        productPrice: 300.00,
        category: "Watches",
        quantity: 0
    }


]

function drawAllProducts(x) {
    const newProducts = x.map(
        (item) => {
            return `
            <div class=" col-md-4  mb-4">
            <div class="product-item shadow">
                <img src="${item.productImage}"
                    alt="AirPods" class="productImage">
                <div class="product-item-info lh-lg">
                    <a href="#" class="productName fw-bolder fs-5">${item.productName}</a>
                    <div class="productRate">
                    ${item.productRate}
                    </div>
                    <p class="productPrice fw-bold">${item.productPrice}$</p>
                    <button type="button" onclick="addToCart(${item.id})" id="addCart" class="productBtn btn btn-dark fw-bold mb-4">Add To
                        Cart</button>

                    <div class="productCart">
                        <p class="category fw-bold">${item.category}</p>
                        <button class="fav" onclick="addToFav(${item.id})"><i class="fa-solid fa-heart fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>

            `
        }
    )
    row.innerHTML = newProducts.join(" ")

}
drawAllProducts(allProducts);


var searchinput = document.querySelector("#searchinput")
var productItem = document.querySelectorAll(".product-item")
let selection = document.querySelector("#selection")


searchinput.addEventListener("keyup", function () {
    filterarray = allProducts.filter(
        function (item) {
            if (selection.value === "Category....") {
                if (item.category.toLowerCase().includes(searchinput.value.toLowerCase())) {
                    return item.category;
                }
            } if (selection.value === "Product Name") {
                if (item.productName.toLowerCase().includes(searchinput.value.toLowerCase())) {
                    return item.productName;
                }
            }

        }
    );
    if (this.value == "") {
        drawAllProducts(allProducts);
    } else {
        if (filterarray == "") {
            drawAllProducts(allProducts);
        }
        else {
            drawAllProducts(filterarray);
        }
    }
})


let cart_productDiv = document.querySelector(".cart_product div");
let cart_product = document.querySelector(".cart_product");
let badge = document.querySelector(".badge")



if (localStorage.getItem("username")) {
    let addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    if (addItem) {
        addItem.map(item => {
            cart_productDiv.innerHTML += `<div style="display: flex;justify-content: space-between;align-items:baseline;border:1px dotted rgb(255, 179, 0); border-radius:5px;" class="m-2 p-2">
            <p class="fw-bolder p-0 m-0">${item.productName}</p>
            <span class="pQuantity">
            <span class="minus fw-bolder" onclick="decrement(${item.quantity})">-</span>
            <span class="num  fw-bolder" style="padding:5px;" id="${item.id}">${item.quantity}</span>
            <span class="plus fw-bolder" onclick="increment(${item.quantity})">+</span>
            </span>
            </div>
            `
        })
        badge.innerHTML = addItem.length
    }
    function addToCart(id) {
        let choosenProduct = allProducts.find((item) => item.id === id);
        let addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];

        let avilProduct = addItem.find((item) => item.id === id);
        if (avilProduct) {
            avilProduct.quantity++;
        } else {
            choosenProduct.quantity = 1;
            addItem.push(choosenProduct);
        }
        cart_productDiv.innerHTML = "";
        addItem.forEach((item) => {
            cart_productDiv.innerHTML += `
                <div style="display: flex;justify-content: space-between;align-items:baseline;border:1px dotted rgb(255, 179, 0); border-radius:5px;" class="m-2 p-2">
                    <p class="fw-bolder p-0 m-0">${item.productName}</p>
                    <span class="pQuantity">
                        <span class="minus fw-bolder" onclick="decrement(${item.id})">-</span>
                        <span class="num  fw-bolder" style="padding:5px;" id="${item.id}">${item.quantity}</span>
                        <span class="plus fw-bolder" onclick="increment(${item.id})">+</span>
                    </span>
                </div>`;
        });

        badge.innerHTML = addItem.length;

        localStorage.setItem("productsInCart", JSON.stringify(addItem));

        let pLength = document.querySelectorAll(".cart_product div p");
        if (pLength.length >= 5) {
            cart_productDiv.style.height = "320px";
            cart_productDiv.style.overflowY = "scroll";
        }

    }

    function increment(id) {
        let addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
        let productQ = addItem.find((item) => item.id === id);
        if (productQ) {
            productQ.quantity++;
            document.getElementById(id).innerHTML = productQ.quantity;
            localStorage.setItem("productsInCart", JSON.stringify(addItem));
        }
    }
    
    function decrement(id) {
        let addItem = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
        let productQ = addItem.find((item) => item.id === id);
        if (productQ.quantity > 1) {
            productQ.quantity--;
            document.getElementById(id).innerHTML = productQ.quantity;
            localStorage.setItem("productsInCart", JSON.stringify(addItem));
        }
    }

    function addToFav(id) {
        // let favButton = document.querySelector(".fav"]`);
        let favButton = document.querySelector(`[onclick="addToFav(${id})"]`);
        let choosenProduct = allProducts.find((item) => item.id === id);
        let favProducts = JSON.parse(localStorage.getItem("favProducts")) || [];
        if (favProducts.some((item) => item.id === id)) {
            Swal.fire({ //alert library
                title: '<p>Removed From Favourite!</p>',
                icon: 'success',
                focusConfirm: true,
            })
            favProducts = favProducts.filter((item) => item.id !== id);
            favButton.style.color = "black";
        } else {
            Swal.fire({ //alert library
                title: '<p>Added To Favourite!</p>',
                icon: 'success',
                focusConfirm: true,
            })
            favProducts.push(choosenProduct);
            favButton.style.color = "red";
        }
        localStorage.setItem("favProducts", JSON.stringify(favProducts));
    }
}
else {
    function addToCart(id) {
        allProducts.find((item) => item.id === id);
        Swal.fire({
            title: '<strong>Login or Rgister</strong>',
            icon: 'info',
            html:
                '<a href="login.html"><strong>Login</strong></a> ' +
                '  ,  ' +
                '<a href="register.html"><strong>Rgister</strong></a> ',
            showCloseButton: true,
            focusConfirm: true,
        })

    }
    function addToFav(id) {
        allProducts.find((item) => item.id === id);
        Swal.fire({
            title: '<strong>Login or Rgister</strong>',
            icon: 'info',
            html:
                '<a href="login.html"><strong>Login</strong></a> ' +
                '  ,  ' +
                '<a href="register.html"><strong>Rgister</strong></a> ',
            showCloseButton: true,
            focusConfirm: true,
        })

    }

}

var shopCart = document.querySelector(".shopCart")
shopCart.addEventListener("click", function () {
    if (cart_productDiv.innerHTML !== "") {

        if (cart_product.style.display == "none") {
            cart_product.style.display = "block"
        } else {
            cart_product.style.display = "none"
        }
    }
});



