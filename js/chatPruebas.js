//LocalStorage
function cargar (clave){
    datos = localStorage.getItem(clave);
    return datos ? JSON.parse(datos) : null;
}

function guardar(clave, datos){
    localStorage.setItem(clave, JSON.stringify(datos));
}

//Cargar LocalStorage nada más iniciar
document.addEventListener("DOMContentLoaded", () => {
    
    usuarios = cargar('usuarios') || [];
    for (let i = 0; i < usuarios.length; i++) {
        usuarios[i]._proto = new Usuario();
    }
    
    usuarioActual = cargar('usuarioActual') || null;
    if (usuarioActual !== null){
        chatUsuarioHola = document.getElementById("chatUsuarioHola");
        
        chatUsuarioHola.innerHTML += usuarioActual._nombre; 
    } else{
        alert("Jo");
    }
});