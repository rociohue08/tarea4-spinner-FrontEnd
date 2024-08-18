
    const startButton = document.getElementById('start-button');
    const pantallaInicio = document.getElementById('pantalla-inicio');
    const contenidoJuego = document.getElementById('contenido-juego');
    const spinButton = document.getElementById('spin-button');
    const spinner = document.getElementById('objeto-spinner');

    let rotation=0;
    
    spinButton.style.display='none';
    spinner.style.display='none';


    // iniciar juego
    startButton.addEventListener('click', () => {
        pantallaInicio.style.display = 'none'; // Oculta el cuadro de inicio
        spinButton.style.display='flex'; //aparece el boton girar
        spinner.style.display='flex'; //aparece el spinner

    });

      spinButton.addEventListener('click', () => {
        // Incrementa la rotación actual por un valor aleatorio
        rotation += 90;       
        spinner.style.transform = `rotate(${rotation}deg)`; 
    });

