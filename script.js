/* =====================================================
   CURSOR
===================================================== */

const cursorDot =
    document.querySelector(".cursor-dot");

const cursorGlow =
    document.querySelector(".cursor-glow");


let mouseX = 0;
let mouseY = 0;

let dotX = 0;
let dotY = 0;

let glowX = 0;
let glowY = 0;


document.addEventListener(
    "mousemove",
    (event) => {

        mouseX =
            event.clientX;

        mouseY =
            event.clientY;

    }
);


function animateCursor() {

    dotX +=
        (mouseX - dotX) * 0.32;

    dotY +=
        (mouseY - dotY) * 0.32;


    glowX +=
        (mouseX - glowX) * 0.11;

    glowY +=
        (mouseY - glowY) * 0.11;


    cursorDot.style.left =
        `${dotX}px`;

    cursorDot.style.top =
        `${dotY}px`;


    cursorGlow.style.left =
        `${glowX}px`;

    cursorGlow.style.top =
        `${glowY}px`;


    requestAnimationFrame(
        animateCursor
    );
}

animateCursor();



/* =====================================================
   HERO PARALLAX
===================================================== */

const hero =
    document.querySelector(".hero");

const heroFoods =
    document.querySelectorAll(".hero-food");


hero.addEventListener(
    "mousemove",
    (event) => {

        const rect =
            hero.getBoundingClientRect();


        const x =
            (event.clientX - rect.left)
            / rect.width
            - 0.5;


        const y =
            (event.clientY - rect.top)
            / rect.height
            - 0.5;


        heroFoods.forEach(
            (food) => {

                const speed =
                    Number(
                        food.dataset.speed
                    );


                food.style.transform = `
                    translate(
                        ${x * 35 * speed}px,
                        ${y * 35 * speed}px
                    )
                `;

            }
        );

    }
);


hero.addEventListener(
    "mouseleave",
    () => {

        heroFoods.forEach(
            (food) => {

                food.style.transform =
                    "";

            }
        );

    }
);



/* =====================================================
   BACKGROUND PARALLAX
===================================================== */

const floatingArtifacts =
    document.querySelectorAll(
        ".float-art, .spice-particle"
    );


document.addEventListener(
    "mousemove",
    (event) => {

        const x =
            event.clientX /
            window.innerWidth
            - 0.5;


        const y =
            event.clientY /
            window.innerHeight
            - 0.5;


        floatingArtifacts.forEach(
            (element, index) => {

                const strength =
                    6 + (index * 1.5);


                element.style.marginLeft =
                    `${x * strength}px`;

                element.style.marginTop =
                    `${y * strength}px`;

            }
        );

    }
);



/* =====================================================
   REGION INTERACTION
===================================================== */

const regionCards =
    document.querySelectorAll(
        ".region-card"
    );


regionCards.forEach(
    (card) => {

        const dish =
            card.querySelector(
                ".regional-dish"
            );

        const image =
            card.querySelector(
                ".regional-dish img"
            );


        /* ENTER */

        card.addEventListener(
            "mouseenter",
            () => {

                cursorGlow.style.width =
                    "380px";

                cursorGlow.style.height =
                    "380px";

            }
        );


        /* MOVE */

        card.addEventListener(
            "mousemove",
            (event) => {

                const rect =
                    card.getBoundingClientRect();


                const x =
                    (event.clientX - rect.left)
                    / rect.width
                    - 0.5;


                const y =
                    (event.clientY - rect.top)
                    / rect.height
                    - 0.5;


                const moveX =
                    x * 42;

                const moveY =
                    y * 42;


                dish.style.transform = `
                    translate(
                        ${moveX}px,
                        ${moveY}px
                    )
                `;


                image.style.transform = `
                    scale(1.12)
                    translate(
                        ${x * 12}px,
                        ${y * 12}px
                    )
                `;

            }
        );


        /* LEAVE */

        card.addEventListener(
            "mouseleave",
            () => {

                cursorGlow.style.width =
                    "250px";

                cursorGlow.style.height =
                    "250px";


                dish.style.transform =
                    "";


                image.style.transform =
                    "";

            }
        );

    }
);



/* =====================================================
   REGION ATMOSPHERE
===================================================== */

const regionAtmospheres = {

    virasat:
        "#702D2E",

    ras:
        "#245D42",

    mahak:
        "#304C63",

    rang:
        "#6B3149"
};


regionCards.forEach(
    (card) => {

        card.addEventListener(
            "mouseenter",
            () => {

                const region =
                    card.dataset.region;


                document.body.style.background =
                    regionAtmospheres[region];

            }
        );


        card.addEventListener(
            "mouseleave",
            () => {

                document.body.style.background =
                    "#3E6B48";

            }
        );

    }
);



/* =====================================================
   SIGNATURE HOVER
===================================================== */

const signatureItems =
    document.querySelectorAll(
        ".signature-item"
    );


signatureItems.forEach(
    (item) => {

        item.addEventListener(
            "mouseenter",
            () => {

                cursorGlow.style.width =
                    "320px";

                cursorGlow.style.height =
                    "320px";

            }
        );


        item.addEventListener(
            "mouseleave",
            () => {

                cursorGlow.style.width =
                    "250px";

                cursorGlow.style.height =
                    "250px";

            }
        );

    }
);



/* =====================================================
   NAVBAR
===================================================== */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 60) {

            navbar.style.background =
                "rgba(25,50,32,.94)";

            navbar.style.borderBottomColor =
                "rgba(244,233,210,.17)";

        } else {

            navbar.style.background =
                "rgba(27,55,35,.68)";

            navbar.style.borderBottomColor =
                "rgba(244,233,210,.12)";

        }

    }
);



/* =====================================================
   BUTTON HOVER
===================================================== */

const interactiveElements =
    document.querySelectorAll(
        "a, button"
    );


interactiveElements.forEach(
    (element) => {

        element.addEventListener(
            "mouseenter",
            () => {

                cursorGlow.style.width =
                    "300px";

                cursorGlow.style.height =
                    "300px";

            }
        );


        element.addEventListener(
            "mouseleave",
            () => {

                cursorGlow.style.width =
                    "250px";

                cursorGlow.style.height =
                    "250px";

            }
        );

    }
);



/* =====================================================
   MOBILE CURSOR DISABLE
===================================================== */

if (
    window.matchMedia(
        "(hover: none)"
    ).matches
) {

    cursorDot.style.display =
        "none";

    cursorGlow.style.display =
        "none";
}
