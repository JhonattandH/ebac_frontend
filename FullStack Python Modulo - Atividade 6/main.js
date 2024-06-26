const form = document.getElementById('verifica-valores');


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const valorainput = document.getElementById('campo-a').value;
    const valorbinput = document.getElementById('campo-b').value;

    const valorA = (valorainput);
    const valorB = (valorbinput);

    const mensagemexito = document.querySelector('.mensagemsucesso');
    const mensagemfalha = document.querySelector('.mensagemfracasso');

    const msgexito = `Muito bem. O valor <b>${valorbinput}</b> é maior que o valor <b>${valorainput}</b>`;
    const msgfalha = `Tente novamente. Lembre-se que o valor <b>B</b> deve ser maior que o valor <b>A</b>`;

    if(valorB > valorA) {
        mensagemexito.innerHTML = msgexito;
        mensagemfalha.innerHTML = '';

    }

    else{
        mensagemfalha.innerHTML = msgfalha;
        mensagemexito.innerHTML = '';

    }

    valorainput.value = '' ;
    valorbinput.value = '' ;
})

    console.log(form);