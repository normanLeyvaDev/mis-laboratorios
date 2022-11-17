console.log("just checking...")

// User Input Form

// Apuntar al html
let myForm = document.querySelector("#my-form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let msg = document.querySelector(".msg");
let userList = document.querySelector("#users");

// Escuchar al evento submit del formulario
myForm.addEventListener("submit", onSubmit);

// Crear funcion para enviar info con logica condicional
function onSubmit(event) {
    // verificamos que estamos apuntando a la funcion
    console.log("Ive been clicked!");
    // cancelamos cualquier evento
    event.preventDefault();
    //condicionales para recibir inputs
    //condicion 1 - caso de uso negativo
    if (nameInput.value === "" || emailInput.value === "") { 
       // asignamos clase mediqnte js que ya esta en css de error
        msg.classList.add("error")
        // inyectamos html a la variable msg
        msg.innerHTML = "Please enter all fields of the form..."

        //setTimeout => {}, 2000) , decl. funcion arroa la izq y a la derecha el temporizador
        // escondemos variable msg despues de 3 seg
        setTimeout(() => msg.remove(), 3000)
        }
    }
    //condicion 2 - caso de uso positivo
    else {
        // crear nuevo elemento - li
    const li = document.createElement("li");
        // añadimos texto
    li.appendChild(document.createTextNode(`${nameInput.value}:  ${emailInput.value}`));

        // apuntamos a userList variable y le appendChild(li)
    userList.appendChild(li);

    // limpiamos los valores de los inputs
    nameInput.value = "";
    emailInput.value = "";
    }
}
