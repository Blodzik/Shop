import { products } from "./products.js";

let bascet = JSON.parse(localStorage.getItem('data')) || [];

const productsBox = document.querySelector('.products-box');

function generateProducts () {
    products.forEach((product) => {
        const {id, name, price, image} = product;

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
                                <div class="product-quantity">Quantity: 10</div>
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

generateProducts();


/* <div class="products-box">
                    <div>
                        <p class="delivery-date">Delivery data: Saturday, February 3</p>
                        <div class="del-inf">
                            <div class="product-info">
                                <img class="product-image" src="assets/ping-pong-paddle.webp">
                                <div>
                                    <div class="product-name">2 Slot Toaster - Black</div>
                                    <div class="product-price">$18.99</div>
                                    <div class="quantity-div">
                                        <div class="product-quantity">Quantity: 10</div>
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
                    </div>         
                </div> */