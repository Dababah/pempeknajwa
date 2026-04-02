// Pempek Najwa - Admin CRUD Module
const CRUD = {
  // Get all menu items
  getMenu: () => {
    return JSON.parse(localStorage.getItem('najwa_menu_v2')) || [];
  },

  // Save all menu items
  saveMenu: (menu) => {
    localStorage.setItem('najwa_menu_v2', JSON.stringify(menu));
    window.location.reload(); // Refresh to reflect changes
  },

  // Add new product
  add: (product) => {
    const menu = CRUD.getMenu();
    product.id = Date.now(); // Simple unique ID
    menu.push(product);
    CRUD.saveMenu(menu);
    Swal.fire({
      title: 'Berhasil!',
      text: 'Produk baru telah ditambahkan ke menu.',
      icon: 'success',
      confirmButtonColor: '#c5a059',
      background: '#121212',
      color: '#ffffff'
    });
  },

  // Update existing product
  update: (id, updatedProduct) => {
    let menu = CRUD.getMenu();
    const index = menu.findIndex(p => p.id == id);
    if (index > -1) {
      menu[index] = { ...menu[index], ...updatedProduct };
      CRUD.saveMenu(menu);
      Swal.fire({
        title: 'Berhasil!',
        text: 'Produk telah berhasil diperbarui.',
        icon: 'success',
        confirmButtonColor: '#c5a059',
        background: '#121212',
        color: '#ffffff'
      });
    }
  },

  // Delete product with confirmation
  delete: (id) => {
    Swal.fire({
      title: 'Hapus Produk?',
      text: "Anda tidak akan dapat mengembalikan ini!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#c5a059',
      confirmButtonText: 'Ya, hapus!',
      cancelButtonText: 'Batal',
      background: '#121212',
      color: '#ffffff'
    }).then((result) => {
      if (result.isConfirmed) {
        let menu = CRUD.getMenu();
        menu = menu.filter(p => p.id != id);
        CRUD.saveMenu(menu);
      }
    });
  },

  // Image Helper (File to Base64)
  toBase64: (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  }
};

export default CRUD;
