// Variables globales
const carrito = [];

// Función para cargar productos desde una API
async function cargarProductos() {
    const response = await fetch('https://api.example.com/productos'); // Reemplaza con tu API real
    const productos = await response.json();

    const contenedorProductos = document.getElementById('productos-container');
    productos.forEach(producto => {
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');
        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <button onclick="agregarAlCarrito(${producto.id}, '${producto.nombre}', ${producto.precio})">Añadir al carrito</button>
        `;
        contenedorProductos.appendChild(divProducto);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id, nombre, precio) {
    carrito.push({ id, nombre, precio });
    actualizarCarrito();
}

// Función para actualizar el carrito
function actualizarCarrito() {
    const listaCarrito = document.getElementById('carrito-list');
    listaCarrito.innerHTML = '';

    let total = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nombre} - $${item.precio}`;
        listaCarrito.appendChild(li);
        total += item.precio;
    });

    document.getElementById('carrito-total').innerHTML = `Total: $${total}`;
}

// Cargar productos al cargar la página
document.addEventListener('DOMContentLoaded', cargarProductos);
