const product = {
    id: 'P1234',
    name: 'Kurti Set',
    price: 500,
    qty: 1,
};

let cart = [];

function addToCart(item) {
    const existing = cart.find(i => i.id === item.id);
    if (existing) {
        existing.qty += item.qty;
        console.log(`Updated: ${existing.name}. New quantity: ${existing.qty}`);
        alert(`${item.name} quantity updated! New total: ${existing.qty}`);
    } else {
        cart.push({ ...item });
        console.log(`Added: ${item.name}`);
        alert(`${item.name} added to cart!`);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addToCartButton');
    
    if (addBtn) {
        addBtn.addEventListener('click', () => {
            addToCart(product);
        });
    }
});