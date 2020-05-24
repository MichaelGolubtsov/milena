$(document).ready(function(){

    var firstLine = $("#firstLine");
    var menu1 = $(".menu1");

    $(window).scroll(function() {
        var top = $(this).scrollTop();
        if ( top >= 10 ) {
            {
                firstLine.removeClass('firstLine2');
                firstLine.addClass('firstLine1');
                firstLine.css('background-color','#5d5f77');
                console.log("777 top = "+ 1*top);
                menu1.css('color','black');
                $("#logo").attr("src","images/logo02.png");
            }
        } else
            {
                firstLine.removeClass('firstLine1');
                firstLine.addClass('firstLine2');
                firstLine.css('background-color','transparent');
                console.log("555 top = "+ 1*top);
                menu1.css('color','white');
                $("#logo").attr("src","images/logo01.png");
            }

    });

    $(document).ready(function(){
        $('.slider').slick({
            // arrows: true,
            // dots: true,
            // appendArrows: $('.your-class-arrow'),
            // prevArrow: '<button id="prev" type="button" class="">Туда</button>',
            // nextArrow: '<button id="next" type="button" class="">Сюда</button>'
        });
    });


    $('.owl-carousel').owlCarousel({
            items: 3,
            nav:true,
            navContainer: ".navigation",
            dots: false,
            dotsEach:true,
            mouseDrag:true,
            loop:true,
            margin: 15,
            autoWidth:false,
            navText: ['<','>'], //['Предыдущая','Следующая'],
//        responsiveClass:true,
            responsive:
                {
                    0:{
                        items:1,
                    },
                    600:{
                        items:2,
                    },
                    1000:{
                        items:3,
                    }
                }
        }
    );


    var owl = $('.owl-carousel');
    owl.owlCarousel();
// Переключаем слайд вперед
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Переключаем слайд назад
    $('.customPrevBtn').click(function() {
        // Устанавливаем параметр скорости
        // Параметр должен быть заключен в квадрадные скобки '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })




});





/*
// Регулярка проверяет соответствие формату +7 (999) 999-99-99
function validatePhone(phone) {
    var re = 45;
//^\+\d{1,3}\s?\(\d{3}\)\s?\d{3}(-\d{2}){2}$;
    return re.test(phone);
}

function check1() {
    var phone = document.form1.phone.value;

    if (validatePhone(phone)) windows.alert("OK");
    else windows.alert("Телефон неверный");
}
*/

