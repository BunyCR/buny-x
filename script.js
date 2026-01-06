const translations = {
    tr: { name: "İSMİNİ YAZ", join: "ARENAYA KATIL", mode: "MOD SEÇ", pixel: "PİKSEL MODU", desc: "AÇIKLAMA MODU", emoji: "EMOJİ MODU", error: "İsim yaz!" },
    en: { name: "ENTER NAME", join: "JOIN ARENA", mode: "SELECT MODE", pixel: "PIXEL MODE", desc: "DESCRIPTION MODE", emoji: "EMOJI MODE", error: "Enter name!" },
    az: { name: "ADINI YAZ", join: "ARENAYA QOŞUL", mode: "MOD SEÇİN", pixel: "PİKSEL MODU", desc: "TƏSVİR MODU", emoji: "EMOJİ MODU", error: "Ad yaz!" },
    es: { name: "NOMBRE", join: "ENTRAR", mode: "MODO", pixel: "PÍXEL", desc: "DESCRIPCIÓN", emoji: "EMOJI", error: "Nombre!" },
    de: { name: "NAME", join: "BEITRETEN", mode: "MODUS", pixel: "PIXEL", desc: "BESCHREIBUNG", emoji: "EMOJI", error: "Name!" },
    fr: { name: "NOM", join: "REJOINDRE", mode: "MODE", pixel: "PIXEL", desc: "DESCRIPTION", emoji: "EMOJI", error: "Nom!" },
    ru: { name: "ИМЯ", join: "ВХОД", mode: "МОД", pixel: "ПИКСЕЛЬ", desc: "ОПИСАНИЕ", emoji: "ЭМОДЗИ", error: "Имя!" },
    ko: { name: "이름", join: "입장", mode: "모드 선택", pixel: "픽셀 모드", desc: "설명 모드", emoji: "이모지 모드", error: "이름!" },
    zh: { name: "名字", join: "加入", mode: "模式", pixel: "像素", desc: "描述", emoji: "表情符号", error: "名字!" },
    jp: { name: "名前", join: "参加", mode: "モード", pixel: "ピクセル", desc: "説明", emoji: "絵文字", error: "名前!" }
};

let currentLang = "tr";
let timerInterval, timeLeft = 300, targetCard;

const cards = [
    { n: "Kıvılcım", id: "sparky", emojis: "⚡🔋⚙️", desc: { tr: "Elektrikle çalışan dev bir makine.", en: "A massive electric machine.", az: "Elektriklə işləyən nəhəng maşın." }},
    { n: "Binici", id: "hog-rider", emojis: "🐗🔨👊", desc: { tr: "Nehrin üstünden atlar.", en: "Leaps over the river.", az: "Çayın üstündən tullanır." }},
    { n: "Pekka", id: "p-e-k-k-a", emojis: "🤖⚔️🦋", desc: { tr: "Kelebekleri çok sever.", en: "Loves butterflies.", az: "Kəpənəkləri çox sevir." }}
];

function changeLanguage() {
    currentLang = document.getElementById('language-select').value;
    const t = translations[currentLang];
    document.getElementById('player-name').placeholder = t.name;
    document.getElementById('main-btn').innerText = t.join;
    document.getElementById('mode-title').innerText = t.mode;
    document.getElementById('m-pixel').innerText = t.pixel;
    document.getElementById('m-desc').innerText = t.desc;
    document.getElementById('m-emoji').innerText = t.emoji;
}

function showModes() {
    if(!document.getElementById('player-name').value) return alert(translations[currentLang].error);
    document.getElementById('entrance-screen').classList.add('hidden');
    document.getElementById('mode-screen').classList.remove('hidden');
}

function startSpecificMode(mode) {
    document.getElementById('mode-screen').classList.add('hidden');
    document.getElementById('active-game').classList.remove('hidden');
    targetCard = cards[Math.floor(Math.random() * cards.length)];
    const area = document.getElementById('hint-area');
    
    if(mode === 'pixel') {
        area.innerHTML = `<img src="https://royaleapi.github.io/cr-api-assets/cards/${targetCard.id}.png" style="filter:blur(30px); width:160px; display:block; margin:auto;">`;
    } else if(mode === 'desc') {
        area.innerHTML = `<p style="text-align:center; padding:20px; border:2px dashed #a855f7; border-radius:15px; font-size:1.3rem;">${targetCard.desc[currentLang] || targetCard.desc['en']}</p>`;
    } else {
        area.innerHTML = `<h1 style="text-align:center; font-size:5rem; margin:0;">${targetCard.emojis}</h1>`;
    }
    startTimer();
}

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 300;
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft / 60);
        let sec = timeLeft % 60;
        document.getElementById('game-timer').innerText = `${min}:${sec < 10 ? '0'+sec : sec}`;
        if(timeLeft <= 0) { clearInterval(timerInterval); location.reload(); }
    }, 1000);
}
