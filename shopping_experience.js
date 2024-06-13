// Task 1: Conditional statement to check if the user is logged in
let isLoggedIn = true; // Assuming the user is logged in

if (isLoggedIn) {
    // Task 2: Loop to display available products and add to cart
    let availableProducts = ['Product 1', 'Product 2', 'Product 3', 'Product 4'];
    let cart = [];

    console.log("Available Products:");
    for (let i = 0; i < availableProducts.length; i++) {
        console.log(`${i + 1}. ${availableProducts[i]}`);
    }

    // Add products to cart
    cart.push(availableProducts[0], availableProducts[2]); // Adding Product 1 and Product 3 to cart

    // Task 3: Calculate total cost and display
    let prices = [10, 20, 15, 25]; // Prices of products
    let totalCost = 0;

    for (let i = 0; i < cart.length; i++) {
        let index = availableProducts.indexOf(cart[i]);
        if (index !== -1) {
            totalCost += prices[index];
        }
    }

    console.log("Items in Cart:", cart);
    console.log("Total Cost:", totalCost);
} else {
    console.log("Please log in to add items to the cart.");
}
