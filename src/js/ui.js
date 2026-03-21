// Pempek Najwa - UI Specialist Module
const UI = {
  // Notification with SweetAlert2
  notify: (title, text, icon = 'success') => {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      background: '#121212',
      color: '#ffffff',
      confirmButtonColor: '#c5a059',
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true
    });
  },

  // Skeleton Loader for Menu
  renderSkeleton: (containerId, count = 4) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    let skeletons = '';
    for (let i = 0; i < count; i++) {
      skeletons += `
        <div class="glass-card p-4 space-y-4">
          <div class="skeleton w-full h-48"></div>
          <div class="skeleton w-1/2 h-6"></div>
          <div class="skeleton w-full h-12"></div>
          <div class="skeleton w-1/3 h-8"></div>
        </div>
      `;
    }
    container.innerHTML = skeletons;
  },

  // Initialize Core UI components
  init: () => {
    // Current Page Active State for Nav links
    const currentPath = window.location.pathname;
    document.querySelectorAll('nav a, div.bottom-nav a').forEach(link => {
      if (link.getAttribute('href') === currentPath || 
          (currentPath === '/' && link.getAttribute('href') === 'index.html')) {
        link.classList.add('text-[#c5a059]');
      }
    });

    // Check for localStorage initialization
    if (!localStorage.getItem('najwa_menu')) {
      fetch('src/data/menu.json')
        .then(res => res.json())
        .then(data => {
          localStorage.setItem('najwa_menu', JSON.stringify(data));
          console.log('Najwa Database Initialized');
        });
    }
  }
};

document.addEventListener('DOMContentLoaded', UI.init);
export default UI;
