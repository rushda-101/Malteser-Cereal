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


  function increaseQuantity(el) {
    const container = el.closest(".quantity-container");
    const valueSpan = container.querySelector(".quantity-value");
    let value = parseInt(valueSpan.textContent);
    valueSpan.textContent = value + 1;
  }
  
  function decreaseQuantity(el) {
    const container = el.closest(".quantity-container");
    const valueSpan = container.querySelector(".quantity-value");
    let value = parseInt(valueSpan.textContent);
    if (value > 0) {
      valueSpan.textContent = value - 1;
    }
  }