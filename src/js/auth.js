// Pempek Najwa - Authentication Module
const Auth = {
  // Login Check
  login: (username, password) => {
    if (username === 'Admin' && password === 'Najwa123') {
      localStorage.setItem('najwa_session', 'true');
      Swal.fire({
        title: 'Login Berhasil!',
        text: 'Selamat datang, Admin Najwa.',
        icon: 'success',
        confirmButtonColor: '#c5a059',
        background: '#121212',
        color: '#ffffff'
      }).then(() => {
        window.location.href = '../admin/dashboard.html';
      });
      return true;
    } else {
      Swal.fire({
        title: 'Gagal Login',
        text: 'Username atau Password salah!',
        icon: 'error',
        confirmButtonColor: '#c5a059',
        background: '#121212',
        color: '#ffffff'
      });
      return false;
    }
  },

  // Check Session for Restricted Pages
  checkSession: () => {
    const session = localStorage.getItem('najwa_session');
    if (!session && window.location.pathname.includes('/admin/dashboard.html')) {
        window.location.href = '/admin/login.html';
    }
    return !!session;
  },

  // Logout
  logout: () => {
    localStorage.removeItem('najwa_session');
    window.location.href = '/admin/login.html';
  }
};

export default Auth;
