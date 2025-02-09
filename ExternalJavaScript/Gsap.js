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
    
    // Continuous rotation animation (after initial animation completes)
    tl.to("#icons img:nth-child(odd)", {
        rotate: 30,
        duration: 1.5,
        repeat: -1,
        yoyo: true
    }, "-=1.5"); // Overlapping to make it smoother
    
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
        scrollTrigger: {
            trigger: ".Cont-01",
            start: "top 60%",
            end: "top 30%",
            scrub: true
        }
    })

    gsap.from(".Cont-02", {
        x: 500,
        opacity: 0,
        scrollTrigger: {
            trigger: ".Cont-02",
            start: "top 60%",
            end: "top 30%",
            scrub: true
        }
    })

    gsap.from(".Cont-03", {
        x: -500,
        opacity: 0,
        scrollTrigger: {
            trigger: ".Cont-03",
            start: "top 60%",
            end: "top 30%",
            scrub: true
        }
    })

    gsap.from(".container", {
        onStart : () => {
            Object.entries(ObjLang).forEach(([key, value]) => {
                SetContentPer(value);
                SetSkillArc(i, value);
                i++;
            })
        },
        scrollTrigger : {
            trigger: ".container",
            start: "top 45%",
            end: "top 30%",
            scrub: true
        }
    })

    gsap.from("#skills h2", {
        scale: 0,
        duration: 1,
        opacity: 0,
        scrollTrigger : {
            trigger: "#skills h2",
            start: "top 60%",
            end: "top 30%",
            scrub: true
        }
    })

    gsap.from("#projects-Sec-2 h2", {
        y: -200,
        opacity: 0,
        scrollTrigger : {
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
        scrollTrigger : {
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
        scrollTrigger : {
            trigger: "#projects-Sec-2",
            start: "top 60%",
            end: "top 40%",
            scrub: true
        }
    })



})
