const translations = {
    tr: { name: "İSMİNİ YAZ", join: "ARENAYA KATIL", mode: "MODUNU SEÇ", pixel: "PİKSEL MODU", desc: "AÇIKLAMA MODU", emoji: "EMOJİ MODU", pes: "PES ET", placeholder: "Kart adı...", tebrik: "Tebrikler!", error: "İsim yaz kanka!" },
    en: { name: "ENTER NAME", join: "JOIN ARENA", mode: "SELECT MODE", pixel: "PIXEL MODE", desc: "DESCRIPTION MODE", emoji: "EMOJI MODE", pes: "GIVE UP", placeholder: "Card name...", tebrik: "Congrats!", error: "Enter name!" },
    az: { name: "ADINI YAZ", join: "ARENAYA QOŞUL", mode: "MOD SEÇİN", pixel: "PİKSEL MODU", desc: "TƏSVİR MODU", emoji: "EMOJİ MODU", pes: "TƏSLİM OL", placeholder: "Kart adı...", tebrik: "Təbriklər!", error: "Ad yaz!" },
    ko: { name: "이름을 입력하세요", join: "아레나 입장", mode: "모드 선택", pixel: "픽셀 모드", desc: "설명 모드", emoji: "이모지 모드", pes: "포기하다", placeholder: "카드 이름...", tebrik: "축하해요!", error: "이름을 입력하세요!" },
    zh: { name: "输入名字", join: "加入竞技场", mode: "选择模式", pixel: "像素模式", desc: "说明模式", emoji: "表情符号模式", pes: "放弃", placeholder: "输入卡片名称...", tebrik: "恭喜！", error: "请输入名字！" },
    de: { name: "NAME EINGEBEN", join: "ARENA BEITRETEN", mode: "MODUS WÄHLEN", pixel: "PIXEL-MODUS", desc: "BESCHREIBUNG", emoji: "EMOJI-MODUS", pes: "AUFGEBEN", placeholder: "Kartenname...", tebrik: "Glückwunsch!", error: "Name eingeben!" },
    fr: { name: "ENTRER NOM", join: "REJOINDRE L'ARÈNE", mode: "CHOISIR MODE", pixel: "MODE PIXEL", desc: "DESCRIPTION", emoji: "MODE EMOJI", pes: "ABANDONNER", placeholder: "Nom de la carte...", tebrik: "Félicitations!", error: "Entrez un nom!" },
    es: { name: "NOMBRE", join: "ENTRAR EN ARENA", mode: "ELEGIR MODE", pixel: "MODO PÍXEL", desc: "DESCRIPCIÓN", emoji: "MODO EMOJI", pes: "RENDIRSE", placeholder: "Nombre de carta...", tebrik: "¡Felicidades!", error: "Escribe nombre!" },
    ru: { name: "ИМЯ", join: "В АРЕНУ", mode: "ВЫБОР МОДА", pixel: "ПИКСЕЛЬ-МОД", desc: "ОПИСАНИЕ", emoji: "ЭМОДЗИ-МОД", pes: "СДАТЬСЯ", placeholder: "Имя карты...", tebrik: "Поздравляю!", error: "Введите имя!" },
    jp: { name: "名前を入力", join: "アリーナに参加", mode: "モード選択", pixel: "ピクセルモード", desc: "説明モード", emoji: "絵文字モード", pes: "降参する", placeholder: "カード名...", tebrik: "おめでとう！", error: "名前を入力してください" }
};

let currentLang = "tr";
let targetCard, timerInterval, timeLeft = 300, selectedMode = "", attempts = 0;

// BU KART LİSTESİ ÖRNEKTİR, YUKARIDAKİ DEV LİSTEYİ BURAYA EKLEYEBİLİRSİN
const cards = [
    { n: "Kıvılcım", id: "sparky", emojis: "🚜⚡💥", desc: { tr: "Kıvılcım, yavaşça hazırlanır ve BÜYÜK bir alan hasarı verir.", en: "Sparky slowly charges up, then delivers a huge area damage." }},
    { n: "Dev Goblin", id: "goblin-giant", emojis: "👹🏹💚", desc: { tr: "Bu yeşil Dev Goblin binaları hedef alıyor.", en: "This jolly green Goblin Giant carries two Spear Goblins." }}
];

