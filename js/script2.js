$(document).ready(function(){
    $.getJSON('data.json', function(data) {
            $.each( data, function(i){
            $('.swiper-wrapper').append('<div class="swiper-slide">\
            <div class="picture">\
                <img src="' + data[i].images +'" alt="Images"/>\
            </div>\
            <div class="detail">\
                <h3>'+ data[i].name+'</h3>\
                <span>'+ data[i].desi+'</span>\
            </div>\
        </div>');
        });
    });

    var swiper = new Swiper(".swiper-container", {
        effect: "cards",
        grabCursor: true,
        loop: true,
        autoplay:{
            delay:1000,
        },
        keyboard: {
            enabled: true,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        

        //  navigation: {
        //     nextEl: ".swiper-button-next",
        //     prevEl: ".swiper-button-prev",
        // },
      });
})