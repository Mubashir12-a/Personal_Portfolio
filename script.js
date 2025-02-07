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
    "Cpp" : 20,
    "React" : 10
}

let Keys = Object.keys(ObjLang);
let i = 0;

function SetSkillArc(i, per){
    spanArr[i].parentNode.style.background = `conic-gradient(cyan 0% ${per}%, transparent ${per}% 100%)`;
}

Object.entries(ObjLang).forEach(([key, value]) => {
    SetSkillArc(i, value);
    i++;
})