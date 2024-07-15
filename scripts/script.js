window.addEventListener('DOMContentLoaded', () => {
    const burgerMenuButton = document.querySelector('.burger-button');
    const burgerMenu = document.querySelector('.mobile-menu');

    burgerMenuButton.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
    })

    function updateVideoPoster() {
        let video = document.querySelector('.presentation__video');

        if (window.innerWidth >= 936) { 
            video.setAttribute('poster', 'icons/video-poster-big.jpg');
        } else {
            video.setAttribute('poster', 'icons/video-poster.jpg');
        }

        console.log(video);
    }
    
    updateVideoPoster();
    
    window.onresize = updateVideoPoster;
})