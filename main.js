const form = document.getElementById('form-numerico');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('campo-a');
    const campoBinput = document.getElementById('campo-b');

    const campoA = campoAinput.value;
    const campoB = campoBinput.value;

    const mensagemFalso = `Número Inválido!`;
    const mensagemIgual = `O valor A: ${campoB} é igual ao valor B: ${campoA}, valor não é valido!`;
    const mensagemVerdade = `Esta correto o número ${campoB} é maior que o número ${campoA}`;
    
    if(campoB < campoA){
        const containerFalso = document.querySelector('.mensagen-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagen-verdade').style.display = 'none';
        document.querySelector('.mensagen-igual').style.display = 'none';
    }
    else if(campoB > campoA){     
        const containerVerdade = document.querySelector('.mensagen-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagen-falso').style.display = 'none';
        document.querySelector('.mensagen-igual').style.display = 'none';
    }else{     
        const containerIgual = document.querySelector('.mensagen-igual');
        containerIgual.innerHTML = mensagemIgual;
        containerIgual.style.display = 'block';
    }
});



