const formulario = document.getElementById('formulario');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');
const botaoEnviar = document.getElementById('botao-enviar');

var formEValido = false

function cB_maior_cA(valorcampoA, valorcampoB){
    return valorcampoB > valorcampoA;
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    const mensagemSucesso = `Os valores <b>${campoA.value}</b> e <b>${campoB.value}</b> estão corretos. Obrigado pela sua atenção!`

    formEValido = cB_maior_cA(parseInt(campoA.value), parseInt(campoB.value));
    if (formEValido) {
        const classCorrectMessage = document.querySelector('.correct-message');
        classCorrectMessage.innerHTML = mensagemSucesso;
        classCorrectMessage.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
        campoA.classList.remove('error');
        campoB.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';


    } else {
        campoA.classList.add('error')
        campoB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e){
    console.log(e.target.value)
    formEValido = cB_maior_cA(parseInt(campoA.value), parseInt(campoB.value));

    if(!formEValido) {
        campoB.classList.add('error');
        campoA.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';

    } else {
        campoB.classList.remove('error');
        campoA.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})

console.log(formulario);