var charm = document.getElementById("charm"), 
    landingBamboo = document.getElementById("bamboo"),
    facts = document.getElementById("facts"),
    factsText = document.getElementById("factText"), 
    factsTitle = document.getElementById("factTitle"),
    fact1 = false,
    fact2 = false,
    fact3 = false,
    fact4 = false,
    fact5 = false,
    fact6 = false,
    fact7 = false,
    fact8 = false,
    fact9 = false,
    fact10 = false,
    progress = 0;

$(document).ready(function() {
    setTimeout(bambooAndTitle, 500);
    setTimeout(putCharm, 1000);
});

/*===============NAVIGATION===============*/
charm.addEventListener("click", function() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
    setTimeout(transitionLM, 500);
});

document.getElementById("foodcart").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("food").style.display = "flex"; 
});

document.getElementById("bigBamboo").addEventListener("click", function() {
    document.getElementById("mainPage").style.display = "none";
    document.getElementById("charms").style.display = "flex";
});

document.getElementById("table").addEventListener("click", function() {
    document.getElementById("food").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
});

document.getElementById("leaves").addEventListener("click", function() {
    document.getElementById("charms").style.display = "none";
    document.getElementById("mainPage").style.display = "flex";
});

document.getElementById("endPage").addEventListener("click", function() {
    document.getElementById("charms").style.display = "none";
    document.getElementById("mainPage").style.display = "none"; 
    document.getElementById("food").style.display = "none";
    document.getElementById("lastPage").style.display = "flex";
    document.getElementById("pwrap").style.display = "none";
});

function transitionLM () {
    document.getElementById("bigBamboo").style.height = "100%";
    document.getElementById("smallBamboo").style.height = "75%";
    document.getElementById("smallBamboo2").style.height = "70%";
    document.getElementById("vega").style.width = "20%";
    document.getElementById("couple").style.opacity = 1;
    document.getElementById("foodcart").style.left = "15%";
    document.getElementById("pwrap").style.display = "inline-block";
}

/*===============DECOR===============*/
function bambooAndTitle() {
    landingBamboo.style.bottom = "-20vh";
    document.getElementById("title").style.top = "22vh";
}

function putCharm() {
    charm.style.display = "block";
}

/*===============PROGRESS===============*/
function addProgress() {
     progress = progress + 10;
     document.getElementById("bar").style.width = progress +"%";
     document.getElementById("pwrap").style.bottom = "7%";
     setTimeout(pNotify, 300);
    
     if(progress == 100) {
         setTimeout(foundAll, 2000);
     }
};

function foundAll() {
    facts.style.display = "flex";
    factsTitle.innerText = "Hooray!";
    factsText.innerHTML = "You found all 10 facts. Click the <b style='color:rgba(255,0,129,1)'>!</b> button to finish.";
    document.getElementById("endPage").style.display = "block";
}

function pNotify () {
    document.getElementById("pwrap").style.bottom = "6%";
}

/*===============FACTS===============*/

var exitFact = function() {
    facts.style.display = "none";
}

facts.addEventListener("click", exitFact);

document.getElementById("smallBamboo").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Bamboo";
     factsText.innerText = "Bamboo is thought to have become a part of the tanabata tradition for its propensity to grow straight and tall, with upward stretching branches bearing wishes to heaven on the wind. The plant was also believed to ward off insects and was displayed to protect rice crops and symbolize hopes of a bountiful harvest.";
    if(fact1 == false) {
        addProgress();
        fact1 = true;
    } 
    
     
});

document.getElementById("singer").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Tanabata Song";
     factsText.innerHTML = "The bamboo leaves rustle, <br/>shaking away in the leaves. <br/>The stars twinkle <br/>on the gold and silver grains of sand. <br/>The five-colour paper strips <br/>I have already written. <br/>The stars twinkle, <br/>they watch us from heaven.";
    if(fact2 == false) {
        addProgress();
        fact2 = true;
    } 
});

document.getElementById("couple").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Story";
     factsText.innerText = "According to the folktale, Orihime a gifted weaver, and Hikoboshi a hard-working cow herder, began to neglect their duties upon being wed. The couple incurred the wrath of the bride’s father Tentei, the emperor of heaven, and were exiled to separate ends of the Milky Way. They are granted a meeting each year so long as they both diligently fulfill their celestial obligations during the other days of the year. If the day is rainy, it is said that the Milky Way will flood, making it impossible for Orihime to cross and be with Hikoboshi.  So people pray for good weather.";
    if(fact3 == false) {
        addProgress();
        fact3 = true;
    } 
});

