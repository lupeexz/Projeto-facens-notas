document.getElementById('calc-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const ac1Input = document.getElementById('ac1');
    const ac2Input = document.getElementById('ac2');
    const agInput = document.getElementById('ag');
    const afInput = document.getElementById('af');
    const subInput = document.getElementById('sub');
    const subLabel = document.getElementById('sub-label');
    const resultadoDiv = document.getElementById('resultado');

    const ac1 = parseFloat(ac1Input.value) || 0;
    const ac2 = parseFloat(ac2Input.value) || 0;
    const ag = parseFloat(agInput.value) || 0;
    const af = parseFloat(afInput.value) || 0;

    if ([ac1, ac2, ag, af].some(n => n < 0 || n > 10)) {
        resultadoDiv.textContent = "As notas devem estar entre 0 e 10.";
        resultadoDiv.classList.remove('nota10');
        subLabel.style.display = "none";
        ac1Input.disabled = false;
        ac2Input.disabled = false;
        agInput.disabled = false;
        afInput.disabled = false;
        return;
    }

    const notas = [ac1, ac2, ag, af];
    const pesos = [0.15, 0.30, 0.10, 0.45];
    let resultado = notas.reduce((acc, nota, i) => acc + nota * pesos[i], 0);
    const resultadoFix = resultado.toFixed(2);
    resultadoDiv.classList.remove('nota10');

    subLabel.style.display = "none";
    ac1Input.disabled = false;
    ac2Input.disabled = false;
    agInput.disabled = false;
    afInput.disabled = false;

    if (resultadoFix == "10.00") {
        resultadoDiv.textContent = "Parabéns pela nota 10!";
        resultadoDiv.classList.add('nota10');
    } else if (resultado >= 5) {
        resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Parabéns, você foi aprovado!`;
    } else if (resultado >= 3) {
        subLabel.style.display = "flex";
        ac1Input.disabled = true;
        ac2Input.disabled = true;
        agInput.disabled = true;
        afInput.disabled = true;

        let sub = parseFloat(subInput.value);
        if (!isNaN(sub)) {
            if (sub > 10) {
                sub = 10;
                subInput.value = "10.00";
            }
        }

        if (!isNaN(sub) && sub >= 0 && sub <= 10) {
            // Substitui a menor nota com maior peso (em caso de empate)
            let menorNota = Math.min(...notas);
            let indicesMenorNota = notas
                .map((nota, index) => ({ nota, index }))
                .filter(item => item.nota === menorNota);

            let idxPior = indicesMenorNota.reduce((maiorPeso, item) => {
                return pesos[item.index] > pesos[maiorPeso.index] ? item : maiorPeso;
            }).index;

            const notasSub = [...notas];
            notasSub[idxPior] = sub;
            const resultadoSub = notasSub.reduce((acc, nota, i) => acc + nota * pesos[i], 0);
            const resultadoSubFix = resultadoSub.toFixed(2);

            if (resultadoSub >= 5) {
                resultadoDiv.textContent = `Sua média final após a substitutiva é: ${resultadoSubFix}. Você foi aprovado na recuperação!`;
            } else {
                resultadoDiv.textContent = `Sua média final após a substitutiva é: ${resultadoSubFix}. Você foi reprovado.`;
            }
        } else {
            resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Você está de recuperação. Informe a nota da substitutiva.`;
        }
    } else {
        resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Você foi reprovado.`;
    }
});

document.getElementById('sub').addEventListener('input', function() {
    if (parseFloat(this.value) > 10) {
        this.value = "10.00";
    }
    if (this.value === "") {
        document.getElementById('ac1').disabled = false;
        document.getElementById('ac2').disabled = false;
        document.getElementById('ag').disabled = false;
        document.getElementById('af').disabled = false;
    }
    document.getElementById('calc-form').dispatchEvent(new Event('submit'));
});
document.getElementById('calc-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const ac1Input = document.getElementById('ac1');
    const ac2Input = document.getElementById('ac2');
    const agInput = document.getElementById('ag');
    const afInput = document.getElementById('af');
    const subInput = document.getElementById('sub');
    const subLabel = document.getElementById('sub-label');
    const resultadoDiv = document.getElementById('resultado');

    const ac1 = parseFloat(ac1Input.value) || 0;
    const ac2 = parseFloat(ac2Input.value) || 0;
    const ag = parseFloat(agInput.value) || 0;
    const af = parseFloat(afInput.value) || 0;

    if ([ac1, ac2, ag, af].some(n => n < 0 || n > 10)) {
        resultadoDiv.textContent = "As notas devem estar entre 0 e 10.";
        resultadoDiv.classList.remove('nota10');
        subLabel.style.display = "none";
        ac1Input.disabled = false;
        ac2Input.disabled = false;
        agInput.disabled = false;
        afInput.disabled = false;
        return;
    }

    const notas = [ac1, ac2, ag, af];
    const pesos = [0.15, 0.30, 0.10, 0.45];
    let resultado = notas.reduce((acc, nota, i) => acc + nota * pesos[i], 0);
    const resultadoFix = resultado.toFixed(2);
    resultadoDiv.classList.remove('nota10');

    subLabel.style.display = "none";
    ac1Input.disabled = false;
    ac2Input.disabled = false;
    agInput.disabled = false;
    afInput.disabled = false;

    if (resultadoFix == "10.00") {
        resultadoDiv.textContent = "Parabéns pela nota 10!";
        resultadoDiv.classList.add('nota10');
    } else if (resultado >= 5) {
        resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Parabéns, você foi aprovado!`;
    } else if (resultado >= 3) {
        subLabel.style.display = "flex";
        ac1Input.disabled = true;
        ac2Input.disabled = true;
        agInput.disabled = true;
        afInput.disabled = true;

        let sub = parseFloat(subInput.value);
        if (!isNaN(sub)) {
            if (sub > 10) {
                sub = 10;
                subInput.value = "10.00";
            }
        }

        if (!isNaN(sub) && sub >= 0 && sub <= 10) {
            // Substitui a menor nota com maior peso (em caso de empate)
            let menorNota = Math.min(...notas);
            let indicesMenorNota = notas
                .map((nota, index) => ({ nota, index }))
                .filter(item => item.nota === menorNota);

            let idxPior = indicesMenorNota.reduce((maiorPeso, item) => {
                return pesos[item.index] > pesos[maiorPeso.index] ? item : maiorPeso;
            }).index;

            const notasSub = [...notas];
            notasSub[idxPior] = sub;
            const resultadoSub = notasSub.reduce((acc, nota, i) => acc + nota * pesos[i], 0);
            const resultadoSubFix = resultadoSub.toFixed(2);

            if (resultadoSub >= 5) {
                resultadoDiv.textContent = `Sua média final após a substitutiva é: ${resultadoSubFix}. Você foi aprovado na recuperação!`;
            } else {
                resultadoDiv.textContent = `Sua média final após a substitutiva é: ${resultadoSubFix}. Você foi reprovado.`;
            }
        } else {
            resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Você está de recuperação. Informe a nota da substitutiva.`;
        }
    } else {
        resultadoDiv.textContent = `Sua média final é: ${resultadoFix}. Você foi reprovado.`;
    }
});

document.getElementById('sub').addEventListener('input', function() {
    if (parseFloat(this.value) > 10) {
        this.value = "10.00";
    }
    if (this.value === "") {
        document.getElementById('ac1').disabled = false;
        document.getElementById('ac2').disabled = false;
        document.getElementById('ag').disabled = false;
        document.getElementById('af').disabled = false;
    }
    document.getElementById('calc-form').dispatchEvent(new Event('submit'));
});
