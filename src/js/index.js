$(function () {
    var keyboardActiveInput = $('.screen-front input:first');

    $('.screen').click(function () {
        var notebook = $('.notebook');
        if (notebook.hasClass('close')) {
            notebook.toggleClass('open close');
        } else if (!notebook.hasClass('open')) {
            notebook.addClass('open');
        }
    });
    $('.power-off').click(function (e) {
        e.preventDefault();
        var notebook = $('.notebook');
        if (notebook.hasClass('open')) {
            notebook.toggleClass('open close');
        }
    });
    $('.board button').click(function () {
        if (keyboardActiveInput && keyboardActiveInput.val) {
            keyboardActiveInput.val(keyboardActiveInput.val() + $(this).html());
        }
    });
    $('.screen-front input').focus(function () {
        keyboardActiveInput = $(this);
    })
});