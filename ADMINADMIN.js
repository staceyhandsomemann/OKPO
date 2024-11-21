// Shared state for users (acts as a mock backend)
let users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
  ];
  
  const adminTableBody = document.querySelector('#adminTable tbody');
  const userTableBody = document.querySelector('#userTable tbody');
  const addUserBtn = document.getElementById('addUserBtn');
  const userModal = document.getElementById('userModal');
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const userRoleInput = document.getElementById('userRole');
  const saveUserBtn = document.getElementById('saveUserBtn');
  const closeModalBtn = document.getElementById('closeModalBtn');
  
  let editingUserId = null;
  
  // Function to render users in the Admin and User Profile sections
  function renderUsers() {
    adminTableBody.innerHTML = '';
    userTableBody.innerHTML = '';
    users.forEach(user => {
      // Render for Admin Table
      const adminRow = document.createElement('tr');
      adminRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
        <td>
          <button onclick="editUser(${user.id})">Edit</button>
          <button onclick="deleteUser(${user.id})">Delete</button>
        </td>
      `;
      adminTableBody.appendChild(adminRow);
  
      // Render for User Profile Table
      const userRow = document.createElement('tr');
      userRow.innerHTML = `
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.role}</td>
      `;
      userTableBody.appendChild(userRow);
    });
  }
  
  // Add User
  addUserBtn.addEventListener('click', () => {
    editingUserId = null;
    userNameInput.value = '';
    userEmailInput.value = '';
    userRoleInput.value = '';
    userModal.style.display = 'block';
  });
  
  // Edit User
  function editUser(id) {
    const user = users.find(u => u.id === id);
    if (user) {
      editingUserId = id;
      userNameInput.value = user.name;
      userEmailInput.value = user.email;
      userRoleInput.value = user.role;
      userModal.style.display = 'block';
    }
  }
  
  // Save User (Add or Update)
  saveUserBtn.addEventListener('click', () => {
    const name = userNameInput.value.trim();
    const email = userEmailInput.value.trim();
    const role = userRoleInput.value.trim();
  
    if (!name || !email || !role) {
      alert('All fields are required!');
      return;
    }
  
    if (editingUserId) {
      // Update user
      const user = users.find(u => u.id === editingUserId);
      if (user) {
        user.name = name;
        user.email = email;
        user.role = role;
      }
    } else {
      // Add new user
      const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email,
        role,
      };
      users.push(newUser);
    }
  
    userModal.style.display = 'none';
    renderUsers(); // Update both admin and user views
  });
  
  // Delete User
  function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers(); // Update both admin and user views
  }
  
  // Close Modal
  closeModalBtn.addEventListener('click', () => {
    userModal.style.display = 'none';
  });
  
  // Initial Render
  renderUsers();
  