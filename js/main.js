// import { cardsContainer } from './service';
(function () {
    // navbar
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        var home_h = $(".main-slider").outerHeight();
        if (scrollY > home_h) {
            $('nav').addClass('nav-scroll');
        }
        else {
            $('nav').removeClass("nav-scroll");
        }
        if (scrollY >= 45) {
            $('nav').addClass('fixed-top');
        }
        else {
            $('nav').removeClass('fixed-top');
            // $('header').removeClass('d-none');
        }
    });
    // gallery
    var cardsContainer = [
        {
            image: './../assets/Picture1.jpg',
            text: '11سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture2.png',
            text: '22سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture14.jpg',
            text: '11سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture4.jpg',
            text: '22سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture23.jpg',
            text: '11سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture10.png',
            text: '22سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture16.png',
            text: '22سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture19.jpg',
            text: '11سيار ة مجهزة ونش مرور'
        },
        {
            image: './../assets/Picture25.jpg',
            text: '22سيار ة مجهزة ونش مرور'
        }
    ];
    var gallery = document.getElementById('cards-container');
    var loadMoreCardsButton = document.getElementById('load-more-cards-btn');
    function display() {
        var startIndex = gallery ? gallery.childElementCount : 0;
        var endIndex = Math.min(startIndex + 4, cardsContainer.length);
        var cards = "";
        for (var i = startIndex; i < endIndex; i++) {
            cards +=
                "\n    <div class=\"col-md-3 \">\n            <div class=\"card-body text-center\">\n              <div class=\"card-img overflow-hidden d-block\">\n                <img src=\"".concat(cardsContainer[i].image, "\" alt=\"\" class=\"img-fluid\">\n              </div>\n              <div class=\"card-content \">\n                <p>").concat(cardsContainer[i].text, "</p>\n              </div>\n            </div>\n          </div>\n    ");
        }
        if (gallery) {
            gallery.innerHTML += cards;
        }
        if (endIndex >= cardsContainer.length && loadMoreCardsButton) {
            loadMoreCardsButton.textContent = "Show Less";
        }
    }
    display();
    if (loadMoreCardsButton) {
        loadMoreCardsButton.addEventListener("click", function () {
            if (loadMoreCardsButton.textContent === "Show Less") {
                if (gallery) {
                    gallery.innerHTML = "";
                    gallery.scrollIntoView({ behavior: "smooth", block: "start" });
                }
                display();
                loadMoreCardsButton.textContent = "Load More";
            }
            else {
                display();
            }
        });
    }
})();
