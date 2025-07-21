// Simulación de base de datos de usuarios
let users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'client', password: 'client123', role: 'client' }
];

// Usuario actual
let currentUser = null;

// Función de login
function login(username, password) {
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        return true;
    }
    return false;
}

// Función de registro
function register(username, password) {
    // Verificar si el usuario ya existe
    if (users.find(u => u.username === username)) {
        return false;
    }
    
    // Crear nuevo usuario (por defecto como cliente)
    const newUser = { username, password, role: 'client' };
    users.push(newUser);
    
    // Guardar en localStorage (simulación de persistencia)
    localStorage.setItem('users', JSON.stringify(users));
    
    return true;
}

// Función de logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    window.location.href = 'index.html';
}

// Obtener usuario actual
function getCurrentUser() {
    if (!currentUser) {
        const stored = localStorage.getItem('currentUser');
        if (stored) {
            currentUser = JSON.parse(stored);
        }
    }
    return currentUser;
}

// Verificar si está autenticado
function isAuthenticated() {
    return getCurrentUser() !== null;
}

// Verificar rol
function hasRole(role) {
    const user = getCurrentUser();
    return user && user.role === role;
}

// Proteger páginas
function requireAuth() {
    if (!isAuthenticated()) {
        window.location.href = 'login.html';
        return false;
    }
    return true;
}

function requireRole(role) {
    if (!requireAuth()) return false;
    
    if (!hasRole(role)) {
        alert('No tienes permisos para acceder a esta página de Nord Streaming');
        window.location.href = 'index.html';
        return false;
    }
    return true;
}

// Cargar usuarios desde localStorage al iniciar
function loadUsers() {
    const stored = localStorage.getItem('users');
    if (stored) {
        users = JSON.parse(stored);
    }
}

// Inicializar
loadUsers();
