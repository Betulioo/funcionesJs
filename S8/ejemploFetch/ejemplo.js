const comentarios = [
  {
    autor: "María López",
    fecha: "2024-10-16",
    contenido:
      "¡Gran artículo! Me encantó la manera en que explicaste este tema tan complejo de forma sencilla y directa. Definitivamente aplicaré estos consejos.",
  },
  {
    autor: "Carlos Ramírez",
    fecha: "2024-10-15",
    contenido:
      "No estoy de acuerdo con algunos puntos mencionados, creo que deberías considerar otros enfoques. Aun así, fue interesante leer tus opiniones.",
  },
  {
    autor: "Ana Fernández",
    fecha: "2024-10-15",
    contenido:
      "Me ayudaste a aclarar muchas dudas que tenía. Gracias por tomarte el tiempo de hacer contenido tan útil. Espero más publicaciones como esta.",
  },
  {
    autor: "Jorge Castillo",
    fecha: "2024-10-14",
    contenido:
      "Excelente post. Solo me queda una duda: ¿cómo podríamos aplicar este método en situaciones donde el tiempo es limitado?",
  },
  {
    autor: "Lucía Gómez",
    fecha: "2024-10-13",
    contenido:
      "Muy informativo. Me gusta cómo abordaste cada punto sin entrar en demasiado tecnicismo, lo cual facilita la lectura.",
  },
  {
    autor: "Pedro Martínez",
    fecha: "2024-10-13",
    contenido:
      "Creo que el artículo está bien escrito, pero me gustaría ver más referencias a estudios o investigaciones para respaldar los argumentos.",
  },
  {
    autor: "Isabel Rivas",
    fecha: "2024-10-12",
    contenido:
      "Este artículo fue justo lo que necesitaba para entender mejor este tema. Gracias por compartir tu conocimiento.",
  },
  {
    autor: "Ricardo Suárez",
    fecha: "2024-10-11",
    contenido:
      "Algunos ejemplos me parecieron muy útiles, aunque creo que podrías haber profundizado un poco más en las soluciones prácticas.",
  },
  {
    autor: "Laura García",
    fecha: "2024-10-10",
    contenido:
      "Muchas gracias por el contenido. La estructura del artículo lo hace muy fácil de seguir y comprender.",
  },
  {
    autor: "Andrés Vázquez",
    fecha: "2024-10-10",
    contenido:
      "En general, buen artículo, pero echo de menos más recomendaciones sobre herramientas que podrían ayudarnos a implementar estos consejos.",
  },
];

 
let results2 = "hola";

fetch("https://rickandmortyapi.com/api/character").then((reponse)=>{
         
    return reponse.json();
    
}).then((data1)=>{
    console.log(data1.results);
    const divHtml = document.querySelector("#ejemplo1");
    
    divHtml.innerHTML = data1.map((elemento) => {
    //   console.log(element.autor);
    
      return `<h3>${elemento.name}</h3>
                <p>${elemento.species}</p>
                <p>${elemento.status}</p>
                `;
    });
    return data1.results;
}).catch((error)=>{
    console.log(error);
    
 })
 
const peticion = async ()=>{
    try {
        const result = await fetch("https://rickandmortyapi.com/api/character");
        const data = await result.json();
        // console.log(data.results);
        results2 = data.results;
        return data.results;
    } catch (error) {
        console.log("nota al desarrollador",error);
        
    }
   
}

const pintarElementos =async (data)=>{
    console.log(data);
    const dataResuelta = await data;

    //No se ejecuta hasta que este lista la promesa.
    // console.log(dataResuelta);
    
    try {
            
        const divHtml = document.querySelector("#ejemplo1");
        
        divHtml.innerHTML = dataResuelta.map((elemento) => {
        //   console.log(element.autor);
        
          return `<h3>${elemento.name}</h3>
                    <p>${elemento.species}</p>
                    <p>${elemento.status}</p>
                    `;
        });
    } catch (error) {
        console.log("nota al desarrollador",error);
        
    }

}

pintarElementos(peticion());


// const divHtml = document.querySelector("#ejemplo1");
// const divHtmlPorClase = document.querySelector(".color-rojo");

// divHtml.innerHTML = comentarios.map((element) => {
// //   console.log(element.autor);

//   return `<h3>${element.autor}</h3>
//             <p>${element.fecha}</p>
//             <p>${element.contenido}</p>`;
// });

//   divHtml.innerHTML = comentarios.map((comentario) => {
//     return `
//       <div class="comentario">
//       <h3>${comentario.autor}</h3>
//         <p>${comentario.fecha}</p>
//         <p>${comentario.contenido}</p>
//       </div> `;

//     }).join('');