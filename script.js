const nav = document.querySelector('nav');
const menu = document.querySelector('.menu');
const navLinks = document.querySelectorAll('.nav-links li a');

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
    document.body.style.overflow = nav.classList.contains("active") ? "hidden" : "auto"; // ✅ lock scroll
});

// Close menu on nav link click
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
        document.body.style.overflow = "auto";
    });
});

//scroll


/* SCREEN SIZE START*/
//  var sceneStart2;


if (window.matchMedia("(min-width: 768px)").matches) {
    radius = 300;
    imgwidth = 120;
    imgheight = 170;
}
else if (window.matchMedia("(max-width: 375px)").matches) {
    radius = 130;
    imgwidth = 70;
    imgheight = 100;
}
else {
    radius = 150;
    imgwidth = 80;
    imgheight = 130;
}
console.log(radius);
/* SCREEN SIZE END*/


var radius; //240 150
var autorotate = true;
var rotatespeed = -60;
var imgwidth; // 120
var imgheight;// 170

setTimeout(init, 1000);


var odrag = document.getElementById('dragcontainer');

var ospin = document.getElementById('spincontainer');

var aimg = ospin.getElementsByTagName('img');

var ele = [...aimg];

ospin.style.width = imgwidth + "px";
ospin.style.height = imgheight + "px";


var ground = document.getElementById('ground');

ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";



var radius;
var autorotate = true;
var rotatespeed = -60;
var imgwidth;
var imgheight;

function init(delaytime) {
    for (let i = 0; i < ele.length; i++) {
        ele[i].style.transform = "rotateY(" + (i * (360 / ele.length)) + "deg)translateZ(" + radius + "px)";
        ele[i].style.transition = "transform 1s";
        ele[i].style.transitionDelay = delaytime || (ele.length - i) / 4 + "s";
    }
}

function applytranform(obj) {
    if (ty > 180) ty = 180;
    if (ty < 0) ty = 0;

    obj.style.transform = "rotateX(" + (-ty) + "deg)rotateY(" + (tx) + "deg)";
}

function playspin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
}

var sx, sy, nx, ny, desx = 0, desy = 0, tx = 0, ty = 10;

if (autorotate) {
    var animationname = (rotatespeed > 0 ? 'spin' : 'spinrevert');
    ospin.style.animation = `${animationname} ${Math.abs(rotatespeed)}s infinite linear`;
}
var hasTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
var hasPointer = window.matchMedia('(pointer: fine)').matches;

if (hasTouch) {
    console.log("touch");
    // Touch Event Handling for 'dragcontainer'
    odrag.addEventListener('touchstart', function (e) {
        e.preventDefault(); // Prevent default touch behavior
        // Rest of your touch event handling code
        // Touch Event Handling
        // Touch Event Handling for 'dragcontainer'
        odrag.addEventListener("touchstart", function (e) {
            e.preventDefault(); // Prevent default touch behavior
            clearInterval(odrag.timer);
            e = e || window.event;
            sx = e.touches[0].clientX;
            sy = e.touches[0].clientY;

            this.ontouchmove = function (e) {
                e = e || window.event;
                nx = e.touches[0].clientX;
                ny = e.touches[0].clientY;
                desx = nx - sx;
                desy = ny - sy;
                tx += desx * 0.2;
                ty += desy * 0.2;
                applytranform(odrag);
                sx = nx;
                sy = ny;
            };

            this.ontouchend = function (e) {
                odrag.timer = setInterval(function () {
                    desx *= 0.2;
                    desy *= 0.2;
                    tx += desx * 0.2;
                    ty += desy * 0.2;
                    applytranform(odrag);
                    playspin(false);

                    if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                        clearInterval(odrag.timer);
                        playspin(true);
                    }
                }, 17);

                this.ontouchmove = this.ontouchend = null;
            };
            return false;
        }, { passive: false }); // Set passive to false for touch events


    }, { passive: false });

    // Pointer Event Handling for 'dragcontainer'

} else if (hasPointer) {
    // Pointer Event Handling for 'dragcontainer'
    console.log("pointer");
    odrag.onpointerdown = function (e) {
        // Rest of your pointer event handling code
        document.onpointerdown = function (e) {
            clearInterval(odrag.timer);

            e = e || window.event;

            var sx = e.clientX,
                sy = e.clientY;

            this.onpointermove = function (e) {
                e = e || window.event;

                var nx = e.clientX,
                    ny = e.clientY,
                    desx = nx - sx;
                desy = ny - sy;

                tx += desx * 0.2;
                ty += desy * 0.2;

                applytranform(odrag);
                sx = nx;
                sy = ny;
            };

            this.onpointerup = function (e) {
                odrag.timer = setInterval(function () {
                    desx *= 0.2;
                    desy *= 0.2;
                    tx += desx * 0.2;
                    ty += desy * 0.2;

                    applytranform(odrag);
                    playspin(false); //playsin

                    if (Math.abs(desx) < 0.5 && Math.abs(desy) < 0.5) {
                        clearInterval(odrag.timer);
                        playspin(true);
                    }
                }, 17);


                this.onpointermove = this.onpointerup = null;
            };
            return false;
        }




        document.onmousewheel = function (e) {
            e = e || window.event;
            var d = e.wheelDelta / 40 || -e.detail; // 20 tha mai na 40 kar deha
            radius += d;
            init(1);
        }

    }
}







// function goToPage() {
//     window.location.href = "https://www.w3schools.com"; // This will redirect to the specified URL
// }
// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');
