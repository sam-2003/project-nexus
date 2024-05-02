document.getElementById('signup-toggle').addEventListener('click', function() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
  
    document.getElementById('login-toggle').classList.remove('active');
    this.classList.add('active');
  });
  
  document.getElementById('login-toggle').addEventListener('click', function() {
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('forgot-password-form').style.display = 'none';
  
    document.getElementById('signup-toggle').classList.remove('active');
    this.classList.add('active');
  });
  
  document.getElementById('forgot-password').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('forgot-password-form').style.display = 'block';
  });
  
  // Form Validation for Login Form
  document.getElementById('login-form').addEventListener('submit', function(event) {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();
    const errorMessage = document.getElementById('login-error');
  
    errorMessage.innerText = '';
  
    if (username === '') {
      errorMessage.innerText = 'Username is required';
      event.preventDefault();
    }
  
    if (password === '') {
      errorMessage.innerText = 'Password is required';
      event.preventDefault();
    }
  });
  
  // Form Validation for Signup Form
  document.getElementById('signup-form').addEventListener('submit', function(event) {
    const username = document.getElementById('signup-username').value.trim();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const usernameError = document.getElementById('signup-username-error');
    const emailError = document.getElementById('signup-email-error');
    const passwordError = document.getElementById('signup-password-error');
  
    usernameError.innerText = '';
    emailError.innerText = '';
    passwordError.innerText = '';
  
    if (username === '') {
      usernameError.innerText = 'Username is required';
      event.preventDefault();
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.innerText = 'Invalid email format';
      event.preventDefault();
    }
  
    if (password.length < 8) {
      passwordError.innerText = 'Password must be at least 8 characters long';
      event.preventDefault();
    }
  });
  
  // Form Validation for Forgot Password Form
  document.getElementById('forgot-password-form').addEventListener('submit', function(event) {
    const email = document.getElementById('forgot-email').value.trim();
    const emailError = document.getElementById('forgot-email-error');
  
    emailError.innerText = '';
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      emailError.innerText = 'Invalid email format';
      event.preventDefault();
    }
  });
  
  