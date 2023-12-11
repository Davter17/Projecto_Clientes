
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

let arrayExperiencias = [];
cargarExperiencias();

// funcion que crea nueva experiencia
function nuevaExperiencia() {

    let autor = document.getElementById("autor_experiencia").value;
    let titulo = document.getElementById("titulo_experiencia").value;
    let descripcion = document.getElementById("descripcion").value;
    let imagen=document.getElementById("imagen_experiencia").value;
    let fecha=fechaHoy();

    // sacar usuario del LS
    // let autor=

    let nuevaExp = new Experiencia(autor, titulo, descripcion,imagen, fecha)
    arrayExperiencias.push(nuevaExp);
    localStorage.setItem("Experiencias", JSON.stringify(arrayExperiencias));
    alert("Experiencia guardada con exito");
}

function cargarExperiencias(){
    let experiencias = localStorage.getItem("Experiencias");
    experiencias = JSON.parse(experiencias);
    if (arrayExperiencias != null) {

        experiencias.forEach(element => {
            element.__proto__ = new Experiencia();
            arrayExperiencias.push(element);
        });
    }
}


function mostrarExperiencias(){
    let displayExperiencias = document.getElementById("experiencias");
    let cadena = "";
    arrayExperiencias.forEach(element => {
        cadena+="<article>";
        cadena+="<a href='#'>";
        cadena+="<img src='"+element.imagen+"' alt='"+element.titulo+"'/>";
        cadena+="<h4>"+element.titulo+"</h4>";
        cadena+="<p>"+element.autor+"</p>";
        cadena+="<p>"+element.descripcion+"</p>";
        cadena+="</a>";
        cadena+="</article>";
    });
    displayExperiencias.innerHTML = cadena;
}




// funcion que devuelve la fecha actual en formato D/M/A
function fechaHoy() {
    let h = new Date();
    let d = h.getDate();
    let m = h.getMonth();
    let y = h.getFullYear();
    return fechaRegistro = d + "/" + m + "/" + y + "";
}

