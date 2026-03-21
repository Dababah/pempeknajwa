// Pempek Najwa - WhatsApp Integration Module
import Cart from './cart.js';

const WhatsApp = {
  // Generate detailed digital invoice message
  generateMessage: (customerData) => {
    const items = Cart.getItems();
    const { subtotal, tax, total } = Cart.calculate();
    
    let message = `*INVOICE DIGITAL - PEMPEK NAJWA*\n`;
    message += `--------------------------------------\n`;
    message += `📅 Tanggal: ${new Date().toLocaleDateString('id-ID')}\n`;
    message += `👤 Nama: ${customerData.name}\n`;
    message += `📍 Alamat: ${customerData.address}\n`;
    message += `📞 Telp: ${customerData.phone}\n`;
    message += `--------------------------------------\n`;
    message += `📦 *ITEM PESANAN*:\n`;
    
    items.forEach((item, index) => {
      const lineItem = `${index + 1}. ${item.name} (x${item.qty})\n   - Harga: ${Cart.formatRupiah(item.price * item.qty)}\n`;
      message += lineItem;
    });
    
    message += `--------------------------------------\n`;
    message += `💰 *RINGKASAN PEMBAYARAN*:\n`;
    message += `Subtotal: ${Cart.formatRupiah(subtotal)}\n`;
    message += `Pajak (10%): ${Cart.formatRupiah(tax)}\n`;
    message += `*Total Akhir: ${Cart.formatRupiah(total)}*\n`;
    message += `--------------------------------------\n`;
    message += `_Mohon segera memproses pembayaran agar pesanan dapat dikirim._\n`;
    message += `Terima kasih atas pesanan Anda!`;
    
    return encodeURIComponent(message);
  },

  // Open WhatsApp with generated message
  send: (customerData) => {
    const ADMIN_WA = '628123456789'; // Default Admin WhatsApp number
    const message = WhatsApp.generateMessage(customerData);
    const url = `https://wa.me/${ADMIN_WA}?text=${message}`;
    window.open(url, '_blank');
  }
};

export default WhatsApp;
