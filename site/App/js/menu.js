jQuery(document).ready(function($) {


    (function() {

        var $menu = $('.navbar .nav'),
            optionsList = '<option value="" selected>МЕНЮ</option>';

        $menu.find('li').each(function() {
            var $this   = $(this),
                $anchor = $this.children('a'),
                depth   = $this.parents('ul').length - 1,
                indent  = '';

            if( depth ) {
                while( depth > 0 ) {
                    indent += ' - ';
                    depth--;
                }

            }

            optionsList += '<option value="' + $anchor.attr('href') + '">' + indent + ' ' + $anchor.text() + '</option>';
        }).end()
            .after('<select class="selectmenu">' + optionsList + '</select>');

        $('select.selectmenu').on('change', function() {
            window.location = $(this).val();
        });

    })();
    //hover эффект
    $('ul.nav li.dropdown').hover(function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
    }, function () {
        $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
    });

});