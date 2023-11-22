A partir de la web que se te entrega, debes implementar la funcionalidad requerida en JavaScript. Para ello, trabajaréis en grupos de 5 personas.

En concreto, la funcionalidad nueva de la web será la siguiente:

- Será funcional el registro y el login de usuario. Para ello, deberás crear la página de registro correspondiente que guardará los datos del usuario (nombre, apellidos, fecha de nacimiento, email, fecha de registro, último acceso, contraseña). No será posible el registro de 2 usuarios con el mismo email, dando un aviso de email ya registrado (será la única validación que se realizará).

- El login comprobará que el email y la contraseña coinciden, y en caso de que así sea llevará a la sección de experiencias (todavía no creada)

- Al iniciar sesión, la cabecera cambiará permitiendo el cierre de sesión y ver el nombre completo de usuario, así como el último inicio de sesión. Una sesión caducará a los 15 minutos de inactividad (sin cambiar de página).

- La pagina de experiencias solo será accesible por usuarios logueados (o redirigirá a la página de login). Esta página permitirá crear nuevas experiencias por parte del usuario (autor, título, descripción, fecha creación e imagen de fondo), ver las existentes, modificarlas y  borrarlas.

- Se creará una página de chat que permitirá conversar con otro usuario registrado, a condición de que sepamos su email y éste acepte la petición para conversar que le aparecerá con el primer mensaje. Los mensajes se ordenarán por orden cronológico y se colocarán a derecha o izquierda en función de quien escriba. En caso de que existan mensajes nuevos, se marcará el inicio de estos y sería interesante la notificación al usuario.

Será obligatoria la programación orientada a objetos, es decir, que deberás trabajar con las clases correspondientes (tales como, experiencias, usuarios,...)