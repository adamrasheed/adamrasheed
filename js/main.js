const burger = document.getElementById('burger');
const mobMenu = document.querySelector('.mobile-menu');


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };
function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}
function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

const disableScroll = () => {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
        window.onwheel = preventDefault; // modern standard
        window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
        window.ontouchmove = preventDefault; // mobile
        document.onkeydown = preventDefaultForScrollKeys;
        // console.log('scroll disabled');
    }

const enableScroll = () => {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
        document.onkeydown = null;
        // console.log('scroll enabled');
    }


const menuToggle = () => {
    burger.addEventListener('click', function() {
        console.log('clicked');

        let open = 'mobile-menu--open';
        let menuToggle = 'burger--open'

        let openMenu = () => {
            mobMenu.classList.add(open);
        }

        let closeMenu = () => {
            mobMenu.classList.remove(open);
        }

        if (mobMenu.classList.contains(open)) {
            burger.classList.remove(menuToggle);
            closeMenu();
            enableScroll();
        } else {
            burger.classList.add(menuToggle);
            openMenu();
            disableScroll();
        }
    });
}

const lazyimages = document.querySelectorAll('.js-lazy-scroll');
const lazyimageClasses = {
  fadeOut: "u-not-loaded",
  fadedIn: "u-fade-in"
};

const obeserverOptions = {
    root: null,
    rootMargin: '4px',
    threshold: 0.4
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        let element = entry.target;
        if (entry.intersectionRatio > 0) {
            console.log('in the view');
            element.classList.add(lazyimageClasses.fadedIn);
            observer.unobserve(entry.target);
        } else {
            console.log('out of view');
            element.classList.add(lazyimageClasses.fadeOut);

        }
    });
}, obeserverOptions);


// Doc ready yo
document.addEventListener('DOMContentLoaded', function(){
    console.log('loaded');
    menuToggle();
    lazyimages.forEach(image => {
        observer.observe(image);
    })
});