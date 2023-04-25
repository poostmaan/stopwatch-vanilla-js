window.onload = () => {
	var dom_span_elements = document.getElementsByTagName('span');
	var [hour, minute, second] = dom_span_elements;
	var cont1 = 0; // REFACTORIZAR PARA AHORRAR LINEAS
	var cont2 = 0; // REFACTORIZAR PARA AHORRAR LINEAS
	var cont3 = 0; // REFACTORIZAR PARA AHORRAR LINEAS
	var state = false;
	var play_pause_btn = document.getElementById('start-pause-btn');
	var reset_btn = document.getElementById('reset-btn');
	let loop;

	play_pause_btn.addEventListener('click', stop);
	reset_btn.addEventListener('click',reset);


	function stop() {
		if(play_pause_btn.textContent === 'start') {
			loop = setInterval(start, 1000);
			play_pause_btn.innerHTML = 'stop';
		} else {
			clearInterval(loop);
			play_pause_btn.innerHTML = 'start';
		}
	}

	function start() {
		cont1++; // Con cada llamada a la función se suma 1 a este contador
		if(second.textContent === '59') { // Cuando llega a 59 se ejecuta..
			second.innerHTML = '00'; // La limpieza del nodo que contiene los segundos
			cont2++; // La asignacion de un nuevo contador para los minutos
			cont1 = 0; // La limpieza del contador principal

			if(cont2 > 59) { // Acá se hace el mismo proceso anteriormente explicado con los minutos y horas.
				minute.innerHTML = '00';
				cont3++;
				cont2 = 0;

				if (cont3 < 10) {
					hour.innerHTML = '0'+cont3;
				} else {
					hour.innerHTML = ''+cont3;
				}
			} else {
				if(cont2 < 10) {
					minute.innerHTML = '0'+cont2;
				} else {
					minute.innerHTML = ''+cont2;
				}				
			}
		} else { // Se verifica si es menor a 10 para establecer uno u otro formato
			if (cont1<10) {
				second.innerHTML = '0'+cont1; // 01, 02, 03..-
			} else {
				second.innerHTML = ''+cont1 // 10, 20, 30...
			}
		}
	}

	function reset() {
		// REFACTORIZAR PARA AHORRAR LINEAS
		clearInterval(loop);
		hour.innerHTML = '00'; 
		minute.innerHTML = '00'; 
		second.innerHTML = '00';
		cont1 = 0;
		cont2 = 0;
		cont3 = 0;
		if(play_pause_btn.textContent === 'stop') {
			play_pause_btn.innerHTML = 'start';
		}
	}
}

