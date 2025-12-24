const correctPassword = "6102007";
const music = document.getElementById("music");

function unlock() {
    if (password.value === correctPassword) {
        lock.style.display = "none";
        card.classList.remove("hidden");
        fadeInMusic();
    } else {
        alert("Sai rồi nè 🥺");
    }
}

function accept() {
    const lines = document.querySelectorAll(".secret p");
    secret.classList.remove("hidden");
    lines.forEach((line, i) => {
        setTimeout(() => line.classList.add("show"), i * 900);
    });
    startHearts();
}

function fadeInMusic() {
    music.volume = 0;
    music.play();
    let v = 0;
    const fade = setInterval(() => {
        v += 0.02;
        music.volume = v;
        if (v >= 1) clearInterval(fade);
    }, 120);
}

function startHearts() {
    setInterval(() => {
        const h = document.createElement("div");
        h.textContent = "💖";
        h.className = "heart";
        h.style.left = Math.random()*100+"vw";
        document.body.appendChild(h);
        setTimeout(()=>h.remove(),6000);
    },800);
}
