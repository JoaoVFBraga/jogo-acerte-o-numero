const form = document.querySelector('.form');
const mostrarNumero = document.querySelector('#mostrarNumero');
const enviarNumero = document.querySelector('#inNumber');
const botaoVerificar = document.querySelector('#botaoVerificar');
const botaoReiniciar = document.querySelector('#reiniciar');
const botaoRestart = document.querySelector('#restart');
const botaoTentar = document.querySelector('#tentarNovamente');
const botaoRegras = document.querySelector('#botaoRegras');

const numeroSorteado = Math.ceil(Math.random() * 100);
console.log(numeroSorteado);
const numerosErrados = [];
console.log(numerosErrados)

let chances = 5;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const numero = Number(form.inNumber.value);
    if(numero == numeroSorteado){
        mostrarNumero.innerText = `${numeroSorteado}`;
        const parabens = document.querySelector('.parabens');
        botaoVerificar.disabled = true;
        enviarNumero.disabled = true;
        parabens.classList.add('activeFlex');
    } else if(numerosErrados.includes(numero)) {
        const aviso = document.querySelector('.aviso');
        aviso.classList.add('activeFlex');
    } else {
        const exibirErros = document.querySelector('#numeroErros');
        exibirErros.innerText = '';
        numerosErrados.push(numero);
        exibirErros.innerText = numerosErrados.join(', ');
        const numeroChances = document.querySelector('#numeroChances');
        chances = chances - 1;
        numeroChances.innerText = chances;
        switch (chances) {
            case 4:
                const pDica = document.querySelector('.pDica');
                if(numeroSorteado <= 50) {
                    pDica.innerText = `O número é menor ou igual a 50`;
                } else {
                    pDica.innerText = `O número é maior que 50`;
                }
                break;
            case 3: 
                const pDica2 = document.querySelector('.pDica2');
                if (numeroSorteado % 2 == 0) {
                    pDica2.innerText = `O número sorteado é par`
                } else {
                    pDica2.innerText = `O número sorteado é ímpar`
                }
                break;
            case 2: 
                const pDica3 = document.querySelector('.pDica3');
                const numerosPrimos = [];
                for(let i = 1; i <= numeroSorteado; i++){
                    if(numeroSorteado % i == 0){
                        numerosPrimos.push(i);
                    }
                }
                if(numerosPrimos.length == 2){
                    pDica3.innerText = `O número sorteado é primo`
                } else {
                    pDica3.innerText = `O número sorteado não é primo`
                }
                console.log(numerosPrimos)
                break;
            case 1: 
                const pDica4 = document.querySelector('.pDica4');
                let divisores = [];
                for(let i = 1; i <= numeroSorteado; i++){
                    if(numeroSorteado % i == 0){
                        divisores.push(i);
                    }
                }
                pDica4.innerText = `O número possui ${divisores.length} divisores`;
                break;
            case 0:
                const derrota = document.querySelector('.perdeu');
                derrota.classList.add('activeFlex');
                mostrarNumero.innerText = `${numeroSorteado}`;
                botaoVerificar.disabled = true;
                enviarNumero.disabled = true;
        }
    }
    form.inNumber.value = '';
    form.inNumber.focus();
})

botaoReiniciar.addEventListener('click', (e) => {
    location.reload();
})
botaoRestart.addEventListener('click', (e) => {
    location.reload();
})
botaoTentar.addEventListener('click', (e) => {
    const aviso = document.querySelector('.aviso');
        aviso.classList.toggle('activeFlex');
})
botaoRegras.addEventListener('click', (e) => {
    const caixaRegras = document.querySelector('.caixaRegras');
    caixaRegras.classList.toggle('activeFlex');
    caixaRegras.classList.toggle('displayNone');
})