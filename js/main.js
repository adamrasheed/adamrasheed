const burger = document.getElementById('burger');
const mobMenu = document.querySelector('.mobile-menu');


const menuToggle = () => {
    burger.addEventListener('click', function() {

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
        } else {
            burger.classList.add(menuToggle);
            openMenu();
        }
    });
}

// Doc ready yo
document.addEventListener('DOMContentLoaded', function(){
    // console.log('loaded');
    menuToggle();
});