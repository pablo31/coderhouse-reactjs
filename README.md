# Mercadito

Pablo Fernandez
Comisión 39660 - React JS - Coderhouse

### Prerequisitos

El proyecto fue desarrollado bajo **Node** v16.20.0 y **NPM** v8.19.4, usando **Vite** como framework.

### Instalación
```bash
nvm install v16.20.0
nvm use v16.20.0
npm install
```

### Ejecución
```bash
npm run dev
```

### Navegando la app

Una vez levantado el server, ingresar a http://localhost:5173/
La aplicación mostrará un catálogo de productos. Se pueden elegir distintas categorías en el nav bar superior, para filtrar.
Luego, se puede acceder al carrito clickeando en su ícono, también en el nav bar.
Es flujo de compra consiste en:
1. Listado de items del carrito
2. Checkout, donde se llenan los datos del comprador
3. Brief, donde se muestra un resumen del carrito, los datos, y el total
4. Acción de compra definitiva
Una vez completada la compra de un carrito, la aplicación volverá a la pantalla de este, donde indicará que fue vaciado.
