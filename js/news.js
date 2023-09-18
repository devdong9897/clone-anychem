window.addEventListener("load", function () {
    // 외부 데이터 로딩
    //   fetch("data/newsdata.json")
    //     .then((res) => res.json())
    //     .then((result) => console.log(result))
    //     .catch((err) => console.log(err));
    const getNews = async () => {
        try {
            const res = await fetch("data/newsdata.json");
            const result = await res.json();
            console.log(result);
            makeHtml(result);
        } catch (err) {
            console.log(err);
        }
    };

    let makeHtml = (_data) => {
        let html = ``;
        _data.forEach((item, index) => {
            let tag = `
            <div class="swiper-slide">
                <div class="news-box">
                        <a href="${item.link}">
                            <span class="news-cate">${item.cate}</span>
                            <p>${item.title}</p>
                            <span class="news-date"> <i class="fa-regular fa-clock"></i>${item.date}</span>
                        </a>
                </div>
            </div>
            `;
            html += tag;
            const newWrap = this.document.querySelector(".sw-news .swiper-wrapper");
            newWrap.innerHTML = html;
            // 스와이퍼 생성

            new Swiper(".sw-news", {
                slidesPerView: 4,
                spaceBetween: 20,
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                },
                pagination: {
                    el: ".sw-news-pg",
                    clickable: true,
                },
                speed: 800,
                autoplay: {
                    delay: 2500,
                },
            });
        });
        // document.querySelector(".sw-news .swiper-wrapper").innerHTML = html;
    };

    getNews();
});
