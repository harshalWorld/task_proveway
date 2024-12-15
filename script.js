
document.addEventListener("DOMContentLoaded", () => {
    const radioButtons = document.querySelectorAll('input[name="units"]');
    const totalPrice = document.querySelector(".total-price");
    const addToCartBtn = document.getElementById("addToCart");
    const prices = { "1": 10.00, "2": 18.00, "3": 24.00 };

    radioButtons.forEach((radio, index) => {
        radio.addEventListener("change", () => {
            totalPrice.textContent = `$${prices[index + 1].toFixed(2)} USD`;
        });
    });
    addToCartBtn.addEventListener("click", () => { alert("Items added to cart successfully!"); });
});
