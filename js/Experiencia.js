// creamos la clase Experiencia

class Experiencia {

    constructor(autor, titulo, descripcion,imagen, fCreacion) {

        this._autor = autor;
        this._titulo = titulo;
        this._descripcion = descripcion,
        this._imagen = imagen;

        this._fCreacion = fCreacion;

    }


    // metodos getter
    get autor() {
        return this._autor;
    }
    get titulo() {
        return this._titulo;
    }
    get descripcion() {
        return this._descripcion;
    }
    get imagen() {
        return this._imagen;
    }
    

get fCreacion(){
     return this._fCreacion;
}

    // metodos setter
    set autor(nombre) {
        this._autor = nombre;
    }
    set titulo(tit) {
        this._titulo = tit;
    }
    set descripcion(desc) {
        this._descripcion = desc;
    }
    set imagen(imgn) {
        this._imagen = imgn;
    }


}
// fin clase Experiencias


// creamos un array de Experiencias

arrayExperiencias = [];

// funcion que crea nueva experiencia
function nuevaExperiencia() {

    let autor = document.getElementById("autor_experiencia").value;
    let titulo = document.getElementById("titulo_experiencia").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen=document.getElementById("img_experiencia").value;
    let fecha=fechaHoy();

    // sacar usuario del LS
    // let autor=

    let nuevaExp = new Experiencia(autor, titulo, descripcion,imagen, fecha)
    arrayExperiencias.push(nuevaExp);
    localStorage.setItem(titulo, JSON.stringify(nuevaExp));

    //llamar funcion de mostrar experiencia cuando se crea una experiencia
    mostrarExperiencias();
}

//funcion para eliminar la experiencia
function eliminarExperiencia(index) {
    //Elimina la experiencia del array
    arrayExperiencias.splice(index, 1);

    //mostrar las experiencias actualizadas
    mostrarExperiencias();

    // Elimina la experiencia del localStorage
    localStorage.removeItem(arrayExperiencias[index].titulo);
}

    //funcion de mostrar experiencia
    function mostrarExperiencias() {
        let container = document.getElementById("misExperiencias");
    
        //Limpiamos el contenido actual de la div
        container.innerHTML = "";
    
        //Recorremos el array de experiencias y creamos tarjetas
        arrayExperiencias.forEach((experiencia, index) => {
            let card = document.createElement("div");
            card.classList.add("card");
    
            //Contenido de la tarjeta
            card.innerHTML = `
                <img src="${experiencia.imagen}" alt="${experiencia.titulo}">
                <h3>${experiencia.titulo}</h3>
                <p>Autor: ${experiencia.autor}</p>
                <p>Descripción: ${experiencia.descripcion}</p>
                <p>Fecha de creación: ${experiencia.fCreacion}</p>
                <button onclick="eliminarExperiencia(${index})">Eliminar</button>
                <button onclick="modificarExp(${index})">Modificar</button>
            `;
    
            // Agregamos la tarjeta al contenedor
            container.appendChild(card);
        });
    }
    
        //cuando entras en la pagina llama la funcion con los cards dentro de localStorage
    document.addEventListener("DOMContentLoaded", function () {
        cargarExperienciasGuardadas();
    });


//funcion para cargar experiencia guardad
function cargarExperienciasGuardadas() {
    //Limpiar array
    arrayExperiencias = [];

    //recorrer las claves en localStorage y añadir las experiencias al array
    for (let i = 0; i < localStorage.length; i++) {
        let clave = localStorage.key(i);
        let experienciaGuardada = JSON.parse(localStorage.getItem(clave));
        experienciaGuardada.__proto__=new Experiencia();
        arrayExperiencias.push(experienciaGuardada);
    }

    //Mostramos las experiencias al cargar la página
    mostrarExperiencias();
}
//function modificacion
function modificarExp(index) {
    //indice o id del card
    if (index < 0 || index >= arrayExperiencias.length) {
        alert("Índice de experiencia inválido");
        return;
    }

    //la experiencia actual
    const experienciaActual = arrayExperiencias[index];

    //cambiar experiencia
    const nuevoAutor = prompt("Nuevo autor:", experienciaActual.autor);
    const nuevoTitulo = prompt("Nuevo título:", experienciaActual.titulo);
    const nuevaDescripcion = prompt("Nueva descripción:", experienciaActual.descripcion);
    const nuevaImagen = prompt("Nueva imagen:", experienciaActual.imagen);

    //actualizacion de los valores
    experienciaActual.autor = nuevoAutor;
    experienciaActual.titulo = nuevoTitulo;
    experienciaActual.descripcion = nuevaDescripcion;
    experienciaActual.imagen = nuevaImagen;

    //actualizar la experiencia en el localStorage si lo deseas
    localStorage.setItem(nuevoTitulo, JSON.stringify(experienciaActual));

    //llamar funcion de mostrar el card
    mostrarExperiencias();
}


// funcion que devuelve la fecha actual en formato D/M/A
function fechaHoy() {
    let h = new Date();
    let d = h.getDate();
    let m = h.getMonth();
    let y = h.getFullYear();
    return fechaRegistro = d + "/" + m + "/" + y + "";
}

