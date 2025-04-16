function loadWireframe(page) {
    if (page === 'menu') {
      window.location.href = 'menu.html';
    } else if (page === 'track') {
      window.location.href = 'track.html';
    } else if (page === 'help') {
      window.location.href = 'help.html';
    }
  }


  let quantity = 0;

  function increaseQuantity() {
    quantity++;
    document.getElementById("quantity-value").textContent = quantity;
  }
  
  function decreaseQuantity() {
    if (quantity > 0) {
      quantity--;
      document.getElementById("quantity-value").textContent = quantity;
    }
  }