// DİL DEĞİŞTİRME FONKSİYONU
function changeLanguage() {
    currentLang = document.getElementById('language-select').value;
    const t = translations[currentLang];
    
    document.getElementById('player-name').placeholder = t.name;
    document.getElementById('main-btn').innerText = t.join;
    document.getElementById('mode-title').innerText = t.mode;
    document.getElementById('m-pixel').innerText = t.pixel;
    document.getElementById('m-desc').innerText = t.desc;
    document.getElementById('m-emoji').innerText = t.emoji;
    document.getElementById('guess-input').placeholder = t.placeholder;
    document.getElementById('btn-pes').innerText = t.pes;
}

// GİRİŞ EKRANINDAN MOD SEÇİMİNE GEÇİŞ
function showModes() {
    const nameInput = document.getElementById('player-name').value;
    if(!nameInput || nameInput.trim() === "") {
        alert(translations[currentLang].error);
        return;
    }
    document.getElementById('entrance-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
}

// MODU BAŞLATMA
function startSpecificMode(mode) {
    selectedMode = mode;
    document.getElementById('mode-selection').classList.add('hidden');
    document.getElementById('active-game').classList.remove('hidden');
    targetCard = cards[Math.floor(Math.random() * cards.length)];
    setupUI();
    startTimer();
}

function setupUI() {
    const imgUrl = `https://royaleapi.github.io/cr-api-assets/cards/${targetCard.id}.png`;
    let content = "";
    const langDesc = targetCard.desc[currentLang] || targetCard.desc['en'];

    if(selectedMode === 'pixel') {
        content = `<div class="pixel-box"><img src="${imgUrl}" id="target-card-img" style="filter:blur(30px)"></div>`;
    } else if(selectedMode === 'desc') {
        let words = langDesc.split(" ");
        let opened = [0]; // İlk kelimeyi açalım
        let masked = words.map((w, i) => opened.includes(i) ? `<b>${w}</b>` : "___").join(" ");
        content = `<div class="hint-box"><p>${masked}</p></div>`;
    } else {
        content = `<div class="hint-box"><p style="font-size:3rem;">${targetCard.emojis}</p></div>`;
    }
    document.getElementById('hint-area').innerHTML = content;
}

function startTimer() {
    timerInterval = setInterval(() => {
        let min = Math.floor(timeLeft / 60), sec = timeLeft % 60;
        document.getElementById('game-timer').innerText = `${min}:${sec < 10 ? '0'+sec : sec}`;
        if(--timeLeft < 0) surrender();
    }, 1000);
}

function showList(val) {
    let list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    if(!val) return;
    cards.filter(c => c.n.toLowerCase().includes(val.toLowerCase())).forEach(c => {
        let div = document.createElement('div');
        div.style.padding = "12px"; div.style.cursor = "pointer"; div.innerText = c.n;
        div.onclick = () => { checkGuess(c); list.innerHTML = ''; document.getElementById('guess-input').value = ''; };
        list.appendChild(div);
    });
}

function checkGuess(guess) {
    attempts++;
    if(selectedMode === 'pixel') {
        let b = Math.max(0, 30 - (attempts * 6));
        document.getElementById('target-card-img').style.filter = `blur(${b}px)`;
    }
    if(guess.n === targetCard.n) {
        clearInterval(timerInterval);
        alert(translations[currentLang].tebrik);
        surrender();
    } else {
        const row = document.createElement('div');
        row.style.background = "#ef4444"; row.style.padding = "10px"; row.style.borderRadius = "8px"; row.style.marginBottom = "5px";
        row.innerText = guess.n;
        document.getElementById('results-table').prepend(row);
    }
}

function surrender() {
    clearInterval(timerInterval);
    const imgUrl = `https://royaleapi.github.io/cr-api-assets/cards/${targetCard.id}.png`;
    const langDesc = targetCard.desc[currentLang] || targetCard.desc['en'];
    document.getElementById('hint-area').innerHTML = `
        <div style="background:rgba(255,255,255,0.1); padding:20px; border-radius:15px; border:2px solid #a855f7;">
            <img src="${imgUrl}" style="width:100px;">
            <h2 style="color:#a855f7;">${targetCard.n}</h2>
            <p style="font-size:0.8rem;">${langDesc}</p>
            <button onclick="location.reload()" class="btn-blue" style="margin-top:10px;">RESTART</button>
        </div>`;
    document.querySelector('.search-area').style.display = 'none';
    document.getElementById('btn-pes').style.display = 'none';
}

// SAYFA YÜKLENDİĞİNDE ÇALIŞSIN
document.addEventListener('DOMContentLoaded', changeLanguage);
