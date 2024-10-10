let timer;

function iniciarCuentaAtras() {
    clearInterval(timer);

    const input = document.getElementById('datetime').value;
    const countDownDate = new Date(input).getTime();

    if (!input) {
        alert('Por favor, selecciona una fecha y hora.');
        return;
    }

    timer = setInterval(function () {
        const now = new Date().getTime();
        const distance = countDownDate - now;

        if (distance < 0) {
            clearInterval(timer);
            document.getElementById("countdown").innerHTML = "¡La cuenta atrás ha terminado!";
            return;
        }

        //De milisegundos a segundos a minutos a horas a dias
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        //Aquí uso el modulo para obtener el resto de milisegundos que no
        //forman parte de un día completo y vuelvo a dividir para pasar de
        //milisegundos a segundos a minutos a horas
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = 
             `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }, 1000);
}