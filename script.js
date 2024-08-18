// Mantiene el angulo de rotacion actual
let rotation = 0;

document.getElementById("botonjugar").addEventListener("click", () => { 

    document.getElementById("botonjugar").style.display = "none";    // Esconde el botón de jugar
      
    document.getElementById("spinner").style.display = "block";   // aparece el spinner
});

document.getElementById("spinner").addEventListener("click", () => {
    rotation += 90; // gira el spinner cuando se hace click
     
    document.getElementById("spinner").style.transform = `rotate(${rotation}deg)`; // gira el spinner con el nuevo ángulo
});
