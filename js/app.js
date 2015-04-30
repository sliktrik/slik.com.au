var retina = window.devicePixelRatio > 1;

var distance = 300;
var rotate = 400;
var speed = 1;

if (retina && window.innerWidth <= 980 ) {
    distance = 250;
    rotate = 300;
    speed = 3;
}

particlesJS('particles-js', {
    particles: {
        color: '#fff',
        color_random: false,
        shape: 'triangle', // "circle", "edge" or "triangle"
        opacity: {
            opacity: 0.5,
            anim: {
                enable: true,
                speed: 1.5,
                opacity_min: 0,
                sync: false
            }
        },
        size: 2,
        size_random: true,
        nb: 150,
        line_linked: {
            enable_auto: true,
            distance: distance,
            color: '#fff',
            opacity: 0.5,
            width: 0.5,
            condensed_mode: {
                enable: false,
                rotateX: rotate,
                rotateY: rotate
            }
        },
        anim: {
            enable: true,
            speed: speed
        }
    },
    interactivity: {
        enable: false,
        mouse: {
            distance: 300
        },
        detect_on: 'window', // "canvas" or "window"
        mode: 'grab', // "grab" or false
        line_linked: {
            opacity: .5
        },
        events: {
            onclick: {
                enable: true,
                mode: 'push', // "push" or "remove"
                nb: 4
            },
            onresize: {
                enable: true,
                mode: 'out', // "out" or "bounce"
                density_auto: false,
                density_area: 800 // nb_particles = particles.nb * (canvas width *  canvas height / 1000) / density_area
            }
        }
    },
    /* Retina Display Support */
    retina_detect: false
});