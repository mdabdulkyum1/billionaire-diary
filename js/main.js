const loadUsers = async () => {
    const res = await fetch('https://forbes400.onrender.com/api/forbes400?limit=10');
    const data = await res.json();
    renderRandomUsers(data);
}

const showLoading = () => {
    const loading = document.getElementById('loading');
    const userDataContainer = document.getElementById('user-data-container');
    loading.classList.remove('hidden')
    setTimeout(() => {
        loading.classList.add('hidden')
        userDataContainer.classList.remove('hidden')
    }, 500);
}

loadUsers();

