/* =========================================
   NEXIVO FINAL JAVASCRIPT
========================================= */


/* =========================================
   LOADER
========================================= */

window.addEventListener(
    "load",
    () => {

        const loader =
            document.getElementById("loader");


        setTimeout(() => {

            loader.classList.add("hide");

        }, 2100);

    }
);


/* =========================================
   REVEAL ON SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if(entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("active");

                }

            });

        },

        {

            threshold: 0.12

        }

    );


revealElements.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);


/* =========================================
   CUSTOM CURSOR
========================================= */

const cursor =
    document.querySelector(".cursor");


const cursorDot =
    document.querySelector(".cursor-dot");


document.addEventListener(
    "mousemove",
    (event) => {

        if(cursor) {

            cursor.style.left =
                event.clientX + "px";

            cursor.style.top =
                event.clientY + "px";

        }


        if(cursorDot) {

            cursorDot.style.left =
                event.clientX + "px";

            cursorDot.style.top =
                event.clientY + "px";

        }

    }
);


/* =========================================
   MOUSE BLUE GLOW
========================================= */

const mouseGlow =
    document.querySelector(".mouse-glow");


document.addEventListener(
    "mousemove",
    (event) => {

        if(!mouseGlow) return;


        mouseGlow.style.left =
            event.clientX + "px";


        mouseGlow.style.top =
            event.clientY + "px";

    }
);


/* =========================================
   HERO 3D ORB MOUSE MOVEMENT
========================================= */

const orbArea =
    document.querySelector(".orb-area");


document.addEventListener(
    "mousemove",
    (event) => {

        if(
            !orbArea ||
            window.innerWidth < 800
        ) {

            return;

        }


        const moveX =
            (
                event.clientX /
                window.innerWidth
                - .5
            ) * 30;


        const moveY =
            (
                event.clientY /
                window.innerHeight
                - .5
            ) * 30;


        orbArea.style.transform =
            `
            translate3d(
                ${moveX}px,
                ${moveY}px,
                0
            )
            `;

    }
);


/* =========================================
   3D SERVICE CARDS
========================================= */

const serviceCards =
    document.querySelectorAll(
        ".service-card"
    );


