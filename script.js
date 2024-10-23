document.addEventListener("DOMContentLoaded", function(){

    const url="https://pokeapi.co/api/v2/pokemon/ditto";
    const contenido= document.getElementById("info")

    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error("Error en la red");   
        }

        return response.json();
    })

    .then(data => {
        // Maneja los datos recibidos
        console.log(data);
        // Por ejemplo, puedes mostrar el nombre de Ditto
        contenido.innerHTML += `<h2>Nombre: ${data.name}</h2>`;
        contenido.innerHTML += `<img src="${data.sprites.front_default}" alt="Imagen de Ditto">`;

        // Mostrar habilidades
        const abilities = data.abilities.map(ability => ability.ability.name).join(", ");
        contenido.innerHTML += `<p>Habilidades: ${abilities}</p>`;

          // Experiencia base
          contenido.innerHTML += `<p>Experiencia base: ${data.base_experience}</p>`;
            
          // Sonidos
          contenido.innerHTML += `<p>Sonido: <a href="${data.cries.latest}" target="_blank">Escuchar</a></p>`;
          
          // Formas
          const forms = data.forms.map(form => form.name).join(", ");
          contenido.innerHTML += `<p>Formas: ${forms}</p>`;
          
    })
   
    .catch(error => {
        // Maneja errores
        console.error("Hubo un problema con la petición Fetch:", error);
    });


});