import { products } from './products.js';

const grid = document.querySelector('.grid');
const totalAmount = document.querySelector('.total-num');

let cart = JSON.parse(localStorage.getItem('memory')) || [];

function generateProducts () {
    products.forEach((product) => {
        const {id, name, price, image} = product;

        const productElement = document.createElement('div');
        productElement.classList.add('box');
        productElement.innerHTML = `
                <img src="assets/${image}" class="product-image">
                <p class="product-name">${name}</p>
                <p class="price">${price} $</p>
                <p>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                </p>
                <button onclick='increment("${id}")'>Add to Cart</button>
            </div>
        `

        grid.appendChild(productElement);
    })
}

window.display = function () {
    const totalAmountDiv = document.querySelector('.total-num');
    totalAmountDiv.innerHTML = cart.map((x) => x.quantity).reduce((x, y) => x + y, 0);
}

generateProducts();
display();

let totalQuantity = 0;

window.increment = function(productId) {
    let quantity = 1;

    const selectedItem = products.find(product => product.id === productId);

    if (selectedItem) {
        const itemInBascet = cart.find(item => item.id === productId);

        if (itemInBascet) {
            itemInBascet.quantity += quantity;
        } else {
            cart.push({...selectedItem, quantity});
        }
        totalQuantity += quantity;
        display();



        localStorage.setItem('memory', JSON.stringify(cart));
    }
}


//cartIcon.innerHTML = bascet.map((x) => x.item).reduce((x, y) => x + y, 0);