serviceCards.forEach(
    (card) => {


        card.addEventListener(
            "mousemove",
            (event) => {


                if(
                    window.innerWidth < 800
                ) {

                    return;

                }


                const rect =
                    card.getBoundingClientRect();


                const mouseX =
                    event.clientX -
                    rect.left;


                const mouseY =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (
                        mouseX -
                        centerX
                    ) /
                    centerX * 7;


                const rotateX =
                    -(
                        mouseY -
                        centerY
                    ) /
                    centerY * 7;


                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    translateY(-8px)
                    `;


                const light =
                    card.querySelector(
                        ".card-light"
                    );


                if(light) {

                    light.style.left =
                        (mouseX - 90)
                        + "px";


                    light.style.top =
                        (mouseY - 90)
                        + "px";

                }

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                card.style.transform =
                    `
                    perspective(1000px)
                    rotateX(0deg)
                    rotateY(0deg)
                    translateY(0)
                    `;

            }
        );

    }
);


/* =========================================
   MAGNETIC BUTTONS
========================================= */

const magneticButtons =
    document.querySelectorAll(
        ".magnetic"
    );


magneticButtons.forEach(
    (button) => {


        button.addEventListener(
            "mousemove",
            (event) => {


                if(
                    window.innerWidth < 800
                ) {

                    return;

                }


                const rect =
                    button.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left -
                    rect.width / 2;


                const y =
                    event.clientY -
                    rect.top -
                    rect.height / 2;


                button.style.transform =
                    `
                    translate(
                        ${x * .15}px,
                        ${y * .15}px
                    )
                    `;

            }
        );


        button.addEventListener(
            "mouseleave",
            () => {

                button.style.transform =
                    "translate(0,0)";

            }
        );

    }
);


/* =========================================
   COUNTERS
========================================= */

const counters =
    document.querySelectorAll(
        ".counter"
    );


const counterObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {


                    if(
                        !entry.isIntersecting
                    ) {

                        return;

                    }


                    const counter =
                        entry.target;


                    const target =
                        Number(
                            counter.dataset.target
                        );


                    let current = 0;


                    const totalSteps = 40;


                    const increment =
                        target / totalSteps;


                    const timer =
                        setInterval(
                            () => {


                                current +=
                                    increment;


                                if(
                                    current >=
                                    target
                                ) {

                                    counter.textContent =
                                        target;


                                    clearInterval(
                                        timer
                                    );

                                }

                                else {

                                    counter.textContent =
                                        Math.floor(
                                            current
                                        );

                                }

                            },

                            30

                        );


                    counterObserver
                        .unobserve(counter);

                }
            );

        },

        {

            threshold: .6

        }

    );


counters.forEach(
    (counter) => {

        counterObserver
            .observe(counter);

    }
);


/* =========================================
   NAVBAR SCROLL
========================================= */

const navbar =
    document.querySelector("nav");


window.addEventListener(
    "scroll",
    () => {


        if(window.scrollY > 70) {

            navbar.style.background =
                "rgba(2,4,9,.90)";

        }

        else {

            navbar.style.background =
                "rgba(2,4,9,.55)";

        }

    }
);


/* =========================================
   NEXIVO HERO PARALLAX
========================================= */

const mainLogo =
    document.querySelector(
        ".nexivo-title"
    );


window.addEventListener(
    "scroll",
    () => {


        if(!mainLogo) return;


        const scroll =
            window.scrollY;


        if(
            scroll <
            window.innerHeight
        ) {

            mainLogo.style.transform =
                `
                translateY(
                    ${scroll * .1}px
                )
                `;

        }

    }
);


/* =========================================
   CURSOR HOVER
========================================= */

const clickableElements =
    document.querySelectorAll(
        "a, button, .service-card"
    );


clickableElements.forEach(
    (element) => {


        element.addEventListener(
            "mouseenter",
            () => {

                if(!cursor) return;


                cursor.style.width =
                    "65px";


                cursor.style.height =
                    "65px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                if(!cursor) return;


                cursor.style.width =
                    "42px";


                cursor.style.height =
                    "42px";

            }
        );

    }
);


/* =========================================
   3D SOCIAL CARDS AUTO SHOW
========================================= */

const socialCards =
    document.querySelectorAll(
        ".auto-social"
    );


const socialWrapper =
    document.querySelector(
        ".social-3d-wrapper"
    );


let socialStarted = false;


if(socialWrapper) {


    const socialObserver =
        new IntersectionObserver(

            (entries) => {


                entries.forEach(
                    (entry) => {


                        if(
                            entry.isIntersecting &&
                            !socialStarted
                        ) {


                            socialStarted = true;


                            socialCards.forEach(
                                (
                                    card,
                                    index
                                ) => {


                                    setTimeout(
                                        () => {


                                            card.classList
                                                .add(
                                                    "social-show"
                                                );


                                        },

                                        index * 450

                                    );

                                }
                            );

                        }

                    }
                );

            },

            {

                threshold: .2

            }

        );


    socialObserver.observe(
        socialWrapper
    );

}


/* =========================================
   3D SOCIAL CARD MOUSE TILT
========================================= */

socialCards.forEach(
    (card) => {


        card.addEventListener(
            "mousemove",
            (event) => {


                if(
                    window.innerWidth < 800 ||
                    !card.classList.contains(
                        "social-show"
                    )
                ) {

                    return;

                }


                const rect =
                    card.getBoundingClientRect();


                const x =
                    event.clientX -
                    rect.left;


                const y =
                    event.clientY -
                    rect.top;


                const centerX =
                    rect.width / 2;


                const centerY =
                    rect.height / 2;


                const rotateY =
                    (
                        x -
                        centerX
                    ) /
                    centerX * 5;


                const rotateX =
                    -(
                        y -
                        centerY
                    ) /
                    centerY * 5;


                card.style.transform =
                    `
                    translateY(-8px)
                    rotateX(${rotateX}deg)
                    rotateY(${rotateY}deg)
                    scale(1.02)
                    `;

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {


                if(
                    card.classList.contains(
                        "social-show"
                    )
                ) {

                    card.style.transform =
                        `
                        translateY(0)
                        rotateX(0)
                        rotateY(0)
                        scale(1)
                        `;

                }

            }
        );

    }
);