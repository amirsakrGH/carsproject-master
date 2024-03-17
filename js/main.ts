// import { cardsContainer } from './service';

(function () {
  // navbar
  $(window).on('scroll', function () {
    var scrollY: any = $(this).scrollTop();
    let home_h:any = $(".main-slider").outerHeight();
    if (scrollY > home_h){
      $('nav').addClass('nav-scroll');
    } else {
      $('nav').removeClass("nav-scroll");
    }
    if (scrollY >= 45) {
      $('nav').addClass('fixed-top');
    } else {
      $('nav').removeClass('fixed-top');
      // $('header').removeClass('d-none');
    }
  });

  // gallery
  const cardsContainer: { image: string; text: string }[] = [
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
  

  const gallery: HTMLElement | null = document.getElementById('cards-container');
  const loadMoreCardsButton: HTMLElement | null = document.getElementById('load-more-cards-btn');

  function display(): void {
    const startIndex: number = gallery ? gallery.childElementCount : 0;
    const endIndex: number = Math.min(startIndex + 4, cardsContainer.length);
    let cards: string = ``;
    for (let i: number = startIndex; i < endIndex; i++) {
      cards +=
        `
    <div class="col-md-3 ">
            <div class="card-body text-center">
              <div class="card-img overflow-hidden d-block">
                <img src="${cardsContainer[i].image}" alt="" class="img-fluid">
              </div>
              <div class="card-content ">
                <p>${cardsContainer[i].text}</p>
              </div>
            </div>
          </div>
    `;
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
    loadMoreCardsButton.addEventListener("click", function (): void {
      if (loadMoreCardsButton.textContent === "Show Less") {
        if (gallery) {
          gallery.innerHTML = "";
          gallery.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        display();
        loadMoreCardsButton.textContent = "Load More";
      } else {
        display();
      }
    });
  }

})();
