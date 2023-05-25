window.addEventListener("load", function () {
    
  const xhr = new XMLHttpRequest();
  xhr.addEventListener("readystatechange", function (event) {
    let req = event.target;
    if (req.readyState === XMLHttpRequest.DONE) {
      let data = JSON.parse(req.response);
      makeVisualHtml(data);
    }
  });
  xhr.open("GET", "dada/visualdata.json");
  xhr.send();

  function makeVisualHtml(_data) {
    let html = ``;
    _data.img.forEach((item) => {
      let temp = `
                <div class="swiper-slide" style="background-image: url(images/${item})"></div>
            `;
      html += temp;
    });

    swVisualWrap.innerHTML = html;

    const awVisual = new Swiper(".sw-visual", {
        loop: true,
        effect: "fade",
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      });

  }

  
  
});
