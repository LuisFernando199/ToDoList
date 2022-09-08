// Obtenemos todos los campos deseados
const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");
/*----Funcionalidad button Add----
  1-Agregamos un evento click. 
  2-Detenemos la recarga.
  3-Obtenemos el valor del input, el texto.
  4-Creamos la lista, los li.
  5-Creamos los parrafos de cada li.
  6-Agregamos a la variable p el contenido del texto que tenemos de la variable text.
  7-Agregamos a la variable li la variable p con el metodo appendChild.
  8-Agregamos a la variable ul la variable li con el metodo appendChild.
  9-Devolver el input vacio.
  10-El empty lo ponemos nulo.
  11-Un condicional para que el valor del input no este vacio*/
addBtn.addEventListener("click", (e) => {
  e.preventDefault();
   const text = input.value;
   const li = document.createElement('li');
   const p = document.createElement('p');
   p.textContent = text;
   
     if (text !== ""){
        li.appendChild(p);
        li.appendChild(DeleteBtn());
        ul.appendChild(li);
     
        input.value = "";
        empty.style.display = "none";
     }

   
});

/*----Funcionalidad boton que elimina los elementos li----
  1- Creamos el boton de eliminar.
  2- Diseñamos el boton directo con texto.
  3-Le creamos una clase.
  4-Agregamos un evenListener al boton.
  5-Creamos una variable para obtener el boton con target y su elemento padre con parentElement.
  6-Elegimos el ul para poder elejir eliminar el elemento li, porque hay que acceder desde el padre.
  7-Retornamos el boton creado para el paso 8.
  8-Mandamos a llamar a la funcion  despues de crear un parrafo en nuestro li
  9- Que vuelva aparecer el empty si no hay elementos, cojemos todos los li y agregamos una condicion.
  */
function DeleteBtn(){
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent="X";
    deleteBtn.className=" btn-delete";

    deleteBtn.addEventListener("click", (e) =>{
       const itemLi = e.target.parentElement;
       ul.removeChild(itemLi);

       const itemEmpty = document.querySelectorAll('li');
       
       if (itemEmpty.length === 0){
        empty.style.display = "block";
       }

    });
    return deleteBtn;
}