const cards = [
    { 
        n: "Kıvılcım", id: "sparky", emojis: "🚜⚡💥", 
        desc: {
            tr: "Kıvılcım, yavaşça hazırlanır ve BÜYÜK bir alan hasarı verir. Aşırı güç kullanımı ne demektir bilmez.",
            en: "Sparky slowly charges up, then delivers a huge area damage. She doesn't know the meaning of overkill.",
            az: "Kıvılcım yavaş-yavaş hazırlaşır və BÖYÜK sahə zədəsi verir.",
            ko: "스파키는 천천히 충전되지만, 충전이 완료되면 광역 피해를 줍니다.",
            zh: "电磁炮会慢慢充能，然后造成巨大的范围伤害。"
        }
    },
    { 
        n: "Dev Goblin", id: "goblin-giant", emojis: "👹🏹💚", 
        desc: {
            tr: "Bu yeşil Dev Goblin düşman binalarını hedef alıyor. Üzerinde hep iki Mızraklı Goblin taşıyor.",
            en: "This jolly green Goblin Giant stomps towards enemy buildings. He carries two Spear Goblins everywhere he goes.",
            az: "Bu yaşıl Goblin nəhəngi düşmən binalarını hədəf alır.",
            ko: "이 유쾌한 초록색 고블린 자이언트는 적 건물을 향해 돌진합니다. 등에 두 마리의 창 고블린을 태우고 다닙니다.",
            zh: "这个快乐的绿色哥布林巨人之向敌方建筑走去。"
        }
    },
    { 
        n: "Şövalye", id: "knight", emojis: "🗡️🛡️👨‍🦱", 
        desc: {
            tr: "Güçlü bir yakın dövüş savaşçısı. Barbarın yakışıklı, kültürlü kuzeni.",
            en: "A tough melee fighter. The Barbarian's handsome, cultured cousin.",
            az: "Güclü bir yaxın döyüş döyüşçüsü. Barbarın yaraşıqlı əmisi oğlu.",
            ko: "강력한 근접 전사입니다. 바바리안의 잘생긴 사촌이죠.",
            zh: "一位坚韧的近战战士。野蛮人的英俊堂兄。"
        }
    },
    { 
        n: "Pekka", id: "p-e-k-k-a", emojis: "🤖⚔️💜", 
        desc: {
            tr: "Ağır zırhlı ve yavaş bir savaşçıdır, vuruşu çok serttir. Kelebeklere zaafı vardır.",
            en: "A heavily armored, slow melee fighter. Swings from the hip but has a secret love for butterflies.",
            az: "Ağır zirehli və yavaş bir döyüşçüdür, vuruşu çox sərtdir.",
            ko: "중갑을 두른 느린 근접 전사입니다. 타격이 매우 강력합니다.",
            zh: "一个重装甲、缓慢的近战战士。挥击力量巨大。"
        }
    },
    { 
        n: "Binici", id: "hog-rider", emojis: "🐗🔨🔥", 
        desc: {
            tr: "Hızlı, binaları hedefleyen bir birlik. Nehri atlayabilir ve meşhur çığlığıyla arenayı inletir.",
            en: "Fast melee troop that targets buildings and can leap over the river.",
            az: "Sürətli, binaları hədəf alan bir birlik. Çayı atlaya bilər.",
            ko: "건물을 목표로 하는 빠른 근접 유닛입니다. 강을 뛰어넘을 수 있습니다.",
            zh: "以建筑为目标的快速近战部队。"
        }
    },
    { 
        n: "Tomruk", id: "the-log", emojis: "🪵🪵💥", 
        desc: {
            tr: "Yoluna çıkan her şeyi ezip geçer ve geri ittirir. Bir şişe Öfke büyüsü döküldüğünde bu hale gelmiş!",
            en: "A spilt bottle of Rage turned an innocent tree trunk into 'The Log'.",
            az: "Yoluna çıxan hər şeyi əzib keçir və geri itələyir.",
            ko: "실수로 쏟아진 분노 마법이 평범한 나무토막을 '통나무'로 만들었습니다.",
            zh: "一瓶洒掉的狂暴药水把一截无辜的树干变成了'复仇滚木'。"
        }
    },
    { 
        n: "Mega Şövalye", id: "mega-knight", emojis: "🦾🌑💥", 
        desc: {
            tr: "Gökten zembille iner gibi düşer, alan hasarı verir ve rakiplerin üstüne atlar.",
            en: "He lands with the force of 1,000 mustaches, then jumps from enemy to enemy dealing huge area damage.",
            az: "Göydən böyük bir güclə enir, sahə zədəsi verir.",
            ko: "등장할 때 엄청난 피해를 주고, 적들을 점프하며 짓밟습니다.",
            zh: "他降落时威力惊人，并能在敌人之间跳跃造成伤害。"
        }
    },
    { 
        n: "Büyücü", id: "wizard", emojis: "🧙‍♂️🔥💥", 
        desc: {
            tr: "En yakışıklı adam arenaya giriyor! Ateş toplarıyla her şeyi yakıp yıkar.",
            en: "The most awesome man to ever set foot in the Arena. He'll blow you away with his handsomeness and fireballs.",
            az: "Arenanın ən yaraşıqlı adamı! Od topları ilə hər şeyi yandırır.",
            ko: "아레나에서 가장 멋진 남자입니다! 불꽃놀이로 상대를 압도합니다.",
            zh: "竞技场里最帅的男人！他会用火球把你吹飞。"
        }
    },
    { 
        n: "Prenses", id: "princess", emojis: "👸🏹🔥", 
        desc: {
            tr: "Çok uzak mesafeden alevli oklar fırlatır. Kulelerin menziline girmeden onlara vurabilir.",
            en: "Shoots a volley of flaming arrows from a long distance. She's so far away, she's practically in another Arena.",
            az: "Çox uzaq məsafədən alovlu oxlar atır.",
            ko: "먼 거리에서 화염 화살을 발사합니다. 사거리가 정말 길죠.",
            zh: "从远处发射一波火焰箭。她的距离远到几乎在另一个竞技场。"
        }
    },
    { 
        n: "Balon", id: "balloon", emojis: "🎈💣💀", 
        desc: {
            tr: "Binaların tepesine gider ve devasa bombalar bırakır. Patladığında bile hasar verir.",
            en: "As pretty as they are, you won't want to see one of these approaching your tower. Drops heavy bombs.",
            az: "Binaların təpəsinə gedir və böyük bombalar atır.",
            ko: "건물로 이동하여 강력한 폭탄을 떨어뜨립니다. 파괴될 때도 피해를 줍니다.",
            zh: "这些气球虽然漂亮，但你绝对不想看到它们靠近你的塔。"
        }
    },
    { 
        n: "Maden Kazıcısı", id: "miner", emojis: "⛏️🏗️🏃", 
        desc: {
            tr: "Arenanın her yerine yeraltından kazarak gidebilir. Bu bir büyü değil, sadece bir kürek.",
            en: "The Miner can burrow his way underground and appear anywhere in the Arena. It's not magic, it's a shovel.",
            az: "Arenanın hər yerinə yeraltından qazaraq gedə bilər.",
            ko: "광부는 땅을 파고 아레나 어디든 나타날 수 있습니다.",
            zh: "掘地矿工可以从地下穿行，出现在竞技场内的任何地方。"
        }
    },
    { 
        n: "Elektro Büyücü", id: "electro-wizard", emojis: "⚡👨‍🔬⚡", 
        desc: {
            tr: "Ellerinden şimşekler çakar, iki rakibi aynı anda vurabilir ve rakiplerini sersemletir.",
            en: "He lands with a 'ZAP!', shocks nearby enemies and shoots lightning with both hands.",
            az: "Əllərindən şimşəklər çaxır, rəqibləri sersemlədir.",
            ko: "등장할 때 주변 적에게 피해를 주고 양손에서 번개를 발사합니다.",
            zh: "他在降落时会发出电击，并用双手发射闪电。"
        }
    },
    { 
        n: "Cadı", id: "witch", emojis: "🧙‍♀️💀✨", 
        desc: {
            tr: "Sürekli iskeletler çağırır ve gözlerinden ışınlar çıkarır. Mor gözleri biraz korkutucudur.",
            en: "Summons Skeletons, shoots destructo-beams, has glowing pink eyes that unfortunately don't shoot lasers.",
            az: "Daimi skeletlər çağırır və gözlərindən şüalar çıxarır.",
            ko: "해골을 소환하고 파괴 광선을 발사합니다. 눈이 보라색으로 빛나죠.",
            zh: "召唤小骷髅，发射破坏光线。她那双粉红色的眼睛并不发射激光。"
        }
    },
    { 
        n: "Valkür", id: "valkyrie", emojis: "🪓👩‍🦰🌀", 
        desc: {
            tr: "Baltasıyla kendi etrafında dönerek alan hasarı verir. Kalabalık grupların korkulu rüyasıdır.",
            en: "Tough melee fighter, deals area damage around her. Swarms or charge, she can take them all!",
            az: "Baltası ilə ətrafında dönərək sahə zədəsi verir.",
            ko: "도끼를 휘둘러 주변의 모든 적에게 피해를 주는 강력한 전사입니다.",
            zh: "坚韧的近战战士，对周围造成范围伤害。"
        }
    },
    { 
        n: "Mini Pekka", id: "mini-p-e-k-k-a", emojis: "🤖🥞⚔️", 
        desc: {
            tr: "Hızlıdır ve kılıcıyla çok yüksek hasar verir. Pankeklere bayılır!",
            en: "The Arena is a certified butterfly-free zone. No distractions for Mini P.E.K.K.A, only pancakes.",
            az: "Sürətlidir və qılıncı ilə çox yüksək zədə verir.",
            ko: "빠르고 강력합니다. 나비는 없지만 팬케이크를 정말 좋아하죠!",
            zh: "竞技场里没有蝴蝶。对迷你皮卡来说，只有煎饼。"
        }
    }
];
