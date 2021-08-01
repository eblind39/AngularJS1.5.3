let MyNGApp = angular.module("MyNGApp", []);
MyNGApp.controller("MyFirstController", ["$scope", function(m) {
    m.nuevoComentario = {};
    m.comentarios = [
        { comentario: "Buen tutorial", autor: "Uriel" },
        { comentario: "Excelente explicación", autor: "Alvison" },
        { comentario: "Way to go!", autor: "Derek" },
    ];

    m.agregarComentario = function() {
        m.comentarios.push(m.nuevoComentario);
        m.nuevoComentario = {};
    }
}]);