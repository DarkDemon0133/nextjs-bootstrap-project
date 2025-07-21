// Simulación de base de datos de productos
let products = [
    {
        id: '1',
        title: 'Netflix Premium',
        description: 'Acceso completo a Netflix con contenido en 4K y múltiples pantallas simultáneas.',
        price: 15.99,
        imageUrl: 'https://images.pexels.com/photos/4009402/pexels-photo-4009402.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: '2',
        title: 'HBO Max',
        description: 'Disfruta de las mejores series y películas exclusivas de HBO.',
        price: 14.99,
        imageUrl: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: '3',
        title: 'Spotify Premium',
        description: 'Música sin límites, sin anuncios y con calidad superior.',
        price: 9.99,
        imageUrl: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
        id: '4',
        title: 'Disney Plus',
        description: 'Todo el contenido de Disney, Marvel, Star Wars y National Geographic.',
        price: 7.99,
        imageUrl: 'https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
];

// Obtener todos los productos
function getProducts() {
    const stored = localStorage.getItem('products');
    if (stored) {
        products = JSON.parse(stored);
    }
    return products;
}

// Guardar productos en localStorage
function saveProducts() {
    localStorage.setItem('products', JSON.stringify(products));
}

// Agregar producto
function addProduct(productData) {
    const newProduct = {
        id: Date.now().toString(),
        ...productData
    };
    products.push(newProduct);
    saveProducts();
    return newProduct;
}

// Actualizar producto
function updateProduct(id, productData) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        products[index] = { ...products[index], ...productData };
        saveProducts();
        return products[index];
    }
    return null;
}

// Eliminar producto
function deleteProduct(id) {
    const index = products.findIndex(p => p.id === id);
    if (index !== -1) {
        const deleted = products.splice(index, 1)[0];
        saveProducts();
        return deleted;
    }
    return null;
}

// Obtener producto por ID
function getProductById(id) {
    return products.find(p => p.id === id);
}

// Inicializar productos por defecto si no existen
function initializeProducts() {
    const stored = localStorage.getItem('products');
    if (!stored) {
        saveProducts();
    }
}

// Inicializar al cargar
initializeProducts();
