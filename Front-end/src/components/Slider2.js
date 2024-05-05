//step 1: get DOM
let nextDom = document.getElementById('next1');
let prevDom = document.getElementById("prev1");

let carouselDom = document.querySelector(".carousel1");
let SliderDom = document.querySelector(".carousel1 .list1");
let thumbnailBorderDom = document.querySelector(".thumbnail1");
let thumbnailItemsDom = document.querySelectorAll(".item1");
let timeDom = document.querySelector(".carousel1 .time1");

// Check if thumbnailBorderDom is found before proceeding
if (thumbnailBorderDom) {
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let timeAutoNext = 7000;

    nextDom.onclick = function(){
        showSlider('next1');    
    }

    prevDom.onclick = function(){
        showSlider('prev1');    
    }
    
    let runTimeOut;
    let runNextAuto = setTimeout(() => {
        nextDom.click(); // Corrected here
    }, timeAutoNext);

    function showSlider(type){
        let  SliderItemsDom = SliderDom.querySelectorAll('.carousel1 .list1 .item1');
        let thumbnailItemsDom = document.querySelectorAll('.carousel1 .thumbnail1 .item1');

        if(type === 'next1'){
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next1');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev1');
        }
        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next1');
            carouselDom.classList.remove('prev1');
        }, timeRunning);

        clearTimeout(runNextAuto);
        runNextAuto = setTimeout(() => {
            nextDom.click(); // Corrected here
        }, timeAutoNext);
    }
} else {
    console.log("Thumbnail border element not found!");
}
