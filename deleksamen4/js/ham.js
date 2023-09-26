/*Kilde: https://dev.to/ljcdev/easy-hamburger-menu-with-js-2do0

Kilde: for å finne brandcolors til sosiale medier deleknapper: https://brandcolors.net/ 
Kilde: for å javascript delingsknapper: https://crunchify.com/list-of-all-social-sharing-urls-for-handy-reference-social-media-sharing-buttons-without-javascript/

Kilde uncode URI: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI
*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);

    function mobileMenu(){
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    }

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

/* Sosiale medier delingslenker: */

/*https://www.facebook.com/sharer.php?u=[post-url]


https://twitter.com/share?url=[post-url]&text=[post-title]

https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]


https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]*/

const facebookKnapp = document.querySelector(".facebook-knapp");
const twitterKnapp = document.querySelector(".twitter-knapp");
const pinterestKnapp = document.querySelector(".pinterest-knapp");
const linkedinKnapp = document.querySelector(".linkedin-knapp");

function init(){
    const pinterestImg = document.querySelector(".UUvsSEO.jpeg");
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Sjekk ut nettsiden for mer informasjon om Webutvikling av din nettside .");
   

    facebookKnapp.setAttribute( 
        "href",
        `https://www.facebook.com/sharer.php?u=${postUrl}`
    )

    twitterKnapp.setAttribute( 
        "href",
        `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    )

    pinterestKnapp.setAttribute( 
        "href",
        `https://pinterest.com/pin/create/bookmarklet/?&url=${postUrl}&description=${postTitle}`
    )

    linkedinKnapp.setAttribute( 
        "href",
        `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    )    
}

init()