const loadUsers = async () => {
    const res = await fetch('https://forbes400.onrender.com/api/forbes400/');
    const data = await res.json();
    renderRandomUsers(data);
    showAllB(data)
}

const loadRichestByTexas = async () => {
    const res = await fetch('https://forbes400.onrender.com/api/forbes400/states/Texas');
    const data = await res.json();
    richestByStatesTexas(data);
}
const loadRichestByTechnology = async () => {
    try {
        const res = await fetch('https://forbes400.onrender.com/api/forbes400/industries/technology');
        const data = await res.json();
        showLoading();
        richestByTechnology(data);
    } catch (err) {
        console.error(err)
    }
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

   // Toggle the sidebar for mobile
// Toggle the sidebar for mobile
const sidebar = document.getElementById('sidebar');
const toggleButton = document.getElementById('sidebarToggle');

toggleButton.addEventListener('click', () => {
  if (sidebar.classList.contains('-translate-x-full')) {
    sidebar.classList.remove('-translate-x-full');
  } else {
    sidebar.classList.add('-translate-x-full');
  }
});


showLoading();
loadRichestByTexas()
loadUsers();