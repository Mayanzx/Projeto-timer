function relogio() {
function getTimeSeconds(segundos){
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

const relogio = document.querySelector('.relogio');
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeSeconds(segundos);
    }, 1000);
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('iniciar')){
        relogio.classList.remove('pause');
        clearInterval(timer);
        iniciaRelogio();
    }

    if(el.classList.contains('pausar')){
        relogio.classList.add('pause');
        clearInterval(timer);
    }

    if(el.classList.contains('resetar')){
        relogio.classList.remove('pause');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})

}
relogio();