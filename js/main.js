const loadUsers = async () => {
    const res = await fetch('https://forbes400.onrender.com/api/forbes400/');
    const data = await res.json();
    
    displayUsers(data);
}

loadUsers();

