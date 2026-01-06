const translations = {
    tr: { name: "İSMİNİ YAZ", join: "ARENAYA KATIL", mode: "MODUNU SEÇ", pixel: "PİKSEL MODU", desc: "AÇIKLAMA MODU", emoji: "EMOJİ MODU", pes: "PES ET", placeholder: "Kart adı...", tebrik: "Tebrikler!", error: "İsim yaz kanka!" },
    en: { name: "ENTER NAME", join: "JOIN ARENA", mode: "SELECT MODE", pixel: "PIXEL MODE", desc: "DESCRIPTION MODE", emoji: "EMOJI MODE", pes: "GIVE UP", placeholder: "Card name...", tebrik: "Congrats!", error: "Enter name!" },
    az: { name: "ADINI YAZ", join: "ARENAYA QOŞUL", mode: "MOD SEÇİN", pixel: "PİKSEL MODU", desc: "TƏSVİR MODU", emoji: "EMOJİ MODU", pes: "TƏSLİM OL", placeholder: "Kart adı...", tebrik: "Təbriklər!", error: "Ad yaz!" },
    ko: { name: "이름을 입력하세요", join: "아레나 입장", mode: "모드 선택", pixel: "픽셀 모드", desc: "설명 모드", emoji: "이모지 모드", pes: "포기하다", placeholder: "카드 이름...", tebrik: "축하해요!", error: "이름을 입력하세요!" },
    zh: { name: "输入名字", join: "加入竞技场", mode: "选择模式", pixel: "像素模式", desc: "说明模式", emoji: "表情符号模式", pes: "放弃", placeholder: "输入卡片名称...", tebrik: "恭喜！", error: "请输入名字！" },
    de: { name: "NAME EINGEBEN", join: "ARENA BEITRETEN", mode: "MODUS WÄHLEN", pixel: "PIXEL-MODUS", desc: "BESCHREIBUNG", emoji: "EMOJI-MODUS", pes: "AUFGEBEN", placeholder: "Kartenname...", tebrik: "Glückwunsch!", error: "Name!" },
    fr: { name: "ENTRER NOM", join: "REJOINDRE L'ARÈNE", mode: "CHOISIR MODE", pixel: "MODE PIXEL", desc: "DESCRIPTION", emoji: "MODE EMOJI", pes: "ABANDONNER", placeholder: "Nom...", tebrik: "Bravo!", error: "Nom!" },
    es: { name: "NOMBRE", join: "ENTRAR", mode: "MODO", pixel: "PÍXEL", desc: "DESCRIPCIÓN", emoji: "EMOJI", pes: "RENDIRSE", placeholder: "Nombre...", tebrik: "¡Felicidades!", error: "Nombre!" },
    ru: { name: "ИМЯ", join: "В АРЕНУ", mode: "МОД", pixel: "ПИКСЕЛЬ", desc: "ОПИСАНИЕ", emoji: "ЭМОДЗИ", pes: "СДАТЬСЯ", placeholder: "Имя...", tebrik: "Ура!", error: "Имя!" },
    jp: { name: "名前", join: "参加", mode: "モード", pixel: "ピクセル", desc: "説明", emoji: "絵文字", pes: "降参", placeholder: "名前...", tebrik: "おめでとう!", error: "名前!" }
};

let currentLang = "tr";

function changeLanguage() {
    const langSelect = document.getElementById('language-select');
    if (!langSelect) return;
    currentLang = langSelect.value;
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
    if(!name || name.trim() === "") {
        alert(translations[currentLang].error);
        return;
    }
    document.getElementById('entrance-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
}

// Sayfa yüklendiğinde dili ayarla ve butonları bağla
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage();
});
