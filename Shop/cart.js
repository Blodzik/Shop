import { products } from "./products.js";

let cart = JSON.parse(localStorage.getItem('memory')) || [];

const productsBox = document.querySelector('.products-box');

console.log(cart.length)

function generateProducts () {
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
                                <div class="quantity-div">
                                    <div class="product-quantity">Quantity: ${quantity}</div>
                                    <a>Update</a>
                                    <a>Delete</a>
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
    middleSectionSpan.innerHTML = `${totalAmount} items`
}

generateProducts();
showQuantity();