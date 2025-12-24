const correctPassword="6102007";
const music=document.getElementById("music");

function unlock(){
    const v=document.getElementById("password").value.trim();
    if(v===correctPassword){
        document.getElementById("lock").style.display="none";
        document.getElementById("card").classList.remove("hidden");
        fadeInMusic();
        createSnow();
    }else alert("Sai rồi nè 🥺");
}

function accept(){
    document.getElementById("secret").classList.remove("hidden");
    startHearts();
    typeText();
}

/* NHẠC FADE IN */
function fadeInMusic(){
    music.volume=0;music.play();
    let v=0;
    const i=setInterval(()=>{
        v+=0.02;music.volume=v;
        if(v>=1)clearInterval(i)
    },200)
}

/* TUYẾT TỰ NHIÊN */
function createSnow(){
    setInterval(()=>{
        const s=document.createElement("div");
        s.className="snowflake";
        s.innerHTML="❄";
        s.style.left=Math.random()*100+"vw";
        s.style.animationDuration=5+Math.random()*5+"s";
        document.body.appendChild(s);
        setTimeout(()=>s.remove(),10000)
    },400)
}

/* TIM */
function startHearts(){
    setInterval(()=>{
        const h=document.createElement("div");
        h.className="heart";h.innerHTML="💖";
        h.style.left=Math.random()*100+"vw";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),6000)
    },800)
}

/* CHỮ HIỆN TỪ TỪ */
function typeText(){
    document.querySelectorAll(".typing-text").forEach(el=>{
        const t=el.innerHTML;
        el.innerHTML="";
        let i=0;
        const it=setInterval(()=>{
            el.innerHTML+=t[i++]||"";
            if(i>=t.length)clearInterval(it)
        },30)
    })
}
