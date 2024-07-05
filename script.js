document.addEventListener('DOMContentLoaded', function() {

            function calculateDiscountPercentage(originalPrice, discountedPrice) {
                return ((originalPrice - discountedPrice) / originalPrice * 100).toFixed(0);
            }


            const productData = {
                vendor: "Marmeto",
                title: "Embrace Sideboard",
                price: 129999.00,
                compareAtPrice: 19999.00,
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui finibus convallis."
            };


            document.getElementById('product-vendor').textContent = productData.vendor;
            document.getElementById('product-title').textContent = productData.title;
            document.getElementById('product-price').textContent = `$${productData.price.toFixed(2)}`;
            document.getElementById('compare-at-price').innerHTML = `<del>$${productData.compareAtPrice.toFixed(2)}</del>`;
            document.getElementById('percent-off').textContent = `${calculateDiscountPercentage(productData.compareAtPrice, productData.price)}%`;

            // Handle thumbnail image clicks (for demonstration)
            const thumbnails = document.querySelectorAll('.thumbnail');
            thumbnails.forEach(thumbnail => {
                thumbnail.addEventListener('click', function() {
                    const imageUrl = this.getAttribute('src');
                    document.getElementById('product-image').setAttribute('src', imageUrl);
                });
            });

            // Handle color selection
            const colorBoxes = document.querySelectorAll('.color-box');
            let selectedColor = '';
            colorBoxes.forEach(box => {
                box.addEventListener('click', function() {
                    colorBoxes.forEach(box => box.classList.remove('selected'));
                    this.classList.add('selected');
                    selectedColor = this.getAttribute('data-color');
                });
            });

            // Handle size selection
            const sizeOptions = document.querySelectorAll('.size-options input[type="radio"]');
            let selectedSize = '';
            sizeOptions.forEach(option => {
                option.addEventListener('change', function() {
                    selectedSize = this.value;
                });
            });

            // Handle quantity increment and decrement
            const quantityInput = document.getElementById('quantity');
            document.getElementById('increment').addEventListener('click', function() {
                quantityInput.value = parseInt(quantityInput.value) + 1;
            });
            document.getElementById('decrement').addEventListener('click', function() {
                if (parseInt(quantityInput.value) > 1) {
                    quantityInput.value = parseInt(quantityInput.value) - 1;
                }
            });


            document.getElementById('add-to-cart').addEventListener('click', function() {
                        const quantity = quantityInput.value;
                        const message = `Added to cart: ${productData.title}, ${selectedColor ? `Color: ${selectedColor}` : ''}, ${selectedSize ? `Size: ${selectedSize}` : ''}, Quantity: ${quantity}`;
      document.getElementById('add-to-cart-message').textContent = message;
      document.getElementById('add-to-cart-message').style.display = 'block';
    });
  });