import { filterAZ, filterZA } from './data.js';

import data from './data/ghibli/ghibli.js';

// Constantes
const dataStudioGhibli = data.films;
const containerAnimationes = document.getElementById('animations')
const filterLetterOrder = document.getElementById('filters__initial');


/* 
const animation = data.films;
let animationLength = animation.length;

let theAnimation = "<section>";
for (let i = 0; i < animationLength; i++) {

    theAnimation += "<article>" +
        `<img src="${animation[i].poster}" alt="">
    <p <span class="negrita"> Titulo: ${animation[i].title}</p> 
    <p> <span class="negrita">Producer: </span>${animation[i].producer}</p> 
    <p><span class="negrita">Año: </span> ${animation[i].release_date}</p>
    <p><span class="negrita">Score: </span> ${animation[i].rt_score}</p>`;
    + "</article>";
}
theAnimation += "<section>";

document.getElementById("animations").innerHTML = theAnimation; 
*/

/*
// Recorre la data y crea las tarjetas con su respectiva información sacada de la data.

 const dataGhibli = data.films.map((arr) => {
    let ghibliData = `<article class="animations__card"> <a href="#"><img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación"></a>
    <h4>${arr.title}</h4>
    <p>Año: ${arr.release_date}</p>
    <p>Productor: ${arr.producer}</p>
    <p>Score: ${arr.rt_score} </p>
   </article>`;
    return ghibliData;
}) 

//document.getElementById("animations").innerHTML = dataGhibli.join('');
*/


// Creación de tarjetas dinamicas, llamando la información de la data.
// Se crea una función que lleva dentro un forEach que recorre el parametro que le de creando así las tarjetas. Al final llamo a la función y le doy el parametro de la data del estudio ghibli para que pueda crear las tarjetas.


const displayCardGhibli = (ghibliData) => {
    ghibliData.forEach((arr) => {
        containerAnimationes.innerHTML += `<article class="animations__card"> <a href="#"><img class="animations__card__img" src="${arr.poster}"alt="Imagen de la película de animación"></a>
        <h4>${arr.title}</h4>
        <p>Año: ${arr.release_date}</p>
        <p>Productor: ${arr.producer}</p>
        <p>Score: ${arr.rt_score} </p>
       </article>`;
    });
};

displayCardGhibli(dataStudioGhibli);


// Filtrar de la A a la Z y de la Z a la A
// Le di el método addEventListener a al input filterLetterOrder y le dije que si su valor esta en la opción 0, que llame a la función sortAZ creada en data.js y que esta la guarde en una nueva constante llamada filterZA además que como parametro le entregue la constante dataStudioGhibli donde se encuentra guardada la data. Luego le dije que coja la sección donde estan las peliculas y que borre todo dejando ese espacio vacio. Luego le dije que haga un llamado a la función DisplayCardGhibli que es la función loop encargada de crear las tarjetas y como parametro le di el filterAZ(El filtrado creado en data.js) para que solo cree esas tarjetas y las muestre. Si el valor del input es igual a 1 entonces que hago lo mismo pero al revés = de la Z a La Z.

filterLetterOrder.addEventListener('change', () => {
    if (filterLetterOrder.value === "0") {
        const filterLetterAZ = filterAZ(dataStudioGhibli,);
        containerAnimationes.innerHTML = '';
        displayCardGhibli(filterLetterAZ);

    }
    if (filterLetterOrder.value === "1") {
        const filterLetterZA = filterZA(dataStudioGhibli);
        containerAnimationes.innerHTML = '';
        displayCardGhibli(filterLetterZA);
    }
})
