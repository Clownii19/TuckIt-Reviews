const cartCounter = document.getElementById("CartCount");

// Set the counter based on cookie
count_cookie_cart_items();

document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (event.target.matches('.cart-button')) {
    // Add to cookies to track the items
    add_cart_cookie(event.target.getAttribute('item-id'))

    // Add to Cart Counter
    
    cartCounter.innerHTML = Number(cartCounter.innerHTML) + 1
  }

}, false);



function add_cart_cookie(item_id) {
  // Get current cookie
  cart_cookie = document.cookie
  
  if(cart_cookie == '') {
    console.log('Cart is empty');
    cart_cookie = 'cart='
    cart_cookie += item_id;
  } else {
    cart_cookie += "," + item_id;
  }

  document.cookie = cart_cookie;
  console.log(document.cookie);
}

function count_cookie_cart_items() {
  if(document.cookie == '') {
    // Do nothing. Keep the counter at zero.
  } else {
      let count = document.cookie.split(',').length;
    cartCounter.innerHTML =  count;
  }
}