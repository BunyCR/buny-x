const translations = {
    tr: { name: "İSMİNİ YAZ", join: "ARENAYA KATIL", mode: "MODUNU SEÇ", pixel: "PİKSEL MODU", desc: "AÇIKLAMA MODU", emoji: "EMOJİ MODU", pes: "PES ET", placeholder: "Kart adı...", error: "İsim yaz!" },
    en: { name: "ENTER NAME", join: "JOIN ARENA", mode: "SELECT MODE", pixel: "PIXEL MODE", desc: "DESCRIPTION MODE", emoji: "EMOJI MODE", pes: "GIVE UP", placeholder: "Card name...", error: "Enter name!" },
    az: { name: "ADINI YAZ", join: "ARENAYA QOŞUL", mode: "MOD SEÇİN", pixel: "PİKSEL MODU", desc: "TƏSVİR MODU", emoji: "EMOJİ MODU", pes: "TƏSLİM OL", placeholder: "Kart adı...", error: "Ad yaz!" },
    es: { name: "NOMBRE", join: "ENTRAR", mode: "MODO", pixel: "PÍXEL", desc: "DESCRIPCIÓN", emoji: "EMOJI", pes: "RENDIRSE", placeholder: "Nombre...", error: "Nombre!" },
    de: { name: "NAME", join: "BEITRETEN", mode: "MODUS", pixel: "PIXEL", desc: "BESCHREIBUNG", emoji: "EMOJI", pes: "AUFGEBEN", placeholder: "Karte...", error: "Name!" },
    fr: { name: "NOM", join: "REJOINDRE", mode: "MODE", pixel: "PIXEL", desc: "DESCRIPTION", emoji: "EMOJI", pes: "ABANDONNER", placeholder: "Carte...", error: "Nom!" },
    ru: { name: "ИМЯ", join: "ВХОД", mode: "МОД", pixel: "ПИКСЕЛЬ", desc: "ОПИСАНИЕ", emoji: "ЭМОДЗИ", pes: "СДАТЬСЯ", placeholder: "Карта...", error: "Имя!" },
    ko: { name: "이름", join: "입장", mode: "모드 선택", pixel: "픽셀 모드", desc: "설명 모드", emoji: "이모지 모드", pes: "포기", placeholder: "카드...", error: "이름!" },
    zh: { name: "名字", join: "加入", mode: "模式", pixel: "像素", desc: "描述", emoji: "表情符号", pes: "放弃", placeholder: "卡片...", error: "名字!" },
    jp: { name: "名前", join: "参加", mode: "モード", pixel: "ピクセル", desc: "説明", emoji: "絵文字", pes: "降参", placeholder: "名前...", error: "名前!" }
};

let currentLang = "tr";
let targetCard, timerInterval, timeLeft = 300, selectedMode = "";

const cards = [
    { n: "Pekka", id: "p-e-k-k-a", emojis: "🤖⚔️💜", desc: { tr: "Kelebekleri sever.", en: "Loves butterflies.", az: "Kəpənəkləri sevir.", es: "Le gustan las mariposas.", ru: "Любит бабочек." }},
    { n: "Kıvılcım", id: "sparky", emojis: "🚜⚡💥", desc: { tr: "Yavaşça şarj olur.", en: "Slowly charges up.", az: "Yavaş-yavaş doldurur.", fr: "Se charge lentement.", jp: "ゆっくり充電します。" }}
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
    document.getElementById('btn-pes').innerText = t.pes;
}

function showModes() {
    const name = document.getElementById('player-name').value;
    if(!name) { alert(translations[currentLang].error); return; }
    document.getElementById('entrance-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('mode-selection').style.display = 'flex';
}

function startSpecificMode(mode) {
    selectedMode = mode;
    document.getElementById('mode-selection').style.display = 'none';
    document.getElementById('active-game').classList.remove('hidden');
    targetCard = cards[Math.floor(Math.random() * cards.length)];
    setupUI();
}

function setupUI() {
    const imgUrl = `https://royaleapi.github.io/cr-api-assets/cards/${targetCard.id}.png`;
    let content = "";
    if(selectedMode === 'pixel') {
        content = `<img src="${imgUrl}" style="filter:blur(30px); width:120px;">`;
    } else if(selectedMode === 'desc') {
        content = `<p>${targetCard.desc[currentLang] || targetCard.desc['en']}</p>`;
    } else {
        content = `<h1 style="font-size:3rem;">${targetCard.emojis}</h1>`;
    }
    document.getElementById('hint-area').innerHTML = content;
}
