const searchInput = document.getElementById('searchInput');
const userList = document.getElementById('userList');

let users = []; // Здесь будет храниться список пользователей

// Функция для получения пользователей (имитация API)
async function fetchUsers(searchTerm = '') {
    // Здесь можно заменить на реальный API вызов
    const response = await fetch(`/api/users?searchTerm=${searchTerm}`);
    const data = await response.json();
    users = data.result;
    displayUsers(users);
}

// Функция для отображения пользователей
function displayUsers(users) {
    userList.innerHTML = '';
    users.forEach(user => {
        const userItem = document.createElement('div');
        userItem.className = 'user-item';
        userItem.innerHTML = `
            <img src="${user.avatarUrl}" alt="${user.name}">
            <span>${user.name}</span>
        `;
        userList.appendChild(userItem);
    });
}

// Обработчик ввода в строке поиска
searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value;
    fetchUsers(searchTerm);
});

// Инициализация списка пользователей при загрузке страницы
fetchUsers();
