(function() {

    
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var slidesOnRow = 3;
    
function checkSlidesOnRow() {
    if (+(document.body.offsetWidth) >= 1250) {
        slidesOnRow = 3;
    } else if ((+(document.body.offsetWidth)) < 1250 && (+(document.body.offsetWidth)) >= 1000 ) {
        slidesOnRow = 2;
    } else if (+(document.body.offsetWidth) < 1000) {
        slidesOnRow = 1;
    }
}

var hamburger = document.getElementById('hamburger');
var menu = document.getElementsByClassName('menu')[0];
function hamburgerMenu() {
    
    if (menu.hasAttribute('style')) {
        menu.removeAttribute('style');
    } else {
        menu.setAttribute('style', 'display:table-row;');
    }
    
};

    
hamburger.addEventListener('click', hamburgerMenu);


var leftArr = document.getElementById('slider-left-arrow');
var rightArr = document.getElementById('slider-right-arrow');
var sliderInside = document.getElementsByClassName('projects-inside')[0];
var menuHolder = document.getElementsByClassName('projects')[0];
    
var liWidth = sliderInside.firstElementChild.offsetWidth+20;
    
window.onload = function() {
    checkSlidesOnRow();
};
    
window.addEventListener('resize', function() {
    
    // re-calculating stuff again, resetting to 0 to proper view
    liWidth = sliderInside.firstElementChild.offsetWidth+20;
    checkSlidesOnRow();
    sliderInside.style.transform = "translateX(" +  0 + "px)";    
    
    //calculating whole width again, so it knews when carousel ends/starts to scroll back
    carouselWidth = 0;
    for (i=0; i<sliderInside.children.length; i++) {
        carouselWidth += liWidth+20;
    }
    
});

var transformRegExp = /[-0-9]/g;


function getCurrentPosX() {
    if (sliderInside.style.transform.match(transformRegExp)) {
        return sliderInside.style.transform.match(transformRegExp).join("");
    } else {
        return 0;
    }
}

var carouselWidth = 0;
for (i=0; i<sliderInside.children.length; i++) {
    carouselWidth += liWidth+0;
}
sliderInside.style.width = carouselWidth + "px";

leftArr.addEventListener('click', function() {
    if (+getCurrentPosX() >= 0) {
        sliderInside.style.transform = "translateX(" +  ((-carouselWidth)+liWidth*slidesOnRow) + "px)";
    } else {
        sliderInside.style.transform = "translateX(" +  (+getCurrentPosX()+liWidth) + "px)";
    }

});

rightArr.addEventListener('click', function() {
    if (+getCurrentPosX() <= (-carouselWidth+ (liWidth*slidesOnRow))) {
        sliderInside.style.transform = "translateX(" +  0 + "px)";
    } else {
        sliderInside.style.transform = "translateX(" +  (+getCurrentPosX()-liWidth) + "px)";
    }
    
});
    
})();
