document.getElementById("vega").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Tanabata";
     factsText.innerText = "Tanabata literally  means “evening of the seventh,” and centers on the stars Vega and Altair in the constellations Lyra and Aquila. The timing of tanabata celebrations varies by region. Japan adopted the Gregorian calendar in 1872, placing the holiday on July 7. However, many areas still rely on traditional reckoning to schedule festivities, with observances normally falling sometime in August.";
    if(fact4 == false) {
        addProgress();
        fact4 = true;
    } 
});

document.getElementById("somen").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Sōmen";
     factsText.innerText = "The traditional food of the star festival is sōmen. Chilled, long, thin noodles evolved from a woven Chinese sweet known in Japanese as sakubei, whose intertwined strands were thought to resemble both the Milky Way and the weaving threads worked by Orihime.";
    if(fact5 == false) {
        addProgress();
        fact5 = true;
    } 
});

document.getElementById("sauce").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Tsuyu";
     factsText.innerText = "A dipping sauce served with sōmen";
    if(fact6 == false) {
        addProgress();
        fact6 = true;
    } 
});

document.getElementById("fukinashi").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Fukinashi";
     factsText.innerText = "Paper tubular streamer, the streamers are made to symbolize the weaving made by Orihime.";
    if(fact7 == false) {
        addProgress();
        fact7 = true;
    } 
});

document.getElementById("kinchaku").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Kinchaku";
     factsText.innerText = "Paper purse , decoration wishing for prosperity and good business.";
    if(fact8 == false) {
        addProgress();
        fact8 = true;
    } 
});

document.getElementById("orizuru").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Orizuru";
     factsText.innerText = "Paper cranes, decoration wishing for long life, health and safety.";
    if(fact9 == false) {
        addProgress();
        fact9 = true;
    } 
});

document.getElementById("tanzaku").addEventListener("click", function() {
     facts.style.display = "flex";
     factsTitle.innerText = "Tanzaku";
     factsText.innerText = "Multi-color strips of paper. Before they are hung, the paper is inscribed with a wish, such as a child’s dream of becoming a famous soccer player or a parent’s hope for career success.";
    if(fact10 == false) {
        addProgress();
        fact10 = true;
    } 
});

/*===============SHRINE===============*/

document.getElementById("lightL").addEventListener("click", function() {
    document.getElementById("lastPage").style.filter = "none";
});

document.getElementById("lightR").addEventListener("click", function() {
    document.getElementById("lastPage").style.filter = "none";
    
});

document.getElementById("gate").addEventListener("click", function() {
    facts.style.display = "flex";
    factsTitle.innerText = "Happy Tanabata";
    factsText.innerText = "The shrine associated with the Tanabata legend is Kifune Shrine, found in the northernmost part of Kyoto city. It is said that not only the Water God, but also the God of Marriage are enshrined there, and as a result, Kifune Shrine has visitors coming to pray all through the year. May your wishes come true!";
    facts.removeEventListener("click", exitFact);
});

document.getElementById("baL").addEventListener("click", function() {
    createCharm("left");
});

document.getElementById("baR").addEventListener("click", function() {
    createCharm("right");
});

function createCharm(which) {
    var smallCharm = document.createElement("img");
    var rHue = Math.round(Math.random()*350);
    var rSide = Math.round(Math.random()*10)+5;
    var rTop = Math.round(Math.random()*15)+5;
    
    smallCharm.src = "imgs/charms/tanzaku.svg";
    smallCharm.className = "scharm";
    smallCharm.style.width = "20px";
    smallCharm.style.top = rTop +"%";
    smallCharm.style.filter = "hue-rotate(" +rHue+ "deg)";
    smallCharm.style.zIndex = 3;
    smallCharm.style.position = "absolute";
    
    if(which == "left"){
        smallCharm.style.left = rSide +"%";
    } else if(which == "right") {
        smallCharm.style.right = rSide +"%";
    }
    
    document.getElementById("lastPage").appendChild(smallCharm);
    
    setTimeout(function() {
       document.getElementById("lastPage").removeChild(smallCharm); 
    }, 10000);
}
