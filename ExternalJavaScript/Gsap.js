let NavEl = document.getElementsByClassName("NavEl");

NavEl[0].addEventListener("click", () => {
    setTimeout(() => {
        gsap.fromTo(".Cont-01",
            {x: -1000, opacity: 0},
            {
                x: 0,
                opacity: 1,
                duration: 2,
                ease: "elastic.out(1, 0.3)"
            }
        )
    }, 500);
})



NavEl[1].addEventListener("click", () => {
    setTimeout(() => {
        gsap.fromTo("#skills h2", 
            {scale: 0, opacity: 0},
            {
                scale: 1,
                duration: 3,
                opacity: 1,
                ease: "elastic.out(2, 0.2)"
            }
        )
    
        i = 0;
    
        gsap.from(".container", {
            onStart: () => {
                Object.entries(ObjLang).forEach(([key, value]) => {
                    SetSkillArc(i, value);
                    i++;
                })
            }
        })
    }, 500);
})


NavEl[2].addEventListener("click", () => {
    setTimeout(() => {
        gsap.fromTo("#Container-1", 
            { x: 1200, opacity: 0 }, // Start state
            { 
                x: 0,
                duration: 3,
                opacity: 1,
                ease: "elastic.out(1, 0.3)"
            }
        );
    
        gsap.fromTo("#Container-2", 
            { x: -1200, opacity: 0 }, // Start state
            {
                x: 0,
                duration: 3,
                opacity: 1,
                ease: "elastic.out(1, 0.3)"
            }
        );
    
        gsap.fromTo("#projects-Sec-1 h2", 
            { scale: 0, opacity: 0 }, // Start state
            {
                scale: 1,
                duration: 3,
                opacity: 1,
                ease: "elastic.out(2, 0.2)"
            }
        );
    }, 500);
})

NavEl[4].addEventListener('click', () => {
   setTimeout(() => {
    gsap.fromTo("#message",
        {y: 300, opacity: 0},
        {
        y: 0,
        duration: 3,
        opacity: 1,
        ease: "elastic.out(1, 0.3)"
    })
   }, 500);
})


document.addEventListener("DOMContentLoaded", () => {
    let timeLn = gsap.timeline();

    timeLn.from("#title", {
        x: -300,
        opacity: 0,
        duration: 1
    })

    timeLn.from(".Al", {
        duration: 1,
        y: -300,  // From the left
        opacity: 0,
        stagger: 0.3,
    })

    gsap.from(".NavEl", {
        x: 500,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })

    gsap.from(".introContent", {
        x: -300,
        opacity: 0,
        duration: 1
    })

    gsap.from(".img", {
        x: 300,
        duration: 1,
        opacity: 0
    })

    const tl = gsap.timeline();

    tl.from("#icons img", {
        y: 300,
        duration: 1.5,
        opacity: 0,
        stagger: 0.3
    });

    tl.to("#icons img:nth-child(odd)", {
        rotate: 30,
        duration: 1.5,
        repeat: -1,
        yoyo: true
    }, "-=1.5");

    tl.to("#icons img:nth-child(even)", {
        rotate: -30,
        duration: 1.5,
        repeat: -1,
        yoyo: true
    }, "-=1.5");

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".Cont-01", {
        x: -500,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: ".Cont-01",
            start: "top 60%"
        }
    })

    gsap.from(".Cont-02", {
        x: 500,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: ".Cont-02",
            start: "top 60%"
        }
    })

    gsap.from(".Cont-03", {
        x: -500,
        opacity: 0,
        duration: 2,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: ".Cont-03",
            start: "top 60%"
        }
    })

    gsap.from(".container", {
        onStart: () => {
            Object.entries(ObjLang).forEach(([key, value]) => {
                SetSkillArc(i, value);
                i++;
            })
        },
        scrollTrigger: {
            trigger: ".container",
            start: "top 45%"
        }
    })

    gsap.from("#skills h2", {
        scale: 0,
        duration: 3,
        opacity: 0,
        ease: "elastic.out(2, 0.2)",
        scrollTrigger: {
            trigger: "#skills h2",
            start: "top 60%"
        }
    })

    gsap.from("#projects-Sec-2 h2", {
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#projects-Sec-2",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })

    gsap.from("#projects-Sec-2 .content", {
        x: -100,
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#projects-Sec-2",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })

    gsap.from("#projects-Sec-2 img", {
        x: 100,
        y: -200,
        opacity: 0,
        scrollTrigger: {
            trigger: "#projects-Sec-2",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })

    gsap.from("#projects-Sec-1 h2", {
        scale: 0,
        duration: 3,
        opacity: 0,
        ease: "elastic.out(2, 0.2)",
        scrollTrigger: {
            trigger: "#projects-Sec-1 h2",
            start: "top 60%"
        }
    })

    gsap.from("#Container-1", {
        x: 300,
        duration: 1,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: "#Container-1",
            start: "top 50%"
        }
    })

    gsap.from("#Container-2", {
        x: -300,
        duration: 1,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: "#Container-2",
            start: "top 70%"
        }
    })

    gsap.from("#message", {
        y: 300,
        duration: 2,
        opacity: 0,
        ease: "elastic.out(1, 0.3)",
        scrollTrigger: {
            trigger: "#message",
            start: "top 80%"
        }
    })


})


