// Funciones principales para la página de inicio

// Verificar si el usuario está autenticado al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    updateNavigation();
});

// Actualizar navegación basada en el estado de autenticación
function updateNavigation() {
    const user = getCurrentUser();
    const navLinks = document.getElementById('navLinks');
    
    if (user) {
        // Usuario autenticado
        navLinks.innerHTML = `
            <span class="nav-link" style="font-style: italic;">Hola, ${user.username}</span>
            ${user.role === 'admin' ? '<a href="admin.html" class="nav-link">Panel Admin</a>' : ''}
            ${user.role === 'client' ? '<a href="client.html" class="nav-link">Panel Cliente</a>' : ''}
            <button onclick="logout()" class="btn btn-small" style="background: #a855f7; margin-left: 1rem;">Cerrar Sesión</button>
        `;
    } else {
        // Usuario no autenticado
        navLinks.innerHTML = `
            <a href="login.html" class="nav-link">Iniciar Sesión</a>
            <a href="register.html" class="nav-link">Registrar</a>
        `;
    }
}

// Función para mostrar animaciones suaves
function animateOnScroll() {
    const elements = document.querySelectorAll('.feature-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Agregar listener para scroll
window.addEventListener('scroll', animateOnScroll);

// Inicializar animaciones
document.addEventListener('DOMContentLoaded', function() {
    // Configurar elementos para animación
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Ejecutar animación inicial
    setTimeout(animateOnScroll, 100);
});
