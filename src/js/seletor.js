seletor.addEventListener('change', () => {
    if (seletor.value === 'timeFlash') {
        window.location.href = 'http://localhost:3000/timeflash';
    }else
    if (seletor.value === 'laboratoriosStar') {
        window.location.href = 'http://localhost:3000/laboratoriosstar';
    }else
    if (seletor.value === 'museuDoFlash') {
        window.location.href = 'http://localhost:3000/museudoflash';
    }else
    if (seletor.value === 'galeriaDeViloes') {
        window.location.href = 'http://localhost:3000/galeriadeviloes';
    }
});