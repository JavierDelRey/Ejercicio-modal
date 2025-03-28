function setEvents() {
    // signamos el evento al contenedor más grande
    document.querySelector("#home").addEventListener("click", function(event) {
        // Verificar si el clic es en el botón con id="home_btn"
        if (event.target.classList.contains("poppins-regular")) {
            // Reemplazamos el contenido de #home
            document.querySelector("#home").innerHTML = `
                <div class="background" id="background">
                    <div class="card">
                        <span>
                            <h1 class="poppins_bold">¿Estás seguro/a de que quieres completar este curso?</h1><br>
                            <p>Asegúrate de haber marcado todas las tareas.<br>
                            Una vez completes el curso, no podrás realizar cambios.</p>
                        </span>
                        <div class="buttons">
                            <button class="btn__secondary poppins__regular">No</button>
                            <button class="btn__primary poppins__regular">Sí</button>
                        </div>
                    </div>
                </div>`;

            setEvents(); // Llamamos a la función de nuevo para que los eventos se asignen a los nuevos botones
        }

        // Verificar si el clic fue en el #background
        if (event.target.id === "background") {
            document.querySelector("#background").innerHTML = `
                <div class="background" id="home">
        <button class="poppins-regular">Button</button>
        <button class="poppins-regular btn__secondary">Button</button>
        <button class="poppins-regular btn__hover">Button</button>
        <button class="poppins-regular btn__disabled">Button</button>
        <button class="poppins-regular btn__cliked">Button</button>
    </div>`;
        }
    });
}

setEvents();