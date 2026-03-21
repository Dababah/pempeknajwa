// Pempek Najwa - Shopping Cart Module
const Cart = {
  // Get cart items from localStorage
  getItems: () => {
    return JSON.parse(localStorage.getItem('najwa_cart')) || [];
  },

  // Save cart items to localStorage
  saveItems: (items) => {
    localStorage.setItem('najwa_cart', JSON.stringify(items));
    window.dispatchEvent(new Event('cartUpdated')); // Simple state synchronization
  },

  // Add item to cart
  add: (id) => {
    const products = JSON.parse(localStorage.getItem('najwa_menu')) || [];
    const product = products.find(p => p.id == id);
    if (!product) return;

    let items = Cart.getItems();
    const existingIndex = items.findIndex(item => item.id == id);

    if (existingIndex > -1) {
      items[existingIndex].qty += 1;
    } else {
      items.push({ 
        ...product, 
        qty: 1, 
        priceInGold: product.price / 1000 // Artistic representation of price in "gold" units
      });
    }

    Cart.saveItems(items);
    Swal.fire({
      title: 'Ditambahkan ke Keranjang',
      text: `${product.name} siap dipesan!`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
      background: '#0a0a0a',
      color: '#c5a059',
      backdrop: 'rgba(0,0,0,0.5)'
    });
  },

  // Remove item or decrease quantity
  remove: (id) => {
    let items = Cart.getItems();
    const index = items.findIndex(item => item.id == id);
    
    if (index > -1) {
      if (items[index].qty > 1) {
        items[index].qty -= 1;
      } else {
        items.splice(index, 1);
      }
      Cart.saveItems(items);
    }
  },

  // Full item deletion
  delete: (id) => {
    let items = Cart.getItems();
    items = items.filter(item => item.id != id);
    Cart.saveItems(items);
  },

  // Total Calculation
  calculate: () => {
    const items = Cart.getItems();
    const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
    const tax = subtotal * 0.1; // 10% Service & Tax
    const total = subtotal + tax;
    
    return { subtotal, tax, total };
  },

  formatRupiah: (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(number);
  }
};

export default Cart;
