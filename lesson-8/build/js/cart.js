if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}

function ready() {
    let removeCartItemButtons = document.getElementsByClassName('cart-bar__cart-item__delete');
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        let button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    let quantityInputs = document.getElementsByClassName('cart-bar__cart-item__quantity-input');
    for (let i = 0; i < quantityInputs.length; i++) {
        let input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }

    let addToCartButtons = document.getElementsByClassName('btn__add-to-cart');
    for (let i = 0; i < addToCartButtons.length; i++) {
        let button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
}

function removeCartItem(event) {
    let buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal();
}

function quantityChanged(event) {
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateCartTotal();
}

function addToCartClicked(event) {
    let button = event.target;
    let product = button.parentElement.parentElement.parentElement.parentElement;
    let productImageSrc = product.querySelector('.product-item__picture img').src;
    let productTitle = product.querySelector('.product-item__decription h4').innerText;
    let productSinglePrice = product.querySelector('.product-item__price').innerText;
    addItemToCart(productImageSrc, productTitle, productSinglePrice);
    updateCartTotal();
}

function addItemToCart(productImageSrc, productTitle, productSinglePrice) {
    let cartItem = document.createElement('div');
    cartItem.classList.add('cart-bar__cart-item');
    let cartItems = document.getElementsByClassName('cart-bar__cart-items')[0];

    let cartItemContents = `
        <div class="cart-bar__cart-item__img">
            <img src="${productImageSrc}" class="img--fluid">
        </div>
        
        <div class="cart-bar__cart-item__infos">
            <h5 class="cart-bar__cart-item__title">${productTitle}</h5>
            <div>Price: <span class="cart-bar__cart-item__single-price">${productSinglePrice}</span></div>
            <div>Quantity: <input type="number" value="1" class="cart-bar__cart-item__quantity-input"></div>
        </div>
        
        <div class="cart-bar__cart-item__delete">
            <i class="icon__times"></i>
        </div>
        
        <div class="cart-bar__cart-item__price"></div>
        `;
    cartItem.innerHTML = cartItemContents;
    cartItems.append(cartItem);
    cartItem.getElementsByClassName('cart-bar__cart-item__delete')[0].addEventListener('click', removeCartItem);
    cartItem.getElementsByClassName('cart-bar__cart-item__quantity-input')[0].addEventListener('change', quantityChanged);
}

function updateCartTotal() {
    let cartItemContainer = document.getElementsByClassName('cart-bar__cart-items')[0];
    let cartItems = cartItemContainer.getElementsByClassName('cart-bar__cart-item');
    let cartQuantityIndicator = document.querySelector('.basket__count');
    let initCartQuantity = 0;
    let cartQuantity = initCartQuantity;
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
        let cartItem = cartItems[i];
        let singlePriceElement = cartItem.getElementsByClassName('cart-bar__cart-item__single-price')[0];
        let singleTotalPriceElement = cartItem.getElementsByClassName('cart-bar__cart-item__price')[0];
        let quantityElement = cartItem.getElementsByClassName('cart-bar__cart-item__quantity-input')[0];
        let singlePrice = parseFloat(singlePriceElement.innerText.replace('$', ''));
        let quantity = quantityElement.value;

        singleTotalPrice = singlePrice * quantity;

        total += singlePrice * quantity;
        cartQuantity += parseInt(quantity);

        singleTotalPriceElement.innerText = '$' + singleTotalPrice;
    }

    total = Math.round(total * 100) / 100;
    cartQuantity = Math.round(cartQuantity);

    cartQuantityIndicator.innerText = cartQuantity;
    document.getElementsByClassName('cart-total__price')[0].innerText = '$' + total;
}
