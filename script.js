const passwordCorrect = "6102007";
const music = document.getElementById("music");
music.volume = 0;

// MỞ KHÓA
function unlock(){
    if(password.value === passwordCorrect){
        lock.style.display="none";
        card.classList.remove("hidden");
        fadeInMusic();
        startSnow();
    } else alert("Sai rồi nè 🥺");
}

// NHẠC FADE IN
function fadeInMusic(){
    music.play();
    let v=0;
    let fade=setInterval(()=>{
        if(v>=0.6) clearInterval(fade);
        music.volume=v; v+=0.02;
    },200);
}

// TUYẾT
function startSnow(){
    setInterval(()=>{
        const s=document.createElement("div");
        s.className="snowflake";
        s.innerHTML="❄";
        s.style.left=Math.random()*100+"vw";
        s.style.animationDuration=5+Math.random()*5+"s";
        document.body.appendChild(s);
        setTimeout(()=>s.remove(),10000);
    },300);
}

// TIM
function heart(){
    const h=document.createElement("div");
    h.className="heart";
    h.innerHTML="💖";
    h.style.left=Math.random()*100+"vw";
    h.style.fontSize=14+Math.random()*12+"px";
    document.body.appendChild(h);
    setTimeout(()=>h.remove(),6000);
}

// CHỮ HIỆN DÒNG
function accept(){
    const text=[
        "Giáng Sinh năm nay, anh chỉ muốn nói rằng:",
        "Hoài Anh chính là món quà tuyệt vời nhất",
        "mà ông già Noel đã mang đến cho anh 🎄",
        "Trong ánh đèn lung linh và tiếng nhạc rộn ràng,",
        "anh mong em luôn cảm nhận được",
        "tình yêu chân thành mà anh dành cho em 🤍",
        "",
        "Chúc Hoài Anh của anh một mùa Noel an lành,",
        "hạnh phúc và mỗi ngày đều ngập tràn niềm vui ✨",
        "",
        "Anh yêu em <3"
    ];
    secret.innerHTML="";
    let i=0;
    let type=setInterval(()=>{
        if(i>=text.length){clearInterval(type);return;}
        secret.innerHTML+=text[i]+"<br>";
        heart();
        i++;
    },900);
}
