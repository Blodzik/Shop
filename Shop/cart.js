import { products } from "./products.js";

let cart = JSON.parse(localStorage.getItem('memory')) || [];

const productsBox = document.querySelector('.products-box');

function generateProducts () {
    productsBox.innerHTML = '';

    if (cart.length === 0) {
        productsBox.innerHTML = 'You have no products in cart';

        productsBox.style.fontSize = '28px';
        productsBox.style.fontWeight = 'bold';

        const reviewYourOrder = document.querySelector('.review-order');
        reviewYourOrder.innerHTML = '';
    } else {
        cart.forEach((product) => {
            const {id, name, price, image, quantity} = product;

            const productDiv = document.createElement('div');
            productDiv.classList.add('products-div');

            productDiv.innerHTML = `
                <div>
                    <p class="delivery-date">Delivery data: Saturday, February 3</p>
                    <div class="del-inf">
                        <div class="product-info">
                            <img class="product-image" src="assets/${image}">
                            <div>
                                <div class="product-name">${name}</div>
                                <div class="product-price">$${price}</div>
                                <div class="quantity-div-${id} quantity-div">
                                    <div class="product-quantity">Quantity: <span id="product-quantity-span-${id}">${quantity}</span></div>
                                    <a onclick="updateCartQuantity('${id}')" id='update-button-${id}'>Update</a>
                                    <a onclick="deleteFromCart('${id}')">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-options">
                            <p class="choose-opt">Choose a delivery option</p>
                            <div>
                                <div class="opt">
                                    <input type="radio" checked>
                                    <div>
                                        <div class="date">Saturday, February 3</div>
                                        <div class="free-shipping">FREE Shipping</div>
                                    </div>
                                </div>

                                <div class="opt">
                                    <input type="radio" checked>
                                    <div>
                                        <div class="date">Saturday, February 3</div>
                                        <div class="free-shipping">Free Shipping</div>
                                    </div>
                                </div>

                                <div class="opt">
                                    <input type="radio" checked>
                                    <div>
                                        <div class="date">Saturday, February 3</div>
                                        <div class="free-shipping">Free Shipping</div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>  
                </div>`
            
            productsBox.appendChild(productDiv);
        })
    }
}

window.showQuantity = function () {
    const middleSectionSpan = document.querySelector('.middle-section-span');
    const totalAmount = cart.map((x) => x.quantity).reduce((x, y) => x + y, 0);
    middleSectionSpan.innerHTML = `${totalAmount} items`;
}

window.deleteFromCart = function(productId) {
    const selectedItem = products.find(product => product.id === productId);

    if (selectedItem) {
        const itemInBascetIndex = cart.findIndex(item => item.id === productId)

        if (itemInBascetIndex !== -1) {
            cart.splice(itemInBascetIndex, 1);
            generateProducts();
            showQuantity();

            localStorage.setItem('memory', JSON.stringify(cart));
        }
    }
}

window.updateCartQuantity = function (productId) {
    const selectedItem = cart.find(item => item.id === productId);

    if (selectedItem) {
        const productQuantitySpan = document.getElementById(`product-quantity-span-${productId}`);
        const updateButton = document.getElementById(`update-button-${productId}`);
        const quantityDiv = document.querySelector(`.quantity-div-${productId}`);

        productQuantitySpan.innerHTML = '';
        updateButton.innerHTML = '';
        quantityDiv.style.gap = '6px';

        const newQuantityInput = document.createElement('input');
        newQuantityInput.classList.add('new-quantity-input');

        const saveButton = document.createElement('a');
        saveButton.textContent = 'Save';
        saveButton.classList.add('save-button');

        const updateDiv = document.createElement('div');
        updateDiv.classList.add('update-div');

        updateDiv.appendChild(newQuantityInput);
        updateDiv.appendChild(saveButton);

        productQuantitySpan.appendChild(updateDiv);
        saveNewQuantity(saveButton, newQuantityInput, productId, productQuantitySpan, updateButton);
    }
}

window.saveNewQuantity =  function(saveButton, newQuantityInput, productId, productQuantitySpan, updateButton) {
    saveButton.addEventListener('click', () => {
        const quantityInput = newQuantityInput.value;
        
        const selectedItem = cart.find(item => item.id === productId);

        if (selectedItem) {
            const newQuantity = parseInt(quantityInput, 10);

            selectedItem.quantity = newQuantity;

            productQuantitySpan.innerHTML = '';
            productQuantitySpan.innerHTML = selectedItem.quantity;

            updateButton.innerHTML = 'Update';

            localStorage.setItem('memory', JSON.stringify(cart));
            showQuantity();
        }
    })
}

generateProducts();
showQuantity();