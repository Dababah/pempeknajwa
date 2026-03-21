// Pempek Najwa - PDF Report Engine
const PDF = {
  // Generate A4 Menu Report
  generateReport: () => {
    const menu = JSON.parse(localStorage.getItem('najwa_menu')) || [];
    
    // Create new PDF instance (A4)
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Background Color (Header section)
    doc.setFillColor(10, 10, 10);
    doc.rect(0, 0, 210, 40, 'F');

    // Title & Brand
    doc.setTextColor(197, 160, 89); // Gold
    doc.setFontSize(24);
    doc.text('PEMPEK NAJWA', 105, 20, { align: 'center' });
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(10);
    doc.text('Menu Profesional & Laporan Stok', 105, 30, { align: 'center' });

    // Table Setup
    const tableData = menu.map((item, index) => [
      index + 1,
      item.name,
      `IDR ${item.price.toLocaleString('id-ID')}`,
      item.stock,
      item.category
    ]);

    doc.autoTable({
      startY: 50,
      head: [['No', 'Nama Produk', 'Harga', 'Stok', 'Kategori']],
      body: tableData,
      theme: 'grid',
      headStyles: { 
        fillColor: [197, 160, 89], 
        textColor: [0, 0, 0], 
        fontStyle: 'bold' 
      },
      styles: { 
        fontSize: 10, 
        cellPadding: 5 
      },
      alternateRowStyles: { 
        fillColor: [245, 245, 245] 
      }
    });

    // Footer
    const finalY = doc.lastAutoTable.finalY + 20;
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(8);
    doc.text(`Dicetak pada: ${new Date().toLocaleString('id-ID')}`, 105, finalY, { align: 'center' });
    doc.text('© 2024 Pempek Najwa. Seluruh hak cipta dilindungi.', 105, finalY + 5, { align: 'center' });

    // Save PDF
    doc.save(`Menu_Pempek_Najwa_${Date.now()}.pdf`);
    
    Swal.fire({
      title: 'PDF Berhasil Dibuat!',
      text: 'Laporan menu Anda sedang diunduh.',
      icon: 'success',
      confirmButtonColor: '#c5a059',
      background: '#121212',
      color: '#ffffff'
    });
  }
};

export default PDF;
