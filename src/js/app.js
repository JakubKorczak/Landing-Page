document.addEventListener("DOMContentLoaded", function () {
    
    const btnShow = document.getElementById('btnShow');
    const infoText = document.getElementById('infoText');

    btnShow.addEventListener('click', () => {
        infoText.classList.toggle('show');
    })
});
