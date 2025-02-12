window.addEventListener("load", () => {
    window.history.scrollRestoration = "manual";
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
});



let spanArr = document.querySelectorAll(".container .block span");

let ObjLang = {
    "HTML" : 80,
    "CSS" : 75,
    "Bootstrap" : 60,
    "SASS" : 50,
    "JS" : 40,
    "MySQL" : 45,
    "PHP" : 45,
    "JAVA" : 40,
    "C" : 30,
    "Python" : 20,
    "GSAP" : 20,
    "React" : 10
}

let Keys = Object.keys(ObjLang);
let i = 0;

function SetSkillArc(i, per){
    let j = 1;
    let Interval = setInterval(() => {
        if(j <= per){
            spanArr[i].parentNode.style.background = `conic-gradient(cyan 0% ${j}%, transparent ${j}% 100%)`;
            spanArr[i].textContent = j + "%";
            j++;
        } else{
            clearInterval(Interval);
        }
    }, 50)
}

