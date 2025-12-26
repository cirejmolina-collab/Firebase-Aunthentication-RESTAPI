// Replace with your Firebase Web API Key
const FIREBASE_API_KEY = 'AIzaSyDGddbNVrwQk0LZz1A4a2aS-_t9_wqI3OA';

const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const registerBtn = document.getElementById('registerBtn');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');
const statusP = document.getElementById('status');
const themeToggle = document.getElementById('themeToggle');

// Theme toggle
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  themeToggle.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

registerBtn.onclick = async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    statusP.textContent = 'Please enter email and password.';
    statusP.style.color = '#e53935';
    return;
  }

  statusP.textContent = 'Creating account...';
  statusP.style.color = '';

  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, returnSecureToken: true })
      }
    );

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error.message);
    }

    // ✅ Registration success
    statusP.textContent = 'Account created successfully. Please log in.';
    statusP.style.color = '#2e7d32';

    // ✅ Reset UI for login
    registerBtn.style.display = 'none';
    loginBtn.style.display = 'inline-block';
    logoutBtn.style.display = 'none';

    // Optional: clear password for security
    passwordInput.value = '';

  } catch (err) {
    statusP.textContent = 'Error: ' + err.message;
    statusP.style.color = '#e53935';
  }
};


loginBtn.onclick = async () => {
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  if (!email || !password) {
    statusP.textContent = 'Please enter email and password.';
    statusP.style.color = 'red';
    return;
  }

  statusP.textContent = 'Logging in...';
  statusP.style.color = '';

  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, returnSecureToken: true })
      }
    );

    const data = await res.json();

    if (data.error) {
      // If account does not exist
      if (data.error.message === 'EMAIL_NOT_FOUND') {
        statusP.textContent = 'Account not found. Please register to create an account.';
        statusP.style.color = '#e53935';
        return;
      }

      throw new Error(data.error.message);
    }

    statusP.textContent = 'Login successful!';
    statusP.style.color = '#2e7d32';

    logoutBtn.style.display = 'inline-block';
    loginBtn.style.display = 'none';
    registerBtn.style.display = 'none';

  } catch (err) {
    statusP.textContent = 'Error: ' + err.message;
    statusP.style.color = '#e53935';
  }
};
