$(function () {
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
        $('.password-input').val($('.password-input').val() + $(this).html());
    });
});