# League Vue: Challenges

## Vue.js Links

 * V2 Guide: https://v2.vuejs.org/v2/guide/

## Challenge #1: Text Scrambler

### AC

* 1 text area donde el usuario puede ingresar el mensaje.
* 1 button para mostrar u ocultar el mensaje oculto.
* 1 text area donde el usuario puede ver el mensaje oculto pero no modificarlo.

### Constrains

* El texto oculto es el producto de una modificación del mensaje original que es reversible. No puedes borrar nada del texto original.
* Se debe actualizar el mensaje oculto en vivo, el button es solo para ocultar o mostrar el mensaje oculto.

### Solution

`01_text_scrambler/index.html`

## Code challenge #2: Tajeta Credito

### Descripción
Hacer un formulario que permite a un usario entrar los datos de su tajeta credito.
Un preview de la información esta visible mientras el usario entra sus datos.

### ACs

El formulario:

* Campo para entrar el numero de la tajeta (16 dígitos)
* Campo para entrar el nombre y appellido del usario
* Campo para elegir el mes de expiración de la tajeta
* Campo para entrar el año de expiración de la tajeta
* Campo para entrar el codigo de seguridad de la tajeta

El preview:

* Los dígitos de la tajeta, en grupos de 4
* El nombre y appelido del usario
* El mes y año de expiración es este formato: MM/AA
* El codigo de seguridad (extra: al reverso)

Extra Bonus:

* Animación de rotación cuando el usario entra el codigo de seguridad