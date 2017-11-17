function formLogic() {
    $('#mainForm').on('submit', function(e) {
        e.preventDefault();
        const $form = $(this);
        const $inputName = $('#formName');
        const $inputSurname = $('#formSurname');
        const $inputPhoneNumber = $('#formNumber');
        const $inputEmail = $('#formEmail');
        const $inputSth = $('#formSomething');
        const $btnSubmit = $form.find('button:submit');
        const inputs = [$inputName, $inputSurname, $inputPhoneNumber, $inputEmail, $inputSth];

        let formError = false;
        inputs.forEach(($el) => {
            if (!$el.get(0).checkValidity()) {
                formError = true;
                $el.addClass('error');
            } else {
                $el.removeClass('error');
            }
        });

        if (!formError) {
            console.log('Sending form...');
            const $formLastRow = $('.main-form__row:last');

            $btnSubmit.prop('disabled', true);
            $.ajax({
                url: $form.attr('action'),
                method: $form.attr('method'),
                data: {
                    formName: $('#formName').val(),
                    formSurname: $('#formSurname').val(),
                    formNumber: $('#formNumber').val(),
                    formEmail: $('#formEmail').val(),
                    formSth: $('#formSomething').val()
                }
            }).done((ret) => {
                $form.find('.main-form__message').remove();
                const $message = $(`<div class="main-form__message">The message was sent</div>`);
                $formLastRow.after($message);
            }).always((ret) => {
                $btnSubmit.prop('disabled', false);
            }).fail((ret) => {
                $form.find('.main-form__message').remove();
                const $message = $(`<div class="main-form__message main-form__message--error">Can not send the message</div>`);
                $formLastRow.after($message);
            });

        }
    });
}

export { formLogic };
