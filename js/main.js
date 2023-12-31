
//Ver la informacion de una Productos
$(document).on('click', '#md1', function () {

    var fila = '<div class="item">';
    fila += '    <img src="img/portfolio/10.jpg" alt="" width="100%">';
    fila += '    <div class="carousel-caption">';
    fila += '        <h4>Modulo web</h4>';
    fila += '        <p>Cras justo odio.</p>';
    fila += '    </div>';
    fila += '</div>';
    fila += '<div class="item">';
    fila += '    <img src="img/portfolio/12.jpg" alt="" width="100%">';
    fila += '    <div class="carousel-caption">';
    fila += '        <h4>Modulo movil</h4>';
    fila += '        <p>Cras justo odio.</p>';
    fila += '    </div>';
    fila += '</div>';
    fila += '<div class="item active">';
    fila += '    <img src="img/portfolio/9.jpg" alt="" width="100%">';
    fila += '    <div class="carousel-caption">';
    fila += '        <h4>Modulo de seguridad</h4>';
    fila += '        <p>Cras justo odio.</p>';
    fila += '    </div>';
    fila += '</div>';

    //$.each(obj, function (i, item) {

    //    $("#txtCodigo").val(item.Codigo)
    //    $("#txtNombre").val(item.Nombre)

    //    fila += '<a class="list-group-item">' + item.NomAlmacen + '  |  ' + item.Cantidad + '</a>';
    //    //fila += '<a class="list-group-item">Bodega mayales  4</a>';
    //});

    $(".carousel-inner").append(fila);

    $('#myModal').modal('show');
})



// Parse URL Queries Method
(function ($) {
    $.getQuery = function (query) {
        query = query.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]');
        var expr = '[\\?&]' + query + '=([^&#]*)';
        var regex = new RegExp(expr);
        var results = regex.exec(window.location.href);
        if (results !== null) {
            return results[1];
        } else {
            return false;
        }
    };
})(jQuery);

$(function () {

    // Change URIs
    $('.pill-switch').click(function () {
        window.location = '?theme=pill';
    });

    $('.tab-switch').click(function () {
        window.location = '?theme=tab';
    });

    $('.image-switch').click(function () {
        window.location = '?theme=image';
    });

    $('.link-switch').click(function () {
        window.location = '?theme=link';
    });

    // Set theme based on URI
    if ($.getQuery('theme') === 'pill') {
        $(function () {
            $.scrollUp({
                animation: 'fade',
                activeOverlay: '#00FFFF'
            });
        });
        $('.pill-switch').addClass('active');
        $('#scrollUpTheme').attr('href', 'demo/css/themes/pill.css?1.1');
    } else if ($.getQuery('theme') === 'link') {
        $(function () {
            $.scrollUp({
                animation: 'fade',
                activeOverlay: '#00FFFF'
            });
        });
        $('#scrollUpTheme').attr('href', 'demo/css/themes/link.css?1.1');
        $('.link-switch').addClass('active');
    } else if ($.getQuery('theme') === 'image') {
        $(function () {
            $.scrollUp({
                animation: 'fade',
                activeOverlay: '#00FFFF',
                scrollImg: {
                    active: true,
                    type: 'background',
                    src: 'img/top.png'
                }
            });
        });
        $('#scrollUpTheme').attr('href', 'demo/css/themes/image.css?1.1');
        $('.image-switch').addClass('active');
    } else {
        $(function () {
            $.scrollUp({
                animation: 'fade',
                activeOverlay: '#00FFFF',
                scrollImg: {
                    active: true,
                    type: 'background',
                    src: 'img/top.png'
                }
            });
        });
        //$('#scrollUpTheme').attr('href', 'demo/css/themes/tab.css?1.1');
        $('#scrollUpTheme').attr('href', 'demo/css/themes/image.css?1.1');
        $('.tab-switch').addClass('active');
    }

    // Toggle overlay
    $('#toggleActive').click(function () {
        $('#scrollUp-active').toggle();

        var text = $(this).text() == 'Hide activeOverlay' ? 'Show activeOverlay' : 'Hide activeOverlay';
        $(this)
            .text(text)
            .toggleClass('active');
    });
});


$(document).on('click', '.btnModal', function () {

    //$('#frmVideo').attr('src', 'https://www.youtube.com/watch?v=Ka80P6l1PiM');

    $('#myModal').modal({
        backdrop: 'static',
    });
});