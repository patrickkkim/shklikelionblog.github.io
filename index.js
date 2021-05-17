import anime from '/node_modules/animejs/lib/anime.es.js';
import './node_modules/waypoints/lib/noframework.waypoints.min.js';


// ANIME js
// Anchor to section animations
const button = document.querySelector('.up-button');
button.addEventListener('click', () => {
    anime({
        targets: [document.body, document.documentElement],
        scrollTop: 0,
        duration: 250,
        easing: 'easeInOutExpo'
    });
});

// Anchor all links in navbar
const links = document.querySelectorAll('.nav-link').forEach((link) => {
    const href = link.getAttribute("href");
    const top = document.querySelector(href).getBoundingClientRect().top;
    const offset = -50;
    link.addEventListener('click', (e) => {
        e.preventDefault();
        anime({
            targets: [document.body, document.documentElement],
            scrollTop: top,
            duration: 250,
            easing: 'easeInOutExpo'
        })
    })
});

// Animate hover for footer buttons
/*
const footerBtns = document.querySelectorAll('.footer-btn').forEach((btn) => {
    btn.addEventListener('mouseenter', (e) => {
        e.preventDefault();
        anime({
            easing: 'easeInOutExp',
            target: btn,
            borderWidth: ['0px', '10px'],
            borderStyle: 'dotted',
            borderColor: 'black',
            duration: 100,
        })
    })
})
*/

// Wrap every text to span
var textWrapper = document.querySelectorAll(".slow-text-appearance");
var i = 0;
for (i = 0; i < textWrapper.length; ++i) {
    var tagName = `<span class='letter_${i}'>$&</span>`
    textWrapper[i].innerHTML = textWrapper[i].textContent.replace(/\S/g, 
        tagName);
}

// Main title section animation
var slowTL = anime.timeline({
    easing: 'easeInOutExpo',
})
.add({
    targets: '.slow-image-appearance .caticon',
    opacity: 1
})
.add({
    targets: '#titletextbox',
    opacity: 1
}, '-=2000')
.add({
    targets: '.slow-text-appearance .letter_0',
    opacity: [0,1],
    delay: (el, i) => 15 * i
}, '-=650')
.add({
    targets: '.slow-text-appearance .letter_1',
    opacity: [0,1],
    delay: (el, i) => 15 * i
}, '-=650')






// WAYPOINT js
// Intro section waypoint
var introActivated = false;
var intro = new Waypoint({
    element: document.getElementById('introbox'),
    handler: function(direction) {
        if (direction == 'down' && !introActivated) {
            introActivated = true;
            anime.timeline({
                easing: 'easeInOutExpo',
            })
            .add({
                targets: '.tilt-intro',
                translateY: '-120rem',
                skewY: '-7deg',
                duration: 1000
            }, '-=500')
            .add({
                targets: '.fast-text-intro',
                opacity: 1,
                translateY: '-1rem',
                duration: 300,
            },'-=300');
            
            anime.timeline({
                easing: 'easeInElastic(1, .5)',
                direction: 'reverse',
                duration: 1000,
            })
            .add({
                targets: ['#hobby-data.fast-swing-intro','#major.fast-swing-intro','#school.fast-swing-intro'],
                opacity: [1, 0],
                translateX: '-100%',
            })
            .add({
                targets: ['#hobby-index.fast-swing-intro', '#my-name.fast-swing-intro'],
                opacity: [1, 0],
                translateX: '100%',
                endDelay: 900,
            }, '-=1000')
        }
    }, offset: '80%'
});

// Project section waypoint
var projectsActivated = false;
var projects = new Waypoint({
    element: document.getElementById('projects'),
    handler: function(direction) {
        if (direction == 'down' && !projectsActivated) {
            projectsActivated = true;
            anime.timeline({
                easing: 'easeInOutExpo'
            })
            .add({
                targets: '.tilt-projects',
                translateY: '-110rem',
                skewY: '7deg',
                duration: 1000
            }, '-=500')
            .add({
                targets: '.fast-text-project',
                opacity: 1,
                translateY: '-1rem',
                duration: 300,
                delay: 0,
            }, '-=300');

            anime.timeline({
                easing: 'easeInElastic(1, .5)',
                direction: 'reverse',
                duration: 1000,
            })
            .add({
                targets: '.fast-swing-project',
                opacity: [1, 0],
                translateX: '-100%',
                endDelay: 900,
            })
        }
    }, offset: '100%'
});

// Photo section waypoint
var photosActivated = false;
var photos = new Waypoint({
    element: document.getElementById('photos'),
    handler: function(direction) {
        if (direction == 'down' && !photosActivated) {
            photosActivated = true;
            anime.timeline({
                easing: 'easeInOutExpo'
            })
            .add({
                targets: '.tilt-photos',
                translateY: '-130rem',
                borderRadius: '50%',
                duration: 1000
            }, '-=500')
            .add({
                targets: '.fast-text-photo',
                opacity: 1,
                translateY: '-1rem',
                duration: 1500,
                delay: 0,
            }, '-=300');
        }
    }, offset: '100%'
})