// window.addEventListener("load", () => {
//     window.scrollTo(0,0);
// });



let spanArr = document.querySelectorAll(".container .block span");

let ObjLang = {
    "HTML": 80,
    "CSS": 75,
    "Bootstrap": 60,
    "SASS": 50,
    "JS": 40,
    "MySQL": 45,
    "PHP": 45,
    "JAVA": 40,
    "C": 30,
    "Python": 20,
    "GSAP": 20,
    "React": 10
}

let Keys = Object.keys(ObjLang);
let i = 0;

function SetSkillArc(i, per) {
    let j = 1;
    let Interval = setInterval(() => {
        if (j <= per) {
            spanArr[i].parentNode.style.background = `conic-gradient(cyan 0% ${j}%, transparent ${j}% 100%)`;
            spanArr[i].textContent = j + "%";
            j++;
        } else {
            clearInterval(Interval);
        }
    }, 50)
}


// Send Message:

// let BtnMsg = document.getElementById("SndMsg");

// BtnMsg.addEventListener('click', () => {
   
// })

// More Btn

let BtnMore = document.getElementById("More_btn");
let block = document.getElementsByClassName("block");
let containerSkill = document.getElementById("skills");

for(let i = 4; i < 12; i++){
    block[i].style.display = "none";
}

// containerSkill.style.height = "500px";



BtnMore.addEventListener('click', () => {
    for(let i = 4; i < 12; i++){
        block[i].style.display = "block";
    }

    BtnMore.style.display = "none";
})

console.log("Hell")

