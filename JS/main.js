$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(00) 00000-0000'
    });
    $('#cpf').mask('000.000.000-00', {
        placeholder: '000.000.000-00'
    });
    $('#cep').mask('00000-000', {
        placeholder: '00000-000'
    });

    $('form').validate( {
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereço: {
                required: true
            },
            cep: {
                required: true
            },
            
        },
        messages: {
            nome: 'Insira seu nome completo',
            email: 'Insira seu e-mail completo',
            telefone: 'Insira seu telefone completo',
            cpf: 'Insira todos os digitos do seu CPF',
            endereço: 'Insira seu endereço completo',
            cep: 'Insira todos os digitos do seu CEP'
        },
        submitHandler: function(form) {
            form.reset();
            alert('Formulário enviado com sucesso');
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!!`)
            }
        }
    })
})