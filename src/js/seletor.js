seletor.addEventListener('change', () => {
    if (seletor.value === 'timeFlash') {
        window.location.href = '/timeflash';
    }else
    if (seletor.value === 'laboratoriosStar') {
        window.location.href = '/laboratoriosstar';
    }else
    if (seletor.value === 'museuDoFlash') {
        window.location.href = '/museudoflash';
    }else
    if (seletor.value === 'galeriaDeViloes') {
        window.location.href = '/galeriadeviloes';
    }
});