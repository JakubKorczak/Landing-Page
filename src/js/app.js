import { formLogic } from './form-logic.js';
document.addEventListener("DOMContentLoaded", function () {
    formLogic();
    const btnShow = document.getElementById('btnShow');
    const infoText = document.getElementById('infoText');

    btnShow.addEventListener('click', () => {
        infoText.classList.toggle('show');
    })
});
