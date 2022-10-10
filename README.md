# Generar de Post Frontend
---

## Page Registro y Login

### Validación del frontend
![Page registro sin aceptar los terminos y condiciones](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/termsRe.png)

> **El boton aparece desactivado cuando no han aceptado los terminos y condiciones.**

![Cuando el elemento deja de ser enfocado](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/termsRe2.png)

> **Cuando un Input deja de ser enfocado y su valor no cumple con las normas de validación, aparece el mensaje de error y al volverlo a enfocar desaparece, tambien aparece un mensaje de error cuando las contraseñas no coinciden siguiendo la misma dinamica.**
### Validación utilizando los mensajes de respuesta del backend

![Cuando las advertencias de validación del frontend son ignoradas](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/formVal.png)

> **Cuando los mensajes de validación del frontend son ignorados y son enviados, se mostraran los mensajes de error que recibe la petición, en este caso, los que capturo, express-validator. Tambien captura los mensajes de error del token del usuario.**

### Muestra los mensajes de error de la petición

![Cuando el error es por repetición de email o algun problema del servidor](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/emailUsed.png)

> **En este caso, el email ya esta registrado y no se puede repetir.**

![Cuando el error es por repetición de email o algun problema del servidor](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/EmailNoRe.png)

> **En este caso, no puede loguearse porque el email del usuario no esta registrado.**
---

## Dentro de la aplicación

### Una vez registrado o logueado en la App

Se obtienen los datos del usuario y se optienen sus post correspondientes. La aplicación contiene en la barra de navegación el nombre de la aplicación, Page tus Posts (Home), Page crear Post, Favoritos, y el boton que desplega u oculta la información del usuario.

![Home](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/Home.png)

Los posts se muestran de 8 en 8 y puedes deplazar las paginas para ver los posts anteriores.

![Home page2](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/Home2.png)

Los posts favoritos se muestran con un marco amarillo y tienen su propia Page.

![Favoritos](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/favP.png)

### Información del usuario

El usuario puede modificar sus datos, el formulario tambien tiene las propiedades del formulario de registro y de login. Tambien puede cerrar sesión o eliminar su usuario. Las opciones aparecen en el campo de información.

![editarUser](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/editU.png)

![elimUser](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/elimU.png)

### CRUD Post

El usuario puede mostrar, crear, editar y eliminar un post.

![propiedades post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/postI.png)

**Muestra el Post en grande y mostrando su fecha de creación.**

Dando click en el icono de ampliar.

![Leer post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/RPost.png)

**Mostrar formulario para crear un post nuevo.**

Dando click en "crear post" del menú de navegación.

![crear post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/CPost.png)

**Mostrar formulario para editar un post.**

Dando click en el icono de editar.

![editar post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/UPost.png)

**Advertencia antes de eliminar el Post.**

Dando click en el icono de eliminar.

![eliminar post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/DPost.png)
> Si el post no esta en favoritos.

![eliminar post](https://github.com/JoseL-GuerreroB/GeneradorPostFrontEnd/blob/master/public/Creador-de-post/DFPost.png)
> Si el post esta en favoritos.

**[Ver aplicación del lado del backend](https://github.com/JoseL-GuerreroB/GeneradorPostBackEnd)**.
