let cart = [];

let prices = {
    "T-Shirt": 499,
    "Black T-Shirt": 449,
    "Blue T-Shirt": 499,
    "Printed T-Shirt": 549,
    "Shoes": 999,
    "Running Shoes": 1199,
    "Casual Shoes": 899,
    "White Sneakers": 1099,
    "Headphones": 799,
    "Smart Watch": 1499,
    "Backpack": 699,
    "Sunglasses": 399,
    "Handbag": 899,
    "Wallet": 499,
    "Cap": 299,
    "Phone Case": 299,
    "Laptop": 45999,
    "Smartphone": 15999,
    "Bluetooth Speaker": 1299,
    "Sneakers": 1299
};

function addToCart(productName) {
    cart.push(productName);
    alert(productName + " added to cart!");
    displayCart();
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");

    if (cart.length === 0) {
        cartItems.innerHTML = "Cart is empty";
        return;
    }

    let total = 0;
    let counts = {};

    cart.forEach(function(product) {
        counts[product] = (counts[product] || 0) + 1;
    });

    cartItems.innerHTML = "";

    for (let product in counts) {
        let quantity = counts[product];
        let itemTotal = prices[product] * quantity;

        total += itemTotal;

        cartItems.innerHTML += `
            <div class="cart-item">
                <span>
                    ${product} - ₹${prices[product]}
                    | Quantity: ${quantity}
                </span>

                <button onclick="increaseQuantity('${product}')">+</button>
                <button onclick="decreaseQuantity('${product}')">−</button>
                <button onclick="removeProduct('${product}')">🗑️ Remove</button>
            </div>
        `;
    }

    cartItems.innerHTML += `
        <h3>Total Amount: ₹${total}</h3>

        <button onclick="clearCart()">🗑️ Clear Cart</button>

        <button onclick="checkout()">🛍️ Proceed to Checkout</button>
    `;
}

function increaseQuantity(product) {
    cart.push(product);
    displayCart();
}

function decreaseQuantity(product) {
    let index = cart.indexOf(product);

    if (index !== -1) {
        cart.splice(index, 1);
        displayCart();
    }
}

function removeProduct(product) {
    cart = cart.filter(function(item) {
        return item !== product;
    });

    displayCart();
}

function clearCart() {
    cart = [];
    displayCart();
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return;
    }

    document.getElementById("login").innerHTML = `
        <h2>👋 Welcome, ${username}!</h2>
        <p>Login successful 🎉</p>
        <button onclick="logout()">Logout</button>
    `;
}

function logout() {
    location.reload();
}

function searchProducts() {
    let searchText = document.getElementById("searchBox").value.toLowerCase();
    let products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        let productName = product.querySelector("h2").innerText.toLowerCase();

        if (productName.includes(searchText)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function filterCategory() {
    const selectedCategory = document.getElementById("categorySelect").value;
    const products = document.querySelectorAll(".product");

    products.forEach(function(product) {
        const productCategory = product.getAttribute("data-category");

        if (selectedCategory === "all") {
            product.style.display = "";
        } else if (productCategory === selectedCategory) {
            product.style.display = "";
        } else {
            product.style.display = "none";
        }
    });
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    document.getElementById("checkout").style.display = "block";

    document.getElementById("checkout").scrollIntoView({
        behavior: "smooth"
    });
}

function placeOrder() {
    let name = document.getElementById("customerName").value;
    let phone = document.getElementById("customerPhone").value;
    let address = document.getElementById("customerAddress").value;

    if (name === "" || phone === "" || address === "") {
        alert("Please fill all details!");
        return;
    }

    document.getElementById("checkout").style.display = "none";

    document.getElementById("orderConfirmation").style.display = "block";

    document.getElementById("orderConfirmation").scrollIntoView({
        behavior: "smooth"
    });

    cart = [];
    displayCart();
}
function continueShopping() {
    document.getElementById("orderConfirmation").style.display = "none";

    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
}