function updateClock() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const formattedTime = now.toLocaleDateString('en-US', options);
    document.getElementById('clock').textContent = formattedTime;
  }
  setInterval(updateClock, 1000);

  // Simulate login (replace with actual authentication logic)
  const loginForm = document.getElementById('login-form');
  const mainContent = document.getElementById('main-content');
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    // ... (Your authentication logic here) ...
    // Example: Check if username is "Stacey" and password is "password"
    if (document.getElementById('username').value === 'Stacey' && document.getElementById('password').value === 'password') {
      loginForm.classList.add('hidden');
      mainContent.classList.remove('hidden');
    } else {
      alert('Invalid username or password.');
    }
  });