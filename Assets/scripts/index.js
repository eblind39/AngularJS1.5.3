let ngapp = angular.module("MyNGApp", ["ngRoute"]);

ngapp.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: 'index.html',
            controller: 'controlador'
        })
        .when("/cajero", {
            templateUrl: 'cajero.html',
            controller: 'controlador'
        })
        .when("/productos", {
            templateUrl: 'productos.html',
            controller: 'controlador'
        });
});

ngapp.controller("controlador", function($scope) {
    let lista = this, n = 2, nCarrito = 1;;

    lista.productos = [
        { id: 1, nombre: "Agua", precio: 14.50 },
        { id: 2, nombre: "Gatorade", precio: 28.75 },
    ];

    lista.carrito = [];

    lista.addProducto = function() {
        let nombre = lista.nombre;
        let precio = lista.precio;

        if (nombre!=='' && precio!=='' && !isNaN(precio))  {
            n++;
            lista.productos.push({ id: n, nombre, precio });
            lista.nombre = lista.precio = '';
        }
    }

    lista.addAlCarrito = function() {
        let id = lista.productoSeleccionado;
        let cantidad = lista.cantidad;
        let producto = lista.productos.find(function(obj) {
            return obj.id == id;
        });
        if (producto!=undefined && cantidad>0) {
            lista.carrito.push({ id: nCarrito, nombre: producto.nombre, precio: producto.precio, cantidad, total: producto.precio * cantidad });
            lista.cantidad = '';
            lista.productoSeleccionado = null;
            nCarrito++;
        }
    }

    lista.getTotalCarrito = function() {
        let total = 0;
        
        lista.carrito.forEach(x => {
            total += x.total;
        });

        return total;
    }
});

// document.addEventListener("DOMContentLoaded", function() {
//     INDEX.init();
// });

// const INDEX = {
//     init() {
//         console.log('Hello World!!! npm start was executed...');
//     }
// }