const cards = [
    { n: "Prens", i: 5, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Dev", i: 5, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Tomruk", i: 2, r: "Efsanevi", t: "Büyü", h: "Kara" },
    { n: "Binici", i: 4, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Okçular", i: 3, r: "Sıradan", t: "Birlik", h: "Hava & Kara" },
    { n: "Mega Şövalye", i: 7, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Pekka", i: 7, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Büyücü", i: 5, r: "Ender", t: "Birlik", h: "Hava & Kara" },
    { n: "Madenci", i: 3, r: "Efsanevi", t: "Birlik", h: "Kara" },
    { n: "Roket", i: 6, r: "Ender", t: "Büyü", h: "Tümü" },
    { n: "Balon", i: 5, r: "Destansı", t: "Birlik", h: "Bina" },
    { n: "Çarpma", i: 2, r: "Sıradan", t: "Büyü", h: "Tümü" },
    { n: "Elektro Dev", i: 7, r: "Destansı", t: "Birlik", h: "Bina" },
    { n: "Oklar", i: 3, r: "Sıradan", t: "Büyü", h: "Tümü" }
];

let targetCard;

function startGame() {
    const name = document.getElementById('player-name').value;
    if(!name) { alert("Lütfen ismini yaz!"); return; }
    document.getElementById('entrance-screen').style.display = 'none';
    document.getElementById('game-screen').classList.remove('hidden');
    targetCard = cards[Math.floor(Math.random() * cards.length)];
}

function showList(val) {
    let list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    if(!val) return;
    cards.filter(c => c.n.toLowerCase().includes(val.toLowerCase())).forEach(c => {
        let div = document.createElement('div');
        div.style.padding = "15px";
        div.style.borderBottom = "1px solid #333";
        div.style.cursor = "pointer";
        div.innerText = c.n;
        div.onclick = () => { checkGuess(c); list.innerHTML = ''; document.getElementById('guess-input').value = ''; };
        list.appendChild(div);
    });
}

function checkGuess(g) {
    const row = document.createElement('div');
    row.className = 'guess-row';
    row.innerHTML = `
        <div class="cell ${g.n === targetCard.n ? 'correct' : 'wrong'}">${g.n}</div>
        <div class="cell ${g.i === targetCard.i ? 'correct' : (Math.abs(g.i - targetCard.i) <= 1 ? 'partial' : 'wrong')}">${g.i} ${g.i < targetCard.i ? '↑' : g.i > targetCard.i ? '↓' : ''}</div>
        <div class="cell ${g.r === targetCard.r ? 'correct' : 'wrong'}">${g.r}</div>
        <div class="cell ${g.t === targetCard.t ? 'correct' : 'wrong'}">${g.t}</div>
        <div class="cell ${g.h === targetCard.h ? 'correct' : 'wrong'}">${g.h}</div>
    `;
    document.getElementById('results-table').prepend(row);
    if(g.n === targetCard.n) {
        setTimeout(() => alert("BUNY-X: MUHTEŞEM! KARTI BULDUN."), 500);
    }
}
