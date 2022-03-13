// animate smooth scroll
$('#view-work').on('click', function () {
    const images = $('#images').position().top;

    $('hml, body').animate({
        scrollTop: images
    },
        900
    );

});