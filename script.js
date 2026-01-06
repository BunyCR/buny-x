const cards = [
    { n: "Prens", i: 5, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Dev", i: 5, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Tomruk", i: 2, r: "Efsanevi", t: "Büyü", h: "Kara" },
    { n: "Binici", i: 4, r: "Ender", t: "Birlik", h: "Bina" },
    { n: "Mega Şövalye", i: 7, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Pekka", i: 7, r: "Destansı", t: "Birlik", h: "Kara" },
    { n: "Bebek Ejderha", i: 4, r: "Destansı", t: "Birlik", h: "Hava" },
    { n: "Oklar", i: 3, r: "Yaygın", t: "Büyü", h: "Kara/Hava" }
];

let targetCard;

function startGame() {
    const name = document.getElementById('player-name').value;
    if(!name) { 
        alert("BUNY-X: Kanka önce ismini yazman lazım!"); 
        return; 
    }
    
    // Giriş ekranını gizle, oyun ekranını aç
    document.getElementById('entrance-screen').style.display = 'none';
    document.getElementById('game-screen').classList.remove('hidden');
    
    // Rastgele bir kart seç
    targetCard = cards[Math.floor(Math.random() * cards.length)];
    console.log("Hedef Kart Seçildi!"); 
}

function showList(val) {
    let list = document.getElementById('autocomplete-list');
    list.innerHTML = '';
    if(!val) return;
    
    const filtered = cards.filter(c => c.n.toLowerCase().includes(val.toLowerCase()));
    
    filtered.forEach(c => {
        let div = document.createElement('div');
        div.style.padding = "12px";
        div.style.background = "#222";
        div.style.borderBottom = "1px solid #444";
        div.style.cursor = "pointer";
        div.innerText = c.n;
        div.onclick = () => { 
            checkGuess(c); 
            list.innerHTML = ''; 
            document.getElementById('guess-input').value = ''; 
        };
        list.appendChild(div);
    });
}

function checkGuess(g) {
    const row = document.createElement('div');
    row.className = 'guess-row';
    
    // İksir kontrolü için ok işareti
    let iksirOk = g.i < targetCard.i ? '↑' : g.i > targetCard.i ? '↓' : '';

    row.innerHTML = `
        <div class="cell ${g.n === targetCard.n ? 'correct' : 'wrong'}">${g.n}</div>
        <div class="cell ${g.i === targetCard.i ? 'correct' : 'partial'}">${g.i} ${iksirOk}</div>
        <div class="cell ${g.r === targetCard.r ? 'correct' : 'wrong'}">${g.r}</div>
    `;
    
    document.getElementById('results-table').prepend(row);
    
    if(g.n === targetCard.n) {
        setTimeout(() => {
            alert("TEBRİKLER KANKA! Doğru Tahmin.\nKanalıma abone olmayı unutma!");
        }, 500);
    }
}
