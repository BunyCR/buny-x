const cards = [
    { n: "Prens", i: 5, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Dev", i: 5, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Tomruk", i: 2, r: "Efsanevi", t: "Büyü", h: "Kara" },
    { n: "Binici", i: 4, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Mega Şövalye", i: 7, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Pekka", i: 7, r: "Destansı", t: "Birlik", h: "Kara" }
];

let targetCard;

function startGame() {
    const name = document.getElementById('player-name').value;
    if(!name) { alert("İsmini yaz kanka!"); return; }
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
        div.style.padding = "10px";
        div.style.background = "#333";
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
        <div class="cell ${g.i === targetCard.i ? 'correct' : 'wrong'}">${g.i} İksir</div>
        <div class="cell ${g.r === targetCard.r ? 'correct' : 'wrong'}">${g.r}</div>
    `;
    document.getElementById('results-table').prepend(row);
    if(g.n === targetCard.n) alert("BULDUN! KANALIMA ABONE OLMAYI UNUTMA KANKA!");
}
