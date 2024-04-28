const form = document.getElementById('form');

form.addEventListener('submit',function(e){
    e.preventDefault();   
    const campoAinput = document.getElementById('valorA');
    const campoBinput = document.getElementById('valorB');

    const campoA = campoAinput.value;
    const campoB = campoBinput.value;

    const mensagemFalso = `Inválido!`;
    const mensagemIgual = `O valor A: ${campoB} é igual ao valor B: ${campoA}, valor não é valido!`;
    const mensagemVerdade = `O número que equivale a B: ${campoB} é maior que o número que equivale a A: ${campoA} correto!`;
    
    if(campoB < campoA){
        const containerFalso = document.querySelector('.mensagem-falso');
        containerFalso.innerHTML = mensagemFalso;
        containerFalso.style.display = 'block';
        document.querySelector('.mensagem-verdade').style.display = 'none';
        document.querySelector('.mensagem-igual').style.display = 'none';
    }
    else if(campoB > campoA){     
        const containerVerdade = document.querySelector('.mensagem-verdade');
        containerVerdade.innerHTML = mensagemVerdade;
        containerVerdade.style.display = 'block';
        document.querySelector('.mensagem-falso').style.display = 'none';
        document.querySelector('.mensagem-igual').style.display = 'none';
    }else{     
        const containerIgual = document.querySelector('.mensagem-igual');
        containerIgual.innerHTML = mensagemIgual;
        containerIgual.style.display = 'block';
    }
});



